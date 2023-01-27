import ProgressBar from 'components/ProgressBar';

const careers = [
  {
    logo: '',
    position: 'UX Designer',
    from: '2012',
    to: '2014',
    desc: '',
  },
  {
    logo: '',
    position: 'UX Designer',
    from: '2012',
    to: '2014',
    desc: '',
  },
];

export default function Resume() {
  return (
    <div id="resume" className="section-padding divider">
      <div className="container">
        <div className="row">
          <div className="col-12" data-aos="fade-up">
            <div className="intro-section text-center mb-5">
              <h1 className="fw-bold">My Resume</h1>
            </div>
          </div>
        </div>
        {careers.map((item, idx) => (
          <div
            key={idx}
            className="row mt-4 gx-0 gy-4 p-5 border-hover rounded-5 shadow"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="col-md-3">
              <img src={item.logo} alt="" />
            </div>
            <div className="col-md-3">
              <h5>{item.position}</h5>
              <small className="text-info">
                {item.from}-{item.to}
              </small>
            </div>
            <div className="col-md-6">
              <p className="mb-0">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12" data-aos="fade-up">
              <div className="intro-section text-center mb-5">
                <h1 className="fw-bold">My Skills</h1>
              </div>
            </div>
          </div>
          <div className="row g-md-5 g-4">
            <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="row gy-4">
                <div className="col-12">
                  <div>
                    <h5 className="small">HTML</h5>
                    <ProgressBar value={75} />
                  </div>
                </div>
                <div className="col-12">
                  <div>
                    <h5 className="small">CSS</h5>
                    <ProgressBar value={80} />
                  </div>
                </div>
                <div className="col-12">
                  <div>
                    <h5 className="small">JAVASCRIPT</h5>
                    <ProgressBar value={60} />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="row gy-4">
                <div className="col-12">
                  <div>
                    <h5 className="small">HTML</h5>
                    <ProgressBar value={75} />
                  </div>
                </div>
                <div className="col-12">
                  <div>
                    <h5 className="small">CSS</h5>
                    <ProgressBar value={80} />
                  </div>
                </div>
                <div className="col-12">
                  <div>
                    <h5 className="small">JAVASCRIPT</h5>
                    <ProgressBar value={60} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
