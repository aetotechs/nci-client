import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/common/ui/dialog';

import { ShippingAddressForm } from '@/components/user/forms/AddShippingAddressForm';

export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <p className="text-texthighlight underline cursor-pointer text-sm md:text-[13px] font-medium">
          Change Shipping Address
        </p>
      </DialogTrigger>
      <DialogContent className="w-[90%] md:w-[700px] ">
        <DialogHeader>
          <DialogTitle className="font-bold text-base text-left ">Add Shipping Address</DialogTitle>
          <DialogDescription className="font-normal text-[13px] hidden md:flex">
            Ensure accurate and timely delivery by providing a complete address.
          </DialogDescription>
        </DialogHeader>
        <ShippingAddressForm />
      </DialogContent>
    </Dialog>
  );
}
