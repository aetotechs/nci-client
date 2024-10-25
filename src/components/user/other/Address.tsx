import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/common/ui/accordion';
import { AddressForm } from '@/components/user/forms/AddressForm';

function Address({ control }: { control: any }) {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Address</AccordionTrigger>
        <AccordionContent>
          <AddressForm control={control} />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export default Address;
