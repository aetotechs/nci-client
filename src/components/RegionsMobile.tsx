import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import { useNavigate } from 'react-router-dom';

const countries = [
  { id: 1, name: 'Brazil' },
  { id: 2, name: 'Colombia' },
  { id: 3, name: 'Bolivia' },
  { id: 4, name: 'Mexico' },
  { id: 5, name: 'Peru' },
  { id: 6, name: 'India' },
  { id: 7, name: 'Sumatra' },
  { id: 8, name: 'Papua' },
  { id: 9, name: 'Sulawesi' },
  { id: 10, name: 'Java' },
  { id: 11, name: 'Burundi' },
  { id: 12, name: 'Kenya' },
  { id: 13, name: 'Tanzania' },
  { id: 14, name: 'Uganda' },
  { id: 15, name: 'Ethiopia' }
];

export function RegionsMobile() {
  const navigate = useNavigate();

  const HandleClick = (name: string) => {
    navigate(`/region/${name}`);
  };
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <p>Regions</p>
        </AccordionTrigger>
        <AccordionContent>
          {countries.map((country) => (
            <div key={country.id} className="text-textcolor flex flex-col ">
              <p className="cursor-pointer py-[2px]" onClick={() => HandleClick(country.name)}>
                {country.name}
              </p>
            </div>
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
