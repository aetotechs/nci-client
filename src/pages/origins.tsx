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

import { FilterSheet } from '@/components/FilterMobile';

function OriginsPage({ status }: IStatus) {
  const breadcrumbItems = [
    { href: '/origins', label: 'Origins' },
    { label: 'Africa & MiddleEast' }
  ];
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <div className="md:px-[5vw] md:max-w-[100vw]  px-5   ">
      <Header status={status} />
        <div className="px-4 w-[100vw]  pt-10 md:pt-0 md:w-[1232px] overflow-hidden">
          <div className="mt-10 hidden md:flex">
            {' '}
            <BreadCrumb items={breadcrumbItems} />
          </div>
          <div className="flex flex-col  mb-10 md:mb-0  md:justify-between  md:py-5">
            <h3 className="text-[26px] font-semibold">Africe and MiddleEast</h3>
            <p>
              If coffee was born in Africa, growing wild in Ethiopia and harvested for a variety of
              uses since "time immemorial" (as the history writers seem inclined to phrase it), then
              coffee came of age on the Arabian Peninsula, aka Arabia Felix, aka Yemen, where coffee
              brewing and cultivation was discovered, or invented, depending on how you look at it,
              giving rise to the world's first famous coffee from the port of Mocha. Ironically,
              Africa was also one of the last places to grow coffee commercially. Coffee plantings
              were not successful in Kenya until the 20th century.
            </p>
            <div className="md:hidden my-5">
              <FilterSheet />
            </div>
          </div>
          <div className="flex md:justify-end items-center gap-3">
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
          <div className="md:flex   gap-3">
            <div className="w-[372px] bg-white h-max px-10 hidden md:flex md:flex-col">
              <h5 className="font-bold my-5">Filter</h5>
              <div>
                <CoffeeListings Listings={[]} />
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

export default OriginsPage;
