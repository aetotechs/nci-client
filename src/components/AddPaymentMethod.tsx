import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import { PaymentMethodForm } from './forms/PayementMethodForm';
import { Button } from '@/components/ui/button';

export function AddPayementDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className=" h-[40px] my-4 rounded-[10px] text-sm font-medium">
          Add New Payment Card
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[90%] md:w-[700px] ">
        <DialogHeader>
          <DialogTitle className="font-medium text-left text-base">
            Add New Payment Method
          </DialogTitle>
        </DialogHeader>
        <PaymentMethodForm />
      </DialogContent>
    </Dialog>
  );
}
