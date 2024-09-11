import { Link } from 'react-router-dom';

function AboutUs() {
  return (
    <div
      className="my-40 py-5 rounded-[20px] px-5  md:flex md:justify-between items-center  md:gap-12 h-[596px]  md:h-[436px]   md:px-20  bg-white"
      id="about">
      <div className=" w-[300px] h-[229px] mb-6 md:w-[509px] md:h-[311px]  bg-about  bg-cover bg-center rounded-3xl"></div>
      <div className="md:w-[538px] h-[229px] md:h-[269px]">
        <h3 className="font-bold text-xl leading-9 md:text-[32px] md:leading-[60px] ">About Us</h3>
        <p className=" text-base mb-6 md:leading-[32px] font-normal md:text-[18px]  ">
          At Nile Coffee Imports, we are passionate about bringing you the finest coffee from around
          the world. Our journey began with a simple idea: to source and share the most exquisite
          coffee beans, ethically and sustainably. From the heart of Africa&apos;s coffee regions to
          your cup..
        </p>
        <div className="my-2  w-[169px]  ">
          <Link
            className="flex justify-center gap-2 bg-primary py-3 rounded-sm text-white font-semibold text-[16px] leading-5"
            to="/shop">
            Read More{' '}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
