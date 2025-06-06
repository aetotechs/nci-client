import CoffeeListings from '@/components/user/other/CoffeeListingsFilters';
import Footer from '@/components/user/other/Footer';
import Header from '@/components/user/other/Header';
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
import Product from '@/components/user/other/Product';
import { fetchItemsRoute } from '@/utils/hooks/api-routes';
import { ErrorToast } from '@/components/common/ui/Toasts';
import { IProduct } from '@/utils/commons/TypeInterfaces';
import { useLoading } from '@/utils/context/LoaderContext';

function UserCategoriesPage() {
  const { dispatchLoader } = useLoading();
  const [products, setProducts] = useState<IProduct[] | any>(Array(8).fill({}));
  const [loading, setLoading] = useState(false);
  const { pathname } = useLocation();
  const { categoryId } = useParams();

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
      <Header handleSearch={() => {}} />
      <div className="lg:px-[4vw] md:px-[2vw] w-[100vw] md:mb-10">
        <div className="px-4 md:pt-0 overflow-hidden">
          <div className="flex flex-col gap-5 my-5 md:mb-0 md:flex-row md:justify-between md:py-5">
            <h3 className="text-[26px] font-semibold mb-4 md:mb-0">{categoryId}</h3>
            <div className="flex justify-between ">
              <div className="md:hidden ">
                <FilterSheet />
              </div>
              <div className="flex items-center gap-3">
                <div className="font-medium text-base">Sort by:</div>
                <div>
                  <Select>
                    <SelectTrigger className="bg-selectbackground border border-selectborder outline-none rounded-[5px] w-[100px] md:w-[126px] h-[33px]">
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
          </div>
          <div className="md:flex gap-3">
            <div className="lg:min-w-[25vw] md:min-w-[40vw] h-max bg-white px-10 hidden md:flex md:flex-col">
              <h5 className="font-bold my-5">Filter</h5>
              <div>
                <CoffeeListings Listings={Listings} />
              </div>
            </div>

            <div className="grid gap-4 grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 w-full h-max">
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

export default UserCategoriesPage;
