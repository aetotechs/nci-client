import React from 'react';
import { Link } from 'react-scroll';

function NavItems() {
  return (
    <nav className="flex items-center list-none gap-10 text-[16px] text-text">
      <li className="cursor-pointer active:text-primary  ">
        <Link to="home" className="cursor-pointer" smooth={true} duration={500}>
          Home
        </Link>
      </li>
      <li className="cursor-pointer active:text-primary ">
        <Link to="about" smooth={true} duration={500}>
          About Us
        </Link>
      </li>
      <li className="cursor-pointer active:text-primary ">
        <Link to="categories" smooth={true} duration={500}>
          Categories
        </Link>
      </li>
      <li className="cursor-pointer active:text-primary ">
        <Link to="shop" smooth={true} duration={500}>
          Shop
        </Link>
      </li>
      <li className="cursor-pointer active:text-primary ">
        <Link to="contact" smooth={true} duration={500}>
          Contact Us
        </Link>
      </li>
    </nav>
  );
}

export default NavItems;
