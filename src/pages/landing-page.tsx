import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';

function LandingPage() {
  return (
    <>
      <main className="my-[40px] mx-10 md:mx-[104px]  ">
        <Header />
        <Hero />
      </main>
    </>
  );
}

export default LandingPage;
