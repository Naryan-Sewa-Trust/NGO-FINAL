import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSpring, animated } from "react-spring";

function AdminPage() {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const response = await axios.get(
          // "http://localhost:8000/admin/payments"
          "https://ngofinalbackend.vercel.app/admin/payments"
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

  return (
    <div
      className="d-flex flex-column gap-4 "
      style={{
        minHeight: "100%",
        width: "100%",
      }}
    >
      <div className=" mb-md-5 mb-4 d-flex">
        {" "}
        <h1 className=" position-fixed justify-content-center align-content-center text-md-xxl text-lg">
          Admin Page - Payments
        </h1>
      </div>
      <animated.div className=" w-responsive overflow-scroll">
        <div className="w-responsive">
          <table className="table table-striped w-responsive">
            <thead>
              <tr className=" border d-table-row text-nowrap w-responsive">
                <th className="col ">Name</th>
                <th className="col ">Email</th>
                <th className="col ">Phone Number</th>
                <th className="col ">Amount</th>
                <th className="col ">Description</th>
                <th className="col ">Order ID</th>
                <th className="col ">Razorpay Order ID</th>
                <th className="col ">Razorpay Payment ID</th>
              </tr>
            </thead>
            <tbody>
              {payments.map(
                (payment) =>
                  payment.razorpay_order_id &&
                  payment.razorpay_payment_id && (
                    <tr className="d-table-row " key={payment._id}>
                      <td className="col">{payment.name}</td>
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
