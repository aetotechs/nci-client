import React  from 'react';

import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import AboutUs from '@/components/AboutUs';

import Explore from '@/components/Explore';
import Benefits from '@/components/Benefits';
import Categories from '@/components/Categories';
import CoffeeJourney from '@/components/CoffeeJourney';
import { IStatus } from '@/App';
import Header from '@/components/Header';

function LandingPage({ status }: IStatus) {
  return (
    <>
      <main className="my-[40px] mx-10 md:mx-[130px]  ">
        <Header status={status} />
        <Hero />
        <AboutUs />
        <Categories />
        <CoffeeJourney />
        <Explore status={status} />
        <Benefits />
      </main>
      <Footer />
    </>
  );
}

export default LandingPage;
