import { Link } from 'react-router-dom';

function AboutUs() {
  return (
    <div
      className="my-20  py-5 rounded-[20px] px-5  md:flex md:p-10 md:gap-[3vw] min-h-max    bg-white"
      id="about">
      <div className="md:w-[50vw]  h-[229px] mb-6 md:h-[311px]  bg-about  bg-cover bg-center rounded-3xl"></div>
      <div className="md:w-[50vw] h-[229px] md:h-[269px]">
        <h3 className="font-bold text-xl leading-9 md:text-[26px] md:leading-[30px] ">About Us</h3>
        <p className=" text-base mb-6 md:leading-[32px] font-normal md:text-[18px]  ">
          At Nile Coffee Imports, we are passionate about bringing you the finest coffee from around
          the world. Our journey began with a simple idea: to source and share the most exquisite
          coffee beans, ethically and sustainably. From the heart of Africa&apos;s coffee regions to
          your cup..
        </p>
        <div className="my-2 w-[50vw] md:w-[15vw]  ">
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
