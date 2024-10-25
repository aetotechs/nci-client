import { Button } from '@/components/common/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/common/ui/dialog';

import { Plus } from 'lucide-react';
import { AddUserForm } from '../forms/AddUserForm';

export function AddUser() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="gap-2 h-[34px]">
          <span>
            <Plus className="h-4 w-4" />
          </span>
          Add User
        </Button>
      </DialogTrigger>
      <DialogContent className=" w-[24vw] rounded-[10px] sm:max-w-[425px] px-0">
        <DialogHeader>
          <DialogTitle className="font-medium text-[15px] pl-3">Add New User</DialogTitle>
        </DialogHeader>

        <AddUserForm />
      </DialogContent>
    </Dialog>
  );
}
