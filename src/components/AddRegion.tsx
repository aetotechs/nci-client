import { Button } from '@/components/ui/button';

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { CategoryForm } from './forms/AddCategoryForm';
import { Plus } from 'lucide-react';
import { RegionForm } from './forms/AddRegionForm';

export function AddRegion() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="gap-2">
          <span>
            <Plus className="h-4 w-4" />
          </span>
          Add Region
        </Button>
      </SheetTrigger>
      <SheetContent className=" px-6">
        <SheetHeader>
          <SheetTitle className="mt-6 mb-2 font-semibold text-base">Add Region</SheetTitle>
        </SheetHeader>
        <div>
          <RegionForm />
        </div>
      </SheetContent>
    </Sheet>
  );
}
