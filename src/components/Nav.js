import React from "react";
import CartContext from "../CartContext";
import { useContext } from "react";
import { Link } from 'react-router-dom';

const Nav = () => {
  const { items } = useContext(CartContext);

  return (
    <>
      <div>Nav</div>
      <div>{items.length}</div>
      <Link to={'/checkout'}>
      <button>Go to Checkout</button>
      </Link>
    </>
  );
};

export default Nav;
