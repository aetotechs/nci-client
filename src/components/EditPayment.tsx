import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';

import { Edit } from 'lucide-react';
import { EditMethodForm } from '@/components/forms/EditPaymentMethodForm';

export function EditPaymentDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="flex tems-center gap-3 w-[89px] h-[34px] rounded-[8px] bg-primary text-white p-5">
          <span>
            <Edit className="h-[18px] w-[18px]" />
          </span>{' '}
          Edit
        </Button>
      </DialogTrigger>
      <DialogContent className=" w-[90%] rounded-[10px] sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="font-medium text-base">Edit Payment Method</DialogTitle>
        </DialogHeader>

        <EditMethodForm />
      </DialogContent>
    </Dialog>
  );
}
