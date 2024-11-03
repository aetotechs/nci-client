import { useEffect, useState } from 'react';
import EmptyCart from '@/components/user/other/EmptyCart';
import Header from '@/components/user/other/Header';
import CartWithItems from '@/components/user/other/CartWithItems';
import Coupon from '@/components/user/other/Coupon';
import OrderSummary from '@/components/user/other/OrderSummary';
import Progress from '@/components/user/other/Progress';
import { IStatus } from '@/App';
import { useLocation } from 'react-router-dom';
import { useCart } from '@/utils/hooks/CartHook';

function Cart({ status }: IStatus) {
  const { cart } = useCart();
  const [ cartItems, setCartItems ] = useState<any[]>(cart);
  const [ loading, setLoading ] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header status={status} />
      <div className="md:px-[5vw] lg:my-4 md:max-w-[100vw] overflow-x-hidden">
        <div className={`px-5 ${cartItems.length === 0 && 'mt-10'} md:px-0`}>
          {loading ? (
            <div className="flex justify-center items-center">
              <p>Loading...</p>
            </div>
          ) : cartItems.length === 0 ? (
            <div className="flex justify-center items-center">
              <EmptyCart status={status} />
            </div>
          ) : (
            <>
              <div className="md:flex md:justify-center my-10">
                <Progress />
              </div>
              <div className="flex flex-col md:flex-row">
                <div className="md:w-[60vw]">
                  <CartWithItems items={cart} />
                </div>
                <div className="md:w-[30vw]">
                  <Coupon />
                  <OrderSummary />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Cart;
