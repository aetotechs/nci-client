import Footer from '@/components/user/other/Footer';
import Header from '@/components/user/other/Header';
import CoffeeListings from '@/components/user/other/CoffeeListings';
import Product from '@/components/user/other/Product';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/common/ui/select';
import { FilterSheet, Listings } from '@/components/user/other/FilterMobile';
import { IProduct } from '@/utils/commons/TypeInterfaces';
import { ErrorToast } from '@/components/common/ui/Toasts';
import { fetchItemsRoute } from '@/utils/hooks/api-routes';
import { useLoading } from '@/utils/context/LoaderContext';

function OriginsPage() {
  const { dispatchLoader } = useLoading();
  const { pathname } = useLocation();
  const { originId } = useParams();
  const [products, setProducts] = useState<IProduct[] | any>(Array(8).fill({}));
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatchLoader(true);
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
        dispatchLoader(false);
      }
    };

    fetchProducts();
  }, [setProducts]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header />
      <div className="lg:px-[4vw] md:px-[2vw] w-full md:mb-10">
        <div className="px-4 w-full pt-4 md:pt-0 overflow-hidden ">
          <div className="flex mb-4 mflex-cold:mb-0 md:justify-between mt-4">
            <h3 className="text-2xl font-semibold md:mt-5 md:mb-0 pb-3">{originId}</h3>
            <div className="flex md:justify-end   md:w-full items-center gap-3 my-2">
              <div className="font-medium text-base">Sort by:</div>
              <div>
                <Select>
                  <SelectTrigger className=" bg-selectbackground border border-selectborder outline-none rounded-[5px] w-[100px] md:w-[126px] h-[33px] ">
                    <SelectValue placeholder="Featured" className="p-5 text-base font-bold " />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="latest">Latest</SelectItem>
                    <SelectItem value="lowestPrice">Lowest Price</SelectItem>
                    <SelectItem value="highestPrice">Highest Price</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center my-2">
            <div className="md:hidden ">
              <FilterSheet />
            </div>
          </div>

          <div className="md:flex gap-3">
            <div className="w-[372px] bg-white h-max px-10 hidden md:flex md:flex-col">
              <h5 className="font-bold my-5">Filter</h5>
              <div>
                <CoffeeListings Listings={Listings} />
              </div>
            </div>
            <div className="grid gap-4 grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 h-max">
              {products?.map((product: IProduct | any, index: any) => (
                <div key={index}>
                  <Product product={product} skeleton={loading} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default OriginsPage;
