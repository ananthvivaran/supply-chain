import React from 'react';
import { Link } from 'react-router-dom';
import './../styles/home.css'; // Optional: create a Home.css file

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Welcome to Supply Chain Tracker</h1>
        <p>Manage your products and inventory efficiently</p>
        
        <div className="home-buttons">
          <Link to="/login" className="btn btn-primary">
            Login
          </Link>
          <Link to="/register" className="btn btn-secondary">
            Register
          </Link>
          <Link to="/products" className="btn btn-tertiary">
            View Products
          </Link>
        </div>
        
        <div className="home-features">
          <h2>Features</h2>
          <ul>
            <li>✅ Add and manage products</li>
            <li>✅ Track inventory levels</li>
            <li>✅ Secure user authentication</li>
            <li>✅ Real-time updates</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;