import AddListing from '@/components/AddListing';
import { OrderSheet } from '@/components/AddOrder';
import AdminHeader from '@/components/AdminHeader';
import AdminMobileNav from '@/components/AdminMobileNav';
import AdminSideBarDesktop from '@/components/AdminSideBarDesktop';
import { FilterSheet } from '@/components/CoffeeListingMobile';

import { ListingFilter } from '@/components/ListingFilter';

import Search from '@/components/Search';
import { AdminOrdersTable } from '@/components/tables/AdminOrdersTable';

import { Badge } from '@/components/ui/badge';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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

  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => setIsCollapsed(!isCollapsed);
  const HandleClick = () => {
    setShowAddListing((prev) => !prev);
  };
  return (
    <div className={`flex w-[100vw]  relative `}>
      <div
        className={` w-[15vw] hidden md:flex bg-white h-screen border-r border-primary/30 sticky top-0  transition-all duration-300 ${isCollapsed && 'w-[5vw] overflow-x-hidden'}`}
      >
        <AdminSideBarDesktop isCollapsed={isCollapsed} toggleCollapse={toggleCollapse} />
      </div>{' '}
      <div className="absolute top-4 hidden md:flex">
        <button
          onClick={toggleCollapse}
          className={`text-primary bg-white shadow-md  z-50 fixed  rounded-sm translate-x-[14vw] ${isCollapsed && 'translate-x-[4vw]'}`}
        >
          {isCollapsed ? <ChevronRight className="h-5 w-5" /> : <ChevronLeft className=" " />}
        </button>
      </div>
      <div
        className={`w-[100vw]   transition-all duration-100 ${isCollapsed ? 'w-[95vw]' : 'w-[85vw]'} `}
      >
        <AdminHeader />
        <AdminMobileNav />
        {showAddListing ? (
          <AddListing isCollapsed={isCollapsed} toggleCollapse={toggleCollapse} />
        ) : (
          <div
            className={`p-5 md:py-5 md:pl-5 mt-20 md:mt-0 w-[90vw]  ${isCollapsed ? 'md:w-[90vw] ' : 'md:w-[80vw]'} `}
          >
            <div className="flex gap-3 items-center">
              <h3 className="font-semibold text-2xl">Orders</h3>
              <Badge
                variant="outline"
                className="h-6 w-8 rounded-[5px] border-primary/30 bg-white justify-center text-primary"
              >
                {orders.length}
              </Badge>
            </div>
            <div className="flex gap-5 justify-between mt-5  ">
              <Search />
              <div className="flex gap-2">
                <div className="hidden md:flex">
                  <ListingFilter />
                </div>
                <div className="flex md:hidden">
                  <FilterSheet />
                </div>
                <OrderSheet />
              </div>
            </div>

            <div
              className={`border my-8 rounded-t-[8px] overflow-hidden w-[90vw] ${isCollapsed ? 'md:w-[90vw] ' : 'md:w-[80vw]'}`}
            >
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
