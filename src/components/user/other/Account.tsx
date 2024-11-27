import { Button } from '@/components/common/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/common/ui/popover';
import { useLoading } from '@/utils/context/LoaderContext';
import { logout } from '@/utils/cookies/UserCookieManager';
import { Link, useNavigate } from 'react-router-dom';

export function AccountPopover() {
  const navigate = useNavigate();
  const { dispatchLoader } = useLoading();

  const handleLogout = () => {
    if (confirm("Are you sure you want to logout?")) {
      dispatchLoader(true);
      
      logout();
      setTimeout(() => {
        dispatchLoader(false);
        navigate(-1);
      }, 500); 
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="w-full rounded-[10px]">Profile</Button>
      </PopoverTrigger>
      <PopoverContent className="w-[232px] text-sm rounded-[10px] border-none mt-6 mr-16">
        <div className="flex flex-col gap-3 px-2">
          <Link to="/profile">My Account</Link>
          <Link to="/profile">Wishlist</Link>
          <span className="cursor-pointer" onClick={handleLogout}>
            Log Out
          </span>
        </div>
      </PopoverContent>
    </Popover>
  );
}