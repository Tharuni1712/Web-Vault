
import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import PasswordEntry from './PasswordEntry';
import AddPasswordForm from './AddPasswordForm';
import HomomorphicDemo from './HomomorphicDemo';
import { useToast } from '@/components/ui/use-toast';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Lock, Shield } from 'lucide-react';

const PasswordVault = () => {
  const [passwords, setPasswords] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const { toast } = useToast();
  
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
    toast({
      title: "Password Added",
      description: `Password for ${entry.domain} has been saved.`,
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
      prev.map((entry) => 
        entry.id === id ? { ...entry, ...updatedEntry } : entry
      )
    );
    toast({
      title: "Password Updated",
      description: `Password for ${updatedEntry.domain || 'website'} has been updated.`,
    });
  };
  
  // Filter passwords based on search query
  const filteredPasswords = passwords.filter((entry) => {
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

      <Tabs defaultValue="vault" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="vault" className="flex items-center gap-2">
            <Lock className="h-4 w-4" />
            Password Vault
          </TabsTrigger>
          <TabsTrigger value="encryption" className="flex items-center gap-2">
            <Shield className="h-4 w-4" />
            Homomorphic Encryption
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="vault" className="space-y-4">
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
        </TabsContent>
        
        <TabsContent value="encryption">
          <HomomorphicDemo />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PasswordVault;
