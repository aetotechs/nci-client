import { IOrder, OrdersTable } from '@/components/tables/OrdersTable';
import { ProfileProps } from '@/pages/profile';
import { useEffect, useState } from 'react';
const Orders = [
  {
    orderId: '7898',
    quantity: 54,
    total: 567,
    status: 'Delivered',
    date: 'Aug 31,2024'
  },
  {
    orderId: '7898',
    quantity: 54,
    total: 567,
    status: 'Delivered',
    date: 'Aug 31,2024'
  },
  {
    orderId: '7898',
    quantity: 54,
    total: 567,
    status: 'Processing',
    date: 'Aug 31,2024'
  },
  {
    orderId: '7898',
    quantity: 54,
    total: 567,
    status: 'Shipped',
    date: 'Aug 31,2024'
  }
];

function MyOrders({ user }: ProfileProps) {
  const [orders, setOrders] = useState<IOrder[]>([]);

  useEffect(() => {
    const fetchedOrders = Orders;

    setOrders(fetchedOrders);
  }, [orders]);
  return (
    <div className="md:w-[865px] w-[90%] px-4 ">
      <div>
        <h3 className="font-medium text-2xl text-textdark my-4 md:mt-0 md:mb-4">My Orders</h3>
      </div>
      <div>
        <OrdersTable orders={orders} />
      </div>
    </div>
  );
}

export default MyOrders;
