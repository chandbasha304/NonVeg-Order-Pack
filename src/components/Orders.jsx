// Orders.js
import React from "react";

const Orders = ({ id, name, price, quantity }) => {
  return (
    <div className="menu">
      <p>{name}</p>
      <p>Price: ₹{price}</p>
    </div>
  );
};

export default Orders;
