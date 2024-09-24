import { SearchIcon, ShoppingCart } from 'lucide-react';
import NavItems from '@/components/NavItems';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { AccountPopover } from '@/components/Account';


import { MobileNav } from './MobileNav';
import { IStatus } from '@/App';

function Header({ status }:IStatus){
  return (
    <div className="bg-white flex  justify-between p-5 md:rounded-[30px] top-0  md:h-[89px] md:sticky md:top-2 shadow-md z-40 w-[100%] md:w-full">
      <Link to="/">
        <div className="w-[12vw]  h-12  md:h-12">
          <img src="/logos/logo.png" alt="coffee logo"  />
        </div>
      </Link>

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
