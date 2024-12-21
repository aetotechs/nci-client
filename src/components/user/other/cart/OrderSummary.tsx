import { Button } from '@/components/common/ui/button';
import { useLocation, useNavigate } from 'react-router-dom';
import OrderItems from '@/components/user/other/OrderItems';
import { useEffect, useState } from 'react';
import { AddToCart } from '@/utils/hooks/api-routes';
import { getAuthUser, getUserToken } from '@/utils/cookies/UserCookieManager';
import { toast } from 'sonner';
import { orderId } from '@/pages/user/Payment';
import { truncate } from '@/utils/commons/Truncate';
import { ErrorToast, SuccessToast } from '@/components/common/ui/Toasts';
import { fetchCalculatedTotalCartCost } from '@/utils/services/fetchCalculatedTotalCartCost';

const vat = 0.0;
const shippingFee = 'unknown' || 0.0;

function OrderSummary({ items, cart } : any) {
  const navigate = useNavigate();
  const location = useLocation();
  const [submitting, setSubmitting] = useState(false);
  const { pathname } = location;
  const [totalOrderCost, setTotalOrderCost] = useState(0);

  useEffect(() => {
    if (cart) {
      fetchCalculatedTotalCartCost(cart.cartId).then((cost) => setTotalOrderCost(cost));
    }
  }, [cart]);

  const submitCart = async () => {
    const preferredItems = cart.filter((item: any) => item.selected);

    if (preferredItems.length === 0) {
      toast.info('Please select items to checkout cart', {
        style: {
          background: '#2196F31A',
          color: '#2196F3',
          border: '1px solid #2196F380'
        }
      });
      return;
    }

    setSubmitting(true);

    const user = getAuthUser();
    const customerId = user.userId;
    const token = getUserToken();

    const cartData = {
      customerId,
      cartItems: preferredItems.map((item: any) => ({
        productId: item.product.itemId,
        quantity: item.quantity
      }))
    };

    try {
      const response = await fetch(AddToCart, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(cartData)
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('open_cart', data);

        SuccessToast(
          <div className="flex gap-1 items-center">
            <span>
              <img src="/icons/cartsuccess.svg" alt="cart" />
            </span>
            <span className="font-bold">{preferredItems.length} item(s) added to your cart.</span>
          </div>
        );

        setTimeout(() => {
          navigate('/shipping-address');
        }, 1000);
      } else {
        ErrorToast(response.text());
      }
    } catch (error) {
      ErrorToast(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      className={`  md:mx-0 rounded-[8px] ${pathname === '/shop-payment' && 'pb-2 md:pb-0'} flex flex-col px-5 md:px-0 mb-4 md:py-2 bg-white  `}
    >
      <h3 className={` font-semibold text-[15px] my-2 md:px-5`}>Order Summary</h3>

      {pathname == '/checkout' && (
        <div>
          <div className="flex flex-col gap-1 md:px-5 text-[12px] ">
            <div className="flex justify-between">
              <p className="font-normal  text-textmuted">Order Number</p>
              <h3 className="font-medium  text-texthighlight">{truncate(orderId || '')}</h3>
            </div>
            <div className="flex justify-between">
              <p className="font-normal  text-textmuted">Date</p>
              <h3 className="font-medium ">{new Date().toLocaleDateString()}</h3>
            </div>
            <div className="flex justify-between">
              <p className="font-normal  text-textmuted">Payment Method</p>
              <h3 className="font-medium ">Mastercard</h3>
            </div>
          </div>
        </div>
      )}

      {pathname === '/checkout' && items && <OrderItems items={items.items} />}
      <h3 className={` font-semibold text-[15px] my-2 md:px-5`}>Order Summary</h3>
      <div className="flex flex-col text-[12px] gap-3 md:px-4 ">
        <div className={`flex justify-between ${pathname === '/checkout' && 'px-1 mt-1'}`}>
          <p className="font-normal  text-textmuted">Cart Subtotal</p>
          <h3 className="font-medium ">${totalOrderCost || 0} </h3>
        </div>
        <div className="flex justify-between">
          <p className="font-normal  text-textmuted">Shipping</p>
          <h3 className="font-medium ">{shippingFee}</h3>
        </div>
        <div className="flex justify-between">
          <p className="font-normal  text-textmuted">Standard VAT</p>
          <h3 className="font-medium ">${vat}</h3>
        </div>
        <div className="flex justify-between">
          <p className="font-normal  text-textmuted">Order Subtotal</p>
          <h3 className="font-semibold text-[14px]">${totalOrderCost || 0}</h3>
        </div>
        {pathname === '/shipping-address' && items && <OrderItems items={items.items} />}
        {pathname === '/shop-payment' && items && <OrderItems items={items.items} />}
        {pathname === '/cart' || pathname === '/shop-items' ? (
          <div>
            <Button
              onClick={() => submitCart()}
              className="tet-white w-full h-10 my-2 rounded-[6px] md:rounded-xl font-normal"
            >
              {submitting ? 'Adding...' : 'Proceed to Checkout'}
            </Button>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}

export default OrderSummary;
