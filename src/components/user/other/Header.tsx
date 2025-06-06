import { SearchIcon, ShoppingCart } from 'lucide-react';
import NavItems from '@/components/common/other/NavItems';
import { Button } from '@/components/common/ui/button';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AccountPopover } from '@/components/user/other/Account';
import { MobileNav } from '../../common/other/MobileNav';
import { useEffect, useState } from 'react';
import Search from './Search';
import { getNavigationUrl } from '@/utils/redirects/NavigationUtils';
import { getUserToken, isAuthenticated } from '@/utils/cookies/UserCookieManager';
import { useLoading } from '@/utils/context/LoaderContext';
import { api_urls } from '@/utils/commons/api-urls';

export interface HeaderProps {
  handleSearch?: (searchTerm: string) => void;
  reloadCart?: any;
}

function Header({ handleSearch, reloadCart }: HeaderProps) {
  const location = useLocation();
  const _isAuthenticated = isAuthenticated();
  const token = getUserToken();
  const navigate = useNavigate();
  const { dispatchLoader } = useLoading();
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [cartCount, setCartCount] = useState<number | any>(0);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleLoginNavigation = () => {
    const redirectUrl = getNavigationUrl(location, 'login');
    navigate(redirectUrl);
  };

  const handleSearchClick = () => {
    setIsSearchActive(true);
  };

  const handleCloseSearch = () => {
    setIsSearchActive(false);
  };

  const handleScroll = () => {
    const currentScrollY = window.screenY;

    if (currentScrollY > lastScrollY) {
      setScrollDirection('down');
    } else {
      setScrollDirection('up');
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  useEffect(() => {
    fetchCount();
  }, []);

  const fetchCount = async () => {
    if(!_isAuthenticated){
      console.log("You're not authenticated");
      return;
    }
    dispatchLoader(true);
    try {
      const response = await fetch(api_urls.carts.cart_items.count, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      if (response.ok) {
        const count = await response.json();
        setCartCount(count);
      } else {
        const responseMessage = await response.text();
        // ErrorToast(responseMessage);
        setCartCount(0);
      }
    } catch (error: any) {
      // ErrorToast("Error occured during cart items count fetch, " + error.toString());
    } finally {
      dispatchLoader(false);
    }
  };

  useEffect(() => {
    if (reloadCart) fetchCount();
  }, [reloadCart]);

  return (
    <div
      className={`bg-white flex items-center ${isSearchActive ? 'justify-center' : 'justify-between'} md:mx-[4vw] p-5 md:p-5 lg:p-5 md:rounded-[30px] top-0 sticky md:h-[89px] md:top-2 shadow-md z-40`}
    >
      {isSearchActive ? (
        <div className={`flex items-center gap-2 cursor-pointer`}>
          <Search handleSearch={handleSearch} />
          <span className="text-sm text-primary" onClick={handleCloseSearch}>
            Close Search
          </span>
        </div>
      ) : (
        <>
          <Link to="/">
            <div className="h-14 md:h-[45px]">
              <img
                src="/logos/logo.png"
                alt="coffee logo"
                className="hidden md:block w-full h-full object-contain"
              />
              <img
                src="/logos/brand.png"
                alt="coffee logo"
                className="block md:hidden w-full h-full object-contain"
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

            { _isAuthenticated && <div className="border border-[#f4f4e6] flex items-center justify-center h-10 w-10 px-2 rounded-sm relative">
              <Link to="/cart">
                <ShoppingCart className="text-icon w-5 h-5" />
              </Link>
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                {cartCount}
              </span>
            </div>}

            <div className="hidden md:flex md:ml-4">
              {_isAuthenticated ? (
                <AccountPopover />
              ) : (
                <div onClick={handleLoginNavigation}>
                  <Button className="h-[40px] w-[80px] rounded-[10px]">Login</Button>
                </div>
              )}
            </div>

            <div className="md:hidden flex items-center">
              <MobileNav status={_isAuthenticated} />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Header;
