import { Link } from 'react-router-dom';

function AboutUs() {
  return (
    <div
      className="grid grid-cols-2 rounded-[20px]   md:flex md:justify-between md:items-center gap-12   h-[500px]  py-10 px-20 my-20 bg-white"
      id="about"
    >
      <div className="w-[509px]  bg-about h-[311px] bg-cover bg-center rounded-3xl"></div>
      <div className="w-[538px]    ">
        <h3 className="font-bold text-[32px] leading-[60px] mt-10">About Us</h3>
        <p className="leading-[32px] font-normal text-[18px]  ">
          At Nile Coffee Imports, we are passionate about bringing you the finest coffee from around
          the world. Our journey began with a simple idea: to source and share the most exquisite
          coffee beans, ethically and sustainably. From the heart of Africa&apos;s coffee regions to
          your cup..
        </p>
        <div className="my-14 w-[169px]  ">
          <Link
            className="flex justify-center gap-2 bg-primary py-3 rounded-sm text-white font-semibold text-[16px] leading-5"
            to="/shop"
          >
            Read More{' '}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
