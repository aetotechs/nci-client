import { SubscribeForm } from '@/components/Forms/SubscribeForm';
import {
  Facebook,
  InstagramIcon,
  LucidePhoneCall,
  Mail,
  PhoneCall,
  TwitterIcon
} from 'lucide-react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="bottom-0 bg-white ">
      <div className="bg-footer bg-contain bg-no-repeat bg-center bg-white/60 bg-blend-overlay mt-24 px-52 pt-20 mb-20">
        <div className="grid grid-cols-2  p-10 rounded-2xl shadow drop-shadow-xl border">
          <div>
            <h3 className="font-bold text-[18px]">Subscribe to Our NewsLetter</h3>
            <p>Stay updated on news, arrivals and all things green coffee</p>
          </div>
          <div>
            <SubscribeForm />
          </div>
        </div>
        <div className="grid grid-cols-4 gap-40 mt-14">
          <div className="flex flex-col w-[316px] pr-12 ">
            <div className="bg-brand bg-contain bg-center bg-no-repeat w-[113px] h-[90px] mt-2 mb-6"></div>
            <div className="font-normal text-sm leading-6">
              We are dedicated to delivering the finest, ethically sourced coffee beans from around
              the globe. Experience the rich flavors and aromas.
            </div>
          </div>
          <div className="flex flex-col w-[116px] gap-3 ml-24">
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
          <div className="w-[286px] flex flex-col gap-3">
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
              support@nilecoffeeimports.com
            </div>
            <div className="flex items-center gap-2">
              {' '}
              <span>
                <img src="/icons/support.svg" alt="Support icon" />
              </span>
              Talk to support
            </div>
          </div>
          <div className="flex flex-col gap-3 w-[174px]">
            <h3 className="font-semibold text-base">Legal Infomamtion</h3>
            <Link to="/terms-and-conditions">Terms and Conditions</Link>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/cookie-policy">Cookie Policy</Link>
          </div>
        </div>
      </div>
      <div className="flex bg-footerbackground h-[54px] bottom-0 items-center justify-between px-20">
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
