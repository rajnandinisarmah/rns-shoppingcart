import React from "react";

const cartItem = (props) => {
  const { id, productImage, price, productName } = props.data;

  return (
    <div className="cartItem">
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
      </div>
    </div>
  );
};

export default cartItem;
