import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={{ dispaly: "flex" }}>
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
