import React, { useState, useEffect } from "react";
import AdminHeader from "./AdminHeader";
import axios from "axios";
import { useSpring, animated } from "react-spring";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AdminPage() {
  const [payments, setPayments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const response = await axios.get(
          // "http://localhost:5000/admin/payments"
          "https://ngo-final.onrender.com/admin/payments"
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

  useEffect(() => {
    // localStorage.setItem("token", token);
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);

  return (
    <div
      className="d-flex flex-column gap-4 "
      style={{
        minHeight: "100%",
        width: "100%",
      }}
    >
      <AdminHeader />
      <h1 className="text-center mb-4 text-gray-800">Payment Details</h1>
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
