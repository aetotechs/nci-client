import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet';
import CoffeeListings from './CoffeeListings';

export function FilterSheet() {
  return (
    <Sheet >
      <SheetTrigger asChild>
        <Button variant="outline" className="text-primary border-primary w-[111px] gap-2">
          <span>
            <img src="/icons/filter.png" />
          </span>
          Filters
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className='border-b-white shadow-md w-[100%] mb-1 text-left flex items-center py-5 '>Filter</SheetTitle>
        
        </SheetHeader>
        <div className="grid gap-4 p-4">
        <CoffeeListings />
        </div>
      
      </SheetContent>
    </Sheet>
  );
}
