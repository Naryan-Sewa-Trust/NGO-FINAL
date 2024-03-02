// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// function AdminLoginPage() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(null); // State to store login error
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post("http://localhost:8000/admin/login", {
//         username,
//         password,
//       });

//       const token = response.data.token;
//       console.log(token);

//       if (!token) {
//         throw new Error("Token not received from server");
//       }

//       localStorage.setItem("token", token); // Store the token in local storage

//       // Include the token in the request headers for future requests
//       axios.defaults.headers.common["Authorization"] = `${token}`;

//       // Redirect to admin page
//       navigate("/adminPayment");
//     } catch (error) {
//       setError("Invalid username or password"); // Set error message
//       console.error("Login failed:", error);
//     }
//   };

//   return (
//     <div>
//       <h1>Admin Login</h1>
//       {error && <p style={{ color: "red" }}>{error}</p>}{" "}
//       {/* Display error message */}
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// }

// export default AdminLoginPage;

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBInput,
  MDBIcon,
} from "mdb-react-ui-kit"; // Import necessary components from MDBReactUIKit

function AdminLoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null); // State to store login error
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // const response = await axios.post("http://localhost:8000/admin/login", {
      const response = await axios.post(
        "https://ngofinalbackend.vercel.app/admin/login",
        {
          username,
          password,
        },
        {
          headers: {
            "x-device-id": "stuff",
            "Content-Type": "multipart/form-data",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers":
              "Origin, X-Requested-With, Content-Type, Accept ",
            "Access-Control-Allow-Methods": "POST, GET, PUT, OPTIONS, DELETE",
            "Access-Control-Max-Age": 3600,
          },
        }
      );

      const token = response.data.token;

      if (!token) {
        throw new Error("Token not received from server");
      }

      // Store the token in local storage for future requests
      localStorage.setItem("token", token);

      // Include the token in the request headers for future requests
      axios.defaults.headers.common["Authorization"] = `${token}`;

      // Redirect to admin page
      navigate("/adminPayment");
    } catch (error) {
      setError("Invalid username or password"); // Set error message
      console.error("Login failed:", error);
    }
  };

  return (
    <div
      className=" bg-dark d-flex align-content-center"
      style={{
        minHeight: "100vh",
        zIndex: "1",
        backgroundImage: "url(/images/img_1.jpg)", // Update background image URL
      }}
    >
      <MDBContainer
        fluid
        className=" bg-dark p-md-5 p-3 py-5 d-flex justify-content-around relative"
        style={{ zIndex: 0, opacity: "90%" }}
      >
        <div
          className=" d-none d-md-flex flex-column justify-content-center align-content-center"
          style={{ color: "white" }}
        >
          <h1 className=" text-light"> Welcome back admin </h1>
          <p className="pe-3 text-xxl">
            {" "}
            Please enter your username and password to access the admin portal.
          </p>
        </div>
        <div
          className="d-flex justify-content-center align-items-center bg-dark"
          style={{ zIndex: 1 }}
        >
          <MDBCard
            className=" mx-md-4"
            style={{ borderRadius: "25px", opacity: "100%", height: "80%" }}
          >
            <MDBCardBody className="px-md-5 ">
              <MDBCol className="d-flex flex-column align-items-center ">
                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                  Admin Login
                </p>

                <form
                  onSubmit={handleSubmit}
                  className="d-flex flex-column gap-3"
                >
                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="user" className="me-3 " size="lg" />
                    <MDBInput
                      placeholder="Your Name"
                      id="form1"
                      type="text"
                      className=" w-100"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="lock" className="me-3" size="lg" />
                    <MDBInput
                      placeholder="Password"
                      id="form3"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  <button className="bg-primary p-2 mb-4 rounded text-white border-white shadow-lg">
                    Login
                  </button>
                  <p>Copyright © Narayan Sewa Trust</p>
                </form>
              </MDBCol>
            </MDBCardBody>
          </MDBCard>
        </div>
      </MDBContainer>
    </div>
  );
}

export default AdminLoginPage;
