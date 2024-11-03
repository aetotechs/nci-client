import { Link, useLocation } from 'react-router-dom';
import { CategoriesSheet } from '../../user/other/CategoriesSheet';
import { RegionsMobile } from '../../user/other/RegionsMobile';
import { CategoriesMobile } from '../../user/other/CategoriesMobile';
import { RegionsSheet } from '@/components/user/other/OriginsSheet';

function NavItems() {
  const location = useLocation();
  const { pathname } = location;
  return (
    <nav className="flex flex-col max-h-[70vh] overflow-auto md:flex-row px-4 lg:px-0 lg:items-center gap-3 list-none md:gap-2 lg:gap-8 text-[16px] ">
      <li
        className={`cursor-pointer text-textcolor ${pathname === '/about' && 'text-texthighlight font-semibold'} active:text-primary   `}
      >
        <Link to="/about" className="cursor-pointer">
          About Us
        </Link>
      </li>
      <li className="cursor-pointer text-textcolor  active:text-primary hidden md:flex ">
        <RegionsSheet />
      </li>
      <li className="cursor-pointer text-textcolor border-none  active:text-primary flex md:hidden ">
        <RegionsMobile />
      </li>
      <li className="cursor-pointer text-textcolor  active:text-primary hidden md:flex ">
        <CategoriesSheet />
      </li>
      <li className="cursor-pointer text-textcolor  active:text-primary flex md:hidden ">
        <CategoriesMobile />
      </li>
      <li
        className={`cursor-pointer  text-textcolor ${pathname === '/coffee-shop' && 'text-texthighlight font-semibold'} active:text-primary `}
      >
        <Link to="/coffee-shop">Shop</Link>
      </li>
      <li
        className={`cursor-pointer text-textcolor ${pathname === '/contact-us' && 'text-texthighlight font-semibold'}  active:text-primary `}
      >
        <Link to="/contact-us">Contact Us</Link>
      </li>
    </nav>
  );
}

export default NavItems;
