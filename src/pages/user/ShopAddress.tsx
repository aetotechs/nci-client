import Header from '@/components/user/other/Header';

import OrderSummary from '@/components/user/other/cart/OrderSummary';
import ShippingAddress from '@/components/user/other/ShippingAddress';
import Progress from '@/components/user/other/cart/Progress';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getUserToken } from '@/utils/cookies/UserCookieManager';
import { ErrorToast } from '@/components/common/ui/Toasts';
import { api_urls } from '@/utils/commons/api-urls';
const token = getUserToken();

function ShopAddress() {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [loading, setIsLoading] = useState(false);
  const [cart, setCart] = useState();
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setIsLoading(true);
    const fetchCart = async () => {

      try {
        const response = await fetch(api_urls.carts.get_open_cart, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          }
        });

        if (!response.ok) {
          ErrorToast(response.text());
          return;
        }

        const data = await response.json();
        setCart(data);
        localStorage.setItem('cartId', data.cartId);
        const cartItemIds = data.cartItems;

        const detailedCartItems = await Promise.all(
          cartItemIds.map(async (item: any) => {
            const productResponse = await fetch(api_urls.items.get_product_by_id(item.productId), {
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
        setIsLoading(false);
      }
    };

    fetchCart();
  }, []);
  return (
    <>
      <div className="md:px-[5vw] md:max-w-[100vw]     ">
        <Header/>

        <div className="px-5 md:px-0">
          <div className=" md:flex md:justify-center my-5   md:my-10 ">
            <Progress />
          </div>
          <div className=" flex flex-col gap-5 md:flex-row ">
            <div className="md:w-[60vw]">
              <ShippingAddress />
            </div>
            <div className="md:w-[30vw]  max-h-max   ">
              <OrderSummary items={{ items: cartItems }} cart={cart}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShopAddress;
