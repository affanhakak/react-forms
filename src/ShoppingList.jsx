import { useState } from "react";
import ShoppingListForm from "./ShoppingListForm";
import { v4 as uuid } from "uuid";

export default function ShoppingList() {
  const [items, setItems] = useState([
    {
      id: uuid(),
      product: "bananas",
      quantity: 12,
    },
    { id: uuid(), product: "carrots", quantity: 5 },
  ]);
  const addItem = (item) => {
    setItems((currentitems) => {
      return [...currentitems, { ...item, id: uuid() }];
    });
  };
  return (
    <div>
      <h1>Shopping List</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.product} - {item.quantity}
          </li>
        ))}
      </ul>
      <ShoppingListForm addItem={addItem} />
    </div>
  );
}
