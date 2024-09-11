import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import { Edit } from 'lucide-react';

import { EditShippingAddressForm } from './forms/EditShippingAddressForm';

export function EditAddressDialog() {
  return (
    <Dialog >
      <DialogTrigger asChild>
        <Button className="flex tems-center gap-3 w-[89px] h-[20px] mb-4 rounded-[8px] bg-primary text-white p-5">
          <span>
            <Edit className="h-[18px] w-[18px]" />
          </span>{' '}
          Edit
        </Button>
      </DialogTrigger>
      <DialogContent className="rounded-md w-[90%]">
        <DialogHeader>
          <DialogTitle className="font-medium text-base">Edit Shipping Address</DialogTitle>
        </DialogHeader>
        <EditShippingAddressForm />
      </DialogContent>
    </Dialog>
  );
}
