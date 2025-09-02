import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [supplier, setSupplier] = useState("");
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleAdd = async (e) => {
    e.preventDefault();
    await axios.post(
      "http://localhost:5000/api/products",
      { name, quantity, price, supplier },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    navigate("/");
  };

  return (
    <div className="container">
      <h2>Add Product</h2>
      <form onSubmit={handleAdd}>
        <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
        <input type="number" placeholder="Quantity" onChange={(e) => setQuantity(e.target.value)} />
        <input type="number" placeholder="Price" onChange={(e) => setPrice(e.target.value)} />
        <input type="text" placeholder="Supplier" onChange={(e) => setSupplier(e.target.value)} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddProduct;
