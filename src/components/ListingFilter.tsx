import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { FilterForm } from './forms/FilterForm';
import { Button } from './ui/button';
import { useLocation } from 'react-router-dom';
import { TransactionFilterForm } from './forms/TransactionFilterForm';
import { OrderFilterForm } from './forms/OrderFilterForm';

export function ListingFilter() {
  const location = useLocation();
  const { pathname } = location;
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="text-primary border-primary w-[111px] gap-2">
          <span>
            <img src="/icons/filter.png" />
          </span>
          Filters
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        {pathname === '/transactions' && <TransactionFilterForm />}
        {pathname === '/coffee-listings' && <FilterForm />}
        {pathname === '/orders' && <OrderFilterForm />}
        {pathname === '/customers' && <OrderFilterForm />}
      </PopoverContent>
    </Popover>
  );
}
