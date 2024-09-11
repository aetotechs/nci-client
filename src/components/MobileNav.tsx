import { Button } from '@/components/ui/button';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import NavItems from '@/components/NavItems';
import { IStatus } from '@/App';
import { AccountPopover } from './Account';
import { Link } from 'react-router-dom';

export function MobileNav({ status }: IStatus) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu className="text-icon text-2xl" />
      </SheetTrigger>
      <SheetContent className="pt-10">
        <NavItems />
        <div className="flex justify-center mt-5 md:mt-5">
          {status ? (
            <AccountPopover />
          ) : (
            <Link to="/login">
              <Button className="h-[45px] w-[100%] rounded-xl">Login</Button>
            </Link>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
