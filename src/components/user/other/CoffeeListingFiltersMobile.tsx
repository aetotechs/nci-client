import { Button } from '@/components/common/ui/button';

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/common/ui/sheet';
import { SlidersHorizontal } from 'lucide-react';
import { FilterForm } from '../forms/FilterForm';
import { OrderFilterForm } from '../../admin/forms/OrderFilterForm';
import { useLocation } from 'react-router-dom';
import { TransactionFilterForm } from '../../admin/forms/TransactionFilterForm';

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
