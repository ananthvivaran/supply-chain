import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import "../styles/Product.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const { token, logout, user } = useContext(AuthContext);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products", { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => setProducts(res.data));
  }, [token]);

  return (
    <div className="product-list">
      <h2>Products</h2>
      <button onClick={logout}>Logout</button>
      {user.role === "admin" && <a href="/add-product"><button>Add Product</button></a>}
      {products.map((p) => (
        <div className="product-item" key={p.id}>
          <span>{p.name}</span>
          <span>{p.quantity}</span>
          <span>${p.price}</span>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
