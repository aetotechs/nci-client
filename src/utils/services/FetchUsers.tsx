import { useEffect, useState } from 'react';
import { GetAllUsers, GetUserOrders } from '@/utils/hooks/api-routes';
import { getUserToken } from '../cookies/UserCookieManager';

export type User = {
  userId: string;
  firstName: string;
  lastName: string;
  workPhone: string;
  createdAt: string;
};

export type UserWithOrders = User & {
  orders: {
    totalAmount: number;
  }[];
};

export function FetchUsers() {
  const token: string | null = getUserToken();
  const [usersWithOrders, setUsersWithOrders] = useState<UserWithOrders[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsersAndOrders = async () => {
      try {
        const response = await fetch(GetAllUsers, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        if (!response.ok) {
          console.error('Failed to fetch users:', response.statusText);
          return;
        }

        const users: User[] = await response.json();

        const usersWithOrders = await Promise.all(
          users.map(async (user) => {
            try {
              const ordersResponse = await fetch(GetUserOrders(user.userId), {
                headers: {
                  Authorization: `Bearer ${token}`
                }
              });

              if (!ordersResponse.ok) {
                console.error(
                  `Failed to fetch orders for user ${user.userId}:`,
                  ordersResponse.statusText
                );
                return { ...user, orders: [] };
              }

              const orders = await ordersResponse.json();
              return { ...user, orders };
            } catch (orderError) {
              console.error(`Error fetching orders for user ${user.userId}:`, orderError);
              return { ...user, orders: [] };
            }
          })
        );

        setUsersWithOrders(usersWithOrders);
      } catch (error) {
        console.error('Error fetching users and orders:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsersAndOrders();
  }, [token]);

  return { usersWithOrders, loading };
}
