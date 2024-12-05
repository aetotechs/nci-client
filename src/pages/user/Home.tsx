import Hero from '@/components/user/other/Hero';
import Footer from '@/components/user/other/Footer';
import AboutUs from '@/components/user/other/AboutUs';
import Benefits from '@/components/user/other/Benefits';
import Categories from '@/components/user/other/Categories';
import CoffeeJourney from '@/components/user/other/CoffeeJourney';
import Header from '@/components/user/other/Header';
import { IStatus } from '@/App';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchItemsRoute } from '@/utils/hooks/api-routes';
import { ErrorToast } from '@/components/common/ui/Toasts';
import Product from '@/components/user/other/Product';
import { IProduct } from '@/utils/commons/TypeInterfaces';

function LandingPage({ status }: IStatus) {
  const { pathname } = useLocation();
  const [products, setProducts] = useState<IProduct[] | any>(Array(10).fill({}));
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    const fetchProducts = async () => {
      try {
        const response = await fetch(fetchItemsRoute);
        if (response.ok) {
          const data = await response.json();
          setProducts(data);
        } else {
          ErrorToast(response.text());
        }
      } catch (error) {
        ErrorToast(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [setProducts]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header handleSearch={() => {}} />
      <div className="lg:px-[4vw] md:px-[2vw] md:max-w-[100vw]">
        <main className="px-[5vw] lg:px-0 ">
          <Hero />
          <AboutUs />
          <Categories />
          <CoffeeJourney />

          <>
            <div className="flex flex-col md:justify-center md:items-center my-5 mb-4">
              <h3 className="font-semibold text-xl md:text-[26px] mt-4 md:mt-0 justify-self-start">
                Explore Nile Coffee
              </h3>
              <p className="font-normal text-sm my-2 mb-8">
                Discover the rich flavors and unique origins of Nile Coffee
              </p>
            </div>
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {products?.map((product: IProduct, index: any) => (
                <div key={index}>
                  <Product product={product} skeleton={loading} />
                </div>
              ))}
            </div>
          </>

          <Benefits status={status} />
        </main>
      </div>
      <Footer />
    </>
  );
}

export default LandingPage;
