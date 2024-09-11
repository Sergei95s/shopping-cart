import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import "./Header.css";

const Header = () => {
  const { getTotalCount } = useContext(CartContext);

  return (
    <header className="header">
      <h1>  Shoping Cart</h1>
      <div className="cart-counter">
        Productos en carrito: {getTotalCount()}
      </div>
    </header>
  );
};

export default Header;