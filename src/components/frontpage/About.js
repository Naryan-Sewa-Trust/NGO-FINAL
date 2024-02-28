function About() {
  return (
    <>
      <div className="d-block d-md-flex intro-engage">
        <div className="">
          <h2>Rescue An Orphan</h2>
          <p>
            Providing hope and care for orphaned children through rescue
            initiatives.
          </p>
        </div>
        <div>
          <h2>Feed The Hungry</h2>
          <p>
            Nourishing communities by addressing hunger and providing essential
            meals.
          </p>
        </div>
        <div>
          <h2>Free Education</h2>
          <p>
            Unlocking opportunities and transforming lives through accessible,
            free education programs
          </p>
        </div>
      </div>
      <div className="site-section bg-image overlay counter" id="about-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-6 mb-4">
              <figure
                className="block-img-video-1 aos-init aos-animate"
                data-aos="fade"
              >
                <iframe
                  src="/images/video.mp4"
                  frameborder="0"
                  allow="autoplay; fullscreen"
                  allowfullscreen
                  className="custom-height custom-width"
                ></iframe>
              </figure>
            </div>
            <div className="col-lg-5 ms-auto align-self-lg-center text-start">
              <h2 className="text-black mb-4 text-uppercase section-title">
                Our Mission
              </h2>
              <p className="text-black">
                Our mission is to offer a beacon of hope to vulnerable children,
                providing not only shelter and nutritious meals but also access
                to quality education. Through our unwavering commitment, we aim
                to break the cycle of poverty, empowering these children with
                the tools and resources they need to build a brighter future.
              </p>
              <p className="text-black">
                Together, we strive to create a world where every child has the
                opportunity to thrive and reach their full potential.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-4 col-lg-0 col-lg-3">
              <div className="block-counter-1">
                <h1 className="number">
                  <span data-number="15">15</span>
                </h1>
                <span className="caption text-black">Number of Orphanage</span>
              </div>
            </div>
            <div className="col-md-6 mb-4 col-lg-0 col-lg-3">
              <div className="block-counter-1">
                <h1 className="number">
                  <span data-number="392">392</span>
                </h1>
                <span className="caption text-black">Number of Donations</span>
              </div>
            </div>
            <div className="col-md-6 mb-4 col-lg-0 col-lg-3">
              <div className="block-counter-1">
                <h1 className="number">
                  <span data-number="3293">3,293</span>
                </h1>
                <span className="caption text-black">Number of Volunteers</span>
              </div>
            </div>
            <div className="col-md-6 mb-4 col-lg-0 col-lg-3">
              <div className="block-counter-1">
                <h1 className="number">
                  <span data-number="1212">1,212</span>
                </h1>
                <span className="caption text-black">Number of Orphans</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
