import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
function Banner() {
  return (
    <div className="container-fluid p-0">
      <div id="header-carousel" class="carousel slide" data-bs-ride="carousel">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block object-cover"
              style={{ objectFit: "cover", width: "100%", height: "90vh" }}
              src="img/carousel-1.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <div className="row justify-content-center px-4">
                <div className="col-lg-7 pt-5">
                  <h1 className="display-4 text-white mb-3 animated slideInDown">
                    Let's Change The World With Humanity
                  </h1>
                  <p className="fs-5 text-white-50 mb-5 animated slideInDown">
                    By fostering empathy and kindness, we strive to transform
                    our world into a more compassionate and inclusive place for
                    all.
                  </p>
                  <Link
                    className="btn btn-primary py-2 px-3 animated slideInDown"
                    to="/learnmore"
                    state={{
                      title: "Let's Change The World With Humanity",
                      img: "img/carousel-1.jpg",
                    }}
                  >
                    Learn More
                    <div className="d-inline-flex btn-sm-square bg-white text-primary rounded-circle ms-2">
                      <i className="fa fa-arrow-right"></i>
                    </div>
                  </Link>
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block object-cover "
              style={{ objectFit: "cover", width: "100%", height: "90vh" }}
              src="img/carousel-2.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <div className="row justify-content-center px-4">
                <div className="col-lg-7 pt-5">
                  <h1 className="display-4 text-white mb-3 animated slideInDown">
                    Let's Save More Lives With Our Helping Hand
                  </h1>
                  <p className="fs-5 text-white-50 mb-5 animated slideInDown">
                    With our collective efforts and compassionate outreach, we
                    aim to save more lives and provide hope to those in need.
                  </p>
                  <Link
                    className="btn btn-primary py-2 px-3 animated slideInDown"
                    to="/learnmore"
                    state={{
                      title: "Let's Save More Lives With Our Helping Hand",
                      img: "img/carousel-2.jpg",
                    }}
                  >
                    Learn More
                    <div className="d-inline-flex btn-sm-square bg-white text-primary rounded-circle ms-2">
                      <i className="fa fa-arrow-right"></i>
                    </div>
                  </Link>
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          {/* Add more Carousel.Item components for additional images */}
        </Carousel>
      </div>
    </div>
  );
}

export default Banner;
