import Footer from '@/components/user/other/Footer';
import Header from '@/components/user/other/Header';
import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <Header />
      <div className="mt-16 text-gray-800 lg:px-[4vw] md:px-[2vw] md:max-w-[100vw]">
        <div className="max-w-4xl mx-auto shadow-md rounded-md p-8">
          <h1 className="text-2xl font-bold mb-6">Privacy Policy</h1>
          <p className="mb-4">
            Nile Coffee Imports values your privacy. This policy explains how we collect, use, and
            protect your information.
          </p>
          <h2 className="text-xl font-semibold mt-6">1. Information Collection</h2>
          <p className="mb-4">
            We collect personal information you provide when registering or purchasing from our
            site.
          </p>
          <h2 className="text-xl font-semibold mt-6">2. Use of Information</h2>
          <p className="mb-4">
            Your information is used to process orders, improve services, and communicate updates.
          </p>
          <h2 className="text-xl font-semibold mt-6">3. Security</h2>
          <p>
            We employ security measures to protect your data. However, no online system is 100%
            secure.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
