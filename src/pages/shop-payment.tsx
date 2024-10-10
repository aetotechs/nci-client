import Header from '@/components/Header';

import OrderSummary from '@/components/OrderSummary';

import MakePayment from '@/components/MakePayment';
import Progress from '@/components/Progress';

import { IStatus } from '@/App';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { CartItems } from './shop-address';
import { FetchCartItems, FetchProductById } from '@/lib/api-routes';
import { getUserToken } from '@/lib/cookie';

function ShopPayment({ status }: IStatus) {
  const [cartItems, setCartItems] = useState<CartItems[]>([]); // Add cartItems state

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
            const productResponse = await fetch(FetchProductById(item.productId), {
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
              <MakePayment />
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

export default ShopPayment;
