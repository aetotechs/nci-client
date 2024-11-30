import { Button } from '@/components/common/ui/button';
import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ItemsTable } from '@/components/user/other/cart/ItemsTable';
import { DeleteDialog } from './ClearCartDialog';
import { useLoading } from '@/utils/context/LoaderContext';
import { api_urls } from '@/utils/commons/api-urls';
import { getUserToken } from '@/utils/cookies/UserCookieManager';
import { ErrorToast, SuccessToast } from '@/components/common/ui/Toasts';

interface ICartItem {
  productId: string;
  quantity: number;
}
interface ICartPropTypes {
  cartId: string;
  cartItems: ICartItem[];
}

function ShoppingCart({ cart, reloadCart }: { cart: ICartPropTypes } | any) {
  const { dispatchLoader } = useLoading();
  const token = getUserToken();

  const handleClearCart = async ()  => {
    dispatchLoader(true);
    try{
      const response = await fetch( api_urls.carts.cart_items.clear_cart(cart.cartId),
        {
          method: "DELETE",
          headers: {
            "Authorization" : `Bearer ${token}`
          }
        }
      )

      const resposeMessage = await response.text();
      if(response.ok){
        SuccessToast(resposeMessage);
        await reloadCart();
      } else{
        ErrorToast(resposeMessage);
      }
    } catch(error: any){
      ErrorToast("An error occured" + error.toString());
    } finally{
      dispatchLoader(false);
    }
  }

  return (
    <div className="md:mx-5 bg-white px-2 py-4 md:px-10 md:py-5 flex flex-col rounded-[8px]">
      <div className="flex justify-between mb-4 md:mb-0">
        <h3 className="font-bold text-base">Shopping Cart</h3>
        <div className="flex items-center gap-1">
          {/* <Checkbox className="h-4 w-4" checked={areAllSelected} onCheckedChange={handleSelectAll} />
          <p className="text-[13px] font-medium"> Select All <span>({cart?.cartItems?.length})</span> </p> */}
          <p className="text-[13px] font-medium"> Selected <span>({cart?.cartItems?.length})</span> </p>
        </div>
      </div>
      <div className="">
        <ItemsTable 
          cartItems={cart.cartItems}
          reloadCart={reloadCart}
          />
      </div>
      <div className="flex justify-between mt-3 md:mt-4">
        <Link to="/coffee-shop">
          <Button
            className="flex gap-2 rounded-[6px] md:rounded-[10px] md:w-[109px] h-8 md:h-10"
            variant="outline"
          >
            <span>
              <ChevronLeft className="w-4 h-4" />
            </span>
            <span className="text-sm">Back</span>
          </Button>
        </Link>
        <DeleteDialog clearCartItems={handleClearCart}/>
      </div>
    </div>
  );
}

export default ShoppingCart;
