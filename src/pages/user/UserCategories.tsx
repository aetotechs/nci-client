import { IStatus } from '@/App';
import Explore from '@/components/user/other/Explore';
import Footer from '@/components/user/other/Footer';
import Header from '@/components/user/other/Header';
import { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/common/ui/select';

import { FilterSheet, Listings } from '@/components/user/other/FilterMobile';
import CoffeeListings from '@/components/user/other/CoffeeListings';
import { FetchProducts } from '@/utils/services/FetchProducts';

function UserCategoriesPage({ status }: IStatus) {
  const { pathname } = useLocation();
  const { categoryId } = useParams();
  const products = FetchProducts();


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <div className='px-[5vw]'>
        <Header status={status} />
      </div>
      <div className="md:px-[5vw]">
        <div className="px-4 w-[100vw] py-5 md:pt-0">
          <div className="flex flex-col mb-4 md:mb-0 md:justify-between md:py-5">
            <h3 className="text-[26px] font-semibold md:mt-5 md:mb-0">{categoryId}</h3>
            <p className="">
              If coffee was born in Africa, growing wild in Ethiopia and harvested for a variety of
              uses since "time immemorial" (as the history writers seem inclined to phrase it), then
              coffee came of age on the Arabian Peninsula.
            </p>
          </div>

          <div className="flex justify-between items-center my-2">
            
            {/* <div className="md:hidden">
              <FilterSheet />
            </div> */}

            <div className="flex md:justify-end md:w-full items-center gap-3 my-2">
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

          <div className="md:flex gap-3">
            <div className="bg-white h-max px-10 hidden md:flex md:flex-col">
              <h5 className="font-bold my-5">Filter</h5>
              <div>
                <CoffeeListings Listings={Listings} />
              </div>
            </div>

            <div className="">
              <Explore status={status} product={products} />
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default UserCategoriesPage;
