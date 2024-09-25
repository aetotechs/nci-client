import { ArrowLeft, Plus } from 'lucide-react';
import { ListingsForm } from './forms/AddListingsForm';
import { useState } from 'react';
import CoffeeListings, { Listings } from '@/pages/coffee-listings';
import { Badge } from './ui/badge';
import Search from './Search';
import { ListingFilter } from './ListingFilter';
import { Button } from './ui/button';
import { CoffeeListingsTable } from './tables/CoffeeListingsTable';

function AddListing() {
  const [showAddListing, setShowAddListing] = useState(true);

  const handleToggle = () => {
    setShowAddListing(!showAddListing);
  };

  return (
    <>
      <div>{showAddListing ?
        <div className="my-2 px-9">
        <div className="my-4 flex items-center cursor-pointer gap-2" onClick={handleToggle}>
          <span>
            <ArrowLeft />
          </span>
          <h3 className="font-semibold text-xl">Add Coffee Listing</h3>
        </div>

        <ListingsForm /> 
      </div>
      
      
     
      
      
      : 
      <div className="p-5">
            <div className="flex gap-3 items-center">
              <h3 className="font-semibold text-2xl">CoffeeListings</h3>
              <Badge
                variant="outline"
                className="h-6 w-8 rounded-[5px] border-primary/30 bg-white justify-center text-primary">
                {Listings.length}
              </Badge>
            </div>
            <div className="flex justify-between mt-5">
              <Search />
              <div className="flex gap-2">
                <ListingFilter />
                <Button className="gap-2 " onClick={handleToggle}>
                  <span>
                    <Plus className="h-4 w-4" />
                  </span>{' '}
                  {showAddListing ? 'Cancel' : 'Add Listing'}
                </Button>
              </div>
            </div>

            <div className="border my-10 rounded-t-[8px]  overflow-hidden">
              <CoffeeListingsTable listings={Listings} />
            </div>
            <div>
              <span className="font-normal text-[12px]">
                Showing: {Listings.length} of {Listings.length}
              </span>
            </div>
          </div>
      }
      
      </div>
    
    </>
  );
}

export default AddListing;
