import React, { useState } from 'react';

import BreadCrumb from '@/components/BreadCrumb';
import Header from '@/components/Header';

import OrderSummary from '@/components/OrderSummary';

import MakePayment from '@/components/MakePayment';
import Progress from '@/components/Progress';
import Footer from '@/components/Footer';
import { IStatus } from '@/App';

function ShopPayment({ status }: IStatus) {
  const breadcrumbItems = [{ href: '/shop', label: 'Cart' }];

  return (
    <>
      <div className="my-[40px] mx-10 md:mx-[130px]   ">
        <Header status={status} />

        <div className="mt-36">
          {' '}
          <BreadCrumb items={breadcrumbItems} />
        </div>
        <div>
          <div className=" flex justify-center mt-5  ">
            <Progress />
          </div>
          <div className="h-screen grid grid-cols-5 gap-5 place-content-center">
            <div className="col-span-3">
              {' '}
              <MakePayment />
            </div>
            <div className="col-span-2 bg-white ">
              <OrderSummary />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ShopPayment;
