import ShoppingCart from '@/components/ShoppingCart';
import { ITable } from './tables/ItemsTable';



function CartWithItems({items}:ITable) {
  return (
    <div>
      <ShoppingCart items={items} />
    </div>
  );
}

export default CartWithItems;
