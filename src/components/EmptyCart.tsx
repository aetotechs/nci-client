import React from 'react';

import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

function EmptyCart() {
  return (
    <div className="w-[400px]">
      <div className="flex justify-center flex-col items-center">
        <div className="w-[100px] h-[100px]">
          <img src="./icons/shoppingtrolley.svg" alt="ShoppingTrolley" />
        </div>
        <h3 className="font-semibold my-2">Your shopping cart is empty</h3>
        <p className="font-normal text-base">
          Add items to your cart and order to enjoy great coffee at the best prices.
        </p>
        <div className="my-10 w-[197px]  ">
          <Link
            className="flex justify-center gap-2 bg-primary py-3 rounded-xl text-white font-semibold text-[16px] leading-5"
            to="/shop"
          >
            Shop Now{' '}
            <span>
              <ChevronRight />
            </span>{' '}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EmptyCart;
