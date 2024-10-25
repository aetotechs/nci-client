import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Button } from '../../common/ui/button';
import { IStatus } from '@/App';

function EmptyCart({ status }: IStatus) {
  return (
    <div className="">
      <div className="flex justify-center  flex-col items-center">
        <div className="w-[100px] h-[100px]">
          <img src="./icons/shoppingtrolley.svg" alt="ShoppingTrolley" />
        </div>
        <h3 className="font-semibold md:my-2 text-xl md:text-2xl">Your shopping cart is empty</h3>
        <p className="font-normal text-sm md:text-base text-textmuted">
          Add items to your cart and order to enjoy great coffee at the best prices.
        </p>
        {!status ? (
          <div className="flex gap-2 items-center py-5 justify-center">
            <Link to="/login">
              {' '}
              <Button
                variant="outline"
                className="bg-white border-primary text-primary md:w-[111px]"
              >
                Login
              </Button>
            </Link>
            <Link to="/login">
              {' '}
              <Button className="md:w-[111px]"> Sign Up</Button>
            </Link>
          </div>
        ) : (
          <div className="my-10 w-[197px]  ">
            <Link
              className="flex justify-center gap-2 bg-primary py-3 rounded-xl text-white font-semibold text-[16px] leading-5"
              to="/coffee-shop"
            >
              Shop Now{' '}
              <span>
                <ChevronRight />
              </span>{' '}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default EmptyCart;
