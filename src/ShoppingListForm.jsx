import { useState } from "react";

export default function ShoppingListForm({ addItem }) {
  const [formData, setFormData] = useState({ product: "", quantity: "" });
  const handleChange = (event) => {
    setFormData((currentData) => {
      return {
        ...currentData,
        [event.target.name]: event.target.value,
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(formData);
    setFormData({ product: "", quantity: 0 });
  };
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="product">Product Name</label>
        <input
          type="text"
          placeholder="Product Name"
          name="product"
          id="product"
          value={formData.product}
          onChange={handleChange}
        />
        &nbsp;
        <label htmlFor="quantity">Product Quantity</label>
        <input
          type="number"
          placeholder="Product Quantity (No.)"
          name="quantity"
          id="quantity"
          value={formData.quantity}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </>
  );
}
