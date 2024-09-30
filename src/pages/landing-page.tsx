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
      <div className="md:px-[5vw] md:max-w-[100vw]     ">
        <Header status={status} />
        <main className="px-5 ">
          <Hero />
          <AboutUs />
          <Categories />
          <CoffeeJourney />
          <Explore status={status} />
          <Benefits status={status} />
        </main>
      </div>
      <Footer />
    </>
  );
}

export default LandingPage;
