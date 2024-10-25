import ShoppingCart from '@/components/user/other/ShoppingCart';
import { ITable, ITableProps } from '../../admin/tables/ItemsTable';

function CartWithItems({ items }: ITable) {
  return (
    <div>
      <ShoppingCart items={items} />
    </div>
  );
}

export default CartWithItems;
