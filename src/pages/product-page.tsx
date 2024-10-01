import { IStatus } from '@/App';
import AboutCoffee from '@/components/AboutCoffee';
import CoffeeGrowth from '@/components/CoffeeGrowth';
import CoffeeGuide from '@/components/CoffeeGuide';
import CoffeeHistory from '@/components/CoffeeHistory';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ProductDetails from '@/components/ProductDetails';

import { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';

function ProductPage({ status }: IStatus) {
  const { productId } = useParams();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <div className="md:px-[5vw] md:max-w-[100vw]  ">
        <Header status={status} />

        <div className="px-5">
          <div className="flex flex-col px-5 md:px-0 my-10 md:my-10 md:mb-1">
            <div className="font-semibold text-xl md:text-[26px]">{productId}</div>
            <div className="font-normal text-[15px] my-3 flex gap-1 items-center">
              <span>
                <img src="/icons/coffee-bean.svg" alt="Coffee Bean" />
              </span>
              <p className="font-normal text-[15px] py-1">Caramel, Berry, Chocolate</p>
            </div>
          </div>

          <div className="grid grid-rows-2 md:grid-rows-1  md:grid-cols-5 gap-3 md:max-h-[60vh]  ">
            <div className="col-span-3 h-full  bg-map bg-contain bg-no-repeat bg-center mx-5 md:mx-0 relative flex items-center justify-center rounded-lg md:rounded-xl">
              <div className="flex items-center justify-center">
                <img src="/icons/location.svg" alt="location" className="z-0 w-[20px]" />
                <span className="font-normal text-lg md:text-base">Nakuru</span>
              </div>
            </div>

            <div className="col-span-2">
              <ProductDetails product={productId} />
            </div>
          </div>

          <div className="">
            <div>
              <AboutCoffee />
            </div>
            <div>
              <CoffeeHistory />
            </div>
            <div>
              <CoffeeGrowth />
            </div>
            <div>
              <CoffeeGuide />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ProductPage;
