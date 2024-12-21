import { createContext, useContext, useState, ReactNode } from 'react';

interface FiltersContextType {
  selectedFilters: Record<string, string | null>;
  handleSelectionChange: (title: string, value: string) => void;
}

const FiltersContext = createContext<FiltersContextType | undefined>(undefined);

export const FiltersProvider = ({ children }: { children: ReactNode }) => {
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string | null>>({});

  const handleSelectionChange = (title: string, value: string) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [title]: prev[title] === value ? null : value,
    }));
  };

  return (
    <FiltersContext.Provider value={{ selectedFilters, handleSelectionChange }}>
      {children}
    </FiltersContext.Provider>
  );
};

export const useFilters = () => {
  const context = useContext(FiltersContext);
  if (!context) {
    throw new Error('useFilters must be used within a FiltersProvider');
  }
  return context;
};
