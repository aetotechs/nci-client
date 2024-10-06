import ShoppingCart from '@/components/ShoppingCart';
import { ITableProps } from './tables/ItemsTable';



function CartWithItems({items}:ITableProps) {
  return (
    <div>
      <ShoppingCart items={items} />
    </div>
  );
}

export default CartWithItems;
