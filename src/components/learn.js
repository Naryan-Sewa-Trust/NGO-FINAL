import React from "react";

const Learn = ({ img, title, description }) => {
  return (
    <div className="bg-dark">
      <div className="margin-learn container mb-3" data-wow-delay="0.1s">
        <div className=" causes-item d-flex flex-column bg-white border-top border-5 border-primary rounded-top overflow-hidden h-100">
          <div className="position-relative mb-4">
            <img className="w-50 h-50 " src={img} alt="Learn-img" />
          </div>
          <div className="text-center p-4 pt-0">
            <h5 className="mb-3">{title}</h5>

            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learn;
