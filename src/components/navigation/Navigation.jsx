import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { CgMenuRight } from "react-icons/cg";
import "../../styles/navigation.css";

const Navigation = ({cart}) => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };
  const closeMenu = () => {
    setNavbarOpen(false);
  };
  return (
    <nav className="navBar">
      <div className="navv">
        <button onClick={handleToggle}>
          {navbarOpen ? (
            <MdClose
              className="closeBtn"
              style={{ width: "40px", height: "40px" }}
            />
          ) : (
            <CgMenuRight
              style={{ color: "lightGrey", width: "60px", height: "45px" }}
            />
          )}
        </button>
      </div>

      <div className="nav-container">
        <ul className={`menuNav ${navbarOpen ? "showMenu" : "closeMenu"}`}>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "inactive")}
              to="/"
              onClick={() => closeMenu()}
            >
              Home
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "inactive")}
              to="Shop"
              onClick={() => closeMenu()}
            >
              Shop
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "inactive")}
              to="shop/cart"
              onClick={() => closeMenu()}
            >
              Cart <span className="cart-qty_in-nav">{cart.total_items ? cart.total_items  : "0" }</span>
            </NavLink>
          </li>
         
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
