    import React from "react";
import "./footer.css"

const Footer = () => {
    return (
        <div className="footer">
            <footer className="text-center text-lg-start text-dark" style={{ backgroundColor: "#ECEFF1" }}>
                <section className="d-flex justify-content-between p-4 social-section" style={{ backgroundColor: "#343a40" }}>
                    <div className="me-5">
                        <span>Get connected with us on social networks:</span>
                    </div>
                    <div className="social-icon">
                        <a href="" className="text-white me-4">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="" className="text-white me-4">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="" className="text-white me-4">
                            <i className="fab fa-google"></i>
                        </a>
                        <a href="" className="text-white me-4">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="" className="text-white me-4">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="" className="text-white me-4">
                            <i className="fab fa-github"></i>
                        </a>
                    </div>
                </section>

                <section>
                    <div className="text-center text-md-start mt-5">
                        <div className="row mt-3">
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold fs-3">Global Cloud Fighter</h6>
                                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: "230px", backgroundColor: "#7c4dff", height: "2px" }} />
                                <p className="address-section">
                                    SMC International
                                    B-10 & B-11, Meghdoot Building,
                                    94, Nehru Place, New Delhi, 110019
                                </p>
                            </div>

                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold fs-5">Products</h6>
                                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: "70px", backgroundColor: "#7c4dff", height: "2px" }} />
                                <p className="product-section"><a href="#!" className="text-dark">MDBootstrap</a></p>
                                <p className="product-section"><a href="#!" className="text-dark">MDWordPress</a></p>
                                <p className="product-section"><a href="#!" className="text-dark">BrandFlow</a></p>
                                <p className="product-section"><a href="#!" className="text-dark">Bootstrap Angular</a></p>
                            </div>

                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold fs-5">Useful links</h6>
                                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: "90px", backgroundColor: "#7c4dff", height: "2px" }} />
                                <p className="link-section"><a href="#!" className="text-dark">Your Account</a></p>
                                <p className="link-section"><a href="#!" className="text-dark">Become an Affiliate</a></p>
                                <p className="link-section"><a href="#!" className="text-dark">Shipping Rates</a></p>
                                <p className="link-section"><a href="#!" className="text-dark">Help</a></p>
                            </div>

                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                <h6 className="text-uppercase fw-bold fs-5">Contact</h6>
                                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: "65px", backgroundColor: "#7c4dff", height: "2px" }} />
                                <p className="contact-section"><i className="fas fa-home mr-3"></i> Ghaziabad, Uttar pradesh, India </p>
                                <p className="contact-section"><i className="fas fa-envelope mr-3"></i> bipinsingh@gmail.com</p>
                                <p className="contact-section"><i className="fas fa-phone mr-3"></i> +91 7839108072</p>
                                <p className="contact-section"><i className="fas fa-print mr-3"></i> +91 9582981941</p>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="text-center p-4 fs-5" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
                    © 2020 Copyright:
                    <a className="text-dark" href="https://mdbootstrap.com/">MDBootstrap.com</a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
