import AddListing from '@/components/AddListing';
import AdminHeader from '@/components/AdminHeader';
import AdminMobileNav from '@/components/AdminMobileNav';
import AdminSideBarDesktop from '@/components/AdminSideBarDesktop';
import { FilterSheet } from '@/components/CoffeeListingMobile';

import { ListingFilter } from '@/components/ListingFilter';

import Search from '@/components/Search';
import { CoffeeListingsTable } from '@/components/tables/CoffeeListingsTable';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
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
              <h3 className="font-semibold text-2xl ">CoffeeListings</h3>
              <Badge
                variant="outline"
                className="h-6 w-8 rounded-[5px] border-primary/30 bg-white justify-center text-primary"
              >
                {Listings.length}
              </Badge>
            </div>
            <div className="flex gap-2 md:justify-between  mt-5">
              <Search />
              <div className="flex gap-2">
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

            <div className="border my-10 rounded-t-[8px]  w-full  overflow-hidden">
              <CoffeeListingsTable listings={Listings} />
            </div>
            <div>
              <span className="font-normal text-[12px]">
                Showing: {Listings.length} of {Listings.length}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CoffeeListings;
