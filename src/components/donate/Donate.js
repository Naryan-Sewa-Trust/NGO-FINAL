import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Donate() {
  const [amount, setAmount] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [description, setDescription] = useState("");

  // function showRazorpay(e) {
  //   e.preventDefault();
  //   if (amount < 10) {
  //     toast.error("Minimum donation amount is ₹10");
  //     return; // Stop further execution
  //   }

  //   // Functionality to handle Razorpay payment integration
  // }

  const showRazorpay = async (e) => {
    e.preventDefault();
    if (!amount || isNaN(amount) || Number(amount) < 10) {
      toast.error("Please enter a valid donation amount (minimum ₹10).");
      return;
    }

    try {
      const {
        data: { key },
      } = await axios.get("http://localhost:8000/api/getkey");

      // Extract order details
      // const {
      //   data: { order },
      // } = orderResponse;

      const {
        data: { order },
      } = await axios.post("http://localhost:8000/checkout", {
        amount,
        name,
        email,
        phoneNumber,
        description,
      });

      const options = {
        key,
        amount: order.amount,
        currency: "INR",
        name: "NarayanSewaTrust",
        description: "Razorpay",
        image:
          "https://tse2.mm.bing.net/th?id=OIP.76kbZ0BRMI_eAnFgvsNWUAHaEO&pid=Api&P=0&h=180",
        order_id: order.id,
        callback_url: "http://localhost:8000/paymentverification",
        prefill: {
          name,
          email,
          contact: phoneNumber,
        },
        notes: {
          address: "Razorpay official",
        },
        theme: {
          color: "#3399cc",
        },
      };

      // Ensure that the Razorpay library is loaded before accessing it
      if (window.Razorpay) {
        const razor = new window.Razorpay(options);
        razor.open();
      } else {
        // Handle the case where Razorpay is not available
        console.log(window);
        console.error("Razorpay library not found");
      }

      const razor = new window.Razorpay(options);
      razor.open();
    } catch (error) {
      console.error("Error:", error);
      toast.error(
        "An error occurred while processing your donation. Please try again later."
      );
    }
  };

  return (
    <div className="container-fluid donate my-0 py-5" data-parallax="scroll">
      <div className="container py-5">
        <div className="row g-5 align-items-center justify-content-start text-start">
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
            <div className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">
              Donate Now
            </div>
            <h1 className="display-6 text-white mb-5">
              Thanks For The Results Achieved With You
            </h1>
            <p className="text-white-50 mb-0">
              Your generosity has made a profound impact on those we serve. With
              your continued support, we can expand our reach and make an even
              greater difference in the lives of those in need. Please consider
              donating today to help us continue our vital work.
            </p>
          </div>
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
            <div className="h-100 bg-white p-5">
              <form>
                <div className="row g-3">
                  <div className="col-12">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        id="name"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                      <label htmlFor="name">Your Name</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control bg-light border-0"
                        id="email"
                        placeholder="Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        id="phoneNumber"
                        placeholder="Your Phone Number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                      <label htmlFor="phoneNumber">Your Phone Number</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input
                        type="number"
                        className="form-control bg-light border-0"
                        id="amount"
                        placeholder="Custom Amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                      />
                      <label htmlFor="amount">Amount in INR ( ₹ )</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control bg-light border-0"
                        id="description"
                        placeholder="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      ></textarea>
                      <label htmlFor="description">Description</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button
                      className="btn btn-primary px-5 h-60"
                      onClick={showRazorpay}
                    >
                      Donate Now
                      <div className="d-inline-flex btn-sm-square bg-white text-primary rounded-circle ms-2">
                        <i className="fa fa-arrow-right"></i>
                      </div>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Donate;
