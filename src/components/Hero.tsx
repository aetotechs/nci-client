import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

function Hero() {
  return (
    <div
      className="flex flex-col gap-6 md:flex-row   md:mt-20 py-6  md:py-3  rounded-r-3xl"
      id="home"
    >
      <div className="order-last md:order-first w-full md:w-[45vw] py-4 md:p-0 rounded-lg">
        <h3 className="font-bold text-3xl leading-[38px] md:text-[44px] md:leading-[53px]">
          Experience the Rich Taste of <span className="text-textcolor">Premium </span>Coffee
        </h3>
        <p className="leading-[28px] font-normal text-[18px] md:text-[20px] md:leading-[30px] mt-4">
          Discover our diverse range of ethically sourced coffee beans from around the world.
          Elevate your coffee experience from the finest regions.
        </p>
        <div className="w-[40vw] md:w-[15vw] mt-8 md:mt-6">
          <Link
            className="flex justify-center items-center gap-2 bg-primary h-[48px] py-3 rounded-[8px] text-white font-semibold text-[16px]"
            to="/shop"
          >
            Shop Now
            <ChevronRight />
          </Link>
        </div>
      </div>

      <div className="w-full md:w-[40vw] h-[300px] md:max-h-[350px] bg-hero bg-cover bg-center rounded-2xl md:rounded-3xl"></div>
    </div>
  );
}

export default Hero;
