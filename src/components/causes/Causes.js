import { useEffect } from "react";
import { Link } from "react-router-dom";
const img5 = "/images/img5.jpg";
function Causes() {
  useEffect(() => window.scrollTo(0, 0), []);
  return (
    <div className="container-xxl ">
      <div className="container py-5">
        <div
          className="text-center mx-auto mb-5 wow fadeInUp mw-500"
          data-wow-delay="0.1s"
        >
          <div className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">
            Feature Causes
          </div>
          <h1 className="display-6 mb-5">
            What we do something good for society
          </h1>
        </div>
        <div className="row g-4 justify-content-center">
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="causes-item d-flex flex-column bg-light border-top border-5 border-primary rounded-top overflow-hidden h-100">
              <div className="text-center p-4 pt-0">
                <div className="d-inline-block bg-primary text-white rounded-bottom fs-5 pb-1 px-3 mb-4">
                  <small>Education</small>
                </div>
                <h5 className="mb-3">Education For Underprivileged Children</h5>
                <p>
                  Providing education opportunities for underprivileged children
                  to unlock their full potential and break the cycle of poverty.
                </p>
              </div>
              <div className="position-relative mt-auto">
                <img
                  className="img-fluid"
                  src={img5}
                  alt="Education"
                  style={{ objectFit: "cover", width: "100%", height: "40vh" }}
                />
                <div className="causes-overlay">
                  <Link
                    className="btn btn-outline-primary"
                    to="/learnmore"
                    state={{
                      title: "Education For Underprivileged Children",
                      img: "/images/img5.jpg",
                    }}
                  >
                    Read More
                    <div className="d-inline-flex btn-sm-square bg-primary text-white rounded-circle ms-2">
                      <i className="fa fa-arrow-right"></i>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="causes-item d-flex flex-column bg-light border-top border-5 border-primary rounded-top overflow-hidden h-100">
              <div className="text-center p-4 pt-0">
                <div className="d-inline-block bg-primary text-white rounded-bottom fs-5 pb-1 px-3 mb-4">
                  <small>Pure Water</small>
                </div>
                <h5 className="mb-3">Ensure Pure Drinking Water</h5>
                <p>
                  Ensuring access to pure and safe drinking water for
                  communities in need.
                </p>
              </div>
              <div className="position-relative mt-auto">
                <img
                  className="img-fluid cover-fill "
                  style={{ objectFit: "cover", width: "100%", height: "40vh" }}
                  src="images/poor6.jpg"
                  alt="Water"
                />
                <div className="causes-overlay">
                  <Link
                    className="btn btn-outline-primary"
                    to="/learnmore"
                    state={{
                      title: "Pure Drinking Water",
                      img: "images/poor2.jpg",
                    }}
                  >
                    Read More
                    <div className="d-inline-flex btn-sm-square bg-primary text-white rounded-circle ms-2">
                      <i className="fa fa-arrow-right"></i>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="causes-item d-flex flex-column bg-light border-top border-5 border-primary rounded-top overflow-hidden h-100">
              <div className="text-center p-4 pt-0">
                <div className="d-inline-block bg-primary text-white rounded-bottom fs-5 pb-1 px-3 mb-4">
                  <small>Healthy Life</small>
                </div>
                <h5 className="mb-3">Ensure Medical Treatment</h5>
                <p>
                  Committed to accessible medical care, we deliver diagnosis,
                  treatment, and support to underserved communities for a
                  healthier future.
                </p>
              </div>
              <div className="position-relative mt-auto">
                <img
                  className="img-fluid"
                  src="img/courses-3.jpg"
                  alt="Healthy life"
                  style={{ objectFit: "cover", width: "100%", height: "40vh" }}
                />
                <div className="causes-overlay">
                  <Link
                    className="btn btn-outline-primary"
                    to="/learnmore"
                    state={{
                      title: "Medical Treatment",
                      img: "img/courses-3.jpg",
                    }}
                  >
                    Read More
                    <div className="d-inline-flex btn-sm-square bg-primary text-white rounded-circle ms-2">
                      <i className="fa fa-arrow-right"></i>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="causes-item d-flex flex-column bg-light border-top border-5 border-primary rounded-top overflow-hidden h-100">
              <div className="text-center p-4 pt-0">
                <div className="d-inline-block bg-primary text-white rounded-bottom fs-5 pb-1 px-3 mb-4">
                  <small>Fitness</small>
                </div>
                <h5 className="mb-3">Para Sports</h5>
                <p>
                  Our NGO is dedicated to Para Sports empower athletes with
                  disabilities, promoting inclusivity and advocating for equal
                  opportunities in sports.
                </p>
              </div>
              <div className="position-relative">
                <img
                  className="img-fluid"
                  src="images/para.png"
                  alt="Fitness"
                  style={{ objectFit: "cover", width: "100%", height: "40vh" }}
                />
                <div className="causes-overlay">
                  <Link
                    className="btn btn-outline-primary"
                    to="/learnmore"
                    state={{
                      title: "Para Sports",
                      img: "images/para.png",
                    }}
                  >
                    Read More
                    <div className="d-inline-flex btn-sm-square bg-primary text-white rounded-circle ms-2">
                      <i className="fa fa-arrow-right"></i>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="causes-item d-flex flex-column bg-light border-top border-5 border-primary rounded-top overflow-hidden h-100">
              <div className="text-center p-4 pt-0">
                <div className="d-inline-block bg-primary text-white rounded-bottom fs-5 pb-1 px-3 mb-4">
                  <small>Support</small>
                </div>
                <h5 className="mb-3">Mass Wedding</h5>
                <p>
                  Our NGO conducts mass weddings for individuals with
                  disabilities, fostering love and inclusivity while overcoming
                  social stigmas.
                </p>
              </div>
              <div className="position-relative ">
                <img
                  className="img-fluid"
                  src="images/wedding.png"
                  style={{ objectFit: "cover", width: "100%", height: "40vh" }}
                  alt="Wedding"
                />
                <div className="causes-overlay">
                  <Link
                    className="btn btn-outline-primary"
                    to="/learnmore"
                    state={{
                      title: "Mass Wedding",
                      img: "images/wedding.png",
                    }}
                  >
                    Read More
                    <div className="d-inline-flex btn-sm-square bg-primary text-white rounded-circle ms-2">
                      <i className="fa fa-arrow-right"></i>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="causes-item d-flex flex-column bg-light border-top border-5 border-primary rounded-top overflow-hidden h-100">
              <div className="text-center p-4 pt-0">
                <div className="d-inline-block bg-primary text-white rounded-bottom fs-5 pb-1 px-3 mb-4">
                  <small>Take Care</small>
                </div>
                <h5 className="mb-3">A Beacon of Hope for the Elderly</h5>
                <p>
                  Our NGO, believe in the sanctity and dignity of every human
                  life, especially those who have spent their years nurturing
                  and caring for others.
                </p>
              </div>
              <div className="position-relative mt-auto">
                <img
                  className="img-fluid"
                  src="images/old.jpg"
                  alt="Take Care"
                  style={{ objectFit: "cover", width: "100%", height: "40vh" }}
                />
                <div className="causes-overlay">
                  <Link
                    className="btn btn-outline-primary"
                    to="/learnmore"
                    state={{
                      title: " A Beacon of Hope for the Elderly",
                      img: "images/skill.jpg",
                    }}
                  >
                    Read More
                    <div className="d-inline-flex btn-sm-square bg-primary text-white rounded-circle ms-2">
                      <i className="fa fa-arrow-right"></i>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="causes-item d-flex flex-column bg-light border-top border-5 border-primary rounded-top overflow-hidden h-100">
              <div className="text-center p-4 pt-0">
                <div className="d-inline-block bg-primary text-white rounded-bottom fs-5 pb-1 px-3 mb-4">
                  <small>Empowerment</small>
                </div>
                <h5 className="mb-3">Skill Development</h5>
                <p>
                  Committed to accessible medical care, we deliver diagnosis,
                  treatment, and support to underserved communities for a
                  healthier future.
                </p>
              </div>
              <div className="position-relative mt-auto">
                <img
                  className="img-fluid"
                  src="images/skill.jpg"
                  alt="Empowerment"
                  style={{ objectFit: "cover", width: "100%", height: "40vh" }}
                />
                <div className="causes-overlay">
                  <Link
                    className="btn btn-outline-primary"
                    to="/learnmore"
                    state={{
                      title: "Skill Development",
                      img: "images/skill.jpg",
                    }}
                  >
                    Read More
                    <div className="d-inline-flex btn-sm-square bg-primary text-white rounded-circle ms-2">
                      <i className="fa fa-arrow-right"></i>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
export default Causes;
