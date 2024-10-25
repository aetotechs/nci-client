import { useEffect, useState } from 'react';
import { IProduct } from '@/components/user/other/ProductDetails';
import { FetchItems } from '@/utils/hooks/api-routes';

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
