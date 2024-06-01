import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";

const Header = () => {
  const [editMode, setEditMode] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // useEffect(() => {
  //   const token = sessionStorage.getItem("token");
  //   if (!token) {
  //     navigate("/");
  //   }
  // }, [navigate]);

  const handleEditProfile = () => {
    setEditMode(true);
  };

  const handleUpdateProfile = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.put(
        "https://ngo-final.onrender.com/admin/profile",
        {
          username,
          password,
        },
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );
      console.log(response.data);
      setEditMode(false);
      toast.success("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("Error updating profile. Please try again.");
    }
  };

  const handleCloseForm = () => {
    setEditMode(false);
  };

  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/");
  };

  return (
    <div className="pt-2 bg-dark w-full pt-3 pb-3 px-3">
      <div className="mb-md-2 mb-2 d-flex justify-content-between align-items-center">
        <h1 className="text-md-xxl text-lg text-light">
          Narayan Sewa Trust - Admin{" "}
        </h1>
        <Dropdown>
          <Dropdown.Toggle variant="primary" id="dropdown-basic">
            Options
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item as={Link} to="/adminPayment">
              Payments
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/admin-gallery">
              Gallery
            </Dropdown.Item>
            <Dropdown.Item onClick={handleEditProfile}>
              Edit Profile
            </Dropdown.Item>
            <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      {editMode && (
        <div className="container card pb-2">
          <div className="card-body">
            <button className="btn btn-danger mb-3" onClick={handleCloseForm}>
              Close
            </button>
            <input
              type="text"
              className="form-control mb-3"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="New Username"
            />
            <input
              type="password"
              className="form-control mb-3"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="New Password"
            />
            <button className="btn btn-success" onClick={handleUpdateProfile}>
              Update Profile
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
