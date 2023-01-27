export default function Hero() {
  return (
    <div id="hero" className="section-padding divider">
      <div className="container">
        <div className="row gy-4 align-items-center">
          <div className="col-lg-5">
            <img
              data-aos="fade-down"
              data-aos-delay="200"
              src="./assets/images/hero.png"
              className="img-fluid"
              alt=""
            />
          </div>
          <div className="col-lg-7">
            <h1 className="fw-bold display-4" data-aos="fade-up">
              I AM A CREATIVE
              <br /> <span className="text-info">WEB DEVELOPER</span>
            </h1>
            <p data-aos="fade-up" data-aos-delay="200">
              Have worked with a wide range of clients, from small startups to
              large corporations and have a proven track record of delivering
              high-quality web applications that meet their specific needs
            </p>
            <a
              data-aos="fade-up"
              data-aos-delay="300"
              href="#work"
              className="btn btn-outline-info me-3"
            >
              My Work
            </a>
            <a
              data-aos="fade-up"
              data-aos-delay="400"
              href="#work"
              className="btn btn-info"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
