import { SearchIcon, ShoppingCart } from 'lucide-react';
import NavItems from '@/components/common/other/NavItems';
import { Button } from '@/components/common/ui/button';
import { Link } from 'react-router-dom';
import { AccountPopover } from '@/components/user/other/Account';

import { MobileNav } from '../../common/other/MobileNav';
import { useState } from 'react';
import Search from './Search';
export interface HeaderProps {
  status: boolean;
  handleSearch?: (searchTerm: string) => void;
}

function Header({ status, handleSearch }: HeaderProps) {
  const [isSearchActive, setIsSearchActive] = useState(false);

  const handleSearchClick = () => {
    setIsSearchActive(true);
  };
  const handleCloseSearch = () => {
    setIsSearchActive(false);
  };
  return (
    <div
      className={`bg-white flex items-center ${isSearchActive ? 'justify-center' : 'justify-between'} p-5 md:p-5 lg:p-5 md:rounded-[30px] top-0  md:h-[89px] sticky md:top-2 shadow-md z-40 w-[100%] md:w-full`}
    >
      {isSearchActive ? (
        <div className="flex items-center gap-2 cursor-pointer">
          <Search handleSearch={handleSearch} />
          <span className="text-sm text-primary" onClick={handleCloseSearch}>
            Close Search
          </span>
        </div>
      ) : (
        <>
          <Link to="/">
            <div className="md:w-[199px] w-[180px]  h-14 md:h-[45px] ">
              <img
                src="/logos/logo.png"
                alt="coffee logo"
                className="w-full h-full object-contain"
              />
            </div>
          </Link>

          <div className="hidden md:flex">
            <NavItems />
          </div>

          <div className="flex items-center gap-2 ">
            <div
              className="border border-[#f4f4e6] flex items-center justify-center px-2 h-10 w-10 rounded-sm"
              style={{ backgroundColor: 'hsla(60, 88%, 97%, 0.69)' }}
            >
              <SearchIcon className="text-icon w-5 h-5" onClick={handleSearchClick} />
            </div>

            <div className="border border-[#f4f4e6] flex items-center justify-center h-10 w-10 px-2 rounded-sm">
              <Link to="/shop">
                <ShoppingCart className="text-icon w-5 h-5" />
              </Link>
            </div>

            <div className="hidden md:flex md:ml-4">
              {status ? (
                <AccountPopover />
              ) : (
                <Link to="/login">
                  <Button className="h-[40px] w-[80px] rounded-[10px]">Login</Button>
                </Link>
              )}
            </div>

            <div className="md:hidden flex items-center">
              <MobileNav status={status} />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Header;
