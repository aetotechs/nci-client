import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

import { useLocation } from 'react-router-dom';
import { ViewCategory } from './ViewCategory';
import { ICategories } from './tables/Categories';
import { DeleteDialog } from './DeleteDialog';
import { IOrigins } from './tables/OriginsTable';
import { IRegions } from './tables/RegionsTable';
import { ViewOrigin } from './ViewOrigin';
import { IListings } from './tables/CoffeeListingsTable';
import { IOrders } from './tables/AdminOrdersTable';
export interface IActions {
  category?: ICategories;
  origin?: IOrigins;
  region?: IRegions;
  listing?: IListings;
  order?: IOrders
}

export function ActionsPopover({ category, origin }: IActions) {
  const location = useLocation();
  const { pathname } = location;
  return (
    <Popover>
      <PopoverTrigger asChild>
        <img src="/icons/actions.svg" alt="Actions" />
      </PopoverTrigger>
      <PopoverContent className="w-32 h-min flex flex-col justify-center items-center gap-2 text-dark shadow-md absolute right-5">
        <div className=" flex flex-col items-center gap-2 justify-center ">
          {pathname === '/categories' ? (
            <ViewCategory category={category} />
          ) : (
            <ViewOrigin origin={origin} />
          )}
          {pathname === '/categories' && <DeleteDialog />}
        </div>
      </PopoverContent>
    </Popover>
  );
}
