
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Lock, Key, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50">
      {/* Header */}
      <header className="w-full px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <Link to="/" className="flex items-center">
            <Shield className="h-8 w-8 text-blue-600" />
            <h1 className="ml-2 text-2xl font-bold text-gray-900">SecurePass</h1>
          </Link>
          <div className="flex gap-4">
            <Link to="/login">
              <Button variant="outline">Sign In</Button>
            </Link>
            <Link to="/signup">
              <Button>Sign Up</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* How It Works Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">How SecurePass Works</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Secure, simple, and seamless password management in just three easy steps.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="bg-blue-100 p-4 rounded-full mb-4">
                <Lock className="h-10 w-10 text-blue-600" />
                <span className="absolute -mt-10 ml-8 bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Store Your Passwords</h3>
              <p className="text-gray-600">
                Securely add and store all your passwords in our encrypted vault. We use military-grade encryption to keep your data safe.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="bg-green-100 p-4 rounded-full mb-4">
                <Key className="h-10 w-10 text-green-600" />
                <span className="absolute -mt-10 ml-8 bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Access Anywhere</h3>
              <p className="text-gray-600">
                Access your passwords from any device, anytime. Your vault is always synced and ready when you need it.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="bg-purple-100 p-4 rounded-full mb-4">
                <ArrowRight className="h-10 w-10 text-purple-600" />
                <span className="absolute -mt-10 ml-8 bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Auto-Fill & Go</h3>
              <p className="text-gray-600">
                With a single click, fill in your login details automatically. Save time and never forget a password again.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* More Detail Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">The Technical Details</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">End-to-End Encryption</h3>
              <p className="text-gray-600">
                Your data is encrypted before it leaves your device using AES-256, the same encryption standard used by governments and financial institutions worldwide. This means even we can't see your passwords.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Zero-Knowledge Architecture</h3>
              <p className="text-gray-600">
                We've built SecurePass with a zero-knowledge security model. This means that all encryption and decryption happens locally on your device, and we never have access to your master password or the keys to decrypt your data.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Secure Authentication</h3>
              <p className="text-gray-600">
                We use modern, secure authentication methods including two-factor authentication options to ensure only you can access your vault.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/signup">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <p className="mt-4 text-gray-600">No credit card required. Try it for free.</p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
