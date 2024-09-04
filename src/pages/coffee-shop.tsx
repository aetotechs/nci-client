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

function CoffeeShop({ status }: IStatus) {
  const breadcrumbItems = [{ href: '/coffee-shop', label: 'Shop' }];
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <div className="my-10 mx-auto w-[1232px] ">
        <Header status={status} />

        <div className="mt-10">
          {' '}
          <BreadCrumb items={breadcrumbItems} />
        </div>
        <div className="flex  justify-between my-5 py-5">
          <h3 className="text-[26px] font-semibold">Coffee Shop</h3>
          <div className="flex items-center gap-3">
            <div className="font-medium text-base">Sort by:</div>
            <div>
              <Select>
                <SelectTrigger className=" border border-rgba(244, 244, 230, 1) outline-none rounded-[5px] w-[126px] h-[33px] ">
                  <SelectValue
                    placeholder="Featured"
                    className="p-5 bg-rgba(245, 239, 229, 1) text-base font-bold "
                  />
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
          <div className="w-[372px] bg-white px-10">
            <h5 className="font-bold my-5">Filter</h5>
            <div>
              <CoffeeListings />
            </div>
          </div>

          <div>
            <Explore status={status} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CoffeeShop;
