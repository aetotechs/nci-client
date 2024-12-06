import Footer from '@/components/user/other/Footer';
import Header from '@/components/user/other/Header';
import React from 'react';

const TermsAndConditions: React.FC = () => {
  return (
    <>
      <Header />
      <div className="mt-16 text-gray-800 lg:px-[4vw] md:px-[2vw] md:max-w-[100vw]">
        <div className="max-w-6xl mx-auto shadow-md rounded-md p-8">
          <h1 className="text-2xl font-bold mb-6">Terms and Conditions</h1>
          <p className="mb-4">
            Welcome to Nile Coffee Imports. By accessing or using our website, you agree to be bound
            by these terms and conditions.
          </p>
          <h2 className="text-xl font-semibold mt-6">1. Use of the Website</h2>
          <p className="mb-4">
            You agree to use this website only for lawful purposes and in a way that does not
            infringe on the rights of others.
          </p>
          <h2 className="text-xl font-semibold mt-6">2. Intellectual Property</h2>
          <p className="mb-4">
            All content on this site is the property of Nile Coffee Imports. Reproduction without
            permission is prohibited.
          </p>
          <h2 className="text-xl font-semibold mt-6">3. Limitation of Liability</h2>
          <p>
            Nile Coffee Imports is not liable for any damages arising from your use of this website.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TermsAndConditions;
