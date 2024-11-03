import { useEffect, useState } from 'react';
import { fetchItemsRoute } from '@/utils/hooks/api-routes';
import { IProduct } from '../commons/TypeInterfaces';

export function FetchProducts() {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(fetchItemsRoute);
        if (response.ok) {
          const data = await response.json();
          setProducts(data);
        } else {
        }
      } catch (error) {}
    };

    fetchProducts();
  }, [products]);

  return products;
}
