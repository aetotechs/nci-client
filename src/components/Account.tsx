import { Button } from '@/components/ui/button';

import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { logout } from '@/lib/cookie';
import { Link, useNavigate } from 'react-router-dom';

export function AccountPopover() {
  const navigate = useNavigate();
  const HandleClick = () => {
    logout();

    setTimeout(() => {
      navigate('/');
      window.location.reload();
    }, 2000);
  };
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className=" w-full rounded-[10px]">Profile</Button>
      </PopoverTrigger>
      <PopoverContent className="w-[232px]  text-sm rouded-[10px] border-none mt-6 mr-16 ">
        <div className="flex flex-col gap-3 px-2">
          <Link to="/profile">My Account</Link>
          <Link to="/profile">Wishlist</Link>
          <span className="cursor-pointer" onClick={HandleClick}>
            Log Out
          </span>
        </div>
      </PopoverContent>
    </Popover>
  );
}
