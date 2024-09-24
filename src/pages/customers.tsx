import { AddCustomer } from '@/components/AddCustomer';
import AdminHeader from '@/components/AdminHeader';
import AdminSideBarDesktop from '@/components/AdminSideBarDesktop';
import { ListingFilter } from '@/components/ListingFilter';
import Search from '@/components/Search';

import { CustomersTable } from '@/components/tables/CustomersTable';

import { Badge } from '@/components/ui/badge';
import ViewCustomer from '@/components/ViewCustomer';

import { useState } from 'react';

export const customers = [
  {
    name: 'John Doe',
    contact: '(234) 708346578',
    email: 'john@example.com',
    orders: 12,

    date: '24 Sep 2014',
    revenue: 100
  },
  {
    name: 'John Doe',
    contact: '(234) 708346578',
    email: 'john@example.com',
    orders: 12,

    date: '24 Sep 2014',
    revenue: 100
  },
  {
    name: 'John Doe',
    contact: '(234) 708346578',
    email: 'john@example.com',
    orders: 12,

    date: '24 Sep 2014',
    revenue: 100
  },
  {
    name: 'John Doe',
    contact: '(234) 708346578',
    email: 'john@example.com',
    orders: 12,

    date: '24 Sep 2014',
    revenue: 100
  },
  {
    name: 'John Doe',
    contact: '(234) 708346578',
    email: 'john@example.com',
    orders: 12,

    date: '24 Sep 2014',
    revenue: 100
  }
];
function Customers() {
  const [showViewCustomer, setShowViewCustomer] = useState(false);

  return (
    <div className="grid grid-cols-7 md:h-screen">
      <div className="col-span-1 bg-white border-r border-primary/30 sticky top-0">
        <AdminSideBarDesktop />
      </div>
      <div className="col-span-6">
        <AdminHeader />
        {showViewCustomer ? (
          <ViewCustomer />
        ) : (
          <div className="p-5 my-14">
            <div className="flex gap-3 items-center">
              <h3 className="font-semibold text-2xl">Customers</h3>
              <Badge
                variant="outline"
                className="h-6 w-8 rounded-[5px] border-primary/30 bg-white justify-center text-primary">
                {customers.length}
              </Badge>
            </div>
            <div className="flex justify-between my-5">
              <Search />
              <div className="flex gap-2">
                <ListingFilter />
                <AddCustomer />
              </div>
            </div>
            <CustomersTable customers={customers} setShowViewCustomer={setShowViewCustomer} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Customers;
