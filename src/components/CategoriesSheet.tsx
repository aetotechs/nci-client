import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const fetchCategories = async () => {
  return [
    { id: 1, name: 'Top Lots', type: 'Curated Categories' },
    { id: 2, name: 'Espresso Options', type: 'Curated Categories' },
    { id: 3, name: 'Great for Cold Brew', type: 'Curated Categories' },
    { id: 4, name: 'Staff Picks', type: 'Curated Categories' },
    { id: 5, name: 'Naturals', type: 'Curated Categories' },
    { id: 6, name: 'Cafe Delas', type: 'Nile Coffee Brands' },
    { id: 7, name: 'Brazil Eagle Mogiana', type: 'Nile Coffee Brands' },
    { id: 8, name: 'Brazil Eagle Espresso', type: 'Nile Coffee Brands' },
    { id: 9, name: 'Colombia Dulima', type: 'Nile Coffee Brands' },
    { id: 10, name: 'Peru Kovachii', type: 'Nile Coffee Brands' },
    { id: 11, name: 'New Spot', type: 'New Arrivals' },
    { id: 12, name: 'New Forward', type: 'New Arrivals' }
  ];
};

export function CategoriesSheet() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState<{ id: number; name: string; type: string }[]>([]);

  useEffect(() => {
    async function loadCategories() {
      const data = await fetchCategories();
      setCategories(data);
    }
    loadCategories();
  }, []);

  const HandleClick = (name: string) => {
    navigate(`/category/${name}`);
  };

  const categorizedData = categories.reduce(
    (acc: { [key: string]: { id: number; name: string }[] }, category) => {
      if (!acc[category.type]) {
        acc[category.type] = [];
      }
      acc[category.type].push({ id: category.id, name: category.name });
      return acc;
    },
    {}
  );

  return (
    <Popover>
      <PopoverTrigger asChild>
        <p>Categories</p>
      </PopoverTrigger>
      <PopoverContent className="md:w-[1232px] md:mx-14 md:mt-9 p-0 overflow-hidden">
        <div className="flex flex-col gap-2 md:grid md:grid-cols-3 mt-5 mb-10 md:ml-28">
          {Object.keys(categorizedData).map((categoryType) => (
            <div key={categoryType} className="text-textcolor flex flex-col gap-1">
              <h3 className="font-semibold text-base">{categoryType}</h3>
              {categorizedData[categoryType].map((item) => (
                <p key={item.id} className="cursor-pointer" onClick={() => HandleClick(item.name)}>
                  {item.name}
                </p>
              ))}
            </div>
          ))}
        </div>

        <div className="py-1 fixed bottom-0 bg-muted w-[1230px] rounded-bl-md rounded-br-md text-center text-textcolor">
          <span className="font-semibold">C-Market: $2.43 USD </span>
          <span className="font-normal">as of 03/05/2024</span>
        </div>
      </PopoverContent>
    </Popover>
  );
}
