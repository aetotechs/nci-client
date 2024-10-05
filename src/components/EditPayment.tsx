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
        <Button className="flex tems-center gap-3 w-[89px] mt-4 h-[30px] rounded-[6px] md:rounded-[8px] bg-primary text-white ">
          <span>
            <Edit className="h-4 w-4" />
          </span>{' '}
          Edit
        </Button>
      </DialogTrigger>
      <DialogContent className=" w-[90%] rounded-[10px] sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="font-medium text-base text-left">Edit Payment Method</DialogTitle>
        </DialogHeader>

        <EditMethodForm />
      </DialogContent>
    </Dialog>
  );
}
