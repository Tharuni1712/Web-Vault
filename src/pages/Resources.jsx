
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Lock, Key, HelpCircle, BookOpen, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

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
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Resources & Support</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to get the most out of SecurePass and stay secure online.
          </p>
        </div>

        {/* Resource Categories */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="border-0 shadow-lg hover:shadow-xl transition duration-300">
            <CardHeader className="text-center">
              <div className="bg-blue-100 p-4 rounded-full mb-4 mx-auto w-fit">
                <BookOpen className="h-8 w-8 text-blue-600" />
              </div>
              <CardTitle>Security Guide</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 mb-4">
                Learn password best practices and how to stay secure online with our comprehensive security guide.
              </p>
              <Button variant="outline" className="w-full">
                Read Guide
              </Button>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition duration-300">
            <CardHeader className="text-center">
              <div className="bg-green-100 p-4 rounded-full mb-4 mx-auto w-fit">
                <HelpCircle className="h-8 w-8 text-green-600" />
              </div>
              <CardTitle>Help Center</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 mb-4">
                Find answers to common questions and get step-by-step tutorials for using SecurePass.
              </p>
              <Button variant="outline" className="w-full">
                Get Help
              </Button>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition duration-300">
            <CardHeader className="text-center">
              <div className="bg-purple-100 p-4 rounded-full mb-4 mx-auto w-fit">
                <Download className="h-8 w-8 text-purple-600" />
              </div>
              <CardTitle>Downloads</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 mb-4">
                Download SecurePass for all your devices and get browser extensions for seamless integration.
              </p>
              <Button variant="outline" className="w-full">
                Download Apps
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Password Security Tips */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Password Security Best Practices</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Lock className="h-5 w-5 mr-2 text-blue-600" />
                Creating Strong Passwords
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Use at least 12 characters</li>
                <li>• Include uppercase and lowercase letters</li>
                <li>• Add numbers and special characters</li>
                <li>• Avoid personal information</li>
                <li>• Don't use dictionary words</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Key className="h-5 w-5 mr-2 text-green-600" />
                Password Management Tips
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Use unique passwords for each account</li>
                <li>• Enable two-factor authentication</li>
                <li>• Regularly update your passwords</li>
                <li>• Never share your passwords</li>
                <li>• Use a password manager (like SecurePass!)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>How secure is SecurePass?</AccordionTrigger>
              <AccordionContent>
                SecurePass uses military-grade AES-256 encryption to protect your data. We employ a zero-knowledge architecture, meaning we never have access to your passwords or master password. Your data is encrypted on your device before it's sent to our servers.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Can I access my passwords offline?</AccordionTrigger>
              <AccordionContent>
                Yes! SecurePass stores an encrypted copy of your vault locally on each device. You can access your passwords even when you're offline. Any changes you make will sync automatically when you're back online.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>What happens if I forget my master password?</AccordionTrigger>
              <AccordionContent>
                Due to our zero-knowledge security model, we cannot recover your master password. However, you can set up account recovery options during setup, such as security questions or recovery codes, to regain access to your account.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>How does auto-fill work?</AccordionTrigger>
              <AccordionContent>
                Our browser extensions and mobile apps can automatically detect login forms and fill them with your saved credentials. The auto-fill feature uses secure communication with your vault and only works on the exact domains you've saved passwords for.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>Is there a free version?</AccordionTrigger>
              <AccordionContent>
                Yes! SecurePass offers a free tier that includes password storage for up to 50 entries, basic password generation, and access across all your devices. Premium plans offer unlimited storage, advanced features, and priority support.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Contact Support */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Still need help?</h2>
          <p className="text-lg text-gray-600 mb-8">Our support team is here to help you 24/7</p>
          <div className="flex justify-center gap-4">
            <Button variant="outline" size="lg">
              Contact Support
            </Button>
            <Link to="/signup">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Try SecurePass Free
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
