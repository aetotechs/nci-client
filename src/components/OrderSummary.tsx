import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import OrderItems from '@/components/OrderItems';

function OrderSummary() {
  const location = useLocation();
  const { pathname } = location;
  return (
    <div
      className={` md:w-[491px] w-[90vw] mx-5 md:mx-0 rounded-[8px] flex flex-col mb-4 py-2 pl-5 pr-10 ${pathname == '/shop-items' || pathname === '/shop' ? 'h-[300px]' : ' h-[400px] '}`}
    >
      <h3 className="font-bold text-xl my-5">Order Summary</h3>

      {pathname == '/close-shop' && (
        <div>
          <div className="flex flex-col gap-3 ">
            <div className="flex justify-between">
              <p className="font-normal text-base text-textmuted">Order Number</p>
              <h3 className="font-medium text-base text-texthighlight">5493-90</h3>
            </div>
            <div className="flex justify-between">
              <p className="font-normal text-base text-textmuted">Date</p>
              <h3 className="font-medium text-base">Aug 26,2024</h3>
            </div>
            <div className="flex justify-between">
              <p className="font-normal text-base text-textmuted">Payment Method</p>
              <h3 className="font-medium text-base">Mastercard</h3>
            </div>
          </div>
        </div>
      )}
      {pathname === '/close-shop' && <OrderItems />}
      <div className="flex flex-col gap-3 md:px-4 ">
        <div className="flex justify-between">
          <p className="font-normal text-base text-textmuted">Cart Subtotal</p>
          <h3 className="font-medium text-base">$120</h3>
        </div>
        <div className="flex justify-between">
          <p className="font-normal text-base text-textmuted">Shipping</p>
          <h3 className="font-medium text-base">$60</h3>
        </div>
        <div className="flex justify-between">
          <p className="font-normal text-base text-textmuted">Standard VAT</p>
          <h3 className="font-medium text-base">$25</h3>
        </div>
        <div className="flex justify-between">
          <p className="font-normal text-base text-textmuted">Order Subtotal</p>
          <h3 className="font-semibold text-xl">$265</h3>
        </div>
        {pathname === '/shipping-address' && <OrderItems />}
        {pathname === '/shop-payment' && <OrderItems />}
        {pathname === '/shop' || pathname === '/shop-items' ? (
          <div>
            <Link to="/shipping-address">
              <Button className="tet-white w-full h-[56px] rounded-xl font-normal text-base ">
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
