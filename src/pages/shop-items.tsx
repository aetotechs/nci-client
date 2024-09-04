import BreadCrumb from '@/components/BreadCrumb';
import Header from '@/components/Header';
import CartWithItems from '@/components/CartWithItems';
import Coupon from '@/components/Coupon';
import OrderSummary from '@/components/OrderSummary';
import Progress from '@/components/Progress';
import Footer from '@/components/Footer';
import { IStatus } from '@/App';

function ShopItems({ status }: IStatus) {
  const breadcrumbItems = [{ href: '/ShopItems', label: 'Cart' }];

  return (
    <>
      <div className="my-[40px] mx-auto w-[1232px]  ">
        <Header status={status} />

        <div className="mt-10">
          {' '}
          <BreadCrumb items={breadcrumbItems} />
        </div>
        <div>
          <div className=" flex justify-center  my-10 ">
            <Progress />
          </div>
          <div className="grid grid-cols-5 gap-3 ">
            <div className="col-span-3">
              <CartWithItems />
            </div>
            <div className="col-span-2">
              <Coupon />
              <OrderSummary />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ShopItems;
