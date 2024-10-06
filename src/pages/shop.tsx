import { useEffect, useMemo, useState } from 'react';
import EmptyCart from '@/components/EmptyCart';
import Header from '@/components/Header';
import CartWithItems from '@/components/CartWithItems';
import Coupon from '@/components/Coupon';
import OrderSummary from '@/components/OrderSummary';
import Progress from '@/components/Progress';
import { IStatus } from '@/App';
import { useLocation } from 'react-router-dom';
import { FetchCartItems, FetchProductById } from '@/lib/api-routes';
import { getUserToken } from '@/lib/cookie';

function Shop({ status }: IStatus) {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
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
        setLoading(false);
      }
    };

    fetchCart();
  }, [cartItems]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
 

  return (
    <>
      <div className="md:px-[5vw] lg:my-4 md:max-w-[100vw] overflow-x-hidden">
        <Header status={status} />

        <div className={`px-5 ${cartItems.length === 0 && 'mt-10'} md:px-0`}>
          {cartItems.length === 0 ? (
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
                  <CartWithItems
                    items={cartItems}
                  />
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
