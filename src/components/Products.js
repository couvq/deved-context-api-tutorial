import { Card } from "@mui/material";
import React from "react";
import { useContext } from "react";
import CartContext from "../CartContext";
import { Link } from "react-router-dom";

const Products = () => {
  const { addToCart } = useContext(CartContext);
  const products = [
    {
      name: "T-shirt",
      price: "$25",
    },
    {
      name: "Jeans",
      price: "$30",
    },
    {
      name: "Vest",
      price: "$50",
    },
    {
      name: "Ray Bans",
      price: "$150",
    },
  ];

  return (
    <>
      <Link to={"/checkout"}>
        <button>Go to Checkout</button>
      </Link>

      {products.map((product, index) => {
        return (
          <Card
            key={index}
            onClick={() => {
              addToCart(product.name, product.price);
            }}
          >
            {product.name}
            {product.price}
          </Card>
        );
      })}
    </>
  );
};

export default Products;
