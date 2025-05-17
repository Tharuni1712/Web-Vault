
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Shield, Eye, EyeOff, Check, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';

const Signup = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const { toast } = useToast();

  // Password strength indicators
  const hasMinLength = password.length >= 8;
  const hasUppercase = /[A-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecialChar = /[^A-Za-z0-9]/.test(password);
  const passwordsMatch = password === confirmPassword;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!passwordsMatch) {
      toast({
        title: "Passwords don't match",
        description: "Please ensure both passwords are identical.",
        variant: "destructive"
      });
      return;
    }

    // For demo, just show a success toast
    toast({
      title: "Account created successfully",
      description: "Welcome to SecurePass. Your vault is ready.",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-blue-50 px-4 py-8">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center justify-center">
            <Shield className="h-10 w-10 text-blue-600" />
            <h1 className="ml-2 text-3xl font-bold text-gray-900">SecurePass</h1>
          </Link>
        </div>
        
        <Card className="border-0 shadow-xl">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center">Create an account</CardTitle>
            <CardDescription className="text-center">
              Enter your details to create your SecurePass vault
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="name@example.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Master Password</Label>
                <div className="relative">
                  <Input 
                    id="password" 
                    type={showPassword ? 'text' : 'password'} 
                    placeholder="••••••••"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Button 
                    type="button"
                    variant="ghost" 
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-gray-400" />
                    ) : (
                      <Eye className="h-4 w-4 text-gray-400" />
                    )}
                  </Button>
                </div>
                {/* Password strength indicators */}
                <div className="space-y-2 mt-2">
                  <p className="text-sm text-gray-500">Password strength:</p>
                  <div className="space-y-1">
                    <div className="flex items-center">
                      {hasMinLength ? (
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                      ) : (
                        <AlertTriangle className="h-4 w-4 text-gray-400 mr-2" />
                      )}
                      <span className={`text-sm ${hasMinLength ? 'text-green-500' : 'text-gray-500'}`}>
                        At least 8 characters
                      </span>
                    </div>
                    <div className="flex items-center">
                      {hasUppercase ? (
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                      ) : (
                        <AlertTriangle className="h-4 w-4 text-gray-400 mr-2" />
                      )}
                      <span className={`text-sm ${hasUppercase ? 'text-green-500' : 'text-gray-500'}`}>
                        At least 1 uppercase letter
                      </span>
                    </div>
                    <div className="flex items-center">
                      {hasNumber ? (
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                      ) : (
                        <AlertTriangle className="h-4 w-4 text-gray-400 mr-2" />
                      )}
                      <span className={`text-sm ${hasNumber ? 'text-green-500' : 'text-gray-500'}`}>
                        At least 1 number
                      </span>
                    </div>
                    <div className="flex items-center">
                      {hasSpecialChar ? (
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                      ) : (
                        <AlertTriangle className="h-4 w-4 text-gray-400 mr-2" />
                      )}
                      <span className={`text-sm ${hasSpecialChar ? 'text-green-500' : 'text-gray-500'}`}>
                        At least 1 special character
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input 
                  id="confirmPassword" 
                  type={showPassword ? 'text' : 'password'} 
                  placeholder="••••••••"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                {confirmPassword && !passwordsMatch && (
                  <p className="text-sm text-red-500 mt-1">Passwords don't match</p>
                )}
              </div>
              <div className="text-xs text-gray-500">
                Your master password is the key to your vault. Make sure it's strong and don't forget it - we cannot recover it for you.
              </div>
              <Button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700"
                disabled={!hasMinLength || !hasUppercase || !hasNumber || !hasSpecialChar || !passwordsMatch}
              >
                Create Account
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col">
            <div className="mt-2 text-center text-sm">
              Already have an account?{' '}
              <Link to="/login" className="text-blue-600 hover:underline font-medium">
                Sign in
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Signup;
