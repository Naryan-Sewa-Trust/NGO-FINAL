import React, { useState } from "react";
import Header from "./common/Header";
import Photo from "./donate/Photo";
import Footer from "./common/Footer";
import PageHeader from "./common/PageHeader";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Gallery = () => {
  return (
    <div>
      <ToastContainer limit={1} position="bottom-center" />
      <Header />
      <PageHeader pagetitle="Gallery" />
      <div className="container justify-content-between mt-2">
        <div className="row align-items-center">
          {/* <!-- Adjusted column width for better alignment --> */}
          <div className="col-12 col-md-4 mb-4">
            <div className="grid grid-cols-2 gap-4 py-6">
              <Photo src="img/NarayanSewa.png" alt="Photo 1" />
            </div>
          </div>
          <div className="col-12 col-md-4 mb-4">
            <div className="grid grid-cols-2 gap-4 py-6">
              <Photo src="images/wedding.png" alt="Photo 1" />
            </div>
          </div>
          <div className="col-12 col-md-4 mb-4">
            <div className="grid grid-cols-2 gap-4 py-6">
              <Photo src="img/galary2.jpeg" alt="Photo 1" />
            </div>
          </div>
          <div className="col-12 col-md-4 mb-4">
            <div className="grid grid-cols-2 gap-4 py-6">
              <Photo src="images/about.jpg" alt="Photo 1" />
            </div>
          </div>
          <div className="col-12 col-md-4 mb-4">
            <div className="grid grid-cols-2 gap-4 py-6">
              <Photo src="img/logo.jpg" alt="Photo 1" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
