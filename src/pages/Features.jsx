
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Lock, Key, Eye, Smartphone, Cloud, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Features = () => {
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

      {/* Features Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Powerful Features</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to manage your passwords securely and efficiently.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="border-0 shadow-lg hover:shadow-xl transition duration-300">
            <CardContent className="p-6 text-center">
              <div className="bg-blue-100 p-4 rounded-full mb-4 mx-auto w-fit">
                <Lock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Military-Grade Encryption</h3>
              <p className="text-gray-600">
                Your passwords are protected with AES-256 encryption, the same standard used by banks and governments.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition duration-300">
            <CardContent className="p-6 text-center">
              <div className="bg-green-100 p-4 rounded-full mb-4 mx-auto w-fit">
                <Eye className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Zero-Knowledge Security</h3>
              <p className="text-gray-600">
                We can't see your passwords even if we wanted to. Everything is encrypted on your device before upload.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition duration-300">
            <CardContent className="p-6 text-center">
              <div className="bg-purple-100 p-4 rounded-full mb-4 mx-auto w-fit">
                <Smartphone className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Cross-Platform Access</h3>
              <p className="text-gray-600">
                Access your passwords on any device - desktop, mobile, or tablet. Always in sync.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition duration-300">
            <CardContent className="p-6 text-center">
              <div className="bg-orange-100 p-4 rounded-full mb-4 mx-auto w-fit">
                <Key className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Password Generator</h3>
              <p className="text-gray-600">
                Generate strong, unique passwords for every account with our built-in password generator.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition duration-300">
            <CardContent className="p-6 text-center">
              <div className="bg-cyan-100 p-4 rounded-full mb-4 mx-auto w-fit">
                <Cloud className="h-8 w-8 text-cyan-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Secure Cloud Sync</h3>
              <p className="text-gray-600">
                Your encrypted vault syncs securely across all your devices through our secure cloud infrastructure.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition duration-300">
            <CardContent className="p-6 text-center">
              <div className="bg-red-100 p-4 rounded-full mb-4 mx-auto w-fit">
                <Zap className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Auto-Fill</h3>
              <p className="text-gray-600">
                Instantly fill login forms with a single click. Save time and reduce typing errors.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Security Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Bank-Level Security</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">What makes us secure?</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  End-to-end encryption for all data
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  Zero-knowledge architecture
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  Regular security audits
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  Two-factor authentication support
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Industry Compliance</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  </div>
                  SOC 2 Type II certified
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  </div>
                  GDPR compliant
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  </div>
                  ISO 27001 standards
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  </div>
                  Regular penetration testing
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to get started?</h2>
          <p className="text-lg text-gray-600 mb-8">Join thousands of users securing their digital lives</p>
          <Link to="/signup">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              Start Free Trial
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Features;
