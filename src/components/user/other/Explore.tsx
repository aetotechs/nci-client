import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { toast } from 'sonner';
import { IItems } from './cart/ItemsTable';
import Product from './Product';
import { ErrorToast, SuccessToast } from '@/components/common/ui/Toasts';
import { IProduct } from '@/utils/commons/TypeInterfaces';

export interface ExploreProps {
  product: IProduct[];
  status: boolean;
}

function Explore({ status, product }: ExploreProps) {
  const location = useLocation();
  const { pathname } = location;

  const addCart = async (p: IItems, pName: string) => {
    try {
      let cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');

      const existingItemIndex = cartItems.findIndex((item: IItems) => item.itemId === p.itemId);
      if (existingItemIndex !== -1) {
        toast.info(`${pName} already exists in your cart. Now Increased quantity by 1`, {});
        return;
      }

      cartItems.push(p);

      localStorage.setItem('cartItems', JSON.stringify(cartItems));

      SuccessToast(
        <div className="flex gap-1 items-center">
          <span>
            <img src="/icons/cartsuccess.svg" alt="cart" />
          </span>
          <span className="font-bold">{pName}</span> has been added to your wishlist.
        </div>
      );
    } catch (error) {
      ErrorToast(error);
    } finally {
    }
  };

  return (
    <div className={`w-full md:mb-[38px] md:my-0 ${pathname === '/' && ''}`}>
      {pathname === '/' && (
        <div className="flex flex-col md:justify-center md:items-center  my-5 mb-4">
          <h3 className="font-semibold text-xl md:text-[26px] mt-4 md:mt-0 justify-self-start">
            Explore Nile Coffee
          </h3>
          <p className="font-normal text-sm my-2">
            Discover the rich flavors and unique origins of Nile Coffee
          </p>
        </div>
      )}
      <div className={`${pathname === '/listing' ? 'py-0 md:w-[62vw]' : ' md:py-0 '}`}>
        <div
          className={`grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5`}
        >
          {product.map((product, index) => {
            return (
              <>
                <div key={index}>
                  <Product product={product} skeleton={true} />
                </div>
              </>
            );
          })}
        </div>
      </div>
      {pathname === '/' && (
        <div className="flex justify-center my-5 md:my-8">
          <Link
            className="flex justify-between items-center p-3 max-h-[40px]  gap-2 border border-primary rounded-[10px] text-primary font-semibold text-sm leading-5"
            to="/coffee-shop"
          >
            View More
            <span>
              <ChevronRight />
            </span>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Explore;
