import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="categories">
        <span>
          Categories <KeyboardArrowDownIcon className="arrow" />
        </span>
      </div>
      <div className="navbar-container">
        <div className="cate-items">
          <span className="item">Men</span>
          <span className="item">Women</span>
          <span className="item">Accessories</span>
          <span className="item">Lookbook</span>
          <span className="item">Wishlist</span>
          <span className="item">Contact</span>
        </div>
        <div className="blogs">
          <ul>
            <li>Blogs</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
