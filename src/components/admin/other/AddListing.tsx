import { ArrowLeft, Plus } from 'lucide-react';
import { ListingsForm } from '../forms/AddListingsForm';
import { useState } from 'react';
import { Listings } from '@/pages/admin/coffee-listings';
import { Badge } from '../../common/ui/badge';
import Search from '../../user/other/Search';
import { ListingFilter } from '../../user/other/ListingFilter';
import { Button } from '../../common/ui/button';
import { CoffeeListingsTable } from '../tables/CoffeeListingsTable';
import { FilterSheet } from '../../user/other/CoffeeListingMobile';
import { AdminSideBarDesktopProps } from './AdminSideBarDesktop';

function AddListing({ isCollapsed, toggleCollapse }: AdminSideBarDesktopProps) {
  const [showAddListing, setShowAddListing] = useState(true);

  const handleToggle = () => {
    setShowAddListing(!showAddListing);
  };

  return (
    <>
      <div>
        {showAddListing ? (
          <div className="md:my-2 mt-24 px-5 md:pl-8 ">
            <div className="my-4  flex items-center cursor-pointer gap-2" onClick={handleToggle}>
              <span>
                <ArrowLeft />
              </span>
              <h3 className="font-semibold text-xl">Add Coffee Listing</h3>
            </div>
            <div className=" ">
              <ListingsForm />
            </div>
          </div>
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
                </div>{' '}
                <Button className="gap-2 " onClick={handleToggle}>
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
    </>
  );
}

export default AddListing;
