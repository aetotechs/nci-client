import AddListing from '@/components/AddListing';
import { OrderSheet } from '@/components/AddOrder';
import AdminHeader from '@/components/AdminHeader';
import AdminSideBarDesktop from '@/components/AdminSideBarDesktop';

import { ListingFilter } from '@/components/ListingFilter';

import Search from '@/components/Search';
import { AdminOrdersTable } from '@/components/tables/AdminOrdersTable';

import { Badge } from '@/components/ui/badge';

import { useState } from 'react';

export const orders = [
  {
    id: '1',
    orderDate: '2024-01-01',
    status: 'Shipped',
    orderItems: ['item1', 'item2'],
    customer: 'John Doe',
    revenue: 100
  },
  {
    id: '2',
    orderDate: '2024-01-01',
    status: 'Cancelled',
    orderItems: ['item1', 'item2'],
    customer: 'John Doe',
    revenue: 100
  },
  {
    id: '3',
    orderDate: '2024-01-01',
    status: 'Processing',
    orderItems: ['item1', 'item2'],
    customer: 'John Doe',
    revenue: 100
  },
  {
    id: '4',
    orderDate: '2024-01-01',
    status: 'Shipped',
    orderItems: ['item1', 'item2'],
    customer: 'John Doe',
    revenue: 100
  },
  {
    id: '5',
    orderDate: '2024-01-01',
    status: 'Cancelled',
    orderItems: ['item1', 'item2'],
    customer: 'John Doe',
    revenue: 100
  },
  {
    id: '6',
    orderDate: '2024-01-01',
    status: 'Processing',
    orderItems: ['item1', 'item2'],
    customer: 'John Doe',
    revenue: 100
  },
  {
    id: '7',
    orderDate: '2024-01-01',
    status: 'Shipped',
    orderItems: ['item1', 'item2'],
    customer: 'John Doe',
    revenue: 100
  }
];
function Orders() {
  const [showAddListing, setShowAddListing] = useState(false);
  const HandleClick = () => {
    setShowAddListing((prev) => !prev);
  };
  return (
    <div className="grid grid-cols-7 md:h-screen">
      <div className="col-span-1 bg-white border-r border-primary/30 sticky top-0">
        <AdminSideBarDesktop />
      </div>
      <div className="col-span-6 ">
        <AdminHeader />
        {showAddListing ? (
          <AddListing />
        ) : (
          <div className="p-5 my-14">
            <div className="flex gap-3 items-center">
              <h3 className="font-semibold text-2xl">Orders</h3>
              <Badge
                variant="outline"
                className="h-6 w-8 rounded-[5px] border-primary/30 bg-white justify-center text-primary">
                {orders.length}
              </Badge>
            </div>
            <div className="flex justify-between mt-5">
              <Search />
              <div className="flex gap-2">
                <ListingFilter />
                <OrderSheet />
              </div>
            </div>

            <div className="border my-10 rounded-t-[8px]  overflow-hidden">
              <AdminOrdersTable orders={orders} />
            </div>
            <div>
              <span className="font-normal text-[12px]">
                Showing: {orders.length} of {orders.length}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Orders;
