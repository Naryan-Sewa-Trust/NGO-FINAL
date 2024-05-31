import Header from "./common/Header";
import Footer from "./common/Footer";
import PageHeader from "./common/PageHeader";
import { useEffect } from "react";
import Iframe from "react-iframe";
// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';

function ContactContent() {
  useEffect(() => window.scrollTo(0, 0), []);
  // const form = useRef();

  // const sendEmail = (e) => {
  //     e.preventDefault();

  //     emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
  //     .then((result) => {
  //         console.log(result.text);
  //     }, (error) => {
  //         console.log(error.text);
  //     });
  // };

  return (
    <>
      <Header />
      <PageHeader pagetitle="Enquiry" />

      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="wow fadeIn" data-wow-delay="0.1s">
              <div className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">
                Enquiry
              </div>
            </div>
          </div>

          <h1 className="display-6 mb-5">
            If You Have Any Query, Please Contact Us
          </h1>
          {/* { <form ref={form} onSubmit={sendEmail}> } */}
          <form>
            <div className="row g-3">
              <div className="col-md-6">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                  />
                  <label for="name">Your Name</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Your Email"
                  />
                  <label for="email">Your Email</label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    placeholder="Subject"
                  />
                  <label for="subject">Subject</label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating">
                  <textarea
                    className="form-control h-100"
                    placeholder="Leave a message here"
                    id="message"
                  ></textarea>
                  <label for="message">Message</label>
                </div>
              </div>
              <div className="col-12">
                <button className="btn btn-primary py-2 px-3 me-3">
                  Send Message
                  <div className="d-inline-flex btn-sm-square bg-white text-primary rounded-circle ms-2">
                    <i className="fa fa-arrow-right"></i>
                  </div>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default ContactContent;
