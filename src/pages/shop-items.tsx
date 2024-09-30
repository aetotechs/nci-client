import BreadCrumb from '@/components/BreadCrumb';
import Header from '@/components/Header';
import CartWithItems from '@/components/CartWithItems';
import Coupon from '@/components/Coupon';
import OrderSummary from '@/components/OrderSummary';
import Progress from '@/components/Progress';
import { IStatus } from '@/App';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function ShopItems({ status }: IStatus) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <div className="md:px-[5vw] md:max-w-[100vw]  px-5   ">
        <Header status={status} />

        <div>
          <div className=" md:flex md:justify-center   my-10 ">
            <Progress />
          </div>
          <div className=" flex flex-col md:flex-row ">
            <div className="w-[60vw]">
              <CartWithItems />
            </div>
            <div className="w-[30vw]">
              <Coupon />
              <OrderSummary />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShopItems;
