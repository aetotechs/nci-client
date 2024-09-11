import { SearchIcon, ShoppingCart, Menu } from 'lucide-react'; // Import the Menu icon
import NavItems from '@/components/NavItems';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { AccountPopover } from '@/components/Account';
import { IStatus } from '@/App';

import { MobileNav } from './MobileNav';

function Header({ status }: IStatus) {
  return (
    <div className="bg-white flex justify-between p-5 md:rounded-[30px] top-0  md:sticky md:top-5 shadow-md z-40 w-[100%] md:w-full">
      <div className="w-[130px] h-12 md:w-52 md:h-12">
        <img src="/logos/logo.png" alt="coffee logo" width="200" height={38} />
      </div>

      <div className="hidden md:flex">
        <NavItems />
      </div>

      <div className="flex items-center gap-2 ">
        <div
          className="border flex items-center px-2 h-10 rounded-sm"
          style={{ backgroundColor: 'hsla(60, 88%, 97%, 0.69)' }}
        >
          <SearchIcon className="text-icon text-2xl" />
        </div>

        <div className="border flex items-center h-10 px-2 rounded-sm">
          <Link to="/shop">
            <ShoppingCart className="text-icon text-2xl" />
          </Link>
        </div>

        <div className="hidden md:flex">
          {status ? (
            <AccountPopover />
          ) : (
            <Link to="/login">
              <Button className="h-[45px] w-[80px] rounded-xl">Login</Button>
            </Link>
          )}
        </div>

        <div className="md:hidden flex items-center">
          <MobileNav status={status} />
        </div>
      </div>
    </div>
  );
}

export default Header;
