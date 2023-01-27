export default function Services() {
  return (
    <div id="services" className="section-padding divider">
      <div className="container">
        <div className="row">
          <div className="col-12" data-aos="fade-up">
            <div className="intro-section text-center mb-5">
              <h1 className="fw-bold">My Services</h1>
            </div>
          </div>
        </div>
        <div className="row gy-4">
          <div
            className="col-md-6 col-lg-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="service border-hover p-4 shadow rounded-5">
              <div className="icon rounded-4">
                <i className="ri-pencil-ruler-2-fill"></i>
              </div>
              <h5 className="mt-4 fw-bold">Web Development</h5>
              <p className="mb-0">
                Design, develop, and maintain responsive web applications that
                are scalable, secure, and user-friendly.
              </p>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="service border-hover p-4 shadow rounded-5">
              <div className="icon rounded-4">
                <i className="ri-angularjs-fill"></i>
              </div>
              <h5 className="mt-4 fw-bold">Frontend Development</h5>
              <p className="mb-0">
                Create responsive, interactive and visually appealing user
                interfaces using ReactJS, NextJS and SvelteKit.
              </p>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-4"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="service border-hover p-4 shadow rounded-5">
              <div className="icon rounded-4">
                <i className="ri-android-fill"></i>
              </div>
              <h5 className="mt-4 fw-bold">Backend Development</h5>
              <p className="mb-0">
                Build and integrate RESTful APIs and database systems using
                NestJS and NodeJS that are efficient and reliable.
              </p>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="service border-hover p-4 shadow rounded-5">
              <div className="icon rounded-4">
                <i className="ri-pie-chart-2-fill"></i>
              </div>
              <h5 className="mt-4 fw-bold">Mobile App Development</h5>
              <p className="mb-0">
                Design and develop mobile applications for iOS and Android
                platforms using React Native and Flutter.
              </p>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="service border-hover p-4 shadow rounded-5">
              <div className="icon rounded-4">
                <i className="ri-user-smile-fill"></i>
              </div>
              <h5 className="mt-4 fw-bold">Smart Contract Development</h5>
              <p className="mb-0">
                Build and deploy smart contracts on blockchain networks that are
                secure, efficient and reliable.
              </p>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-4"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="service border-hover p-4 shadow rounded-5">
              <div className="icon rounded-4">
                <i className="ri-shield-flash-fill"></i>
              </div>
              <h5 className="mt-4 fw-bold">3D Web Development</h5>
              <p className="mb-0">
                Design, develop and maintain interactive 3D web applications
                using Three.js, WebGL, and other web technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
