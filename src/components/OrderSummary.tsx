import React from 'react';
import { Button } from './ui/button';
import { Link, useLocation } from 'react-router-dom';
import OrderItems from './OrderItems';

function OrderSummary() {
  const location = useLocation();
  const { pathname } = location;
  return (
    <div className="bg-white w-[491px] h-max rounded-[8px] flex flex-col mb-4 px-10">
      <h3 className="font-bold text-xl my-5">Order Summary</h3>
      <div className="flex flex-col gap-5">
        <div className="flex justify-between">
          <p className="font-normal text-base">Cart Subtotal</p>
          <h3 className="font-medium text-base">$120</h3>
        </div>
        <div className="flex justify-between">
          <p className="font-normal text-base">Shipping</p>
          <h3 className="font-medium text-base">$60</h3>
        </div>
        <div className="flex justify-between">
          <p className="font-normal text-base">Standard VAT</p>
          <h3 className="font-medium text-base">$25</h3>
        </div>
        <div className="flex justify-between">
          <p className="font-normal text-base">Order Subtotal</p>
          <h3 className="font-semibold text-xl">$265</h3>
        </div>
        {pathname === '/shop' ? (
          <div>
            <Button className="tet-white w-full h-[56px] rounded-xl font-normal text-base mb-6">
              <Link to="/shipping-address">Proceed to Checkout</Link>
            </Button>
          </div>
        ) : (
          ''
        )}
        {pathname === '/shop' ? '' : <OrderItems />}
      </div>
    </div>
  );
}

export default OrderSummary;
