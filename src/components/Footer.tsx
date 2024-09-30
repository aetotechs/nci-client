import { SubscribeForm } from '@/components/forms/SubscribeForm';

import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="bottom-0 bg-white mx-auto  ">
      <div className="bg-footer bg-contain bg-no-repeat bg-center bg-white/60 bg-blend-overlay mt-24  pt-20 mb-20">
        <div className="w-[90%] h-[181px] md:grid grid-cols-2  p-5 md:p-10 rounded-2xl shadow drop-shadow-xl border md:h-[120px]  mx-auto">
          <div>
            <h3 className="font-bold text-[18px] ">Subscribe to Our NewsLetter</h3>
            <p className="my-3 md:py-0">
              Stay updated on news, arrivals and all things green coffee
            </p>
          </div>
          <div>
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
          <div className="flex flex-col w-[200px]  gap-3 ">
            <h3 className="font-semibold text-base">Quick Links</h3>
            <Link to="home" className="font-normal text-[15px]">
              Home
            </Link>
            <Link to="/about-us" className="font-normal text-[15px]">
              About Us
            </Link>
            <Link to="/categories" className="font-normal text-[15px]">
              Categories
            </Link>
            <Link to="/shop" className="font-normal text-[15px]">
              Shop
            </Link>
            <Link to="/origins" className="font-normal text-[15px]">
              Origins
            </Link>
            <Link to="/contact-us" className="font-normal text-[15px]">
              Contact Us
            </Link>
          </div>
          <div className=" flex flex-col gap-3 md:w-[300px] ">
            <h3 className="font-semibold text-base">Contact Information</h3>
            <div className="flex items-center gap-2">
              {' '}
              <span>
                <img src="/icons/call.svg" alt="Callicon" />
              </span>
              +256 708 210 793
            </div>
            <div className="flex items-center gap-2">
              {' '}
              <span>
                <img src="/icons/mail.svg" alt="mailIcon" />
              </span>
              <span> support@nilecoffeeimports.com</span>
            </div>
            <div className="flex items-center gap-2">
              {' '}
              <span>
                <img src="/icons/support.svg" alt="Support icon" />
              </span>
              Talk to support
            </div>
          </div>
          <div className="flex flex-col gap-3  ">
            <h3 className="font-semibold text-base">Legal Infomamtion</h3>
            <Link to="/terms-and-conditions">Terms and Conditions</Link>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/cookie-policy">Cookie Policy</Link>
          </div>
        </div>
      </div>
      <div className="flex bg-footerbackground h-[54px] bottom-0 items-center justify-between px-2 md:px-20">
        <div className="text-white font-normal text-[15px] ">
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
