import React from "react";
import CartContext from "../CartContext";
import { useContext } from "react";


const Nav = () => {
  const { items } = useContext(CartContext);

  return (
    <>
      <div>Nav</div>
      <div>{items.length}</div>
    </>
  );
};

export default Nav;
