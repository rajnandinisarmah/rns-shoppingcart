import React, { useContext } from "react";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/ShopContext";
import CartItems from "./cart-item";
const Cart = (prop) => {
  const { cartItems } = useContext(ShopContext);

  return (
    <div className="cart">
      <div>
        <h1>Your CART items</h1>
      </div>

      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItems data={product} key={prop.data} />;
          }
        })}
      </div>
    </div>
  );
};

export default Cart;
