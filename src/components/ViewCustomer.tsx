import { ArrowLeft, Plus, Trash2 } from 'lucide-react';

import { useState } from 'react';

import { Badge } from './ui/badge';
import Search from './Search';
import { ListingFilter } from './ListingFilter';

import { AdminOrdersTable } from './tables/AdminOrdersTable';

import { CustomersTable } from './tables/CustomersTable';
import { customers } from '@/pages/customers';
import { AddCustomer } from './AddCustomer';
import { Button } from './ui/button';
import { Separator } from "@/components/ui/separator"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import { DeleteCustomer } from './DeleteCustomer';

const orders = [
  {
    id: '7907',
    orderDate: 'Aug 31, 2024',
    status: 'Shipped',
    orderItems: ['2 Bags Kenyan Coffee', '1 SampleColombian Coffee'],
    totalPrice: 540,
    revenue: 100
  },
  {
    id: '7907',
    orderDate: 'Aug 31, 2024',
    status: 'Processing',
    orderItems: ['2 Bags Kenyan Coffee', '1 SampleColombian Coffee'],
    totalPrice: 540,
    revenue: 100
  },
  {
    id: '7907',
    orderDate: 'Aug 31, 2024',
    status: 'Processing',
    orderItems: ['2 Bags Kenyan Coffee', '1 SampleColombian Coffee'],
    totalPrice: 540,
    revenue: 100
  },
  {
    id: '7907',
    orderDate: 'Aug 31, 2024',
    status: 'Shipped',
    orderItems: ['2 Bags Kenyan Coffee', '1 SampleColombian Coffee'],
    totalPrice: 540,
    revenue: 100
  },
  {
    id: '7907',
    orderDate: 'Aug 31, 2024',
    status: 'Shipped',
    orderItems: ['2 Bags Kenyan Coffee', '1 SampleColombian Coffee'],
    totalPrice: 540,
    revenue: 100
  }
];

function ViewCustomer() {
  const [showViewCustomer, setShowViewCustomer] = useState(true);

  const handleToggle = () => {
    setShowViewCustomer(!showViewCustomer);
  };

  return (
    <>
      <div>
        {showViewCustomer ? (
          <div className="my-20 px-6">
            <div className="flex justify-between mb-4">
              <div className="mb-4 flex items-center cursor-pointer gap-2" onClick={handleToggle}>
                <span>
                  <ArrowLeft />
                </span>
                <h3 className="font-semibold text-xl">View Customer</h3>
              </div>

              <div className="flex gap-3">
                <DeleteCustomer/>
                <Button className="gap-2">
                  <span>
                    <Plus className="h-4 w-4" />
                  </span>
                  Create Order
                </Button>
              </div>
            </div>

            <div className="flex gap-10 ">
              <div className="border border-primary/30 rounded-[8px] lg:w-[50vw] bg-white p-4">
                <div className="flex justify-between mb-4">
                  <div className="flex gap-3 items-center">
                    <h3 className="font-semibold text-base">Orders</h3>
                    <Badge
                      variant="outline"
                      className="h-6 w-6 rounded-[5px] border-primary/30 bg-white justify-center text-primary">
                      {orders.length}
                    </Badge>
                  </div>
                  <div className='font-semibold'>
                    <span>Revenue:</span>
                    <span className="text-texthighlight">${1200}</span>
                  </div>
                </div>

                <AdminOrdersTable orders={orders} />
              </div>

              <div className="flex flex-col gap-3 lg:w-[30vw] ">
                <div className="border border-primary/30 flex py-[18px] px-5 rounded-[8px] bg-white">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Customer</AccordionTrigger>
                      <AccordionContent className="flex flex-col gap-3">
                        <div className="flex justify-between">
                          <span className="font-medium text-texthighlight text-base">John Doe</span>
                          <span></span>
                        </div>
                        <div className="flex justify-between">
                          <span>Work Phone</span>
                          <span>(234) 708346578</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Work Email</span>
                          <span>john123@gmail.com</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Position</span>
                          <span>CEO</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Company</span>
                          <span>LTO Enterprises</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Company Website</span>
                          <span>https://www.ltoent.com</span>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>

                <div className="border border-primary/30 flex py-[18px] px-5 rounded-[8px] bg-white">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Address(2)</AccordionTrigger>
                      <AccordionContent className="flex flex-col gap-3">
                        <div className='my-3 flex flex-col gap-2'>
                          <div className="text-white rounded-[8px] bg-blue-600 max-w-[5vw] text-center">
                            Billing
                          </div>
                          <div className="flex justify-between">
                            <span className="font-medium text-texthighlight text-base">
                              John Doe
                            </span>
                          </div>
                          <div className="flex ">
                            <span>JOHN D. ORG</span>
                          </div>
                          <div className="flex">
                            <span>Speke Road, William Street, Kla, Uganda, 47567</span>
                          </div>
                          <div className="flex gap-2">
                            <span>Tel:</span>
                            <span>(234) 708346578</span>
                          </div>
                        </div>
                        <Separator />

                        <div className='my-3 flex flex-col gap-2'>
                          <div className="text-white rounded-[8px] bg-blue-600 max-w-min text-center px-2">
                            Shipping
                          </div>
                          <div className="flex justify-between">
                            <span className="font-medium text-texthighlight text-base">
                              John Doe
                            </span>
                          </div>
                          <div className="flex ">
                            <span>JOHN D. ORG</span>
                          </div>
                          <div className="flex">
                            <span>Speke Road, William Street, Kla, Uganda, 47567</span>
                          </div>
                          <div className="flex gap-2">
                            <span>Tel:</span>
                            <span>(234) 708346578</span>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
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

              <CustomersTable setShowViewCustomer={setShowViewCustomer} customers={customers} />
            </div>

            <div>
              <span className="font-normal text-[12px]">
                Showing: {customers.length} of {customers.length}
              </span>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default ViewCustomer;
