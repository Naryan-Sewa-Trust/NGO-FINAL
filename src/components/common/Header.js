import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

function Header(props) {
  const location = useLocation();
  const [sticky, setSticky] = useState(false);
  const [showSideNav, setShowSideNav] = useState(false);
  const sideNavbarRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        sideNavbarRef.current &&
        !sideNavbarRef.current.contains(event.target)
      ) {
        setShowSideNav(false);
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    function setFixed() {
      if (window.scrollY >= 300) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    }
    window.addEventListener("scroll", setFixed);

    return () => {
      window.removeEventListener("scroll", setFixed);
    };
  }, []);

  const toggleSideNav = (event) => {
    event.stopPropagation(); // Stop event propagation
    setShowSideNav(!showSideNav);
  };

  return (
    <header>
      <div
        className={
          sticky
            ? `container-fluid fixed-top px-0 wow fadeIn bg-dark shadow`
            : `container-fluid fixed-top px-0 wow fadeIn ${
                props.learn != null && "bg-dark shadow"
              }`
        }
        data-wow-delay="0.1s"
      >
        <div className="top-bar text-white-50 row gx-0 align-items-center d-none d-lg-flex">
          <div className="col-lg-6 px-5 text-start">
            <small>
              <i className="fa fa-map-marker-alt me-2"></i>
              Greater Noida, U.P. , Delhi
            </small>
            <small className="ms-4">
              <i className="fa fa-envelope me-2"></i>info@ngoforlife.com
            </small>
          </div>
          <div className="col-lg-6 px-5 text-end">
            <small>Follow us:</small>
            <a className="text-white-50 ms-3" href="/">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a className="text-white-50 ms-3" href="/">
              <i className="fab fa-twitter"></i>
            </a>
            <a className="text-white-50 ms-3" href="/">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a className="text-white-50 ms-3" href="/">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        <nav
          className={showSideNav ? "side-navbar open" : "side-navbar"}
          ref={sideNavbarRef}
        >
          <div className="side-navbar-links">
            <Link to="/" onClick={toggleSideNav}>
              Home
            </Link>
            <Link to="/about" onClick={toggleSideNav}>
              About
            </Link>
            <Link to="/causes" onClick={toggleSideNav}>
              Causes
            </Link>
            <Link to="/csp" onClick={toggleSideNav}>
              CSP
            </Link>
            <Link to="/contact" onClick={toggleSideNav}>
              Contact
            </Link>
            <Link to="/donate" className="btn btn-outline-primary">
              Donate Now
            </Link>
          </div>
        </nav>

        <nav
          className="navbar mt-1 navbar-expand-lg navbar-dark py-lg-0 px-lg-5 wow fadeIn"
          data-wow-delay="0.1s"
        >
          <Link to="/" className="navbar-brand ms-4 ms-lg-0">
            <h1 className="fw-bold text-primary ">
              <img
                src="img/logo.jpg"
                className="rounded-circle mb-4 me-3 d-none d-sm-inline-block"
                width={50}
              />
              Narayan<span className="text-white">SewaTrust</span>
            </h1>
          </Link>
          <button
            className="nav-toggler me-4"
            type="button"
            onClick={toggleSideNav}
          >
            {!showSideNav && <span className="navbar-toggler-icon"></span>}
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto p-4 p-lg-0">
              <Link
                to="/"
                className={
                  "nav-item nav-link" +
                  (location.pathname === "/" ? " active" : "")
                }
              >
                Home
              </Link>
              <Link
                to="/about"
                className={
                  "nav-item nav-link" +
                  (location.pathname === "/about" ? " active" : "")
                }
              >
                About
              </Link>
              <Link
                to="/causes"
                className={
                  "nav-item nav-link" +
                  (location.pathname === "/causes" ? " active" : "")
                }
              >
                Causes
              </Link>
              <Link
                to="/csp"
                className={
                  "nav-item nav-link" +
                  (location.pathname === "/csp" ? " active" : "")
                }
              >
                CSP
              </Link>
              <Link
                to="/contact"
                className={
                  "nav-item nav-link" +
                  (location.pathname === "/contact" ? " active" : "")
                }
              >
                Contact
              </Link>
            </div>
            <div className="d-none d-lg-flex ms-2">
              <Link className="btn btn-outline-primary py-2 px-3" to="/donate">
                Donate Now
                <div className="d-inline-flex btn-sm-square bg-white text-primary rounded-circle ms-2">
                  <i className="fa fa-arrow-right"></i>
                </div>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
