import { useState, useEffect } from 'react';
import { api_urls } from '../commons/api-urls';

export function useCategories(page: number, size: number) {
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      try {
        const response = await fetch(api_urls.categories.get_all_categories(page, size));
        if (response.ok) {
          const data: any[] = await response.json();
          setCategories((prev) => (prev.length > 0 ? [...prev, ...data] : data));
          if (data.length < size) setHasMore(false);
        } else {
          setError(await response.text());
        }
      } catch (err: any) {
        setError(err.message || 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, [page, size]);

  return { categories, loading, hasMore, error };
}