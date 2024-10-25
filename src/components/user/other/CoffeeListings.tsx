import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/common/ui/accordion';
import { Checkbox } from '@/components/common/ui/checkbox';

interface Listing {
  title: string;
  items: string[];
}

interface IListings {
  Listings: Listing[];
}

function CoffeeListings({ Listings }: IListings) {
  return (
    <div>
      <Accordion type="multiple" className="w-full ">
        {Listings.map((listing, index) => (
          <AccordionItem key={index} value={`item-${index + 1}`}>
            <AccordionTrigger className="font-medium text-[15px] md:text-base text-black">
              {listing.title}
            </AccordionTrigger>
            <AccordionContent className="">
              <ul className="flex flex-col gap-3">
                {listing.items.map((item, idx) => (
                  <li key={idx} className="flex gap-3 items-center font-normal  md:text-base">
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
