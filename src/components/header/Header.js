import React, { useContext } from "react";
import logo from "../../image/Logo/png/logo-no-background.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./Header.css";
import { Link } from "react-router-dom";
import { AppContex } from "../../App";

function Header() {
  const { cart } = useContext(AppContex);
  return (
    <div className="navbar">
      <div className="header_logo">
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          <img src={logo} alt="logo" width={"40px"} height="30px" />
        </Link>
      </div>

      <div className="header_search"></div>
      <div className="menu">
        <span>Home</span>
        <span>T-shirt</span>
        <span>Shoes</span>
        <span>Accessories</span>
      </div>
      <Link to="/checkout" className="cart">
        <div>
          <span>
            <AiOutlineShoppingCart /> Cart {cart.length}
          </span>
        </div>
      </Link>
    </div>
  );
}

export default Header;
