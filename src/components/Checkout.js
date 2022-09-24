import { ProductionQuantityLimits } from "@mui/icons-material";
import { Card } from "@mui/material";
import React from "react";
import { useContext } from "react";
import CartContext from "../CartContext";

const Checkout = () => {
  const { items } = useContext(CartContext);

  return (
    <>
      {
        items.map((item) => (
          <Card>
            {item.name}
            {item.price}
          </Card>
        ))
      }
    </>
  );
};

export default Checkout;
