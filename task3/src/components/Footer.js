import React from "react";

function Footer() {
  return (
    <>
      {/* <!--====================  footer area ====================--> */}
      <div className="footer-area-wrapper bg-gray">
        <div className="footer-area section-space--ptb_80">
          <div className="container">
            <div className="row footer-widget-wrapper">
              <div className="col-lg-4 col-md-6 col-sm-6 footer-widget">
                <div className="footer-widget__logo mb-30">
                  <img
                    src="assets/images/logo/dark-logo-160x48.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <ul className="footer-widget__list">
                  <li>Indira Nagar, Bangalore, KA</li>
                  <li>
                    <a
                      href="mailto:connect@coolhaxlabs.com"
                      className="hover-style-link"
                    >
                      connect@coolhaxlabs.com
                    </a>
                  </li>
                  <li>
                    <a
                      href="tel:918093962212"
                      className="hover-style-link text-black font-weight--bold"
                    >
                      (+91) 80939 62212
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://coolhaxlabs.com/"
                      className="hover-style-link text-color-primary"
                    >
                      www.coolhaxlabs.com
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 footer-widget">
                <h6 className="footer-widget__title mb-20">IT Services</h6>
                <ul className="footer-widget__list">
                  <li>
                    <a href="#" className="hover-style-link">
                      Managed IT
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover-style-link">
                      IT Support
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover-style-link">
                      IT Consultancy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover-style-link">
                      Cloud Computing
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover-style-link">
                      Cyber Security
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 footer-widget">
                <h6 className="footer-widget__title mb-20">Quick links</h6>
                <ul className="footer-widget__list">
                  <li>
                    <a href="#" className="hover-style-link">
                      Terms & Conditions
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover-style-link">
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6 footer-widget">
                <h6 className="footer-widget__title mb-20">Support</h6>
                <ul className="footer-widget__list">
                  <li>
                    <a href="faqs.html" className="hover-style-link">
                      Help & FAQ
                    </a>
                  </li>
                  <li>
                    <a href="contact-us.html" className="hover-style-link">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover-style-link">
                      Cookies Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copyright-area section-space--pb_30">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 text-center text-md-left">
                <span className="copyright-text">
                  &copy; 2018 Coolhax Labs.
                  <a href="https://coolhaxlabs.com/">All Rights Reserved.</a>
                </span>
              </div>
              <div className="col-md-6 text-center text-md-right">
                <ul className="list ht-social-networks solid-rounded-icon">
                  <li className="item">
                    <a
                      href="https://twitter.com/coolhaxlabs"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Twitter"
                      className="social-link hint--bounce hint--top hint--primary"
                    >
                      <i className="fab fa-twitter link-icon"></i>
                    </a>
                  </li>
                  <li className="item">
                    <a
                      href="https://www.facebook.com/coolhaxlabs/"
                      target="_blank"
                      aria-label="Facebook"
                      rel="noreferrer"
                      className="social-link hint--bounce hint--top hint--primary"
                    >
                      <i className="fab fa-facebook-f link-icon"></i>
                    </a>
                  </li>
                  <li className="item">
                    <a
                      href="https://www.instagram.com/coolhaxlabs/"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Instagram"
                      className="social-link hint--bounce hint--top hint--primary"
                    >
                      <i className="fab fa-instagram link-icon"></i>
                    </a>
                  </li>
                  <li className="item">
                    <a
                      href="https://in.linkedin.com/company/coolhax-labs"
                      target="_blank"
                      aria-label="Linkedin"
                      rel="noreferrer"
                      className="social-link hint--bounce hint--top hint--primary"
                    >
                      <i className="fab fa-linkedin link-icon"></i>
                    </a>
                  </li>
                  <li className="item">
                    <a
                      href="https://www.behance.net/coolhaxlab54ac"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Linkedin"
                      className="social-link hint--bounce hint--top hint--primary"
                    >
                      <i className="fab fa-behance link-icon"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--====================  End of footer area  ====================--> */}
    </>
  );
}

export default Footer;
