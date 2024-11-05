import AboutCoffee from '@/components/user/other/AboutCoffee';
import CoffeeGrowth from '@/components/user/other/CoffeeGrowth';
import CoffeeGuide from '@/components/user/other/CoffeeGuide';
import CoffeeHistory from '@/components/user/other/CoffeeHistory';
import Footer from '@/components/user/other/Footer';
import Header, { HeaderProps } from '@/components/user/other/Header';
import ProductDetails from '@/components/user/other/ProductDetails';
import { IProduct } from '@/utils/commons/TypeInterfaces';
import { fetchProductByIdRoute } from '@/utils/hooks/api-routes';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

function ProductPage({ status, handleSearch }: HeaderProps) {
  const [product, setproduct] = useState<IProduct>();
  const { productId } = useParams();
  const { pathname } = useLocation();
  console.log(productId);

  useEffect(() => {
    const FetchProduct = async () => {
      try {
        const response = await fetch(fetchProductByIdRoute(productId!));
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
      <Header status={status} />
      <div className="md:px-[5vw] md:max-w-[100vw]  ">
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

          <div className="grid md:grid-cols-2">
            <div className="h-full bg-map p-16 bg-contain bg-no-repeat bg-center flex items-center justify-center rounded-lg md:rounded-xl">
              <div className="flex items-center justify-center">
                <img
                  src="/icons/location.svg"
                  alt="location"
                  className="z-0 w-full"
                />
                <span className="font-normal text-[sm] md:text-base">Naguru</span>
              </div>
            </div>

            <div className="mt-4 md:mt-0">
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
