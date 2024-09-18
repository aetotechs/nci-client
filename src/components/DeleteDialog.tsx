import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
 
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';

import { Trash2Icon } from 'lucide-react';

export function DeleteDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
      <div className="flex items-center justify-center -mt-1 pl-3 gap-2 cursor-pointer">
          <Trash2Icon className="h-[14px] w-[14px]" />
          <span className='text-[13px] font-normal'>Delete</span>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className='font-semibold text-sm'>Are you sure you want to delete this category</DialogTitle>
        
        </DialogHeader>
        <div className="flex flex-col gap-2 border border-red-400 bg-destructive text-red-500 p-2 rounded-[5px]">
          <div className="flex gap-1 items-center ">
            <span>
             <img src="/icons/warning.svg" width={12} height={10} alt="Warning"/>
            </span>
            <span className='font-medium'>Warning</span>
          </div>
         <span className='text-[12px] font-normal'> By deleting this category, all its sub categories will also be permanently deleted.</span>
        </div>

        <DialogFooter>
          <Button type="submit" variant={'outline'} className='text-white bg-red-400'>Delete</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
