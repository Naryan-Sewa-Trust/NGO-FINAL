import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSpring, animated } from "react-spring";
import { useNavigate } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AdminPage() {
  const [payments, setPayments] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const response = await axios.get(
          // "http://localhost:8000/admin/payments"
          "https://ngofinalbackend.vercel.app/admin/payments"
        );
        setPayments(response.data.payments);
        // Store data in session storage
        sessionStorage.setItem(
          "payments",
          JSON.stringify(response.data.payments)
        );
      } catch (error) {
        console.error("Error fetching payments:", error);
      }

      // Check if data is in session storage
      const sessionPayments = sessionStorage.getItem("payments");
      if (sessionPayments) {
        setPayments(JSON.parse(sessionPayments));
      } else {
        fetchPayments();
      }
    };

    fetchPayments();
  }, []);

  const handleEditProfile = () => {
    setEditMode(true);
  };

  const handleUpdateProfile = async () => {
    const token = localStorage.getItem("token");
    try {
      // const response = await axios.put(
      //   "http://localhost:8000/admin/profile",
      //   {
      const response = await axios.put(
        "https://ngofinalbackend.vercel.app/admin/profile",
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
      toast.success("Profile updated successfully!"); // Show success toast
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("Error updating profile. Please try again."); // Show error toast
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
    <div
      className="d-flex flex-column gap-4 "
      style={{
        minHeight: "100%",
        width: "100%",
      }}
    >
      <div className=" pt-2 bg-dark w-full pt-3 pb-3 px-3">
        <div className="mb-md-2 mb-2 d-flex justify-content-between align-items-center ">
          <h1 className="text-md-xxl text-lg text-light">Payment Details</h1>
          {/* <button className="btn btn-primary" onClick={handleEditProfile}>
            Edit Profile
          </button> */}
          <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
              Options
            </Dropdown.Toggle>

            <Dropdown.Menu>
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
      <animated.div className=" w-responsive overflow-scroll">
        <div className="w-responsive">
          <table className="table table-striped w-responsive">
            <thead>
              <tr className=" border d-table-row text-nowrap w-responsive">
                <th className="col text-dark">Name</th>
                <th className="col text-dark">Email</th>
                <th className="col text-dark">Phone Number</th>
                <th className="col text-dark">Amount</th>
                <th className="col text-dark">Description</th>
                <th className="col text-dark">Order ID</th>
                <th className="col text-dark">Razorpay Order ID</th>
                <th className="col text-dark">Razorpay Payment ID</th>
              </tr>
            </thead>
            <tbody>
              {payments.map(
                (payment) =>
                  payment.razorpay_order_id &&
                  payment.razorpay_payment_id && (
                    <tr className="d-table-row " key={payment._id}>
                      <td className="col ">{payment.name}</td>
                      <td className="col">{payment.email}</td>
                      <td className="col">{payment.phoneNumber}</td>
                      <td className="col">&#8377;{payment.amount}</td>
                      <td className="col">{payment.description}</td>
                      <td className="col">{payment.order_id}</td>
                      <td className="col">{payment.razorpay_order_id}</td>
                      <td className="col">{payment.razorpay_payment_id}</td>
                    </tr>
                  )
              )}
            </tbody>
          </table>
        </div>
      </animated.div>
    </div>
  );
}

export default AdminPage;
