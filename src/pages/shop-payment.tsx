import Header from '@/components/Header';

import OrderSummary from '@/components/OrderSummary';

import MakePayment from '@/components/MakePayment';
import Progress from '@/components/Progress';

import { IStatus } from '@/App';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function ShopPayment({ status }: IStatus) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <div className="md:px-[5vw] md:max-w-[100vw]  px-5   ">
      <Header status={status} />

        <div>
          <div className=" flex justify-center my-10  ">
            <Progress />
          </div>
          <div className=" flex flex-col gap-5 md:flex-row ">
          <div className="w-[60vw]">
          
              <MakePayment />
            </div>
            <div className="w-[30vw]">
              <OrderSummary />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShopPayment;
