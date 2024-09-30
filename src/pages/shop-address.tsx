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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <div className="md:px-[5vw] md:max-w-[100vw]  px-5   ">
      <Header status={status} />

      
        <div>
          <div className=" md:flex  md:justify-center  my-10 ">
            <Progress />
          </div>
          <div className=" flex flex-col gap-5 md:flex-row ">
          <div className="w-[60vw]">
          
              <ShippingAddress />
            </div>
            <div className="md:w-[30vw]  max-h-max   ">
              <OrderSummary />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShopAddress;
