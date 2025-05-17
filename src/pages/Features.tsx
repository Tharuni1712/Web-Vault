
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Lock, Key, Eye, Check, RefreshCw, FileText, Bell } from 'lucide-react';
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
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Features</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need for secure and efficient password management in one place.
          </p>
        </div>

        {/* Core Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="border-0 shadow-lg hover:shadow-xl transition duration-300">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="bg-blue-100 p-4 rounded-full mb-4">
                <Lock className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Secure Storage</h3>
              <p className="text-gray-600">
                All your passwords and sensitive data are encrypted with AES-256 bit encryption, ensuring maximum security.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition duration-300">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="bg-green-100 p-4 rounded-full mb-4">
                <Eye className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Auto-Fill</h3>
              <p className="text-gray-600">
                Save time with our one-click auto-fill feature that works seamlessly across all your devices and browsers.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition duration-300">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="bg-purple-100 p-4 rounded-full mb-4">
                <RefreshCw className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Cross-Device Sync</h3>
              <p className="text-gray-600">
                Access your passwords on all your devices with real-time synchronization, ensuring you're never locked out.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Additional Features */}
        <h2 className="text-2xl font-bold text-center mb-8">Advanced Features</h2>
        <div className="space-y-6 mb-16">
          <div className="bg-white rounded-lg shadow p-6 grid md:grid-cols-2 gap-6">
            <div>
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4">
                  <FileText className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Secure Notes</h3>
                  <p className="text-gray-600">Store sensitive information beyond just passwords, like credit card details, secure notes, and more.</p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-start">
                <div className="bg-green-100 p-2 rounded-full mr-4">
                  <Bell className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Password Alerts</h3>
                  <p className="text-gray-600">Receive notifications for compromised, weak, or reused passwords to stay secure.</p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-start">
                <div className="bg-purple-100 p-2 rounded-full mr-4">
                  <Key className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Two-Factor Authentication</h3>
                  <p className="text-gray-600">Add an extra layer of security to your SecurePass account with 2FA protection.</p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-start">
                <div className="bg-yellow-100 p-2 rounded-full mr-4">
                  <Shield className="h-6 w-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Emergency Access</h3>
                  <p className="text-gray-600">Designate trusted contacts who can access your vault in case of emergency.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Plan comparison */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Choose Your Plan</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-center">Free</h3>
                <p className="text-3xl font-bold text-center mb-6">$0<span className="text-lg font-normal text-gray-600">/month</span></p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Store up to 50 passwords</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Access on 1 device</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Basic auto-fill</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Secure encryption</span>
                  </li>
                </ul>
                <Button className="w-full" variant="outline">Get Started</Button>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-blue-500 relative">
              <span className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-1 text-sm font-bold rounded-bl">POPULAR</span>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-center">Premium</h3>
                <p className="text-3xl font-bold text-center mb-6">$2.99<span className="text-lg font-normal text-gray-600">/month</span></p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Unlimited passwords</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Sync across all devices</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Advanced auto-fill</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Secure sharing</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Priority support</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Advanced security reports</span>
                  </li>
                </ul>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Start Free Trial</Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/signup">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              Try SecurePass Now
            </Button>
          </Link>
          <p className="mt-4 text-gray-600">Start with our free plan or try Premium with a 14-day free trial</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
