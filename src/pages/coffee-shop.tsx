import { IStatus } from '@/App';
import BreadCrumb from '@/components/BreadCrumb';
import CoffeeListings from '@/components/CoffeeListings';
import Explore from '@/components/Explore';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';

import { FilterSheet, Listings } from '@/components/FilterMobile';

function CoffeeShop({ status }: IStatus) {
  const breadcrumbItems = [{ href: '/coffee-shop', label: 'Shop' }];
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <div className="md:my-10 mx-auto md:w-[1232px] ">
        <Header status={status} />
        <div className="px-4 w-[100vw]  pt-10 md:pt-0 md:w-[1232px] overflow-hidden">
          <div className="mt-10 hidden md:flex">
            {' '}
            <BreadCrumb items={breadcrumbItems} />
          </div>
          <div className="flex flex-col gap-5 mb-10 md:mb-0 md:flex-row md:justify-between md:my-5 md:py-5">
            <h3 className="text-[26px] font-semibold">Coffee Shop</h3>
            <div className="md:hidden">
              <FilterSheet />
            </div>
            <div className="flex items-center gap-3">
              <div className="font-medium text-base">Sort by:</div>
              <div>
                <Select>
                  <SelectTrigger className=" bg-selectbackground border border-selectborder outline-none rounded-[5px] w-[126px] h-[33px] ">
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
          <div className="md:flex   gap-3">
            <div className="w-[372px] h-max  bg-white px-10 hidden md:flex md:flex-col">
              <h5 className="font-bold my-5">Filter</h5>
              <div>
                <CoffeeListings Listings={Listings} />
              </div>
            </div>

            <div className="flex justify-center ">
              <Explore status={status} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CoffeeShop;
