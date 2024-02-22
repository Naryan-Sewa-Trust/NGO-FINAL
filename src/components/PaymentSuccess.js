import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const PaymentSuccess = () => {
  const [paymentId, setPaymentId] = useState("");
  const [receiptUrl, setReceiptUrl] = useState("");

  useEffect(() => {
    // Extract payment ID from URL query parameters
    const urlParams = new URLSearchParams(window.location.search);
    const paymentId = urlParams.get("reference");
    setPaymentId(paymentId);

    // Fetch receipt URL from backend using payment ID
    // axios
    //   .get(`http://localhost:8000/api/getreceipturl?paymentId=${paymentId}`)
    //   .then((response) => {
    //     setReceiptUrl(response.data.receiptUrl);
    //   })
    //   .catch((error) => {
    //     console.error("Error fetching receipt URL:", error);
    //   });
  }, []);

  //  const handleDownload = async () => {
  //   if (receiptUrl) {
  //     try {
  //       const response = await axios({
  //         url: receiptUrl,
  //         method: "GET",
  //         responseType: "blob",
  //       });
  //       const blob = new Blob([response.data], { type: "application/pdf" });
  //       const url = window.URL.createObjectURL(blob);
  //       const link = document.createElement("a");
  //       link.href = url;
  //       link.setAttribute("download", "payment_receipt.pdf");
  //       document.body.appendChild(link);
  //       link.click();
  //       link.remove();
  //     } catch (error) {
  //       console.error("Error downloading receipt:", error);
  //     }
  //   }
  // };

  return (
    <Container className="mt-5 text-center">
      <h1 className="mb-4">Payment Success</h1>
      <p className="mb-3">
        Your donation was successful! We extend our heartfelt gratitude for your
        generosity.
        <br /> With your support, we can continue our mission to serve those in
        need. <br />
        Your payment ID: {paymentId}
      </p>

      {receiptUrl && (
        <div>
          <Button variant="primary" href={receiptUrl} download>
            Download Receipt
          </Button>
        </div>
      )}
      <Link to="/" className="btn btn-secondary mt-3">
        Go to Home Page
      </Link>
    </Container>
  );
};

export default PaymentSuccess;
