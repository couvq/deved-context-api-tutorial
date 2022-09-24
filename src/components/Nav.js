import React from 'react';
import CartContext from '../CartContext';
import { useContext } from 'react';

const Nav = () => {
  const {item} = useContext(CartContext);


  return (
    <div>Nav</div>
  );
}

export default Nav;