import { Button } from '@/components/common/ui/button';

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/common/ui/sheet';
import { Plus } from 'lucide-react';
import { OriginForm } from '../forms/AddOriginForm';

export function AddOrigin() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="gap-2">
          <span>
            <Plus className="h-4 w-4" />
          </span>
          Add Origin
        </Button>
      </SheetTrigger>
      <SheetContent className=" px-6">
        <SheetHeader>
          <SheetTitle className="mt-6 mb-2 font-semibold text-base">Add Origin</SheetTitle>
        </SheetHeader>
        <div>
          <OriginForm />
        </div>
      </SheetContent>
    </Sheet>
  );
}
