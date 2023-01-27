const projects = [
  {
    image: '/assets/images/projects/constellation-canvas.png',
    name: 'Constellation Canvas',
    skills: ['React', 'WebSocket', 'Typescript'],
  },
  {
    image: '/assets/images/projects/experiwear.png',
    name: 'Experiwear Dashboard',
    skills: ['React', 'MUI', 'Typescript'],
  },
  {
    image: '/assets/images/projects/drive-test-magic.png',
    name: 'Drive Test Magic',
    skills: ['React', 'MapGL', 'GraphQL'],
  },
];

export default function Work() {
  return (
    <div id="work" className="section-padding divider">
      <div className="container">
        <div className="row">
          <div className="col-12" data-aos="fade-up">
            <div className="intro-section text-center mb-5">
              <h1 className="fw-bold">My Work</h1>
            </div>
          </div>
        </div>
        <div className="row gy-4">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="p-4 border-hover shadow rounded-5">
                <img
                  src={proj.image}
                  className="img-fluid rounded-3 mb-3"
                  alt=""
                />
                {proj.skills.map((skill) => (
                  <span key={skill} className="badge bg-info me-2">
                    {skill}
                  </span>
                ))}
                <a href="#" className="d-block mt-2">
                  <h5 className="fw-bold">{proj.name}</h5>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
