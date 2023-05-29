import React from "react";
import { Link } from "react-router-dom";

import logo from "../Logo.svg";

function Nav() {
  return (
    <nav>
      <img className='logo' src={logo} alt='carlos' />
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/About'>About</Link>
        </li>
        <li>
          <Link to='/Menu'>Menu</Link>
        </li>
        <li>
          <Link to='/Booking'>Reservations</Link>
        </li>
        <li>
          <Link to='/Order'>Order Online</Link>
        </li>
        <li>
          <Link to='/Login'>Login</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
