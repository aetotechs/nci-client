import { Button } from '@/components/common/ui/button';
import { ChevronLeft } from 'lucide-react';
import { Checkbox } from '@/components/common/ui/checkbox';
import { Link } from 'react-router-dom';
import { ItemsTable } from '@/components/user/other/cart/ItemsTable';
import { DeleteDialog } from './ClearCartDialog';
import { useCart } from '@/utils/hooks/CartHook';

function ShoppingCart() {
  const { cart, areAllSelected, selectAllCartItems, selectCartItem, updateProductQuantity, removeProductFromCart } = useCart();
  // console.log(cart);

  return (
    <div className="md:mx-5 bg-white px-2 py-4 md:px-10 md:py-5 flex flex-col rounded-[8px]">
      <div className="flex justify-between mb-4 md:mb-0">
        <h3 className="font-bold text-base">Shopping Cart</h3>
        <div className="flex items-center gap-1">
          <Checkbox className="h-4 w-4" checked={areAllSelected} onCheckedChange={() => selectAllCartItems(!areAllSelected)} />
          <p className="text-[13px] font-medium"> Select All <span>({cart.length})</span> </p>
        </div>
      </div>
      <div className="">
        <ItemsTable 
          cart={cart}
          selectCartItem={selectCartItem}
          updateProductQuantity={updateProductQuantity}
          removeProductFromCart={removeProductFromCart}
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
        <DeleteDialog/>
      </div>
    </div>
  );
}

export default ShoppingCart;