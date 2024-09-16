import BreadCrumb from '@/components/BreadCrumb';
import Header from '@/components/Header';

import OrderSummary from '@/components/OrderSummary';
import ShippingAddress from '@/components/ShippingAddress';
import Progress from '@/components/Progress';

import { IStatus } from '@/App';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ShopAddress({ status }: IStatus) {
  const { pathname } = useLocation();
  const breadcrumbItems = [{ href: '/shop', label: 'Cart' }];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <div className="md:my-5 mx-auto md:w-[1232px] w-[100vw] overflow-x-hidden  ">
        <Header status={status} />

        <div className="mt-10 hidden md:flex">
          {' '}
          <BreadCrumb items={breadcrumbItems} />
        </div>
        <div>
          <div className=" md:flex  md:justify-center w-[100vw] mx-1 my-5 ">
            <Progress />
          </div>
          <div className="w-[90vw] mx-5 flex flex-col gap-5  md:w-[1232px] md:grid md:grid-cols-5 md:gap-3 ">
            <div className="md:col-span-3">
              {' '}
              <ShippingAddress />
            </div>
            <div className="md:col-span-2 bg-white h-[80vh]  md:h-[90vh]">
              <OrderSummary />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShopAddress;
