import { useState, useEffect } from 'react';
import { api_urls } from '../commons/api-urls';
import { useLoading } from '../context/LoaderContext';

export function useItems(page: number, size: number, filters?: any) {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { dispatchLoader } = useLoading();

  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      dispatchLoader(true);
      try {
        const response = await fetch(
            api_urls.items.get_all_products(page, size),
            // filters.length > 0
            //   ? {
            //       method: 'GET',
            //       headers: {
            //         'Content-Type': 'application/json',
            //       },
            //       body: JSON.stringify(filters),
            //     }
            //   : undefined
          );
          
        if (response.ok) {
          const data: any[] = await response.json();
          setProducts((prev) => {
            const uniqueItems = [...prev, ...data].filter(
              (item, index, array) =>
                array.findIndex((i) => i.id === item.id) === index
            );
            return uniqueItems;
          });

          if (data.length < size) setHasMore(false);
        } else {
          setError(await response.text());
        }
      } catch (err: any) {
        setError(err.message || 'An error occurred');
      } finally {
        setLoading(false);
        dispatchLoader(false);
      }
    };

    fetchItems();
  }, [page, size, filters]);

  return { products, loading, hasMore, error };
}