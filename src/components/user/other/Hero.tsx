import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

function Hero() {
  return (
    <div
      className="flex flex-col gap-6 md:flex-row md:mt-10  lg:gap-20  lg:mt-20 py-6 md:mb-24   md:py-3  rounded-r-3xl"
      id="home"
    >
      <div className="order-last md:order-first w-full md:w-[45vw]   md:p-0 rounded-lg">
        <h3 className="font-bold text-3xl leading-[38px] md:leading-[40px] lg:text-[44px] lg:leading-[53px]">
          Experience the Rich Taste of <span className="text-textcolor">Premium </span>Coffee
        </h3>
        <p className="leading-[28px] font-normal text-[17px] md:text-base lg:text-[20px] md:leading-[30px] mt-4 md:mt-2 lg:mt-4">
          Discover our diverse range of ethically sourced coffee beans from around the world.
          Elevate your coffee experience from the finest regions.
        </p>
        <div className="w-[40vw] md:w-[15vw] mt-7 md:mt-6">
          <Link
            className="flex justify-center items-center gap-2 bg-primary h-[48px] py-3 rounded-[8px] text-white font-semibold text-[16px]"
            to="/shop"
          >
            Shop Now
            <ChevronRight />
          </Link>
        </div>
      </div>

      <div className="w-full md:w-[40vw] h-[200px] md:h-[300px] bg-hero bg-cover bg-center rounded-2xl md:rounded-3xl"></div>
    </div>
  );
}

export default Hero;
