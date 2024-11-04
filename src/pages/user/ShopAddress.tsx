import Header from '@/components/user/other/Header';

import OrderSummary from '@/components/user/other/cart/CartSummary';
import ShippingAddress from '@/components/user/other/ShippingAddress';
import Progress from '@/components/user/other/cart/Progress';

import { IStatus } from '@/App';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getUserToken } from '@/utils/cookies/UserCookieManager';
import { FetchCartItems, fetchProductByIdRoute } from '@/utils/hooks/api-routes';
import { ErrorToast } from '@/components/common/ui/Toasts';

interface ProductDetails {
  flavor: string;
  name: string;
  lotNumber: string;
  stockAvailable: boolean;
  stockCount: number;
  unitPrice: number;
  wareHouse: string;
  sampleCount: number;
  sampleUnitPrice: number;
  sampleAvailable: boolean;
  quantity: number;
  itemId: string;
}
export interface CartItems {
  productDetails: ProductDetails;
  productId: string;
  quantity: number;
}

export interface ShoppAdressProps {
  items: CartItems[];
}
function ShopAddress({ status }: IStatus) {
  const [cartItems, setCartItems] = useState<CartItems[]>([]);
  const [loading, setIsLoading] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  useEffect(() => {
    setIsLoading(true);
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
          ErrorToast(response.text());
          return;
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
          setIsLoading(false);
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
              <ShippingAddress />
            </div>
            <div className="md:w-[30vw]  max-h-max   ">
              <OrderSummary items={{ items: cartItems }} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShopAddress;
