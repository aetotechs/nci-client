import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';

import { Trash2 } from 'lucide-react';

export function DeleteCustomer() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="gap-2 border-none bg-background">
          <span>
            <Trash2 className="h-4 w-4" />
          </span>
          Delete Customer
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="font-semibold text-sm">
            Are you sure you want to delete this customer
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-2 border border-red-400 bg-destructive text-red-500 p-2 rounded-[5px]">
          <div className="flex gap-1 items-center ">
            <span>
              <img src="/icons/warning.svg" width={12} height={10} alt="Warning" />
            </span>
            <span className="font-medium">Warning</span>
          </div>
          <span className="text-[12px] font-normal">
            By deleting this customer, their data will permanenetly be removed.
          </span>
        </div>

        <DialogFooter>
          <Button type="submit" variant={'outline'} className="text-white bg-red-400">
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
