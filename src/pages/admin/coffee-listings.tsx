import AddListing from '@/components/admin/other/AddListing';
import AdminHeader from '@/components/admin/other/AdminHeader';
import AdminMobileNav from '@/components/admin/other/AdminMobileNav';
import AdminSideBarDesktop from '@/components/admin/other/AdminSideBarDesktop';
import { FilterSheet } from '@/components/user/other/CoffeeListingMobile';

import { ListingFilter } from '@/components/user/other/ListingFilter';
import { PaginationDemo } from '@/components/admin/other/Pagination';

import Search from '@/components/user/other/Search';
import { CoffeeListingsTable } from '@/components/admin/tables/CoffeeListingsTable';
import { Badge } from '@/components/common/ui/badge';
import { Button } from '@/components/common/ui/button';
import { Input } from '@/components/common/ui/input';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';
import { useState } from 'react';

export const Listings = [
  {
    id: '1',
    brand: 'Ethiopian Yirgacheffe',
    region: 'Mount Elgon',
    bagWeight: 50,
    sampleStock: 10,
    bagStock: 5,
    samplePrice: 2.83,
    bagPrice: 347
  },
  {
    id: '2',
    brand: 'Ethiopian Yirgacheffe',
    region: 'Mount Elgon',
    bagWeight: 50,
    sampleStock: 10,
    bagStock: 5,
    samplePrice: 2.83,
    bagPrice: 347
  },
  {
    id: '3',
    brand: 'Ethiopian Yirgacheffe',
    region: 'Mount Elgon',
    bagWeight: 50,
    sampleStock: 10,
    bagStock: 5,
    samplePrice: 2.83,
    bagPrice: 347
  },
  {
    id: '4',
    brand: 'Ethiopian Yirgacheffe',
    region: 'Mount Elgon',
    bagWeight: 50,
    sampleStock: 0,
    bagStock: 0,
    samplePrice: 2.83,
    bagPrice: 347
  },
  {
    id: '5',
    brand: 'Ethiopian Yirgacheffe',
    region: 'Mount Elgon',
    bagWeight: 50,
    sampleStock: 0,
    bagStock: 5,
    samplePrice: 2.83,
    bagPrice: 347
  },
  {
    id: '6',
    brand: 'Ethiopian Yirgacheffe',
    region: 'Mount Elgon',
    bagWeight: 50,
    sampleStock: 10,
    bagStock: 0,
    samplePrice: 2.83,
    bagPrice: 347
  },
  {
    id: '7',
    brand: 'Ethiopian Yirgacheffe',
    region: 'Mount Elgon',
    bagWeight: 50,
    sampleStock: 10,
    bagStock: 5,
    samplePrice: 2.83,
    bagPrice: 347
  }
];
function CoffeeListings() {
  const [showAddListing, setShowAddListing] = useState(false);

  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => setIsCollapsed(!isCollapsed);
  const HandleClick = () => {
    setShowAddListing((prev) => !prev);
  };
  return (
    <div className={`flex w-[100vw]  relative `}>
      <div
        className={` w-[15vw] hidden md:flex bg-white h-screen border-r border-primary/30 sticky top-0  transition-all duration-300 ${isCollapsed && 'w-[5vw] overflow-x-hidden'}`}
      >
        <AdminSideBarDesktop isCollapsed={isCollapsed} toggleCollapse={toggleCollapse} />
      </div>
      <div className="absolute top-4 hidden md:flex">
        <button
          onClick={toggleCollapse}
          className={`text-primary bg-white shadow-md  z-50 fixed  rounded-sm translate-x-[14vw] ${isCollapsed && 'translate-x-[4vw]'}`}
        >
          {isCollapsed ? <ChevronRight className="h-5 w-5" /> : <ChevronLeft className=" " />}
        </button>
      </div>
      <div
        className={`w-[100vw]   transition-all duration-100 ${isCollapsed ? 'w-[95vw]' : 'w-[85vw]'} `}
      >
        <AdminHeader />
        <AdminMobileNav />
        {showAddListing ? (
          <AddListing isCollapsed={isCollapsed} toggleCollapse={toggleCollapse} />
        ) : (
          <div
            className={`p-5 md:pr-10 w-[100vw] ${isCollapsed ? 'md:w-[94vw] ' : 'md:w-[84vw]'} mt-20 md:mt-0 `}
          >
            <div className="flex gap-3 items-center">
              <h3 className="font-semibold text-[22px] ">Coffee Listings</h3>
              <Badge
                variant="outline"
                className="h-6 w-8 rounded-[5px] border-primary/30 bg-white justify-center text-primary"
              >
                {Listings.length}
              </Badge>
            </div>
            <div className="flex gap-2 md:justify-between  mt-5">
              <div
                className={`flex border justify-around px-2 rounded-lg  overflow-hidden h-[36px] w-[300px]`}
              >
                <Input
                  type="search"
                  placeholder="Search"
                  className="w-full border-none outline-none bg-white"
                />
                <img src="icons/search.svg" alt="search" width={16} height={30} />
              </div>{' '}
              <div className="flex gap-5">
                <div className="hidden md:flex">
                  <ListingFilter />
                </div>
                <div className="flex md:hidden">
                  <FilterSheet />
                </div>
                <Button className="gap-2 " onClick={HandleClick}>
                  <span>
                    <Plus className="h-4 w-4" />
                  </span>{' '}
                  {showAddListing ? 'Cancel' : 'Add Listing'}
                </Button>
              </div>
            </div>

            <div className="border my-5 border-[#58596233] rounded-t-[8px]  w-full  overflow-hidden">
              <CoffeeListingsTable listings={Listings} />
            </div>
            <div className="flex justify-between">
              <span className="font-normal text-[12px]">
                Showing: {Listings.length} of {Listings.length}
              </span>

              <span>
                <PaginationDemo currentPage={0} totalPages={0} onPageChange={function (page: number): void {
                    throw new Error('Function not implemented.');
                  } } />
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CoffeeListings;
