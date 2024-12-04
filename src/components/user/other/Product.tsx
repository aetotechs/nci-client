import { useLocation, useNavigate } from 'react-router-dom';
import { Badge } from '@/components/common/ui/badge';
import { Button } from '@/components/common/ui/button';
import { useState } from 'react';
import { ProductProps } from '@/utils/commons/TypeInterfaces';
import { ErrorToast, SuccessToast } from '@/components/common/ui/Toasts';
import { getNavigationUrl } from '@/utils/redirects/NavigationUtils';
import { getAuthUser, getUserToken, isAuthenticated } from '@/utils/cookies/UserCookieManager';
import { Skeleton } from '@/components/common/ui/Skeleton';
import { useLoading } from '@/utils/context/LoaderContext';
import { api_urls } from '@/utils/commons/api-urls';

const Product = ({ product, skeleton }: ProductProps) => {
  const navigate = useNavigate();
  const { dispatchLoader } = useLoading();
  const [addingToCart, setAddingToCart] = useState(false);
  const user = getAuthUser();
  const token = getUserToken();
  const location = useLocation();
  const isUserLoggedIn = isAuthenticated() && user.role === 'USER';

  const handleLoginNavigation = () => {
    const redirectUrl = getNavigationUrl(location, 'login');
    navigate(redirectUrl);
  };

  const _handleAddToCart = async () => {
    dispatchLoader(true);
    const payload: any = {
      cartItems: [
        {
          productId: product.itemId,
          quantity: 1,
          confirmed: false
        }
      ]
    };

    const response = await fetch(api_urls.carts.post_cart, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(payload)
    });

    try {
      if (response.ok) {
        SuccessToast(`${payload.cartItems[0].quantity} bag(s) of ${product.name} added to cart`);
      } else {
        const message = await response.text();
        ErrorToast(message);
      }
    } catch (error: any) {
      ErrorToast('Error occured' + error.toString());
    } finally {
      dispatchLoader(false);
    }
  };

  const handleOrderSample = () => {
    console.log('Ordering sample');
  };

  return (
    <>
      {!skeleton ? (
        <div className={`border rounded-[10px] bg-white border-primary/30 px-5 py-5 h-fit`}>
          <div
            className="font-medium text-base mb-3 cursor-pointer truncate"
            onClick={() => navigate('/product/' + product.itemId)}
          >
            {product.name}
          </div>

          <div className="font-normal mb-3 flex gap-1 items-center">
            <span>
              <img src="/icons/coffee-bean.svg" alt="Coffee Bean" />
            </span>
            <span className="font-normal lower-case text-[12px]">{product.flavor}</span>
          </div>

          <div className={`font-normal mb-3 ${!isUserLoggedIn && 'hidden'}`}>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between">
                <p className={`text-primary text-sm md:text-[12px]`}>
                  ${product.sampleUnitPrice}/lb
                </p>
                <Badge
                  variant="outline"
                  className={`${!product.sampleAvailable && 'hidden'} bg-badgebackground border-none font-normal flex items-center gap-1 h-[20px] text-[11px] rounded-[7px]`}
                >
                  <div className="h-[5px] w-[5px] rounded-full bg-[#f44336]"></div>
                  <p className="text-[#f44336] text-xs md:text-[10px]">Not Available</p>
                </Badge>
              </div>

              <div className="flex justify-between">
                <p className={`text-primary text-sm md:text-[12px]`}>${product.unitPrice}/bag</p>
                {!product.stockAvailable && (
                  <Badge
                    variant="outline"
                    className="bg-badgebackground border-none font-normal flex items-center gap-1 h-[20px] text-[11px] rounded-[7px]"
                  >
                    <div className="h-[5px] w-[5px] rounded-full bg-[#f44336]"></div>
                    <p className="text-[#f44336] text-xs md:text-[10px]">Not Available</p>
                  </Badge>
                )}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 text-[12px] justify-between mb-4">
            <p className="font-medium truncate">{product.wareHouse}</p>
            <p className="font-normal text-inactive truncate">{product.lotNumber}</p>
          </div>

          {isUserLoggedIn ? (
            <div className="max-w-full flex flex-col gap-2 justify-between md:flex-row">
              <Button
                type="submit"
                size="sm"
                onClick={_handleAddToCart}
                className="w-full h-[45px] md:h-[25px] md:text-[10px] rounded-[6px] bg-primary text-xs text-white overflow-hidden whitespace-nowrap truncate"
                disabled={!product.stockAvailable}
              >
                {!addingToCart ? 'Add to Cart' : 'Adding ...'}
              </Button>

              <Button
                type="submit"
                size="sm"
                onClick={handleOrderSample}
                className="w-full h-[45px] md:h-[25px] lg:grow md:text-[10px] rounded-[6px] text-primary text-xs bg-white border border-primary truncate"
                disabled={!product.stockAvailable}
              >
                Request Sample
              </Button>
            </div>
          ) : (
            <Button
              onClick={handleLoginNavigation}
              className="w-full h-[45px] md:h-[35px] md:text-[10px] text-xs rounded-[6px] overflow-hidden whitespace-nowrap truncate"
            >
              Log In To Buy/Sample
            </Button>
          )}
        </div>
      ) : (
        <div className="flex flex-col space-y-3">
          <Skeleton className="h-[125px] bg-gray-200 rounded-xl" />
          <Skeleton className="h-8 bg-gray-200" />
        </div>
      )}
    </>
  );
};

export default Product;
