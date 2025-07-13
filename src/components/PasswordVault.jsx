import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import PasswordEntry from './PasswordEntry';
import AddPasswordForm from './AddPasswordForm';
import { useToast } from '@/components/ui/use-toast';
import { Card, CardContent } from '@/components/ui/card';
import { Lock } from 'lucide-react';
import { generateKeyPair } from '@/utils/homomorphicEncryption';
import { storePasswordWithHomomorphicEncryption, retrievePasswordWithHomomorphicDecryption } from '@/utils/passwordUtils.ts';

const PasswordVault = () => {
  const [passwords, setPasswords] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [keyPair, setKeyPair] = useState(null);
  const { toast } = useToast();
  
  // Generate or load encryption keys on mount
  useEffect(() => {
    const storedKeys = localStorage.getItem('encryptionKeys');
    if (storedKeys) {
      try {
        setKeyPair(JSON.parse(storedKeys));
      } catch (error) {
        // Generate new keys if stored keys are corrupted
        const newKeyPair = generateKeyPair();
        setKeyPair(newKeyPair);
        localStorage.setItem('encryptionKeys', JSON.stringify(newKeyPair));
      }
    } else {
      const newKeyPair = generateKeyPair();
      setKeyPair(newKeyPair);
      localStorage.setItem('encryptionKeys', JSON.stringify(newKeyPair));
    }
  }, []);
  // ✅ Function to send encrypted data to backend (MongoDB)
const saveToBackend = async (encryptedEntry) => {
  try {
    console.log("Sending to backend:", JSON.stringify(encryptedEntry, null, 2));
    const response = await fetch("http://localhost:5000/save-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(encryptedEntry)
    });

    const data = await response.json();
    console.log("Saved to backend:", data);
  } catch (err) {
    console.error("Failed to save to backend", err);
  }
};
  // Load passwords from localStorage on initial render
  useEffect(() => {
    const storedPasswords = localStorage.getItem('passwordVault');
    if (storedPasswords) {
      try {
        setPasswords(JSON.parse(storedPasswords));
      } catch (error) {
        console.error('Failed to parse stored passwords', error);
      }
    }
  }, []);
  
  // Save passwords to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('passwordVault', JSON.stringify(passwords));
  }, [passwords]);
  
  const handleAddPassword = (entry) => {

  setPasswords((prev) => [entry, ...prev]);


  saveToBackend({
    website: entry.domain,   
    username: entry.username,
    password: entry.password
  });

  toast({
    title: "Password Added",
    description: `Password for ${entry.domain} has been sent to backend for encryption.`,
  });
};

  
  const handleDeletePassword = (id) => {
    const passwordToDelete = passwords.find(p => p.id === id);
    setPasswords((prev) => prev.filter((entry) => entry.id !== id));
    toast({
      title: "Password Deleted",
      description: `Password for ${passwordToDelete?.domain} has been removed.`,
    });
  };
  
  const handleUpdatePassword = (id, updatedEntry) => {
    setPasswords((prev) => 
      prev.map((entry) => {
        if (entry.id === id) {
          if (keyPair && updatedEntry.password) {
            // Re-encrypt the updated password
            const encryptedEntry = storePasswordWithHomomorphicEncryption({
              ...entry,
              ...updatedEntry
            }, keyPair);
            return encryptedEntry;
          }
          return { ...entry, ...updatedEntry };
        }
        return entry;
      })
    );
    toast({
      title: "Password Updated",
      description: `Password for ${updatedEntry.domain || 'website'} has been updated.`,
    });
  };
  
  // Decrypt passwords for display and search
  const decryptedPasswords = passwords.map(entry => {
    if (entry.isHomomorphicallyEncrypted && keyPair) {
      return {
        ...entry,
        password: retrievePasswordWithHomomorphicDecryption(entry, keyPair)
      };
    }
    return entry;
  });
  
  // Filter passwords based on search query
  const filteredPasswords = decryptedPasswords.filter((entry) => {
    const query = searchQuery.toLowerCase();
    return (
      entry.website.toLowerCase().includes(query) ||
      entry.domain.toLowerCase().includes(query) ||
      entry.username.toLowerCase().includes(query) ||
      (entry.notes && entry.notes.toLowerCase().includes(query))
    );
  });
  
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
        <div className="flex items-center mb-4 md:mb-0">
          <Lock className="h-6 w-6 mr-2 text-blue-600" />
          <h1 className="text-2xl font-bold">Password Vault</h1>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-3/4">
          <SearchBar 
            query={searchQuery}
            setQuery={setSearchQuery}
            placeholder="Search website, username, or notes..."
          />
        </div>
        <div className="w-full md:w-1/4">
          <AddPasswordForm onAdd={handleAddPassword} />
        </div>
      </div>

      <div className="mt-6">
        {filteredPasswords.length > 0 ? (
          filteredPasswords.map((entry) => (
            <PasswordEntry
              key={entry.id}
              entry={entry}
              onDelete={handleDeletePassword}
              onUpdate={handleUpdatePassword}
            />
          ))
        ) : (
          <Card className="text-center py-12">
            <CardContent>
              <div className="flex justify-center mb-4">
                <Lock className="h-12 w-12 text-gray-300" />
              </div>
              {searchQuery ? (
                <>
                  <h3 className="text-lg font-medium">No matching passwords found</h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Try adjusting your search terms
                  </p>
                </>
              ) : (
                <>
                  <h3 className="text-lg font-medium">No passwords yet</h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Add your first password to get started
                  </p>
                </>
              )}
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default PasswordVault;
