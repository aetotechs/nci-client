import { useEffect } from 'react';

import Header from '@/components/user/other/Header';

import Footer from '@/components/user/other/Footer';
import { IStatus } from '@/App';
import { useLocation } from 'react-router-dom';
import { Button } from '@/components/common/ui/button';

function About({ status }: IStatus) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <div className="md:px-[5vw] md:max-w-[100vw] overflow-x-hidden    ">
        <Header status={status} />
        <div className="w-[100vw] px-5 py-2 md:pt-0 md:w-[1232px] overflow-hidden">
          <div className="md:mt-10 my-2 ">
            <h3 className="font-semibold text-[26px]">About Us</h3>
          </div>
          <div className="flex flex-col gap-10 md:flex-row ">
            <div className="bg-white md:h-[480px] md:w-[45vw] p-5">
              <h4 className="font-medium text-xl md:leading-8 md:text-3xl mb-5 text-textcolor">
                Discover the Story Behind Nile Coffee Imports
              </h4>
              <p className="font-normal text-base mb-5 leading-7 text-inactive">
                At Nile Coffee Imports, we are passionate about delivering the world's finest coffee
                to your cup. Our mission is to source the best beans while maintaining ethical and
                sustainable practices. We partner with farmers and cooperatives, especially in
                Africa's top coffee regions, to ensure our beans meet high standards of quality and
                flavor. Our fair relationships support communities and promote sustainable farming.
                At Nile Coffee Imports, we believe great coffee tells a story of dedication and
                craftsmanship. Join us in experiencing the rich flavors and vibrant culture of our
                coffee, from source to cup.
              </p>
              <Button
                variant="outline"
                className="border border-primary my-4 bg-white text-primary"
              >
                Contact us
              </Button>
            </div>
            <div className="md:w-[50vw] md:h-[631px] flex flex-col gap-5">
              <div className=" h-[293px] md:h-[260px]  rounded-[20px] bg-aboutimage bg-cover bg-center"></div>

              <div className="bg-white h-[300px] p-5 rounded-[20px] flex flex-col gap-4 md:grid  md:grid-cols-2 md:gap-1 md:h-[202px] md:p-5">
                <div className="col-span-2 h-[70px] bg-primary text-white rounded-[10px] flex justify-center items-center gap-3">
                  <span>
                    <img src="/icons/quality.png" alt="Quality" width={20} />
                  </span>
                  Quality
                </div>
                <div className="h-[70px] bg-primary text-white rounded-[10px] flex justify-center items-center gap-3">
                  <span>
                    <img src="/icons/sustainability.png" alt="Sustainability" width={20} />
                  </span>
                  Sustainability
                </div>
                <div className="h-[70px] bg-primary text-white rounded-[10px] flex justify-center items-center gap-3">
                  <span>
                    <img src="/icons/partnerships.png" alt="Partnerships" width={20} />
                  </span>
                  Partnerships
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
