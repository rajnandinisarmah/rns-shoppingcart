import React from "react";
import { PRODUCTS } from "../../products";
import Product from "./Product";
import "./shop.css";

export default function Shop() {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1> Babli's Shop</h1>
      </div>

      <div className="shopProducts">
        {PRODUCTS.map((product) => (
          <Product data={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}
