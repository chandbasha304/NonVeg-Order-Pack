// OrderQuantity.js
import React from "react";

const OrderQuantity = ({ id, quantity, updateQuantity }) => {
  return (
    <div className="quantityprice">
      <button
        onClick={() => {
          updateQuantity(-1, id);
        }}
      >
        -
      </button>
      <p>Quantity: {quantity}</p>
      <button
        onClick={() => {
          updateQuantity(+1, id);
        }}
      >
        +
      </button>
    </div>
  );
};

export default OrderQuantity;
