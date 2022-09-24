import { Card } from "@mui/material";
import React from "react";
import { isTemplateExpression } from "typescript";

const Products = () => {
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
      {products.map((product, index) => {
        return (
          <Card
            key={index}
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
