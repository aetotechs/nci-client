import { useEffect, useState } from 'react';
import { FetchRegions } from '../hooks/api-routes';
import { IRegions } from '@/components/admin/tables/RegionsTable';

export function GetRegions() {
  const [regions, setRegions] = useState<IRegions[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchregions = async () => {
      setLoading(true);

      try {
        const response = await fetch(FetchRegions);
        if (response.ok) {
          const data = await response.json();
          setRegions(data);
        } else {
        }
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };

    fetchregions();
  }, [regions]);

  return regions;
}
