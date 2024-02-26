import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AdminLoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null); // State to store login error
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/admin/login", {
        username,
        password,
      });

      const token = response.data.token;
      console.log(token);

      if (!token) {
        throw new Error("Token not received from server");
      }

      localStorage.setItem("token", token); // Store the token in local storage

      // Include the token in the request headers for future requests
      axios.defaults.headers.common["Authorization"] = `${token}`;

      // Redirect to admin page
      navigate("/adminPayment");
    } catch (error) {
      setError("Invalid username or password"); // Set error message
      console.error("Login failed:", error);
    }
  };

  return (
    <div>
      <h1>Admin Login</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}{" "}
      {/* Display error message */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default AdminLoginPage;
