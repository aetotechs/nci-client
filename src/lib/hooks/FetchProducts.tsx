import { useEffect, useState } from 'react';
import { FetchItems } from '../api-routes';
import { IProduct } from '@/components/ProductDetails';

export function FetchProducts() {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(FetchItems);
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
