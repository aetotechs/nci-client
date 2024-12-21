import { useEffect, useState } from 'react';
import { ICategories } from '@/components/admin/tables/Categories';
import { FetchCategories } from '../hooks/api-routes';

export function GetCategories() {
  const [categories, setCategories] = useState<ICategories[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);

      try {
        const response = await fetch(FetchCategories);
        if (response.ok) {
          const data = await response.json();
          setCategories(data);
        } else {
        }
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return categories;
}
