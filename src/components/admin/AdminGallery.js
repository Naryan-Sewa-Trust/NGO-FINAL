// // AdminGallery.js
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const AdminGallery = () => {
//   const [images, setImages] = useState([]);
//   const [file, setFile] = useState();

//   useEffect(() => {
//     // Fetch all images on component mount
//     fetchImages();
//   }, []);

//   const fetchImages = async () => {
//     try {
//       const response = await axios.get("http://localhost:5000/api/images");
//       //   const response = await axios.get(
//       //     "https://ngofinalbackend.vercel.app/api/images"
//       //   );
//       setImages(response.data);
//     } catch (error) {
//       console.error("Error fetching images:", error);
//     }
//   };

//   const handleImageUpload = async (e) => {
//     e.preventDefault();

//     try {
//       const formData = new FormData();
//       formData.append("file", file);

//       const res = await axios.post(
//         "http://localhost:5000/api/images",
//         // "https://ngofinalbackend.vercel.app/api/images",
//         formData,
//         {
//           headers: {
//             "x-device-id": "stuff",
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );

//       // Log the entire response for debugging
//       console.log("Response from server:", res);

//       // Check the response status
//       if (res.status === 200) {
//         console.log("Image added successfully!");
//         toast.success("Image added successfully");
//       } else {
//         console.error("Error adding Image. Server response:", res);
//         toast.error("Error adding Image");
//       }
//     } catch (error) {
//       console.error("Error adding Image:", error);
//       toast.error("Error adding Image");
//     }
//   };
//   const handleImageDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5000/api/images/${id}`);
//       //   await axios.delete(
//       // `https://ngofinalbackend.vercel.app/api/images/${id}`
//       //   );
//       fetchImages(); // Fetch updated list of images after deletion
//     } catch (error) {
//       console.error("Error deleting image:", error);
//     }
//   };

//   return (
//     <div className="mt-20 p-8 bg-gray-100 rounded-md shadow-md">
//       <ToastContainer />
//       <h1 className="text-3xl font-bold mb-4 text-gray-800 flex justify-center align-center mb-6">
//         Gallery
//       </h1>
//       <div className="flex flex-col md:flex-row items-center  md:space-x-6 mb-6">
//         <label className="block text-gray-900 mb-2 md:mb-0">
//           Upload Image for Gallery:
//         </label>
//         <input
//           className="block mt-2 md:mt-0 p-4 w-full md:w-auto text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-white dark:text-gray-400 focus:outline-none dark:bg-gray-400 dark:border-gray-600 dark:placeholder-gray-400"
//           id="file_input"
//           type="file"
//           onChange={(e) => setFile(e.target.files[0])}
//         />
//         <button
//           onClick={handleImageUpload}
//           className="mt-4 md:mt-0 bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 focus:outline-none"
//         >
//           Upload Image
//         </button>
//       </div>
//       <div>
//         <h2 className="text-2xl font-bold mb-4 text-gray-800">
//           Existing Images:
//         </h2>
//         <ul className="list-none grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//           {images.map((image, index) => (
//             <li key={index} className="flex items-center mb-4">
//               <img
//                 src={image.imageUrl}
//                 alt={`Image ${index + 1}`}
//                 className="w-40 h-40 object-cover rounded-md"
//               />
//               <button
//                 onClick={() => handleImageDelete(image._id)}
//                 className="bg-red-500 text-white px-3 py-2 mx-4 rounded-md hover:bg-red-600 focus:outline-none mt-2"
//               >
//                 Delete
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default AdminGallery;

import React, { useState, useEffect } from "react";
import axios from "axios";
import AdminHeader from "./AdminHeader";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminGallery = () => {
  const [images, setImages] = useState([]);
  const [file, setFile] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch all images on component mount
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/images");
      //   const response = await axios.get(
      //     "https://ngofinalbackend.vercel.app/api/images"
      //   );
      setImages(response.data);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  const handleImageUpload = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await axios.post(
        "http://localhost:5000/api/images",
        // "https://ngofinalbackend.vercel.app/api/images",
        formData,
        {
          headers: {
            "x-device-id": "stuff",
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // Log the entire response for debugging
      console.log("Response from server:", res);

      // Check the response status
      if (res.status === 200) {
        console.log("Image added successfully!");
        toast.success("Image added successfully");
      } else {
        console.error("Error adding Image. Server response:", res);
        toast.error("Error adding Image");
      }
    } catch (error) {
      console.error("Error adding Image:", error);
      toast.error("Error adding Image");
    }
  };
  const handleImageDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/images/${id}`);
      //   await axios.delete(
      // `https://ngofinalbackend.vercel.app/api/images/${id}`
      //   );
      fetchImages(); // Fetch updated list of images after deletion
    } catch (error) {
      console.error("Error deleting image:", error);
    }
  };
  useEffect(() => {
    // localStorage.setItem("token", token);
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);

  return (
    <div className="mt-20 p-8 bg-gray-100 rounded-md shadow-md">
      <AdminHeader />
      <ToastContainer />
      <h1 className="text-center mb-4 text-gray-800">Gallery</h1>
      <div className="flex flex-col md:flex-row items-center  md:space-x-6 mb-6">
        <label className="block text-gray-900 mb-2 md:mb-0 mx-2">
          Upload Image for Gallery:
        </label>
        <input
          className="block mt-2 md:mt-0 p-4 w-full md:w-auto text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-white dark:text-gray-400 focus:outline-none dark:bg-gray-400 dark:border-gray-600 dark:placeholder-gray-400"
          id="file_input"
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <button
          onClick={handleImageUpload}
          className="mt-2 mx-2 md:mt-0 btn btn-primary"
        >
          Upload Image
        </button>
      </div>
      <div className="border-top border-primary border-2 my-2"></div>
      <div>
        <h2 className="text-center mb-4 mt-4 text-gray-800">
          Existing Images:
        </h2>
        {/* <ul className="list-unstyled d-grid gap-4">
          {images.map((image, index) => (
            <li
              key={index}
              className="d-flex flex-column align-items-center mb-4"
            >
              <img
                src={image.imageUrl}
                alt={`Image ${index + 1}`}
                className="img-size object-cover rounded-md"
              />
              <button
                onClick={() => handleImageDelete(image._id)}
                className="btn btn-danger mt-2"
              >
                Delete
              </button>
            </li>
          ))}
        </ul> */}
        <ul className="list-unstyled row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          {images.map((image, index) => (
            <li key={index} className="col mb-4">
              <div className="d-flex flex-column align-items-center">
                <img
                  src={image.imageUrl}
                  alt={`Image ${index + 1}`}
                  className="img-size rounded-md"
                />
                <button
                  onClick={() => handleImageDelete(image._id)}
                  className="btn btn-danger mt-2"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminGallery;
