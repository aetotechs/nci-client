import { useEffect, useState } from 'react';
import EmptyCart from '@/components/user/other/EmptyCart';
import Header from '@/components/user/other/Header';
import Coupon from '@/components/user/other/cart/Coupon';
import OrderSummary from '@/components/user/other/cart/CartSummary';
import Progress from '@/components/user/other/cart/Progress';
import { IStatus } from '@/App';
import { useLocation } from 'react-router-dom';
import { CART_STORAGE_KEY, useCart } from '@/utils/hooks/CartHook';
import ShoppingCart from '@/components/user/other/cart/ShoppingCart';

function Cart({ status }: IStatus) {
  const { calculateSubtotal } = useCart();
  const { pathname } = useLocation();

  const [cart, setCart] = useState(() =>
    JSON.parse(localStorage.getItem(CART_STORAGE_KEY) || '[]')
  );

  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Header status={status} />
      <div className="md:px-[5vw] lg:my-4 md:max-w-[100vw] overflow-x-hidden">
        <div className={`px-5 ${cart.length === 0 && 'mt-10'} md:px-0`}>
          {cart.length === 0 ? (
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
                  <ShoppingCart cart={cart} setCart={setCart} />
                </div>
                <div className="md:w-[30vw]">
                  <Coupon />
                  <OrderSummary cart={cart} calculateSubtotal={calculateSubtotal} />
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
