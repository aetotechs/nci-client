import { Link } from 'react-router-dom';

function NavItems() {
  return (
    <nav className="flex flex-col md:flex-row items-center list-none gap-10 text-[16px] text-text">
      <li className="cursor-pointer text-textcolor active:text-primary  ">
        <Link to="/about" className="cursor-pointer">
          About Us
        </Link>
      </li>
      <li className="cursor-pointer text-textcolor  active:text-primary ">
        <Link to="/origins">Origins</Link>
      </li>
      <li className="cursor-pointer text-textcolor  active:text-primary ">
        <Link to="/categories">Categories</Link>
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
