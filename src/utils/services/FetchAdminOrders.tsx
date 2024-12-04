import { useEffect, useState } from 'react';
import {
  FetchUser,
  GetAllOrders,
  GetCartById,
  GetOrderById,
  GetOrderItems
} from '../hooks/api-routes';
import { getUserToken } from '../cookies/UserCookieManager';

export function GetOrders() {
  const token: string | null = getUserToken();

  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      setLoading(true);

      try {
        const response = await fetch(GetAllOrders, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        if (response.ok) {
          const orderData = await response.json();
          console.log(orderData);

          const enrichedOrders = await Promise.all(
            orderData.map(async (order: any) => {
              const userResponse = await fetch(FetchUser(order.customerId), {
                headers: { Authorization: `Bearer ${token}` }
              });

              const orderResponse = await fetch(GetOrderItems(order.orderId), {
                headers: { Authorization: `Bearer ${token}` }
              });
              console.log(userResponse);
              console.log(orderResponse);
              const userDetails = userResponse.ok ? await userResponse.json() : null;
              const orderDetails = orderResponse.ok ? await orderResponse.json() : null;

              return { ...order, userDetails, orderDetails };
            })
          );

          setOrders(enrichedOrders);
        } else {
          console.error('Failed to fetch orders');
        }
      } catch (error) {
        console.error('Error fetching orders:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  return orders;
}
