import { useEffect, useState } from 'react';
import EmptyCart from '@/components/EmptyCart';
import Header from '@/components/Header';
import CartWithItems from '@/components/CartWithItems';
import Coupon from '@/components/Coupon';
import OrderSummary from '@/components/OrderSummary';
import Progress from '@/components/Progress';
import { IStatus } from '@/App';
import { useLocation } from 'react-router-dom';
import { FetchCartItems } from '@/lib/api-routes';
import { toast } from 'sonner';
import { getUserToken } from '@/lib/cookie';

function Shop({ status }: IStatus) {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const { pathname } = useLocation();

  useEffect(() => {
    const fetchCart = async () => {
      const cartId = localStorage.getItem('cartId');
      const token = getUserToken();
      try {
        const response = await fetch(FetchCartItems(cartId), {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          }
        });
        console.log(response);

        if (!response.ok) {
          throw new Error('Failed to fetch cart items');
        }

        const data = await response.json();
        setCartItems(data.cartItems);
      } catch (error) {
        console.error('Error fetching cart items:', error);
        // toast.error('Error fetching cart items. Please try again.');
      }
    };

    fetchCart();
  }, [cartItems]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <div className="md:px-[5vw] lg:my-4 md:max-w-[100vw] overflow-x-hidden ">
        <Header status={status} />

        <div className={`px-5 ${cartItems.length === 0 && 'mt-10'} md:px-0 `}>
          {cartItems.length === 0 ? (
            <div className="flex justify-center items-center  ">
              <EmptyCart status={status} />
            </div>
          ) : (
            <>
              <div className=" md:flex md:justify-center   my-10 ">
                <Progress />
              </div>
              <div className=" flex flex-col md:flex-row ">
                <div className="md:w-[60vw]">
                  <CartWithItems />
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

export default Shop;
