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
      <div className="md:my-5 mx-auto md:w-[1232px] ">
        <Header status={status} />
        <main className="px-4 w-[100vw]  pt-10 md:pt-0 md:w-[1232px] overflow-hidden ">
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
