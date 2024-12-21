import { useState, useEffect } from 'react';
import { api_urls } from '../commons/api-urls';

export interface Filter {
  title: string;
  items: string[];
}

export function useListingsFilters() {
  const [filters, setFilters] = useState<Filter[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFilters = async () => {
      setLoading(true);
      try {
        const endpoints = [
          { title: 'specie', url: api_urls.constants.get_coffee_species },
          { title: 'flavour', url: api_urls.constants.get_coffee_flavours },
          { title: 'processingMode', url: api_urls.constants.get_coffee_processing_modes },
          { title: 'status', url: api_urls.constants.get_coffee_statuses },
          { title: 'wareHouse', url: api_urls.constants.get_coffee_warehouses },
          { title: 'bagWeight', url: api_urls.constants.get_coffee_bag_weights },
          { title: 'bagType', url: api_urls.constants.get_coffee_bag_types },
        ];

        const requests = endpoints.map(async (endpoint) => {
          const response = await fetch(endpoint.url);
          if (!response.ok) {
            throw new Error(`Failed to fetch ${endpoint.title}`);
          }
          const data = await response.json();
          console.log(data);
          return { title: endpoint.title, items: data };
        });

        const fetchedFilters = await Promise.all(requests);
        setFilters(fetchedFilters);
      } catch (err: any) {
        setError(err.message || 'An error occurred while fetching filters');
      } finally {
        setLoading(false);
      }
    };

    fetchFilters();
  }, []);

  return { filters, loading, error };
}
