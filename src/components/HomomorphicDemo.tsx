
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/components/ui/use-toast';
import { 
  generateKeyPair, 
  homomorphicEncrypt, 
  homomorphicDecrypt, 
  homomorphicAdd,
  isNoiseAcceptable,
  type KeyPair,
  type EncryptedData 
} from '@/utils/homomorphicEncryption';
import { Shield, Key, Plus, Eye, EyeOff } from 'lucide-react';

const HomomorphicDemo: React.FC = () => {
  const [keyPair, setKeyPair] = useState<KeyPair | null>(null);
  const [plaintext1, setPlaintext1] = useState('');
  const [plaintext2, setPlaintext2] = useState('');
  const [encrypted1, setEncrypted1] = useState<EncryptedData | null>(null);
  const [encrypted2, setEncrypted2] = useState<EncryptedData | null>(null);
  const [addResult, setAddResult] = useState<EncryptedData | null>(null);
  const [decryptedResult, setDecryptedResult] = useState('');
  const [showKeys, setShowKeys] = useState(false);
  const { toast } = useToast();

  const handleGenerateKeys = () => {
    const newKeyPair = generateKeyPair();
    setKeyPair(newKeyPair);
    setEncrypted1(null);
    setEncrypted2(null);
    setAddResult(null);
    setDecryptedResult('');
    
    toast({
      title: "Keys Generated",
      description: "New homomorphic encryption key pair created",
    });
  };

  const handleEncrypt = (text: string, setEncrypted: (data: EncryptedData) => void) => {
    if (!keyPair) {
      toast({
        title: "No Keys",
        description: "Please generate keys first",
        variant: "destructive",
      });
      return;
    }

    try {
      const encrypted = homomorphicEncrypt(text, keyPair);
      setEncrypted(encrypted);
      
      toast({
        title: "Text Encrypted",
        description: "Data encrypted using homomorphic encryption",
      });
    } catch (error) {
      toast({
        title: "Encryption Failed",
        description: "Failed to encrypt the text",
        variant: "destructive",
      });
    }
  };

  const handleHomomorphicAdd = () => {
    if (!encrypted1 || !encrypted2 || !keyPair) {
      toast({
        title: "Missing Data",
        description: "Need two encrypted values and keys to perform addition",
        variant: "destructive",
      });
      return;
    }

    try {
      const result = homomorphicAdd(encrypted1, encrypted2, keyPair.modulus);
      setAddResult(result);
      
      toast({
        title: "Homomorphic Addition",
        description: "Successfully added encrypted values without decrypting",
      });
    } catch (error) {
      toast({
        title: "Addition Failed",
        description: "Failed to perform homomorphic addition",
        variant: "destructive",
      });
    }
  };

  const handleDecrypt = (encrypted: EncryptedData) => {
    if (!keyPair) {
      toast({
        title: "No Keys",
        description: "Please generate keys first",
        variant: "destructive",
      });
      return;
    }

    try {
      const decrypted = homomorphicDecrypt(encrypted, keyPair);
      setDecryptedResult(decrypted);
      
      toast({
        title: "Data Decrypted",
        description: "Successfully decrypted the result",
      });
    } catch (error) {
      toast({
        title: "Decryption Failed",
        description: "Failed to decrypt the data",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Homomorphic Encryption Demo
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">
                Demonstrate encryption that allows computations on encrypted data
              </p>
            </div>
            <Button onClick={handleGenerateKeys}>
              <Key className="mr-2 h-4 w-4" />
              Generate Keys
            </Button>
          </div>

          {keyPair && (
            <div className="p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Key Pair Generated</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowKeys(!showKeys)}
                >
                  {showKeys ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
              
              {showKeys && (
                <div className="text-xs font-mono space-y-1">
                  <div>Public Key: {keyPair.publicKey}</div>
                  <div>Private Key: {keyPair.privateKey}</div>
                  <div>Modulus: {keyPair.modulus}</div>
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Text 1</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <Label htmlFor="text1">Enter Text</Label>
              <Input
                id="text1"
                value={plaintext1}
                onChange={(e) => setPlaintext1(e.target.value)}
                placeholder="Enter text to encrypt"
              />
            </div>
            
            <Button 
              onClick={() => handleEncrypt(plaintext1, setEncrypted1)}
              disabled={!keyPair || !plaintext1}
              className="w-full"
            >
              Encrypt Text 1
            </Button>
            
            {encrypted1 && (
              <div className="p-2 bg-blue-50 rounded text-xs">
                <div className="font-medium mb-1">Encrypted:</div>
                <div className="font-mono break-all">
                  [{encrypted1.ciphertext.slice(0, 5).join(', ')}...]
                </div>
                <Badge variant="outline" className="mt-1">
                  Noise: {encrypted1.noise}
                </Badge>
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Text 2</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <Label htmlFor="text2">Enter Text</Label>
              <Input
                id="text2"
                value={plaintext2}
                onChange={(e) => setPlaintext2(e.target.value)}
                placeholder="Enter text to encrypt"
              />
            </div>
            
            <Button 
              onClick={() => handleEncrypt(plaintext2, setEncrypted2)}
              disabled={!keyPair || !plaintext2}
              className="w-full"
            >
              Encrypt Text 2
            </Button>
            
            {encrypted2 && (
              <div className="p-2 bg-green-50 rounded text-xs">
                <div className="font-medium mb-1">Encrypted:</div>
                <div className="font-mono break-all">
                  [{encrypted2.ciphertext.slice(0, 5).join(', ')}...]
                </div>
                <Badge variant="outline" className="mt-1">
                  Noise: {encrypted2.noise}
                </Badge>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Plus className="h-5 w-5" />
            Homomorphic Operations
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button 
            onClick={handleHomomorphicAdd}
            disabled={!encrypted1 || !encrypted2}
            className="w-full"
          >
            Add Encrypted Values (Without Decrypting)
          </Button>
          
          {addResult && (
            <div className="space-y-3">
              <div className="p-3 bg-purple-50 rounded">
                <div className="font-medium mb-2">Addition Result (Still Encrypted):</div>
                <div className="text-xs font-mono break-all mb-2">
                  [{addResult.ciphertext.slice(0, 5).join(', ')}...]
                </div>
                <div className="flex items-center justify-between">
                  <Badge 
                    variant={isNoiseAcceptable(addResult) ? "default" : "destructive"}
                  >
                    Noise: {addResult.noise}
                  </Badge>
                  <Button 
                    size="sm" 
                    onClick={() => handleDecrypt(addResult)}
                  >
                    Decrypt Result
                  </Button>
                </div>
              </div>
              
              {decryptedResult && (
                <div className="p-3 bg-yellow-50 rounded">
                  <div className="font-medium mb-1">Decrypted Result:</div>
                  <div className="font-mono">{decryptedResult}</div>
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default HomomorphicDemo;
