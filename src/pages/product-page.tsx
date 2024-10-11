import { IStatus } from '@/App';
import AboutCoffee from '@/components/AboutCoffee';
import CoffeeGrowth from '@/components/CoffeeGrowth';
import CoffeeGuide from '@/components/CoffeeGuide';
import CoffeeHistory from '@/components/CoffeeHistory';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ProductDetails, { IProduct } from '@/components/ProductDetails';
import { FetchProductById } from '@/lib/api-routes';

import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

function ProductPage({ status }: IStatus) {
  const [product, setproduct] = useState<IProduct>();
  const { productId } = useParams();
  const { pathname } = useLocation();
  console.log(productId);

  useEffect(() => {
    const FetchProduct = async () => {
      try {
        const response = await fetch(FetchProductById(productId!));
        const data = await response.json();
        const FetchedProduct = data;
        console.log(response);

        setproduct(FetchedProduct);
      } catch (error) {}
    };

    FetchProduct();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <div className="md:px-[5vw] md:max-w-[100vw]  ">
        <Header status={status} />

        <div className="px-4 ">
          <div className="flex flex-col md:px-0 my-5 md:my-10 md:mb-1">
            <div className="font-semibold text-2xl md:text-[26px]">{product?.name}</div>
            <div className="font-normal text-[15px]  flex gap-1 items-center">
              <span>
                <img src="/icons/coffee-bean.svg" alt="Coffee Bean" />
              </span>
              <p className="font-normal text-[15px] py-1">{product?.flavor}</p>
            </div>
          </div>

          <div className="flex flex-col gap-5 md:grid md:grid-rows-1  md:grid-cols-5 md:max-h-[60vh]  ">
            <div className="col-span-3 h-[313px]  bg-map bg-contain bg-no-repeat bg-center mx-5 md:mx-0 relative flex items-center justify-center rounded-lg md:rounded-xl">
              <div className="flex items-center justify-center">
                <img
                  src="/icons/location.svg"
                  alt="location"
                  className="z-0 w-[10px] md:w-[20px]"
                />
                <span className="font-normal text-[sm] md:text-base">Nakuru</span>
              </div>
            </div>

            <div className="col-span-2 ">
              <ProductDetails product={product!} status={status} />
            </div>
          </div>

          <div className="">
            <div>
              <AboutCoffee product={product!} />
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
