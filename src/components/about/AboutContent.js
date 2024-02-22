import { Link } from "react-router-dom";
import Team from "../team/Team";
function AboutContent() {
  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="position-relative overflow-hidden h-100 mh-400">
                <img
                  className="position-absolute w-100 h-100 pt-5 cover-full l-0"
                  src="images/about.jpg"
                  alt="about-img1"
                />
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="h-100 text-start">
                <div className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">
                  About Us
                </div>
                <h1 className="display-6 mb-5">
                  We Help People In Need Around The World
                </h1>
                <div className="bg-light border-bottom border-5 border-primary rounded p-4 mb-4">
                  <p className="text-dark mb-2">
                    We are committed to assisting those in need across the
                    globe, providing support and aid to vulnerable communities.
                    Through our dedicated efforts, we strive to make a positive
                    impact and create a brighter future for people facing
                    hardship worldwide.
                  </p>
                  <span className="text-primary">Narayan Sewa Trust</span>
                </div>
                <p className="mb-5">
                  At our organization, we believe in the power of compassion and
                  solidarity to uplift individuals and communities in times of
                  adversity. From delivering emergency relief to implementing
                  sustainable development projects, our mission is to address
                  the diverse needs of people around the world. Whether it's
                  providing food and shelter to refugees, offering medical
                  assistance in conflict zones, or supporting education and
                  livelihood programs, we are dedicated to making a meaningful
                  difference in the lives of those who need it most
                </p>
                <Link
                  className="btn btn-primary py-2 px-3 me-3"
                  to="/learnmore"
                  state={{
                    title: "We Help People In Need Around The World",
                    img: "images/about.jpg",
                  }}
                >
                  Learn More
                  <div className="d-inline-flex btn-sm-square bg-white text-primary rounded-circle ms-2">
                    <i className="fa fa-arrow-right"></i>
                  </div>
                </Link>
                <Link
                  className="btn btn-outline-primary py-2 px-3"
                  to="/contact"
                >
                  Contact Us
                  <div className="d-inline-flex btn-sm-square bg-primary text-white rounded-circle ms-2">
                    <i className="fa fa-arrow-right"></i>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp mw-500"
            data-wow-delay="0.1s"
          >
            <div className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">
              What We Do
            </div>
            <h1 className="display-6 mb-5">
              Learn More What We Do And Get Involved
            </h1>
          </div>
          <div className="row g-4 justify-content-center">
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-item bg-white text-center h-100 p-4 p-xl-5">
                <img
                  className="img-fluid mb-4"
                  src="img/icon-1.png"
                  alt="Education-img"
                />
                <h4 className="mb-3">Child Education</h4>
                <p className="mb-4">
                  Empowering young minds through quality education programs.
                </p>
                <Link
                  className="btn btn-outline-primary px-3"
                  to="/learnmore"
                  state={{ title: "Child Education", img: "images/img6.jpg" }}
                >
                  Learn More
                  <div className="d-inline-flex btn-sm-square bg-primary text-white rounded-circle ms-2">
                    <i className="fa fa-arrow-right"></i>
                  </div>
                </Link>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="service-item bg-white text-center h-100 p-4 p-xl-5">
                <img
                  className="img-fluid mb-4"
                  src="img/icon-2.png"
                  alt="Medical-img"
                />
                <h4 className="mb-3">Medical Treatment</h4>
                <p className="mb-4">
                  Providing life-saving medical treatment to those in need.
                </p>
                <Link
                  className="btn btn-outline-primary px-3"
                  to="/learnmore"
                  state={{
                    title: "Medical Treatment",
                    img: "img/courses-3.jpg",
                  }}
                >
                  Learn More
                  <div className="d-inline-flex btn-sm-square bg-primary text-white rounded-circle ms-2">
                    <i className="fa fa-arrow-right"></i>
                  </div>
                </Link>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="service-item bg-white text-center h-100 p-4 p-xl-5">
                <img
                  className="img-fluid mb-4"
                  src="img/icon-3.png"
                  alt="Drinking Water"
                />
                <h4 className="mb-3">Pure Drinking Water</h4>
                <p className="mb-4">
                  Ensuring access to clean and safe drinking water for all.
                </p>
                <Link
                  className="btn btn-outline-primary px-3"
                  to="/learnmore"
                  state={{
                    title: "Pure Drinking Water",
                    img: "img/courses-2.jpg",
                  }}
                >
                  Learn More
                  <div className="d-inline-flex btn-sm-square bg-primary text-white rounded-circle ms-2">
                    <i className="fa fa-arrow-right"></i>
                  </div>
                </Link>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="service-item bg-white text-center h-100 p-4 p-xl-5">
                <img
                  className="img-fluid mb-4"
                  src="img/girl-icon.png"
                  alt="Girl Marriage image"
                />
                <h4 className="mb-3">Girl Marriage</h4>
                <p className="mb-4">
                  Our NGO empowers underprivileged girls, fostering hope and
                  dignity.
                </p>
                <Link
                  className="btn btn-outline-primary px-3"
                  to="/learnmore"
                  state={{ title: "Girl Marriage", img: "images/img6.jpg" }}
                >
                  Learn More
                  <div className="d-inline-flex btn-sm-square bg-primary text-white rounded-circle ms-2">
                    <i className="fa fa-arrow-right"></i>
                  </div>
                </Link>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="service-item bg-white text-center h-100 p-4 p-xl-5">
                <img
                  className="img-fluid mb-4"
                  src="img/orphanage.png"
                  alt="Orphanage image"
                />
                <h4 className="mb-3">Orphanage</h4>
                <p className="mb-4">
                  Orphanages provide supportive environment for children who
                  have lost parental care.
                </p>
                <Link
                  className="btn btn-outline-primary px-3"
                  to="/learnmore"
                  state={{
                    title: "Orphanage",
                    img: "images/poor5.jpg",
                  }}
                >
                  Learn More
                  <div className="d-inline-flex btn-sm-square bg-primary text-white rounded-circle ms-2">
                    <i className="fa fa-arrow-right"></i>
                  </div>
                </Link>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="service-item bg-white text-center h-100 p-4 p-xl-5">
                <img
                  className="img-fluid mb-4"
                  src="img/skill.png"
                  alt="Skill image"
                />
                <h4 className="mb-3">Skill Development</h4>
                <p className="mb-4">
                  Skill development initiatives empower individuals with the
                  knowledge and abilities
                </p>
                <Link
                  className="btn btn-outline-primary px-3"
                  to="/learnmore"
                  state={{
                    title: "Skill Development",
                    img: "images/poor4.jpg",
                  }}
                >
                  Learn More
                  <div className="d-inline-flex btn-sm-square bg-primary text-white rounded-circle ms-2">
                    <i className="fa fa-arrow-right"></i>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Team />
    </>
  );
}
export default AboutContent;
