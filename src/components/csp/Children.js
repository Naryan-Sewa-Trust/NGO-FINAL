import { Link } from "react-router-dom";
function Children({ title, description, img }) {
  return (
    <>
      <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
        <div className="causes-item d-flex flex-column bg-white border-top border-5 border-primary rounded-top overflow-hidden h-100">
          <div className="position-relative  mb-4">
            <img
              className="img-fluid"
              src={img}
              alt="image"
              style={{ objectFit: "cover", width: "100%", height: "40vh" }}
            />
            <div className="causes-overlay">
              <Link
                className="btn btn-outline-primary"
                to="/learnmore"
                state={{ title: title, img: img }}
              >
                Read More
                <div className="d-inline-flex btn-sm-square bg-primary text-white rounded-circle ms-2">
                  <i className="fa fa-arrow-right"></i>
                </div>
              </Link>
            </div>
          </div>
          <div className="text-center p-4 pt-0">
            {/* <div className="d-inline-block bg-primary text-white rounded-bottom fs-5 pb-1 px-3 mb-4">
                        <small>Education</small>
                    </div> */}
            <h5 className="mb-3">{title}</h5>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Children;
