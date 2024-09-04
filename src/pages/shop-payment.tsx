import BreadCrumb from '@/components/BreadCrumb';
import Header from '@/components/Header';

import OrderSummary from '@/components/OrderSummary';

import MakePayment from '@/components/MakePayment';
import Progress from '@/components/Progress';
import Footer from '@/components/Footer';
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
      <div className="my-[40px] mx-auto w-[1232px]   ">
        <Header status={status} />

        <div className="mt-10">
          {' '}
          <BreadCrumb items={breadcrumbItems} />
        </div>
        <div>
          <div className=" flex justify-center my-5  ">
            <Progress />
          </div>
          <div className=" grid grid-cols-5 gap-3">
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
