import ShoppingCart from '@/components/user/other/ShoppingCart';

function CartWithItems({ items }: any) {
  return (
    <div>
      <ShoppingCart items={items} />
    </div>
  );
}

export default CartWithItems;
