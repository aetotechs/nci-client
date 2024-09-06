import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import { Checkbox } from '@/components/ui/checkbox';

const Listings = [
  {
    title: 'Category',
    items: ['Africa & Middle East', 'Asia & Pacific Islands', 'Latin America & Caribbean']
  },
  {
    title: 'Warehouse',
    items: ['United States', 'United States', 'United States']
  },
  {
    title: 'Status',
    items: ['Spot']
  },
  {
    title: 'Country Of Origin',
    items: [
      'Bolivia',
      'Brazilian Green Coffee',
      'Colombian Green Coffee',
      'Costa Rican Green Coffee',
      'El Salvador Green Coffee',
      'Guatemalan Green Coffee',
      'Honduran Green Coffee',
      'Mexican Green Coffee',
      'Nicaraguan Green Coffee',
      'Panamanian Green Coffee',
      'Peruvian Green Coffee'
    ]
  },
  {
    title: 'Processing',
    items: ['Natural/Dry Processed', 'Washed']
  },
  {
    title: 'Flavour Wheel',
    items: ['Berry', 'Caramel', 'Chocolate', 'Fruity', 'Nutty', 'Stone Project']
  },
  {
    title: 'Bag Weight',
    items: ['30kg Bag', '50kg Bag', '70kg Bag']
  },
  {
    title: 'Plant Species',
    items: ['Arabica']
  }
];

function CoffeeListings() {
  return (
    <div>
      <Accordion type="multiple" className="w-full">
        {Listings.map((listing, index) => (
          <AccordionItem key={index} value={`item-${index + 1}`}>
            <AccordionTrigger className="font-medium text-base text-black">
              {listing.title}
            </AccordionTrigger>
            <AccordionContent>
              <ul className="flex flex-col gap-3">
                {listing.items.map((item, idx) => (
                  <li key={idx} className="flex gap-3 items-center font-normal text-base">
                    <Checkbox className="border-rgba(108, 109, 118, 1)" />
                    {item}
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export default CoffeeListings;
