export default function Contact() {
    return (
        <div id="contact" className="section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-12" data-aos="fade-up">
                        <div className="intro-section text-center mb-5">
                            <h1 className="fw-bold">Contact Me</h1>
                            <p className="mx-auto">There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form by injected humour</p>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="200">
                    <div className="col-md-8">
                        <form action="#" className="row g-3">
                            <div className="form-group col-md-6">
                                <input type="text" className="form-control" placeholder="Enter Name" />
                            </div>
                            <div className="form-group col-md-6">
                                <input type="email" className="form-control" placeholder="Enter Email" />
                            </div>
                            <div className="form-group col-md-12">
                                <input type="text" className="form-control" placeholder="Enter Subject" />
                            </div>
                            <div className="form-group col-md-12">
                                <textarea name="" className="form-control" rows={5} placeholder="Enter Message"></textarea>
                            </div>
                            <div className="form-group col-md-12">
                                <button type="submit" className="btn btn-outline-info">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
};
