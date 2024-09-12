import { useEffect } from 'react';

import Header from '@/components/Header';

import Footer from '@/components/Footer';
import { IStatus } from '@/App';
import { useLocation } from 'react-router-dom';

import { ContactUsForm } from '@/components/forms/ContactUsForm';
import { MailIcon, Phone } from 'lucide-react';

function ContactUs({ status }: IStatus) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <div className="md:my-5 mx-auto md:w-[1232px] ">
        <Header status={status} />
        <div className="w-[100vw] px-5 py-7 md:pt-0 md:w-[1232px] overflow-hidden">
          <div className="md:my-7 my-4">
            <h3 className="font-semibold text-xl">Contact Us</h3>
          </div>
          <div className="flex flex-col gap-7 md:flex-row ">
            <div className="  md:w-[600px] p-5">
              <h4 className="font-normal text-base md:leading-5 md:text-base mb-5 text-textcolor">
                Fill the form with your inquiries and a member of our team would reach out to you
              </h4>
              <h5 className="font-semibold text-[18px]">Office Contact Info</h5>
              <div className="my-4 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span>
                    <img src="/icons/location.svg" alt="" />
                  </span>
                  415 Elm Street, Suite 2B San Francisco, CA 94102
                </div>
                <div className="flex items-center gap-2">
                  <span>
                    <Phone className="h-4 w-4 text-primary" />
                  </span>
                  +1 (914) 793-2110
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-primary">
                    <MailIcon className="h-4 w-4" />
                  </span>
                  support@nilecoffeeimports.com
                </div>
              </div>
            </div>
            <div className="md:w-[541px] md:h-[360px] bg-white px-20 flex items-center rounded-[20px] ">
              <ContactUsForm />
            </div>
          </div>

          <div className="bg-white grid grid-cols-2 p-10 gap-6 rounded-[20px] h-[460px] md:mt-8">
            <div className="w-[538px]">
              <h3 className="font-semibold text-[26px]">Suppliers</h3>
              <p className="text-base font-normal leading-7 text-textdark">
                We value building new relationships and strengthening existing ones with
                cooperatives, estates, individual producers, farmer groups, associations, mills, and
                exporters. If you are interested in sending us a sample offer, please download the
                <span className="text-primary"> Coffee Information Sheet</span> and mail it to the
                address below, along with a 350-gram offer sample. Be sure to include a Reference
                Number for each sample. We will taste your coffee and get back to you promptly.
                <div className="my-4">
                  <h4 className="text-textcolor font-semibold"> Nile Coffee Imports </h4>
                  <p>Quality Control Department,</p>
                  <p> 415 Elm Street, Suite 2B San Francisco, CA 94102 USA</p>
                </div>
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[26px]">Careers</h3>
              <p className="text-base font-normal leading-7">
                We are regularly looking for new talent as we supply more high quality coffee to our
                roasting customers. Please send all career inquiries, including a cover letter and
                resume to <span className="text-primary">customerservice@nilecoffee.com</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ContactUs;
