
import React from 'react';
import { Shield, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-blue-50 px-4 py-8 text-center">
      <Shield className="h-16 w-16 text-blue-600 mb-4" />
      <h1 className="text-4xl font-bold text-gray-900 mb-2">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Page Not Found</h2>
      <p className="text-gray-600 max-w-md mb-8">
        The page you're looking for doesn't exist or has been moved. Let's get you back to safety.
      </p>
      <Link to="/">
        <Button>
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;
