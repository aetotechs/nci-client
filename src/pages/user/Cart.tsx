import { useEffect, useState } from 'react';
import EmptyCart from '@/components/user/other/EmptyCart';
import Header from '@/components/user/other/Header';
import Progress from '@/components/user/other/cart/Progress';
import { useLocation, useNavigate } from 'react-router-dom';
import ShoppingCart from '@/components/user/other/cart/ShoppingCart';
import { Button } from '@/components/common/ui/button';
import { useLoading } from '@/utils/context/LoaderContext';
import { api_urls } from '@/utils/commons/api-urls';
import { getUserToken } from '@/utils/cookies/UserCookieManager';
import { ErrorToast, SuccessToast } from '@/components/common/ui/Toasts';
import { fetchCalculatedTotalCartCost } from '@/utils/services/fetchCalculatedTotalCartCost';

const token = getUserToken();

function Cart() {
  const { dispatchLoader } = useLoading();
  const { pathname } = useLocation();
  const [reloadCart, setReloadCart] = useState(false);
  const [cart, setCart] = useState<{ cartItems: any[]; cartId: string } | null>(null);
  const [totalCartCost, setTotalCartCost] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    fetchCart();
  }, []);

  useEffect(() => {
    if (cart?.cartId) {
      fetchCalculatedTotalCartCost(cart.cartId).then((cost) => setTotalCartCost(cost));
    }
  }, [cart]);

  const fetchCart = async () => {
    dispatchLoader(true);
    try {
      const response = await fetch(api_urls.carts.get_open_cart, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        const res = await response.json();
        setCart(res);
        setReloadCart(true);
      } else if (response.status === 404) {
        setCart(null);
      } else {
        const responseMessage = await response.text();
        ErrorToast(responseMessage);
      }
    } catch (error: any) {
      ErrorToast('Error occurred during cart fetch, ' + error.toString());
    } finally {
      setReloadCart(false);
      dispatchLoader(false);
    }
  };

  const totalItems =
    cart?.cartItems?.reduce(
      (sum: number, item: any) => (item.confirmed ? sum + item.quantity : sum),
      0
    ) || 0;

  const handleProceedToShippingAddress = async () => {
    if (!cart) return;
    dispatchLoader(true);

    const payload = {
      cartId: cart.cartId,
      orderInstructions: '',
    };

    try {
      const response = await fetch(api_urls.orders.create_order, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      const responseMessage = await response.text();
      if (response.ok) {
        SuccessToast(responseMessage);
        window.location.href = '#/shipping-address';
      } else {
        ErrorToast(responseMessage);
      }
    } catch (error: any) {
      ErrorToast('Error occurred during order creation, ' + error.toString());
    } finally {
      dispatchLoader(false);
    }
  };

  return (
    <>
      <Header reloadCart={reloadCart} />
      <div className="md:px-[5vw] lg:my-4 md:max-w-[100vw] overflow-x-hidden">
        <div className="px-5 mt-10 md:px-0">
          {!cart || cart.cartItems?.length === 0 ? (
            <div className="flex justify-center items-center">
              <EmptyCart />
            </div>
          ) : (
            <>
              <div className="md:flex md:justify-center my-10">
                <Progress />
              </div>
              <div className="flex flex-col md:flex-row">
                <div className="md:w-[60vw]">
                  <ShoppingCart cart={cart} reloadCart={fetchCart} />
                </div>
                <div className="md:w-[30vw] bg-white pt-5">
                  <h3 className="font-semibold text-medium my-2 md:px-4">Cart Summary</h3>
                  <div className="flex flex-col text-[12px] gap-3 md:px-4">
                    <div className="flex justify-between">
                      <p className="font-normal text-textmuted">Cart ID</p>
                      <h3 className="font-medium">{cart.cartId}</h3>
                    </div>
                    <div className="flex justify-between">
                      <p className="font-normal text-textmuted">Total Packages</p>
                      <h3 className="font-medium">{totalItems} bags</h3>
                    </div>
                    <div className="flex justify-between">
                      <p className="font-normal text-textmuted">Cart Subtotal</p>
                      <h3 className="font-semibold text-[14px]">${totalCartCost}</h3>
                    </div>
                    <div>
                      <Button
                        onClick={handleProceedToShippingAddress}
                        className="text-white w-full h-10 my-2 rounded-[6px] md:rounded-xl font-normal cursor-pointer"
                        disabled={totalItems < 1}
                      >
                        {totalItems < 1 ? 'Select some items first' : 'Checkout'}
                      </Button>
                    </div>
                    <p className="text-red-900 text-center">
                      ❕ Supply the coupon at checkout if you have one
                    </p>
                  </div>
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