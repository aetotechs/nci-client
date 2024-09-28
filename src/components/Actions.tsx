import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { ViewCategory } from './ViewCategory';
import { DeleteDialog } from './DeleteDialog';
import { ViewOrigin } from './ViewOrigin';
import { ICategories } from './tables/Categories';
import { IOrigins } from './tables/OriginsTable';
import { IRegions } from './tables/RegionsTable';
import { IListings } from './tables/CoffeeListingsTable';
import { IOrders } from './tables/AdminOrdersTable';
import { ITransactions } from './tables/TransactionsTable';
import { ViewTransaction } from './ViewTransaction';
import { useLocation } from 'react-router-dom';
import { ICustomers } from './tables/CustomersTable';
import { Edit, EyeIcon } from 'lucide-react';
import { DeleteUser } from './DeleteUser';

export interface IActions {
  category?: ICategories;
  origin?: IOrigins;
  region?: IRegions;
  listing?: IListings;
  order?: IOrders;
  transactionId?: ITransactions;
  customerId?: ICustomers;
  setShowViewCustomer?: (show: boolean) => void;
}

export function ActionsPopover({
  category,
  origin,
  region,
  listing,
  order,
  transactionId,
  setShowViewCustomer
}: IActions) {
  const location = useLocation();
  const { pathname } = location;
  const HandleClick = () => {
    if (setShowViewCustomer) {
      setShowViewCustomer(true);
    }
  };

  const renderContent = () => {
    if (pathname === '/category') {
      return (
        <>
          <ViewCategory category={category} />
          <DeleteDialog />
        </>
      );
    }
    if (origin) {
      return <ViewOrigin origin={origin} />;
    }
    if (region) {
      return <p>Region: {region.name}</p>;
    }
    if (listing) {
      return <p>Listing: {listing.bagWeight}</p>;
    }
    if (order) {
      return <p>Order ID: {order.id}</p>;
    }
    if (pathname === '/transactions') {
      return (
        <>
          <ViewTransaction transactionId={transactionId} />
        </>
      );
    }

    if (pathname === '/settings') {
      return (
        <>
         <div
          
            className="flex items-center -mt-1 gap-2 cursor-pointer">
            <EyeIcon className="h-[14px] w-[14px]" />
            <span className="text-[13px] font-normal">View</span>
          </div>
          <div
            
            className="flex items-center  -mt-1 gap-2 cursor-pointer">
            <Edit className="h-[14px] w-[14px]" />
            <span className="text-[13px] font-normal">Edit</span>
          </div>
          <DeleteUser  />
        </>
      );
    }
    if (pathname === '/customers') {
      return (
        <>
          <div
            onClick={HandleClick}
            className="flex items-center justify-between -mt-1 gap-2 cursor-pointer">
            <EyeIcon className="h-[14px] w-[14px]" />
            <span className="text-[13px] font-normal">View</span>
          </div>
        </>
      );
    }
    return <p>No action available</p>;
  };

  return (
    <Popover>
      <PopoverTrigger asChild className='cursor-pointer' >
        <img src="/icons/actions.svg" alt="Actions" />
      </PopoverTrigger>
      <PopoverContent className="w-[10vw] h-min  text-dark shadow-md absolute right-5">
        <div className="flex flex-col  gap-2 ">{renderContent()}</div>
      </PopoverContent>
    </Popover>
  );
}