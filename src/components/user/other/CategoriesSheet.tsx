import { Popover, PopoverContent, PopoverTrigger } from '@/components/common/ui/popover';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const fetchCategories = async () => {
  return [
    { id: 1, name: 'Top Lots', type: 'Curated Categories' },
    { id: 2, name: 'Espresso Options', type: 'Curated Categories' },
    { id: 3, name: 'Great for Cold Brew', type: 'Curated Categories' },
    { id: 4, name: 'Staff Picks', type: 'Curated Categories' },
    { id: 5, name: 'Naturals', type: 'Curated Categories' },
    { id: 1, name: 'Top Lots', type: 'Curateds Categories' },
    { id: 2, name: 'Espresso Options', type: 'Curateds Categories' },
    { id: 3, name: 'Great for Cold Brew', type: 'Curateds Categories' },
    { id: 4, name: 'Staff Picks', type: 'Curateds Categories' },
    { id: 5, name: 'Naturals', type: 'Curateds Categories' },
    { id: 6, name: 'Cafe Delas', type: 'Nile Coffee Brands' },
    { id: 7, name: 'Brazil Eagle Mogiana', type: 'Nile Coffee Brands' },
    { id: 8, name: 'Brazil Eagle Espresso', type: 'Nile Coffee Brands' },
    { id: 9, name: 'Colombia Dulima', type: 'Nile Coffee Brands' },
    { id: 10, name: 'Peru Kovachii', type: 'Nile Coffee Brands' },
    { id: 1, name: 'Top Lots', type: 'w' },
    { id: 2, name: 'Espresso Options', type: 'w' },
    { id: 3, name: 'Great for Cold Brew', type: 'w' },
    { id: 4, name: 'Staff Picks', type: 'w' },
    { id: 5, name: 'Naturals', type: 'w' },
    { id: 1, name: 'Top Lots', type: 'e' },
    { id: 2, name: 'Espresso Options', type: 'e' },
    { id: 3, name: 'Great for Cold Brew', type: 'e' },
    { id: 4, name: 'Staff Picks', type: 'e' },
    { id: 5, name: 'Naturals', type: 'e' },
    { id: 11, name: 'New Spot', type: 'New Arrivals' },
    { id: 12, name: 'New Forward', type: 'New Arrivals' },
    { id: 11, name: 'New Spot', type: 'Hot Arrivals' },
    { id: 12, name: 'New Forward', type: 'Hot Arrivals' }
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
      <PopoverContent className="md:w-[90vw] md:mx-14 md:mt-8 p-0 py-[4vh] overflow-auto max-h-[80vh]">
        <div className="flex flex-col gap-[3vw] md:grid md:grid-cols-3 mb-10 md:mx-[10%]">
          {Object.keys(categorizedData).map((categoryType) => (
            <div key={categoryType} className="text-textcolor flex flex-col gap-1">
              <h3 className="font-semibold text-base border-b mb-4 pb-2">{categoryType}</h3>
              {categorizedData[categoryType].map((item) => (
                <p key={item.id} className="cursor-pointer" onClick={() => HandleClick(item.name)}>
                  {item.name}
                </p>
              ))}
            </div>
          ))}
        </div>

        {/* <div className="py-1 fixed bottom-0 bg-muted w-[90vw] rounded-bl-md rounded-br-md text-center text-textcolor">
          <span className="font-semibold">C-Market: $2.43 USD </span>
          <span className="font-normal">as of 03/05/2024</span>
        </div> */}
      </PopoverContent>
    </Popover>
  );
}
