import { Button } from '@/components/common/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/common/ui/dialog';
import { Edit } from 'lucide-react';

import { EditBillingAddressForm } from '../forms/EditBillingAddressForm';

export function EditBillingAddressDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="flex tems-center gap-3 w-[89px] h-[30px] text-sm  my-4 rounded-[6px] bg-primary text-white ">
          <span>
            <Edit className="h-4 w-4" />
          </span>{' '}
          Edit
        </Button>
      </DialogTrigger>
      <DialogContent className="rounded-md w-[90%]">
        <DialogHeader>
          <DialogTitle className="md:font-medium font-semibold text-left md:text-center md:text-base text-[17px]">
            Edit Billing Address
          </DialogTitle>
        </DialogHeader>
        <EditBillingAddressForm />
      </DialogContent>
    </Dialog>
  );
}
