import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';

import { EditContactForm } from '@/components/forms/EditContactForm';
import { Edit } from 'lucide-react';
import { ProfileProps, User } from '@/pages/profile';

export function EditDialog({ user }: ProfileProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="flex tems-center gap-3 w-[89px] h-[32px]  md:h-[34px] rounded-[6px] md:rounded-[8px] bg-primary text-white md:p-5">
          <span>
            <Edit className="md:h-[18px] md:w-[18px] h-4 w-4" />
          </span>{' '}
          <span className="text-sm md:text-base">Edit</span>
        </Button>
      </DialogTrigger>
      <DialogContent className=" w-[90%] rounded-[10px] sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="font-semibold text-[17px] md:text-xl text-left">
            Edit Contact Information
          </DialogTitle>
        </DialogHeader>

        <EditContactForm user={user} />
      </DialogContent>
    </Dialog>
  );
}
