import { Button } from '@/components/ui/button';

import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Link } from 'react-router-dom';

export function AccountPopover() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="h-[45px] w-[80px] rounded-xl">
          <Link to="/profile">Profile</Link>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[232px] h-[130px] rouded-[10px] border-none mt-5 ">
        <div className="flex flex-col gap-3 px-2">
          <Link to="/my-account">My Account</Link>
          <Link to="/my-wishlist">Wishlist</Link>
          <Link to="/login">Log Out</Link>
        </div>
      </PopoverContent>
    </Popover>
  );
}
