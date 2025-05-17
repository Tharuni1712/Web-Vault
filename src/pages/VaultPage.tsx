
import React from 'react';
import PasswordVault from '@/components/PasswordVault';

const VaultPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-screen-lg mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <PasswordVault />
      </div>
    </div>
  );
};

export default VaultPage;
