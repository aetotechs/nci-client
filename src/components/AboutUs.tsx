import { Link } from 'react-router-dom';

function AboutUs() {
  return (
    <div
      className="my-12 py-6 rounded-2xl px-4 md:flex md:p-10 md:gap-[3vw] bg-white  md:mb-24"
      id="about"
    >
      <div className="w-full h-[250px] mb-6 md:w-[50%] md:h-[350px] bg-about bg-cover bg-center rounded-xl md:rounded-3xl"></div>

      <div className="w-full md:w-[50%] flex flex-col justify-center">
        <h3 className="font-semibold text-xl leading-8 md:text-[26px] md:leading-[30px]">
          About Us
        </h3>
        <p className="text-base mb-6 mt-2 font-normal leading-6 md:text-[18px] md:leading-[30px]">
          At Nile Coffee Imports, we are passionate about bringing you the finest coffee from around
          the world. Our journey began with a simple idea: to source and share the most exquisite
          coffee beans, ethically and sustainably.
          <br /> From the heart of Africa&apos;s coffee regions to your cup...
        </p>
        <div className="w-[30vw] md:w-[11vw]">
          <Link
            className="flex justify-center items-center gap-2 bg-primary py-2 rounded-md text-white font-medium text-[16px]"
            to="/shop"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
