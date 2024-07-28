// OrderMenu.js
import React from "react";
import Orders from "./Orders";
import OrderQuantity from "./OrderQuantity";

const OrderMenu = ({ orderItem, updateQuantity }) => {
  return (
    <div className="ordersList">
      <Orders {...orderItem} />
      <OrderQuantity {...orderItem} updateQuantity={updateQuantity} />
    </div>
  );
};

export default OrderMenu;
