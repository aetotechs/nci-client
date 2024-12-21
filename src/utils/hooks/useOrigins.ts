import { useState, useEffect, useMemo } from 'react';
import { api_urls } from '../commons/api-urls';

export function useOrigins(page: number, size: number) {
  const [origins, setOrigins] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchOrigins = async () => {
      setLoading(true);
      try {
        const response = await fetch(api_urls.origins.get_all_origins(page, size));
        if (response.ok) {
          const data: any[] = await response.json();
          console.log(data);
          setOrigins((prev) => (prev.length > 0 ? [...prev, ...data] : data));
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

    fetchOrigins();
  }, [page, size]);

  return { origins, loading, hasMore, error };
}