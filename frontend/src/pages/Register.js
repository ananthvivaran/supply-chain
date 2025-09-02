import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/App.css";

const Register = () => {
  // Add a new state for username
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      console.log("Sending registration request...");
      // Add 'username' to the object being sent
      const response = await axios.post("http://localhost:5000/api/auth/register", 
        { username, email, password, role } // <-- Added username here
      );
      
      console.log("Registration successful:", response.data);
      navigate("/login");
      
    } catch (error) {
      console.error("Registration error:", error);      
      if (error.response) {
        setError(error.response.data.message || `Server error: ${error.response.status}`);
      } else if (error.request) {
        setError("Cannot connect to server. Is the backend running on port 5000?");
      } else {
        setError("An unexpected error occurred: " + error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h2>Register</h2>
      
      {error && <div className="error-message" style={{color: 'red', marginBottom: '10px'}}>{error}</div>}
      
      <form onSubmit={handleRegister}>
        {/* Add this new input field for username */}
        <input 
          type="text" 
          placeholder="Username" 
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input 
          type="email" 
          placeholder="Email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        
        <button type="submit" disabled={loading}>
          {loading ? "Creating Account..." : "Register"}
        </button>
      </form>
    </div>
  );
};

export default Register;