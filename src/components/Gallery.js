import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./common/Header";
import Footer from "./common/Footer";
import PageHeader from "./common/PageHeader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      // const response = await axios.get("http://localhost:5000/api/images/");
      const response = await axios.get(
        "https://ngo-final.onrender.com/api/images"
      );

      // if (response.status !== 200) {
      //   throw new Error(`HTTP error! status: ${response.status}`);
      // }

      setImages(response.data);
    } catch (error) {
      toast.error("Failed to load images: " + error.message);
      console.error("Error:", error); // Log error for debugging
    }
  };

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
                    // alt={image.alt}
                    alt={`Image ${index + 1}`}
                    className="custom-photo cursor-pointer"
                  />
                  {/* <Photo src={image.imageUrl} alt={image.alt} /> */}
                </div>
              </div>
            ))
          ) : (
            <div className="my-4">No images to display</div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
