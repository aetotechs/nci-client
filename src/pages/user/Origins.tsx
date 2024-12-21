import Footer from '@/components/user/other/Footer';
import Header from '@/components/user/other/Header';
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
import { FilterSheet } from '@/components/user/other/FilterMobile';
import { IProduct } from '@/utils/commons/TypeInterfaces';
import Listingsfilters from '@/components/user/other/CoffeeListingsFilters';
import { useItems } from '@/utils/hooks/useItems';
import LoadingSpinner from '@/components/common/ui/LoadingSpinner';
import { useFilters } from '@/utils/context/FiltersContext';

function OriginsPage() {
  const { pathname } = useLocation();
  const { originId } = useParams();
  const [pages, setPages] = useState<{ page: number, size: number }>({ page: 0, size: 12});
  const { selectedFilters } = useFilters();
  const { products, loading, hasMore } = useItems(pages.page, pages.size, selectedFilters);

  const handleLoadMoreItems = (e: any) => {
    e.preventDefault();
    setPages((prev: any) => ({
      ...prev,
      page: prev.page + 1,
    }));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header handleSearch={() => {}} />
      <div className="lg:px-[4vw] md:px-[2vw] w-[100vw] md:mb-10">
        <div className="px-4 md:pt-0 overflow-hidden">
          <div className="flex flex-col gap-5 my-5 md:mb-0 md:flex-row md:justify-between md:py-5">
            <h3 className="text-[26px] font-semibold mb-4 md:mb-0">Shop from { originId }</h3>
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
            <div className="lg:min-w-[25vw] md:min-w-[40vw] bg-white px-10 hidden md:flex md:flex-col">
              <h5 className="font-bold my-5">Filter</h5>
              <div>
                <Listingsfilters/>
              </div>
            </div>

            <div>
              <div className="grid gap-4 grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 w-full h-max">
                {loading ? 
                <LoadingSpinner/>
                : 
                products?.map((product: IProduct | any, index: any) => (
                  <div key={index}>
                    <Product product={product} skeleton={loading} />
                  </div>
                ))}
              </div>
              <div className="flex justify-center mt-8">
                <button
                  onClick={handleLoadMoreItems}
                  className="px-5 text-primary rounded-xl"
                  disabled={loading || !hasMore}
                  aria-label="Load more origins"
                >
                  {loading ? 'Loading...' : hasMore ? 'Load More >>' : 'That is all we have'}
                </button>
              </div>

            </div>

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default OriginsPage;
