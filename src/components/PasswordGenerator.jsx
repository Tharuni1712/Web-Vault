
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { generatePassword, calculatePasswordStrength, getStrengthCategory } from '@/utils/passwordUtils';
import { Eye, EyeOff, RefreshCw, Copy, Check } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const PasswordGenerator = () => {
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [length, setLength] = useState(16);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [strength, setStrength] = useState(0);
  const [copySuccess, setCopySuccess] = useState(false);
  const { toast } = useToast();

  // Generate password on first render and when options change
  useEffect(() => {
    generateNewPassword();
  }, [length, includeUppercase, includeLowercase, includeNumbers, includeSymbols]);

  // Calculate password strength whenever password changes
  useEffect(() => {
    setStrength(calculatePasswordStrength(password));
  }, [password]);

  const generateNewPassword = () => {
    const newPassword = generatePassword(
      length,
      includeUppercase,
      includeLowercase,
      includeNumbers,
      includeSymbols
    );
    setPassword(newPassword);
  };

  const handleCopyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(password);
      setCopySuccess(true);
      toast({
        title: "Password copied!",
        description: "Password has been copied to clipboard",
      });
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Could not copy password to clipboard",
        variant: "destructive",
      });
    }
  };

  const strengthCategory = getStrengthCategory(strength);

  return (
    <Card className="w-full">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-medium">Password Generator</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="relative">
            <Input
              type={passwordVisible ? 'text' : 'password'}
              value={password}
              readOnly
              className="pr-24 font-mono text-sm w-full"
            />
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex space-x-1">
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setPasswordVisible(!passwordVisible)}
                className="h-7 w-7"
              >
                {passwordVisible ? <EyeOff size={16} /> : <Eye size={16} />}
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={generateNewPassword}
                className="h-7 w-7"
              >
                <RefreshCw size={16} />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={handleCopyToClipboard}
                className="h-7 w-7"
              >
                {copySuccess ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
              </Button>
            </div>
          </div>
          
          <div className="space-y-1">
            <div className="flex justify-between text-xs">
              <span>Strength</span>
              <span className="capitalize">{strengthCategory}</span>
            </div>
            <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
              <div 
                className={`h-full rounded-full password-strength-${strengthCategory}`} 
                style={{ width: `${strength}%` }}
              />
            </div>
          </div>

          <div className="space-y-3">
            <div className="space-y-1">
              <div className="flex justify-between">
                <Label htmlFor="password-length">Length: {length}</Label>
              </div>
              <Slider
                id="password-length"
                min={8}
                max={32}
                step={1}
                value={[length]}
                onValueChange={(values) => setLength(values[0])}
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="uppercase">Uppercase (A-Z)</Label>
                <Switch
                  id="uppercase"
                  checked={includeUppercase}
                  onCheckedChange={setIncludeUppercase}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <Label htmlFor="lowercase">Lowercase (a-z)</Label>
                <Switch
                  id="lowercase"
                  checked={includeLowercase}
                  onCheckedChange={setIncludeLowercase}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <Label htmlFor="numbers">Numbers (0-9)</Label>
                <Switch
                  id="numbers"
                  checked={includeNumbers}
                  onCheckedChange={setIncludeNumbers}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <Label htmlFor="symbols">Symbols (!@#$)</Label>
                <Switch
                  id="symbols"
                  checked={includeSymbols}
                  onCheckedChange={setIncludeSymbols}
                />
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PasswordGenerator;
