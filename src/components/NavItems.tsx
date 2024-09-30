import { Link } from 'react-router-dom';
import { OriginsSheet } from './OriginsSheet';
import { CategoriesSheet } from './CategoriesSheet';

function NavItems() {
  return (
    <nav className="flex flex-col md:flex-row items-center list-none gap-3 text-[16px] ">
      <li className="cursor-pointer text-textcolor active:text-primary  ">
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
      <li className="cursor-pointer  text-textcolor active:text-primary ">
        <Link to="/coffee-shop">Shop</Link>
      </li>
      <li className="cursor-pointer text-textcolor  active:text-primary ">
        <Link to="/contact-us">Contact Us</Link>
      </li>
    </nav>
  );
}

export default NavItems;
