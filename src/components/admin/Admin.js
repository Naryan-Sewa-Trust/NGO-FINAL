import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSpring, animated } from "react-spring";

function AdminPage() {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/admin/payments"
        );
        setPayments(response.data.payments);
      } catch (error) {
        console.error("Error fetching payments:", error);
      }
    };

    fetchPayments();
  }, []);

  const fadeInProps = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  // Render the component if user is admin
  return (
    <div
      className="d-flex flex-column gap-4 "
      style={{
        minHeight: "100%",
        width: "100%",
      }}
    >
      <div className=" w-responsive position-relative mb-md-5 mb-4">
        {" "}
        <h1 className="d-flex position-fixed right-50 justify-content-center align-content-center text-md-xxl text-lg">
          Admin Page - Payments
        </h1>
      </div>
      <animated.div>
        <table className="table table-striped">
          <thead>
            <tr className="">
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Amount</th>
              <th>Description</th>
              <th>Order ID</th>
              <th>Razorpay Order ID</th>
              <th>Razorpay Payment ID</th>
            </tr>
          </thead>
          <tbody>
            {payments.map(
              (payment) =>
                payment.razorpay_order_id &&
                payment.razorpay_payment_id && (
                  <tr key={payment._id}>
                    <td>{payment.name}</td>
                    <td>{payment.email}</td>
                    <td>{payment.phoneNumber}</td>
                    <td>&#8377;{payment.amount}</td>
                    <td>{payment.description}</td>
                    <td>{payment.order_id}</td>
                    <td>{payment.razorpay_order_id}</td>
                    <td>{payment.razorpay_payment_id}</td>
                  </tr>
                )
            )}
            {/* <tr>
              <td>A</td>
              <td>B</td>
              <td>C</td>
              <td>D</td>
              <td>L</td>
              <td>L</td>
              <td>L</td>
              <td>L</td>
            </tr> */}
          </tbody>
        </table>
      </animated.div>
    </div>
  );
}

export default AdminPage;
