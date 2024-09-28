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
        <Button className="flex tems-center gap-3 w-[89px] h-[34px] rounded-[8px] bg-primary text-white p-5">
          <span>
            <Edit className="h-[18px] w-[18px]" />
          </span>{' '}
          Edit
        </Button>
      </DialogTrigger>
      <DialogContent className=" w-[90%] rounded-[10px] sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="font-semibold text-xl">Edit Contact Information</DialogTitle>
        </DialogHeader>

        <EditContactForm user={user} />
      </DialogContent>
    </Dialog>
  );
}
