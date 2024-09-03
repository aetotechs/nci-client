import React from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';

import { ShippingAddressForm } from '@/components/forms/AddShippingAddressForm';

export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <p className="text-primary cursor-pointer text-base font-medium">Change Shipping Address</p>
      </DialogTrigger>
      <DialogContent className="w-[90%] md:w-[700px] ">
        <DialogHeader>
          <DialogTitle className="font-bold text-base">Add Shipping Address</DialogTitle>
          <DialogDescription className="font-normal text-[13px]">
            Ensure accurate and timely delivery by providing a complete address.
          </DialogDescription>
        </DialogHeader>
        <ShippingAddressForm />
      </DialogContent>
    </Dialog>
  );
}
