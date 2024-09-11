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
      <div className="my-[40px] mx-auto w-[1232px]   ">
        <Header status={status} />

        <div className="mt-10">
          {' '}
          <BreadCrumb items={breadcrumbItems} />
        </div>
        <div>
          <div className=" flex justify-center my-10  ">
            <Progress />
          </div>
          <div className="grid grid-cols-5 gap-3 ">
            <div className="col-span-3">
              {' '}
              <ShippingAddress />
            </div>
            <div className="col-span-2 bg-white">
              <OrderSummary />
            </div>
          </div>
        </div>
      </div>
    
    </>
  );
}

export default ShopAddress;
