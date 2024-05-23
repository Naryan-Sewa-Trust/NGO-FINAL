import Iframe from "react-iframe";
// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';

function ContactContent() {
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
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="wow fadeIn" data-wow-delay="0.1s">
              <div className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">
                Contact Us
              </div>
            </div>
          </div>

          {/* <div className="flex flex-col lg:flex-row row align-items-center">
            <div className="bg-white py-5 rounded-lg shadow col-12 col-md-7 mb-4">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Contact Information
              </h2>
              <p className="text-gray-600 mb-4">
                Feel free to reach out to us using the following contact
                details:
              </p>
              <ul className="pl-3">
                <li className="mb-2 pl-3">
                  <span className="font-bold">Email:</span>{" "}
                  <a
                    href="mailto:narayansewatrust2002@gmail.com"
                    className="break-all"
                  >
                    narayansewatrust2002@gmail.com
                  </a>
                </li>
                <li className="mb-2">
                  <span className="font-bold">Phone:</span>{" "}
                  <a href="tel:+91-9718905221">+91-9718905221</a>
                </li>
                <li className="mb-2">
                  <span className="font-bold">Address:</span> Flat No. T-1, 104,
                  1st Floor, Tower-1 No. GH 01/A, Sector 16C, Exotica
                  Dreamville, Greater Noida, U.P. 201203
                </li>
              </ul>
            </div>
            <div className="relative overflow-hidden rounded-lg flex-1 h-64 md:h-96 lg:h-auto col-12 col-md-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7158.916880268198!2d77.57079517416102!3d28.479206969946763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce56d7c91dbdb%3A0x78446b3d26e8a7d7!2sExotica%20Dreamville!5e0!3m2!1sen!2sin!4v1646109282021!5m2!1sen!2sin"
                className="absolute inset-0 w-full h-full"
                frameBorder="0"
                allowFullScreen=""
                title="Google Map"
              ></iframe>
            </div>
          </div> */}

          <div className="flex flex-col lg:flex-row row align-items-center gap-5">
            <div className="bg-white py-5 rounded-lg shadow col-12 col-md-7 mb-4">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Contact Information
              </h2>
              <p className="text-gray-600 mb-4">
                Feel free to reach out to us using the following contact
                details:
              </p>
              <ul className="pl-3">
                <li className="mb-2 pl-3">
                  <span className="font-bold">Email:</span>{" "}
                  <a
                    href="mailto:narayansewatrust2002@gmail.com"
                    className="break-all"
                  >
                    narayansewatrust2002@gmail.com
                  </a>
                </li>
                <li className="mb-2">
                  <span className="font-bold">Phone:</span>{" "}
                  <a href="tel:+91-9718905221">+91-9718905221</a>
                </li>
                <li className="mb-2">
                  <span className="font-bold">Address:</span> Flat No. T-1, 104,
                  1st Floor, Tower-1 No. GH 01/A, Sector 16C, Exotica
                  Dreamville, Greater Noida, U.P. 201203
                </li>
              </ul>
            </div>
            <div className="bg-white py-5 rounded-lg shadow col-12 col-md-4 mb-4">
              <div className="relative overflow-hidden rounded-lg flex-1 h-96 md:h-128 lg:h-160">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7158.916880268198!2d77.57079517416102!3d28.479206969946763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce56d7c91dbdb%3A0x78446b3d26e8a7d7!2sExotica%20Dreamville!5e0!3m2!1sen!2sin!4v1646109282021!5m2!1sen!2sin"
                  className="absolute inset-0 h-96 md:h-128 lg:h-160"
                  frameBorder="0"
                  allowFullScreen="yes"
                  title="Google Map"
                ></iframe>
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
    </>
  );
}
export default ContactContent;
