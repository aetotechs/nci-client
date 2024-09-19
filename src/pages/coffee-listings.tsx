import { AddCategory } from '@/components/AddCategory';
import AddListing from '@/components/AddListing';
import AdminHeader from '@/components/AdminHeader';
import AdminSideBarDesktop from '@/components/AdminSideBarDesktop';
import { FilterSheet } from '@/components/FilterMobile';

import Search from '@/components/Search';
import { CoffeeListingsTable } from '@/components/tables/CoffeeListingsTable';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { useState } from 'react';


const Listings = [
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
    const HandleClick=()=>{
        setShowAddListing((prev) => !prev);
    
    }
  return (
    <div className="grid grid-cols-7 md:h-screen">
      <div className="col-span-1 bg-white border-r border-primary/30 sticky top-0">
        <AdminSideBarDesktop />
      </div>
      <div className="col-span-6 ">
        <AdminHeader />
        {showAddListing ? <AddListing/> :<div className="p-5 my-14">
          <div className="flex gap-3 items-center">
            <h3 className="font-semibold text-2xl">CoffeeListings</h3>
            <Badge variant='outline' className='h-6 w-8 rounded-[5px] border-primary/30 bg-white justify-center text-primary'>{Listings.length}</Badge>
           
          </div>
          <div className="flex justify-between mt-5">
              <Search />
             <div className="flex gap-2">
            
             <FilterSheet/>
             <Button className="gap-2 " onClick={HandleClick}>
          <span>
            <Plus className="h-4 w-4" />
          </span>  {showAddListing ? 'Cancel' : 'Add Listing'}
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
        </div>}
      </div>
    </div>
  );
}

export default CoffeeListings;
