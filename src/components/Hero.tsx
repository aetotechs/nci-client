import { Link } from 'react-router-dom';

import { ChevronRight } from 'lucide-react';

function Hero() {
  return (
    <div className=" grid grid-rows-2  md:flex md:mt-20    md:py-3  gap-[3vw]   rounded-r-3xl id='home ">
      <div className="md:mb-5  md:my-0    md:w-[45vw]  order-last md:order-first  ">
        <h3 className="font-bold text-3xl leading-10 md:text-[44px] md:leading-[60px]">
          Experience the Rich Taste of <span className="text-textcolor">Premium </span> Coffee
        </h3>
        <p className="leading-[32px] font-normal text-[20px] md:leading-10   md:my-4">
          Discover our diverse range of ethically sourced coffee beans from around the world.Elevate
          your coffee experience from the finest regions
        </p>
        <div className="w-[50vw] md:w-[15vw] my-20 ">
          <Link
            className="flex justify-center  items-center gap-2 bg-primary h-[51px]  py-3 rounded-[8px] text-white font-semibold text-[16px] leading-5"
            to="/shop"
          >
            Shop Now{' '}
            <span>
              <ChevronRight />
            </span>{' '}
          </Link>
        </div>
      </div>

      <div className="md:w-[40vw]  max-h-[400px] bg-hero bg-cover bg-center rounded-2xl md:rounded-3xl"></div>
    </div>
  );
}

export default Hero;
