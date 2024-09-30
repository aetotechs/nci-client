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
  const breadcrumbItems = [{ href: '/ShopItems', label: 'Cart' }];
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <div className="md:px-[5vw] md:max-w-[100vw]  px-5   ">
      <Header status={status} />

        <div className="mt-10 hidden md:flex">
          {' '}
          <BreadCrumb items={breadcrumbItems} />
        </div>
        <div>
          <div className=" md:flex md:justify-center w-[100vw] mx-1 my-5 ">
            <Progress />
          </div>
          <div className=" flex flex-col  md:grid md:grid-cols-5 gap-3 ">
            <div className="md:col-span-3">
              <CartWithItems />
            </div>
            <div className="col-span-2">
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
