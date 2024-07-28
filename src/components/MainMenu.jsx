// MainMenu.js
import React, { useState } from "react";
import OrderMenu from "./OrderMenu";

import TotalPrice from "./TotalPrice";

const orderData = [
  { id: 1, name: "Chicken Dum Biryani", price: 120, quantity: 1 },
  { id: 2, name: "Mutton Dum Biryani", price: 200, quantity: 1 },
  { id: 3, name: "Tea", price: 15, quantity: 1 },
  { id: 4, name: "Thums Up", price: 25, quantity: 1 },
];

function MainMenu() {
  const [orderItems, setOrderItems] = useState(orderData);

  const updateQuantity = (value, id) => {
    console.log(value, id);

    let updateItems = orderItems.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + value } : item
    );
    setOrderItems(updateItems);
  };
  const totalOrderPrice = orderItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="mainmenu">
      <h1>Orders Sample</h1>
      {orderItems.map((orderItem) => (
        <OrderMenu
          key={orderItem.id}
          orderItem={orderItem}
          updateQuantity={updateQuantity}
        />
      ))}

      <TotalPrice price={totalOrderPrice} />
    </div>
  );
}

export default MainMenu;
