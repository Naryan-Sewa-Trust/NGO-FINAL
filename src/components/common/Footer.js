import { Link } from "react-router-dom";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer>
      <div
        className="container-fluid bg-dark text-white-50 footer mt-0 pt-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-6 col-md-6">
              <div className="d-flex justify-content-center align-content-center">
                <img
                  src="img/logo.jpeg"
                  className=" rounded-circle mb-4 me-3"
                  width={50}
                />
                <h1 className="fw-bold text-primary mb-4">
                  Narayan<span className="text-white">SewaTrust</span>
                </h1>
              </div>
              <p>
                At Narayana Sewa Trust, we tirelessly work to provide quality
                education to orphaned and economically disadvantaged children,
                aiming to break the cycle of poverty and empower them for a
                brighter future.
              </p>
              <div className="d-flex pt-2 justify-content-center">
                <a className="btn btn-square me-1" href="/">
                  <i className="fab fa-twitter"></i>
                </a>
                <a className="btn btn-square me-1" href="/">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a className="btn btn-square me-1" href="/">
                  <i className="fab fa-youtube"></i>
                </a>
                <a className="btn btn-square me-0" href="/">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <h5 className="text-light mb-4">Address</h5>
              <p>
                <i className="fa fa-map-marker-alt me-3"></i>Flat No. T-1,104,
                1st Floor, Tower-1 Plot No. GH o1/A, Sector 16C, Exotica
                Dreamville, Greater Noida, U.P.201203
              </p>
              <p>
                <i className="fa fa-phone-alt me-3"></i>+91-9718905221
              </p>
              <p>
                <i className="fa fa-envelope me-3"></i>info@ngoforlife.com
              </p>
            </div>
            <div
              className="col-lg-2 col-md-6 d-flex flex-column"
              style={{ alignItems: "center" }}
            >
              <h5 className="text-light mb-4 text-center ">Quick Links</h5>
              <div>
                <p>
                  <Link className="btn btn-link " to="/about">
                    About Us
                  </Link>
                </p>

                <p>
                  <Link className="btn btn-link " to="/contact">
                    Contact Us
                  </Link>
                </p>

                <p>
                  <Link className="btn btn-link " to="/causes">
                    Causes
                  </Link>
                </p>

                <p>
                  <Link className="btn btn-link" to="/csp">
                    CSP
                  </Link>
                </p>
              </div>
            </div>
            {/* <div className="col-lg-3 col-md-6">
              <h5 className="text-light mb-4">Newsletter</h5>
              <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
              <div className="position-relative mx-auto mx-400">
                <input
                  className="form-control bg-transparent w-100 py-3 ps-4 pe-5"
                  type="text"
                  placeholder="Your email"
                />
                <button
                  type="button"
                  className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
                >
                  SignUp
                </button>
              </div>
            </div> */}
          </div>
        </div>
        <div className="container-fluid copyright">
          <div className="container">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                &copy; <a href="/">Narayan Sewa Trust</a>, All Right Reserved.
              </div>
              <div className="col-md-6 text-center text-md-end">
                Developed By{" "}
                <a href="https://www.teksila.in/" target="_blank">
                  Teksila
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        className="btn btn-lg btn-primary btn-lg-square back-to-top"
        onClick={scrollToTop}
      >
        <i className="bi bi-arrow-up"></i>
      </button>
    </footer>
  );
}
export default Footer;
