import { Link, useLocation } from 'react-router-dom';
import { OriginsSheet } from './OriginsSheet';
import { CategoriesSheet } from './CategoriesSheet';

function NavItems() {
  const location = useLocation();
  const { pathname } = location;
  return (
    <nav className="flex flex-col md:flex-row items-center gap-3 list-none md:gap-8 text-[16px] ">
      <li
        className={`cursor-pointer text-textcolor ${pathname === '/about' && 'text-texthighlight font-semibold'} active:text-primary   `}
      >
        <Link to="/about" className="cursor-pointer">
          About Us
        </Link>
      </li>
      <li className="cursor-pointer text-textcolor  active:text-primary ">
        <OriginsSheet />
      </li>
      <li className="cursor-pointer text-textcolor  active:text-primary ">
        <CategoriesSheet />
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
