
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Lock, Key, Check, Eye } from 'lucide-react';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50">
    {/* Hero Section */}
    <header className="w-full px-4 sm:px-6 lg:px-8 py-6">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center">
          <Shield className="h-8 w-8 text-blue-600" />
          <h1 className="ml-2 text-2xl font-bold text-gray-900">SecurePass</h1>
        </div>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link to="/how-it-works">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  How It Works
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/features">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Features
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="w-[400px] p-4">
                  <div className="grid grid-cols-2 gap-3">
                    <Link to="/resources">
                      <Card>
                        <CardContent className="p-4 flex gap-2">
                          <Lock className="h-5 w-5 text-blue-500" />
                          <div>
                            <h3 className="font-medium">Security Guide</h3>
                            <p className="text-sm text-gray-500">Password best practices</p>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                    <Link to="/resources">
                      <Card>
                        <CardContent className="p-4 flex gap-2">
                          <Key className="h-5 w-5 text-blue-500" />
                          <div>
                            <h3 className="font-medium">FAQ</h3>
                            <p className="text-sm text-gray-500">Common questions</p>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex items-center gap-4">
          <Link to="/login">
            <Button variant="outline">Sign In</Button>
          </Link>
          <Link to="/signup">
            <Button>Sign Up</Button>
          </Link>
        </div>
      </div>
    </header>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            Secure Password Management, <span className="text-blue-600">Simplified</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-lg">
            Store, manage, and access your passwords securely from anywhere. 
            Never forget a login again with SecurePass.
          </p>
          <div className="pt-4">
            <Link to="/signup">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Lock className="mr-2 h-5 w-5" /> Get Started
              </Button>
            </Link>
          </div>
          <div className="flex items-center space-x-6 pt-4 text-gray-700">
            <div className="flex items-center">
              <Check className="h-5 w-5 text-green-500 mr-2" />
              <span>256-bit encryption</span>
            </div>
            <div className="flex items-center">
              <Check className="h-5 w-5 text-green-500 mr-2" />
              <span>Always in sync</span>
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <img 
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
            alt="Password security"
            className="rounded-lg shadow-2xl transform rotate-1"
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose SecurePass?</h2>
        <div className="grid md:grid-cols-3 gap-10">
          <Card className="border-0 shadow-lg hover:shadow-xl transition duration-300">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="bg-blue-100 p-3 rounded-full mb-4">
                <Lock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Password Storage</h3>
              <p className="text-gray-600">
                Keep all your passwords safely encrypted in one secure location
              </p>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg hover:shadow-xl transition duration-300">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="bg-green-100 p-3 rounded-full mb-4">
                <Eye className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Access</h3>
              <p className="text-gray-600">
                Access your passwords from any device, anywhere in the world
              </p>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg hover:shadow-xl transition duration-300">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="bg-purple-100 p-3 rounded-full mb-4">
                <Key className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Auto-Fill</h3>
              <p className="text-gray-600">
                Automatically fill in your login details with one click
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to secure your passwords?</h2>
        <p className="text-lg text-gray-600 mb-8">Join thousands of users who trust SecurePass</p>
        <Link to="/vault">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Try Password Vault
          </Button>
        </Link>
      </div>
    </div>
  </div>
);

export default HomePage;
