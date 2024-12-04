import { useEffect, useState } from 'react';

export function FetchTransactions() {
  const [Transactions, setTransactions] = useState<[]>([]);

  useEffect(() => {
    const fetchtransactions = async () => {
      try {
        const response = await fetch('localhost:8080/payments');
        if (response.ok) {
          const data = await response.json();
          setTransactions(data);
        } else {
        }
      } catch (error) {}
    };

    fetchtransactions();
  }, [Transactions]);

  return Transactions;
}
