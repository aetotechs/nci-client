import Header from '@/components/user/other/Header';
import OrderSummary from '@/components/user/other/cart/CartSummary';
import Progress from '@/components/user/other/cart/Progress';
import { IStatus } from '@/App';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { CartItems } from './ShopAddress';
import { FetchCartItems, fetchProductByIdRoute } from '@/utils/hooks/api-routes';
import { getUserToken } from '@/utils/cookies/UserCookieManager';
import PaymentComponent from '@/components/user/other/PaymentComponent';

export const OrderId = localStorage.getItem('orderId');

function Payment({ status }: IStatus) {
  
  const [ cartItems, setCartItems ] = useState<CartItems[]>([]);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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

        if (!response.ok) {
          throw new Error('Failed to fetch cart items');
        }

        const data = await response.json();

        const cartItemIds = data.cartItems;

        const detailedCartItems = await Promise.all(
          cartItemIds.map(async (item: any) => {
            const productResponse = await fetch(fetchProductByIdRoute(item.productId), {
              method: 'GET',

              headers: {
                'Content-Type': 'application/json',

                Authorization: `Bearer ${token}`
              }
            });

            if (!productResponse.ok) {
              throw new Error(`Failed to fetch product details for ${item.productId}`);
            }

            const productData = await productResponse.json();

            return {
              ...item,

              productDetails: productData
            };
          })
        );
        setCartItems(detailedCartItems);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      } finally {
      }
    };

    fetchCart();
  }, [cartItems]);

  return (
    <>
      <div className="md:px-[5vw] md:max-w-[100vw]     ">
        <Header status={status} />

        <div className="px-5 md:px-0">
          <div className=" md:flex md:justify-center my-5   md:my-10 ">
            <Progress />
          </div>
          <div className=" flex flex-col gap-5 md:flex-row ">
            <div className="md:w-[60vw]">
              <PaymentComponent orderId={OrderId || ''} />
            </div>
            <div className="md:w-[30vw]">
              <OrderSummary items={{ items: cartItems }} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Payment;
