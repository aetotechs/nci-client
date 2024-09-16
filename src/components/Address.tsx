import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import { AddressForm } from '@/components/forms/AddressForm';

function Address({ control }: { control: any }) {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Address</AccordionTrigger>
        <AccordionContent>
          <AddressForm control={control}/>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export default Address;
