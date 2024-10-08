import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import OrderItems, { myitems } from '@/components/OrderItems';
const VAT = 50;
const Shipping = 100;
function OrderSummary() {
  const getSubTotal = localStorage.getItem('totalSubtotal');
  const cartSubtotal = parseFloat(getSubTotal!);
  const OrderSubtotal = VAT + Shipping + cartSubtotal;
  const location = useLocation();
  const { pathname } = location;
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
      {pathname === '/close-shop' && <OrderItems items={myitems} />}
      <div className="flex flex-col text-[12px] gap-3 md:px-4 ">
        <div className="flex justify-between">
          <p className="font-normal  text-textmuted">Cart Subtotal</p>
          <h3 className="font-medium ">${cartSubtotal}</h3>
        </div>
        <div className="flex justify-between">
          <p className="font-normal  text-textmuted">Shipping</p>
          <h3 className="font-medium ">${Shipping}</h3>
        </div>
        <div className="flex justify-between">
          <p className="font-normal  text-textmuted">Standard VAT</p>
          <h3 className="font-medium ">${VAT}</h3>
        </div>
        <div className="flex justify-between">
          <p className="font-normal  text-textmuted">Order Subtotal</p>
          <h3 className="font-semibold text-[14px]">${OrderSubtotal}</h3>
        </div>
        {pathname === '/shipping-address' && <OrderItems items={myitems} />}
        {pathname === '/shop-payment' && <OrderItems items={myitems} />}
        {pathname === '/shop' || pathname === '/shop-items' ? (
          <div>
            <Link to="/shipping-address">
              <Button className="tet-white w-full h-10 my-2 rounded-[6px] md:rounded-xl font-normal  ">
                Proceed to Checkout
              </Button>
            </Link>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}

export default OrderSummary;
