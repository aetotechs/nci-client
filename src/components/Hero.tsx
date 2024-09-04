import { Link } from 'react-router-dom';

import { ChevronRight } from 'lucide-react';

function Hero() {
  return (
    <div className=" grid grid-rows-2 my-40 md:flex   md:h-[500px] md:justify-between  md:my-54 rounded-r-3xl id='home ">
      <div className="my-5 md:w-[568px] md:pr-20  ">
        <h3 className="font-bold text-[48px] leading-[64px]">
          Experience the Rich Taste of <span className="text-textcolor">Premium </span> Coffee
        </h3>
        <p className="leading-[30px] font-normal text-[20px] my-4">
          Discover our diverse range of ethically sourced coffee beans from around the world.Elevate
          your coffee experience from the finest regions
        </p>
        <div className="my-10 w-[169px]  ">
          <Link
            className="flex justify-center gap-2 bg-primary py-3 rounded-sm text-white font-semibold text-[16px] leading-5"
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
