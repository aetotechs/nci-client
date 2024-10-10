import { Button } from '@/components/ui/button';
import {  useLocation, useNavigate } from 'react-router-dom';
import OrderItems from '@/components/OrderItems';
import { useEffect, useState } from 'react';
import { IItems } from './tables/ItemsTable';
import { AddToCart } from '@/lib/api-routes';
import { getAuthUser, getUserToken } from '@/lib/cookie';
import { toast } from 'sonner';
import { ShoppAdressProps } from '@/pages/shop-address';
const VAT = 0;
const Shipping = null;
function OrderSummary({ items }:{items?:ShoppAdressProps}) {
  console.log(items);
  const [addingStates, setAddingStates] = useState(false);
  const navigate = useNavigate();


  const getSubTotal = localStorage.getItem('totalSubtotal');
  const cartSubtotal = parseFloat(getSubTotal!);

  const OrderSubtotal = VAT + Shipping! + cartSubtotal;

  const location = useLocation();
  const { pathname } = location;

  const AddCart = async () => {
    const preferredItems = JSON.parse(localStorage.getItem('preferredItems') || '[]') as IItems[];

    if (preferredItems.length === 0) {
      toast.info('Please select items to add to cart.', {
        style: {
          background: '#2196F31A',
          color: '#2196F3',
          border: '1px solid #2196F380'
        }
      });
      return;
    }

    setAddingStates(true);

    const user = getAuthUser();
    const customerId = user.userId;
    const token = getUserToken();

    const cartData = {
      customerId,
      cartItems: preferredItems.map((item) => ({
        productId: item.itemId,
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

      console.log(cartData);

      if (response.ok) {
        const data = await response.json();
        const cartId = data.cartId;
        localStorage.setItem('cartId', cartId);

        toast.success(
          <div className="flex gap-1 items-center">
            <span>
              <img src="/icons/cartsuccess.svg" alt="cart" />
            </span>
            <span className="font-bold">{preferredItems.length} item(s) added to your cart.</span>
          </div>,
          {
            style: {
              background: '#009A681A',
              color: '#009A68',
              border: '1px solid #009A6880'
            }
          }
        );


        setTimeout(() => {
          navigate('/shipping-address');
        }, 3000);
      } else {
      }
    } catch (error) {
    } finally {
      setAddingStates(false);

     
    }
  };

 
  return (
    <div
      className={`  md:mx-0 rounded-[8px] ${pathname === '/shop-payment' && 'pb-2 md:pb-0'} flex flex-col px-5 md:px-0 mb-4 md:py-2 bg-white  `}>
      <h3 className={` font-semibold text-[15px] my-2 md:px-5`}>Order Summary</h3>

      {pathname == '/close-shop' && (
        <div>
          <div className="flex flex-col gap-1 md:px-5 text-[12px] ">
            <div className="flex justify-between">
              <p className="font-normal  text-textmuted">Order Number</p>
              <h3 className="font-medium  text-texthighlight">5493-90</h3>
            </div>
            <div className="flex justify-between">
              <p className="font-normal  text-textmuted">Date</p>
              <h3 className="font-medium ">Aug 26,2024</h3>
            </div>
            <div className="flex justify-between">
              <p className="font-normal  text-textmuted">Payment Method</p>
              <h3 className="font-medium ">Mastercard</h3>
            </div>
          </div>
        </div>
      )}
{pathname === '/close-shop' && items && <OrderItems items={items.items} />} 
<div className="flex flex-col text-[12px] gap-3 md:px-4 ">
        <div className="flex justify-between">
          <p className="font-normal  text-textmuted">Cart Subtotal</p>
          <h3 className="font-medium ">${cartSubtotal || 0} </h3>
        </div>
        <div className="flex justify-between">
          <p className="font-normal  text-textmuted">Shipping</p>
          <h3 className="font-medium ">{Shipping}</h3>
        </div>
        <div className="flex justify-between">
          <p className="font-normal  text-textmuted">Standard VAT</p>
          <h3 className="font-medium ">${VAT}</h3>
        </div>
        <div className="flex justify-between">
          <p className="font-normal  text-textmuted">Order Subtotal</p>
          <h3 className="font-semibold text-[14px]">${OrderSubtotal}</h3>
        </div>
        {pathname === '/shipping-address' && items && <OrderItems items={items.items} />}
        {pathname === '/shop-payment' && items && <OrderItems items={items.items} />}
        {pathname === '/shop' || pathname === '/shop-items' ? (
          <div>
            <Button
              onClick={() => AddCart()}
              className="tet-white w-full h-10 my-2 rounded-[6px] md:rounded-xl font-normal">
              {addingStates ? 'Adding...' : 'Proceed to Checkout'}
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
