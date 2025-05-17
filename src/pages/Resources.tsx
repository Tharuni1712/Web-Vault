
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Book, Download, Shield, Lock, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Resources = () => {
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

      {/* Resources Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Resources</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Learn more about password security and how to make the most of SecurePass.
          </p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="guides" className="mb-16">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
            <TabsTrigger value="guides">Guides</TabsTrigger>
            <TabsTrigger value="faq">FAQ</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
          </TabsList>
          <TabsContent value="guides">
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <Card className="hover:shadow-lg transition duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="h-6 w-6 text-blue-600 mr-2" />
                    Getting Started Guide
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Learn how to set up your SecurePass account and start storing your passwords securely.
                  </p>
                  <Button variant="outline" size="sm">Read Guide</Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Book className="h-6 w-6 text-green-600 mr-2" />
                    Password Best Practices
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Discover the do's and don'ts of password security in today's digital world.
                  </p>
                  <Button variant="outline" size="sm">Read Guide</Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Download className="h-6 w-6 text-purple-600 mr-2" />
                    Browser Extensions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Install our browser extensions for seamless auto-fill across all your favorite websites.
                  </p>
                  <Button variant="outline" size="sm">View Extensions</Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="h-6 w-6 text-orange-600 mr-2" />
                    Security Checklist
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Follow our comprehensive security checklist to ensure maximum protection online.
                  </p>
                  <Button variant="outline" size="sm">View Checklist</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="faq">
            <div className="bg-white rounded-lg shadow-md p-6 mt-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2 flex items-center">
                    <Info className="h-5 w-5 text-blue-600 mr-2" />
                    What happens if I forget my master password?
                  </h3>
                  <p className="text-gray-600">
                    We use a zero-knowledge security model, which means we never store your master password. If you forget it, you can use your account recovery methods (if you've set them up) or your emergency access contacts.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 flex items-center">
                    <Info className="h-5 w-5 text-blue-600 mr-2" />
                    Is SecurePass safe from data breaches?
                  </h3>
                  <p className="text-gray-600">
                    Even in the unlikely event of a data breach, your passwords remain secure because they're encrypted with your master password, which is never stored on our servers.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 flex items-center">
                    <Info className="h-5 w-5 text-blue-600 mr-2" />
                    How does the auto-fill feature work?
                  </h3>
                  <p className="text-gray-600">
                    Our browser extension recognizes login forms on websites and fills in your credentials automatically when you click the SecurePass icon or use the keyboard shortcut.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 flex items-center">
                    <Info className="h-5 w-5 text-blue-600 mr-2" />
                    Can I share passwords securely with others?
                  </h3>
                  <p className="text-gray-600">
                    Yes, our Premium plan includes secure password sharing that lets you share passwords without revealing the actual password. The recipient can use the password without seeing it.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 flex items-center">
                    <Info className="h-5 w-5 text-blue-600 mr-2" />
                    Does SecurePass work on all my devices?
                  </h3>
                  <p className="text-gray-600">
                    Yes, we have apps for Windows, Mac, iOS, Android, and browser extensions for all major browsers. All your data stays in sync across all your devices.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="security">
            <div className="bg-white rounded-lg shadow-md p-6 mt-8">
              <h3 className="text-2xl font-bold mb-6">Our Security Approach</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold mb-4 flex items-center">
                    <Lock className="h-6 w-6 text-blue-600 mr-2" />
                    Encryption Technology
                  </h4>
                  <p className="text-gray-600 mb-4">
                    We use AES-256 bit encryption, the industry standard trusted by security professionals worldwide. All encryption and decryption happens locally on your device.
                  </p>
                  <h4 className="text-xl font-semibold mb-4 mt-8 flex items-center">
                    <Shield className="h-6 w-6 text-blue-600 mr-2" />
                    Zero-Knowledge Architecture
                  </h4>
                  <p className="text-gray-600">
                    We've designed our system so that we never have access to your master password or unencrypted data. This ensures that only you can access your sensitive information.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-4 flex items-center">
                    <FileText className="h-6 w-6 text-blue-600 mr-2" />
                    Security Audits
                  </h4>
                  <p className="text-gray-600 mb-4">
                    We conduct regular security audits by independent third-party security firms and maintain transparency by publishing the results.
                  </p>
                  <h4 className="text-xl font-semibold mb-4 mt-8 flex items-center">
                    <Info className="h-6 w-6 text-blue-600 mr-2" />
                    Security Certifications
                  </h4>
                  <p className="text-gray-600">
                    SecurePass is SOC 2 Type II certified, demonstrating our commitment to security, availability, and confidentiality principles.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Additional Resources */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center mb-8">Additional Resources</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">White Papers</h3>
                <p className="text-gray-600 mb-4">
                  In-depth research and analysis on password security and best practices.
                </p>
                <Button variant="outline">Download</Button>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-green-50 to-green-100">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Webinars</h3>
                <p className="text-gray-600 mb-4">
                  Watch our educational webinars on cybersecurity topics.
                </p>
                <Button variant="outline">Watch Now</Button>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-purple-50 to-purple-100">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Blog</h3>
                <p className="text-gray-600 mb-4">
                  Stay updated with the latest security news and password tips.
                </p>
                <Button variant="outline">Read Articles</Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center p-8 bg-blue-600 rounded-xl shadow-lg text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to secure your passwords?</h2>
          <p className="text-blue-100 max-w-xl mx-auto mb-6">
            Join thousands of users who trust SecurePass to keep their online accounts safe.
          </p>
          <Link to="/signup">
            <Button size="lg" variant="outline" className="bg-white text-blue-600 hover:bg-blue-50 border-white">
              Get Started Free
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Resources;
