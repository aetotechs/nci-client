import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@radix-ui/react-select';
import React, { useState } from 'react';

type LazySelectProps = {
  fetchOptions: () => Promise<string[]>;
  placeholder?: string;
};

const LazyDropDownSelector: React.FC<LazySelectProps> = ({ fetchOptions, placeholder = 'Select an option' }) => {
  const [options, setOptions] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [isFetched, setIsFetched] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  const handleToggleDropdown = async () => {
    if (!isFetched) {
      setLoading(true);
      try {
        const fetchedOptions = await fetchOptions();
        setOptions(fetchedOptions);
        setIsFetched(true);
      } catch (error) {
        console.error('Failed to fetch options:', error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div>
      <Select
        onValueChange={(value) => setSelectedValue(value)}
        value={selectedValue || undefined}
        onOpenChange={handleToggleDropdown}
      >
        <SelectTrigger>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {loading ? (
            <div className="flex items-center justify-center p-4">
              <span>Loading...</span>
            </div>
          ) : options.length > 0 ? (
            options.map((option) => (
              <SelectItem key={option} value={option}>
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </SelectItem>
            ))
          ) : (
            <div className="p-4">No options available</div>
          )}
        </SelectContent>
      </Select>
    </div>
  );
};

export default LazyDropDownSelector;