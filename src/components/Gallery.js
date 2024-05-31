// import React, { useState } from "react";
// import Header from "./common/Header";
// import Photo from "./donate/Photo";
// import Footer from "./common/Footer";
// import PageHeader from "./common/PageHeader";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Gallery = () => {
//   return (
//     <div>
//       <ToastContainer limit={1} position="bottom-center" />
//       <Header />
//       <PageHeader pagetitle="Gallery" />
//       <div className="container justify-content-between mt-2">
//         <div className="row align-items-center">
//           {/* <!-- Adjusted column width for better alignment --> */}
//           <div className="col-12 col-md-4 mb-4">
//             <div className="grid grid-cols-2 gap-4 py-6">
//               <Photo src="img/NarayanSewa.png" alt="Photo 1" />
//             </div>
//           </div>
//           <div className="col-12 col-md-4 mb-4">
//             <div className="grid grid-cols-2 gap-4 py-6">
//               <Photo src="images/wedding.png" alt="Photo 1" />
//             </div>
//           </div>
//           <div className="col-12 col-md-4 mb-4">
//             <div className="grid grid-cols-2 gap-4 py-6">
//               <Photo src="img/galary2.jpeg" alt="Photo 1" />
//             </div>
//           </div>
//           <div className="col-12 col-md-4 mb-4">
//             <div className="grid grid-cols-2 gap-4 py-6">
//               <Photo src="images/about.jpg" alt="Photo 1" />
//             </div>
//           </div>
//           <div className="col-12 col-md-4 mb-4">
//             <div className="grid grid-cols-2 gap-4 py-6">
//               <Photo src="img/logo.jpg" alt="Photo 1" />
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Gallery;

import React, { useState, useEffect } from "react";
import Header from "./common/Header";
import Photo from "./donate/Photo";
import Footer from "./common/Footer";
import PageHeader from "./common/PageHeader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        // const response = await fetch("http://localhost:5000/api/images");
        const response = await fetch(
          "https://ngo-final.onrender.com/api/images"
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          throw new TypeError(
            "Expected JSON, but received a different content type"
          );
        }

        const data = await response.json();
        setImages(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
        toast.error("Failed to load images: " + error.message);
        console.error("Error:", error); // Log error for debugging
      }
    };

    fetchImages();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  // if (error) {
  //   return <div>Error: {error.message}</div>;
  // }

  // Check if images is undefined or not an array
  if (!Array.isArray(images)) {
    return <div>Error: Images data is invalid</div>;
  }

  return (
    <div>
      <ToastContainer limit={1} position="bottom-center" />
      <Header />
      <PageHeader pagetitle="Gallery" />
      <div className="container justify-content-between mt-2">
        <div className="row align-items-center">
          {/* Use conditional rendering to handle undefined or empty images array */}
          {images.length > 0 ? (
            images.map((image, index) => (
              <div className="col-12 col-md-4 mb-4" key={index}>
                <div className="grid grid-cols-2 gap-4 py-6">
                  <img
                    src={image.imageUrl}
                    alt={image.alt}
                    className="custom-photo cursor-pointer"
                  />
                  {/* <Photo src={image.imageUrl} alt={image.alt} /> */}
                </div>
              </div>
            ))
          ) : (
            <div className="my-4 ">No images to display</div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
