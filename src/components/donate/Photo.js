import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import "./Photo.css"; // Import your CSS file

const Photo = ({ src, alt }) => {
  const [isOpenImg, setIsOpenImg] = useState(false);

  return (
    <>
      {!isOpenImg && (
        <img
          src={src}
          alt={alt}
          className="custom-photo cursor-pointer"
          onClick={() => setIsOpenImg(!isOpenImg)}
        />
      )}
      {isOpenImg && (
        <Transition
          show={isOpenImg}
          enter="transition-opacity duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="custom-overlay" onClick={() => setIsOpenImg(false)}>
            <img src={src} alt={alt} className="custom-modal-image" />
          </div>
        </Transition>
      )}
    </>
  );
};

export default Photo;
