import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/common/ui/accordion';
import { useNavigate } from 'react-router-dom';

const categories = [
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

export function CategoriesMobile() {
  const navigate = useNavigate();

  const HandleClick = (name: string) => {
    navigate(`/region/${name}`);
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
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <p>Categories</p>
        </AccordionTrigger>
        <AccordionContent>
          {Object.keys(categorizedData).map((categoryType) => (
            <div key={categoryType} className="text-textcolor flex flex-col gap-1 ">
              <h3 className="font-semibold text-[15px] mt-2">{categoryType}</h3>
              {categorizedData[categoryType].map((item) => (
                <p key={item.id} className="cursor-pointer" onClick={() => HandleClick(item.name)}>
                  {item.name}
                </p>
              ))}
            </div>
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
