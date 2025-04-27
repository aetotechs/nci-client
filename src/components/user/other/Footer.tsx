import { SubscribeForm } from '@/components/user/forms/SubscribeForm';

import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="bottom-0 bg-white mx-auto  ">
      <div className="bg-footer bg-contain bg-no-repeat bg-center bg-white/40 bg-blend-overlay mt-20 md:pt-10  pt-10 md:mb-10 mb-10">
        <div className="w-[90%]  md:flex gap-10  p-5 md:px-10  md:items-center   rounded-2xl   border md:max-h-[90px]  mx-auto">
          <div className="  md:w-[50vw]">
            <h3 className="font-bold text-[17px] ">Subscribe to Our NewsLetter</h3>
            <p className="my-3 md:my-0 text-sm">
              Stay updated on news, arrivals and all things green coffee
            </p>
          </div>
          <div className=" md:w-[40vw]">
            <SubscribeForm />
          </div>
        </div>
        <div className=" flex flex-col md:flex-row px-5 mt-10 gap-5  md:gap-20 md:mt-14 ">
          <div className="flex flex-col md:w-[326px] md:ml-10  ">
            <div className="bg-brand bg-contain bg-center  bg-no-repeat w-[113px] h-[90px]  mb-6"></div>
            <div className="font-normal text-sm leading-6">
              We are dedicated to delivering the finest, ethically sourced coffee beans from around
              the globe. Experience the rich flavors and aromas.
            </div>
          </div>
          <div className="flex flex-col w-[200px]  gap-2 ">
            <h3 className="font-semibold text-[15px]">Quick Links</h3>
            <Link to="/" className="font-normal text-sm">
              Home
            </Link>
            <Link to="/about" className="font-normal text-sm">
              About Us
            </Link>
            <Link to="/category" className="font-normal text-sm">
              Categories
            </Link>
            <Link to="/coffee-shop" className="font-normal text-sm">
              Shop
            </Link>
            <Link to="/region" className="font-normal text-sm">
              Origins
            </Link>
            <Link to="/contact-us" className="font-normal text-sm">
              Contact Us
            </Link>
          </div>
          <div className=" flex flex-col gap-2 md:w-[300px] ">
            <h3 className="font-semibold text-[15px]">Contact Information</h3>
            <div className="flex items-center gap-2">
              {' '}
              <span>
                <img src="/icons/call.svg" className="w-4 h-4" alt="Callicon" />
              </span>
              <span className="text-sm">+256 706 454 876</span>{' '}
            </div>
            <div className="flex items-center gap-2">
              {' '}
              <span>
                <img src="/icons/mail.svg" className="w-4 h-4" alt="mailIcon" />
              </span>
              <span className="text-sm"> support@nilecoffeeimports.com</span>
            </div>
            <div className="flex items-center gap-2">
              {' '}
              <span>
                <img src="/icons/support.svg" className="w-4 h-4" alt="Support icon" />
              </span>
              <span className="text-sm">Talk to support</span>
            </div>
          </div>
          <div className="flex flex-col gap-2  ">
            <h3 className="font-semibold text-[15px]">Legal Information</h3>
            <Link to="/terms-and-conditions" className="text-sm">
              Terms and Conditions
            </Link>
            <Link to="/privacy-policy" className="text-sm">
              Privacy Policy
            </Link>
            <Link to="/cookie-policy" className="text-sm">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
      <div className="flex bg-footerbackground h-[54px] bottom-0 items-center justify-between px-2 md:px-20">
        <div className="text-white font-normal text-sm  md:text-[15px] ">
          &copy;Nile Coffee Imports, Inc. 2024
        </div>
        <div className="flex gap-4">
          <img src="/icons/twitter.svg" alt="TwitterIcon" />

          <img src="/icons/instagram.svg" alt="InstagramIcon" />
          <img src="/icons/facebook.svg" alt="FacebookIcon" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
