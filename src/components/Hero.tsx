import { Link } from 'react-router-dom';

import { ChevronRight } from 'lucide-react';

function Hero() {
  return (
    <div className=" grid grid-rows-2  md:flex my-20  md:h-[400px]  md:justify-between   rounded-r-3xl id='home ">
      <div className="mb-5 md:w-[568px] md:pr-20  ">
        <h3 className="font-bold text-[48px] leading-[60px]">
          Experience the Rich Taste of <span className="text-textcolor">Premium </span> Coffee
        </h3>
        <p className="leading-[32px] font-normal text-[20px] my-4">
          Discover our diverse range of ethically sourced coffee beans from around the world.Elevate
          your coffee experience from the finest regions
        </p>
        <div className=" w-[169px] my-14  ">
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

      <div className="md:w-[622px]  bg-hero bg-cover bg-center rounded-3xl"></div>
    </div>
  );
}

export default Hero;
