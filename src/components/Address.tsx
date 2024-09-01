import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import { AddressForm } from '@/components/Forms/AddressForm';

function Address() {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Address</AccordionTrigger>
        <AccordionContent>
          <AddressForm />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export default Address;
