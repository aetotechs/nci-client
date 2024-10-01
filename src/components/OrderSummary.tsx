import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import OrderItems from '@/components/OrderItems';

function OrderSummary() {
  const location = useLocation();
  const { pathname } = location;
  return (
    <div className={`  md:mx-0 rounded-[8px]  flex flex-col mb-4 py-2 bg-white  `}>
      <h3 className={` font-semibold text-[15px] my-2 px-5`}>Order Summary</h3>

      {pathname == '/close-shop' && (
        <div>
          <div className="flex flex-col gap-1 px-5 text-[12px] ">
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
      {pathname === '/close-shop' && <OrderItems />}
      <div className="flex flex-col text-[12px] gap-3 md:px-4 ">
        <div className="flex justify-between">
          <p className="font-normal  text-textmuted">Cart Subtotal</p>
          <h3 className="font-medium ">$120</h3>
        </div>
        <div className="flex justify-between">
          <p className="font-normal  text-textmuted">Shipping</p>
          <h3 className="font-medium ">$60</h3>
        </div>
        <div className="flex justify-between">
          <p className="font-normal  text-textmuted">Standard VAT</p>
          <h3 className="font-medium ">$25</h3>
        </div>
        <div className="flex justify-between">
          <p className="font-normal  text-textmuted">Order Subtotal</p>
          <h3 className="font-semibold text-[14px]">$265</h3>
        </div>
        {pathname === '/shipping-address' && <OrderItems />}
        {pathname === '/shop-payment' && <OrderItems />}
        {pathname === '/shop' || pathname === '/shop-items' ? (
          <div>
            <Link to="/shipping-address">
              <Button className="tet-white w-full h-10 my-2 rounded-xl font-normal  ">
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
