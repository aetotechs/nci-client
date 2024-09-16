import BreadCrumb from '@/components/BreadCrumb';
import Header from '@/components/Header';

import OrderSummary from '@/components/OrderSummary';

import MakePayment from '@/components/MakePayment';
import Progress from '@/components/Progress';

import { IStatus } from '@/App';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function ShopPayment({ status }: IStatus) {
  const breadcrumbItems = [{ href: '/shop', label: 'Cart' }];
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <div className="md:my-5  w-[100vw] overflow-x-hidden mx-auto md:w-[1232px]   ">
        <Header status={status} />

        <div className="mt-10 hidden md:flex mx-4">
          {' '}
          <BreadCrumb items={breadcrumbItems} />
        </div>
        <div>
          <div className=" flex justify-center my-5  ">
            <Progress />
          </div>
          <div className="flex flex-col gap-4 mx-5 w-[90vw] md:grid md:grid-cols-5 md:gap-3">
            <div className="md:col-span-3 bg-white">
              {' '}
              <MakePayment />
            </div>
            <div className="col-span-2 bg-white h-[70vh] md:h-[100vh] ">
              <OrderSummary />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShopPayment;
