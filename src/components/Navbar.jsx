import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/"> HOME</Link>
        </li>
        <li>
          <Link to="/cart"> CART</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
