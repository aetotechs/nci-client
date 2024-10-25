import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/common/ui/dialog';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../../common/ui/button';

export function DialogDemo({ role, name }: { role: string; name: string }) {
  const [currentRole] = useState(role);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex w-full items-center cursor-pointer justify-between">
          <span>{role}</span>
          <span>
            <ChevronDown className="h-3 w-3 justify-self-end" />
          </span>
        </div>
      </DialogTrigger>
      <DialogContent className="w-[245px] p-0 pb-2 pr-2">
        <DialogHeader className="px-2 ">
          <DialogTitle className="font-medium text-[15px] mt-6 ">Change user role</DialogTitle>
        </DialogHeader>

        <div className="flex items-center gap-2 px-2">
          <div>
            <img src="/icons/user.svg" alt="User" />
          </div>
          <div className="font-medium">
            <h3 className="text-[13px] ">{name}</h3>
            <p className="flex items-center text-[12px] gap-2">
              <span className="line-through">{role}</span>
              <span>
                <ArrowRight className="h-4 w-4 text-primary" />
              </span>
              <span>{currentRole === 'Admin' ? 'User' : 'Admin'}</span>
            </p>
          </div>
        </div>
        <DialogFooter className="border-t">
          <Button type="submit" className="h-6 mt-1">
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
