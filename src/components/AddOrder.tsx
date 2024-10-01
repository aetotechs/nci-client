import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet';
import { SelectCustmerForm } from './forms/SelectCustomerForm';
import { Plus } from 'lucide-react';

export function OrderSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="gap-2">
          <span>
            <Plus className="h-4 w-4" />
          </span>
          Add Order
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="m-3 px-2">
            <h3 className="font-semibold text-xl">Select Customer</h3>
          </SheetTitle>
        </SheetHeader>
        <SelectCustmerForm />

        <SheetFooter className="border-t mt-10 md:mt-44">
          <SheetClose asChild>
            <Button type="submit" className="mx-3 my-2">
              Proceed
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
