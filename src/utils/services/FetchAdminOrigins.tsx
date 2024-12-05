import { useEffect, useState } from 'react';
import { FetchOrigins } from '../hooks/api-routes';
import { IOrigins } from '@/components/admin/tables/OriginsTable';

export function GetOrigins() {
  const [origins, setOrigins] = useState<IOrigins[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrigins = async () => {
      setLoading(true);

      try {
        const response = await fetch(FetchOrigins);
        if (response.ok) {
          const data = await response.json();
          setOrigins(data);
        } else {
        }
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };

    fetchOrigins();
  }, [origins]);

  return origins;
}
