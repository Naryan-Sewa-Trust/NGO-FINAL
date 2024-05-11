import React, { useState } from "react";
import Header from "./common/Header";
import Footer from "./common/Footer";
import Donate from "./donate/Donate";
import Photo from "./donate/Photo";
import PageHeader from "./common/PageHeader";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function CausesPage() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <ToastContainer limit={1} position="bottom-center" />
      <Header />
      <PageHeader pagetitle="Donate" />
      <div className="container justify-content-between">
        <div className="row align-items-center">
          {/* <!-- Adjusted column width for better alignment --> */}
          <div className="col-12 col-md-6 my-4">
            <div className="grid grid-cols-1 gap-4 py-6">
              <Photo src="img/NarayanSewa.png" alt="Photo 1" />
            </div>
          </div>
          {/* <!-- Adjusted column width for better alignment --> */}
          <div className="col-12 col-md-6">
            <div className="ac-details mx-auto px-4 py-4 text-white">
              <p className="display-6 py-2 px-4 rounded block mx-auto mb-8">
                Account details of Narayan Sewa Trust
              </p>
              <div className="bg-white shadow-md rounded px-8 py-4 text-black">
                <p className="text-lg font-semibold text-center mb-4">
                  AC Name - Narayan Sewa Trust
                </p>
                <p className="text-lg font-semibold text-center mb-4">
                  AC No - 42894046239
                </p>
                <p className="text-lg font-semibold text-center mb-4">
                  IFSC Code - SBIN0018934
                </p>
                <p className="text-lg font-semibold text-center">
                  SBI Gaur City 2, Noida Extension
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Donate />
      <Footer />
    </>
  );
}
export default CausesPage;
