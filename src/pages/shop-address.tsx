import React, { useState } from 'react';

import BreadCrumb from '@/components/BreadCrumb';
import Header from '@/components/Header';

import Coupon from '@/components/Coupon';
import OrderSummary from '@/components/OrderSummary';
import ShippingAddress from '@/components/ShippingAddress';

function ShopAddress() {
  const breadcrumbItems = [{ href: '/shop', label: 'Cart' }];

  return (
    <>
      <div className="my-[40px] mx-10 md:mx-[104px]   ">
        <Header />

        <div className="mt-36">
          {' '}
          <BreadCrumb items={breadcrumbItems} />
        </div>
        <div>
          <div className="h-screen grid grid-cols-5 gap-5 place-content-center">
            <div className="col-span-3">
              {' '}
              <ShippingAddress />
            </div>
            <div className="col-span-2">
              <OrderSummary />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShopAddress;
