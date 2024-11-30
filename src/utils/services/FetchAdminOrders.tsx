import { useEffect, useState } from 'react';
import { GetAllOrders } from '../hooks/api-routes';
import { getUserToken } from '../cookies/UserCookieManager';

export function GetOrders() {
  const token: string | null = getUserToken();

  const [orders, setOrders] = useState<[]>([]);
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
          const data = await response.json();
          setOrders(data);
        } else {
        }
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [orders]);

  return orders;
}
