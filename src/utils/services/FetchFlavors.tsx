import { useEffect, useState } from 'react';
import {  GetStatuses } from '@/utils/hooks/api-routes';

export function FetchFlavors() {
  const [flavors, setFlavors] = useState<[]>([]);

  useEffect(() => {
    const fetchflavors = async () => {
      try {
        const response = await fetch(GetStatuses);
        if (response.ok) {
          const data = await response.json();
          setFlavors(data);
        } else {
        }
      } catch (error) {}
    };

    fetchflavors();
  }, []);

  return flavors;
}
