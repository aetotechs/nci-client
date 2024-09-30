import { Button } from '@/components/ui/button';

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import CoffeeListings from './CoffeeListings';
export const Listings = [
  {
    title: 'Category',
    items: ['Africa & Middle East', 'Asia & Pacific Islands', 'Latin America & Caribbean']
  },
  {
    title: 'Warehouse',
    items: ['United States', 'United States', 'United States']
  },
  {
    title: 'Status',
    items: ['Spot']
  },
  {
    title: 'Country Of Origin',
    items: [
      'Bolivia',
      'Brazilian Green Coffee',
      'Colombian Green Coffee',
      'Costa Rican Green Coffee',
      'El Salvador Green Coffee',
      'Guatemalan Green Coffee',
      'Honduran Green Coffee',
      'Mexican Green Coffee',
      'Nicaraguan Green Coffee',
      'Panamanian Green Coffee',
      'Peruvian Green Coffee'
    ]
  },
  {
    title: 'Processing',
    items: ['Natural/Dry Processed', 'Washed']
  },
  {
    title: 'Flavour Wheel',
    items: ['Berry', 'Caramel', 'Chocolate', 'Fruity', 'Nutty', 'Stone Project']
  },
  {
    title: 'Bag Weight',
    items: ['30kg Bag', '50kg Bag', '70kg Bag']
  },
  {
    title: 'Plant Species',
    items: ['Arabica']
  }
];

export function FilterSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="text-primary border-primary w-[111px] gap-2">
          <span>
            <img src="/icons/filter.png" />
          </span>
          Filters
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="border-b-white shadow-md w-[100%] mb-1 text-left flex items-center py-5 ">
            Filter
          </SheetTitle>
        </SheetHeader>
        <div className="grid gap-4 p-4">
          <CoffeeListings Listings={Listings} />
        </div>
      </SheetContent>
    </Sheet>
  );
}
