import { Button } from '@/components/common/ui/button';

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/common/ui/sheet';
import CoffeeListings from './CoffeeListings';
import { SlidersHorizontal } from 'lucide-react';
import { FilterForm } from '../forms/FilterForm';
import { OrderFilterForm } from '../../admin/forms/OrderFilterForm';
import { useLocation } from 'react-router-dom';
import { TransactionFilterForm } from '../../admin/forms/TransactionFilterForm';
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
  const location = useLocation();
  const { pathname } = location;
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="text-primary border-primary gap-2">
          <span>
            <SlidersHorizontal className="h-3 w-3" />
          </span>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="border-b-white shadow-md w-[100%] mb-1 text-left flex items-center py-5 pl-5 ">
            Filter
          </SheetTitle>
        </SheetHeader>
        <div className="grid gap-4 p-4">
          {pathname === '/coffee-listing' && <FilterForm />}
          {pathname === '/orders' && <OrderFilterForm />}
          {pathname === '/customers' && <OrderFilterForm />}

          {pathname === '/transactions' && <TransactionFilterForm />}
        </div>
      </SheetContent>
    </Sheet>
  );
}
