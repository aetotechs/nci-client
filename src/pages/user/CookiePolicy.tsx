import Footer from '@/components/user/other/Footer';
import Header from '@/components/user/other/Header';
import React from 'react';

const CookiePolicy: React.FC = () => {
  return (
    <>
      <Header />
      <div className="mt-16 text-gray-800 lg:px-[4vw] md:px-[2vw] md:max-w-[100vw]">
        <div className="max-w-4xl mx-auto shadow-md rounded-md p-8">
          <h1 className="text-2xl font-bold mb-6">Cookie Policy</h1>
          <p className="mb-4">
            Our website uses cookies to enhance your experience. This policy explains their purpose
            and how you can manage them.
          </p>
          <h2 className="text-xl font-semibold mt-6">1. What Are Cookies?</h2>
          <p className="mb-4">
            Cookies are small files stored on your device to remember preferences and enhance
            functionality.
          </p>
          <h2 className="text-xl font-semibold mt-6">2. How We Use Cookies</h2>
          <p className="mb-4">
            We use cookies for analytics, personalized content, and marketing purposes.
          </p>
          <h2 className="text-xl font-semibold mt-6">3. Managing Cookies</h2>
          <p>
            You can manage cookies through your browser settings. Disabling cookies may affect site
            functionality.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CookiePolicy;
