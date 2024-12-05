import { useEffect, useState } from 'react';
import { FetchUser, GetOrderById, GetOrderItems, GetTransactions } from '../hooks/api-routes';
import { getUserToken } from '../cookies/UserCookieManager';

export function FetchTransactions() {
  const token: string | null = getUserToken();

  const [transactions, setTransactions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchtransactions = async () => {
      setLoading(true);

      try {
        const response = await fetch(GetTransactions, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        if (response.ok) {
          const transcationdata = await response.json();
          console.log(transcationdata);

          const enrichedTransactions = await Promise.all(
            transcationdata.map(async (transaction: any) => {
              const userResponse = await fetch(FetchUser(transaction.userEmail), {
                headers: { Authorization: `Bearer ${token}` }
              });

              const orderResponse = await fetch(GetOrderItems(transaction.orderId), {
                headers: { Authorization: `Bearer ${token}` }
              });
              console.log(userResponse);
              console.log(orderResponse);
              const userDetails = userResponse.ok ? await userResponse.json() : null;
              const orderDetails = orderResponse.ok ? await orderResponse.json() : null;

              return { ...transaction, userDetails, orderDetails };
            })
          );

          setTransactions(enrichedTransactions);
        } else {
          console.error('Failed to fetch Transactions');
        }
      } catch (error) {
        console.error('Error fetching Transactions:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchtransactions();
  }, []);

  return transactions;
}
