import "./App.css";
import FrontPage from "./components/FrontPage.js";
import Causes from "./components/CausesPage";
import Donate from "./components/DonatePage";
import About from "./components/AboutPage";
import Contact from "./components/ContactPage";
import CSP from "./components/CSP_Page";
import { Routes, Route } from "react-router-dom";
import PaymentSuccess from "./components/PaymentSuccess.js";
import PrivacyPolicy from "./components/PrivacyPolicy";
import LearnMore from "./components/LearnMore";
import Login from "./components/admin/Login.js";
import AdminPage from "./components/admin/Admin.js";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/causes" element={<Causes />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/about" element={<About />} />
        <Route path="/csp" element={<CSP />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/paymentsuccess" element={<PaymentSuccess />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/learnmore" element={<LearnMore />} />
        <Route path="/adminLogin" element={<Login />} />
        <Route path="/adminPayment" element={<AdminPage />} />
      </Routes>
    </div>
  );
}

// export default App;

// import React from "react";

// // const img5 = "/images/img5.jpg";
// import {
//   MDBBtn,
//   MDBContainer,
//   MDBRow,
//   MDBCol,
//   MDBCard,
//   MDBCardBody,
//   MDBCardImage,
//   MDBInput,
//   MDBIcon,
// } from "mdb-react-ui-kit";

// const img1 = "/images/img_1.jpg";
// function App() {
//   return (
//     <div
//       className=" bg-dark d-flex align-content-center"
//       style={{
//         minHeight: "100vh",
//         zIndex: "1",
//         backgroundImage: `url(/images/img_1.jpg)`,
//       }}
//     >
//       <MDBContainer
//         fluid
//         className=" bg-dark p-md-5 p-3 py-5 d-flex justify-content-around relative"
//         style={{ zIndex: 0, opacity: "90%" }}
//       >
//         <div
//           className=" d-none d-md-flex flex-column justify-content-center align-content-center"
//           style={{ color: "white" }}
//         >
//           <h1 className=" text-light"> Welcome back admin </h1>
//           <p className="pe-3 text-xxl">
//             {" "}
//             Please enter your username and password to access the admin portal.
//           </p>
//         </div>
//         <div
//           className="d-flex justify-content-center align-items-center bg-dark"
//           style={{ zIndex: 1 }}
//         >
//           <MDBCard
//             className=" mx-md-4"
//             style={{ borderRadius: "25px", opacity: "100%", height: "80%" }}
//           >
//             <MDBCardBody className="px-md-5 ">
//               <MDBCol className="d-flex flex-column align-items-center ">
//                 <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
//                   Admin Login
//                 </p>

//                 <div className="d-flex flex-row align-items-center mb-4">
//                   <MDBIcon fas icon="user" className="me-3 " size="lg" />
//                   <MDBInput
//                     placeholder="Your Name"
//                     id="form1"
//                     type="text"
//                     className=" w-100"
//                   />
//                 </div>

//                 <div className="d-flex flex-row align-items-center mb-4">
//                   <MDBIcon fas icon="envelope" className="me-3 " size="lg" />
//                   <MDBInput placeholder="Your Email" id="form2" type="email" />
//                 </div>

//                 <div className="d-flex flex-row align-items-center mb-4">
//                   <MDBIcon fas icon="lock" className="me-3" size="lg" />
//                   <MDBInput placeholder="Password" id="form3" type="password" />
//                 </div>

//                 <MDBBtn className="mb-4" size="lg">
//                   Login
//                 </MDBBtn>
//               </MDBCol>
//             </MDBCardBody>
//           </MDBCard>
//         </div>
//       </MDBContainer>
//     </div>
//   );
// }

export default App;
