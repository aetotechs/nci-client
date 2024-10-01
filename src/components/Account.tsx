import { Button } from '@/components/ui/button';

import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { logout } from '@/lib/cookie';
import { Link, useNavigate } from 'react-router-dom';

export function AccountPopover() {
  const navigate = useNavigate();
  const HandleClick = () => {
    logout();
    window.location.reload();

    navigate('/');
  };
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="h-[40px] w-[80px] rounded-[10px]">Profile</Button>
      </PopoverTrigger>
      <PopoverContent className="w-[232px] h-[130px] rouded-[10px] border-none mt-8 mr-24 ">
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
