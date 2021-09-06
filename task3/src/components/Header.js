import React from "react";

function Header() {
  return (
    <div className="header-area">
      <div className="header-top-bar-info bg-gray d-none d-lg-block">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="top-bar-wrap">
                <div className="top-bar-left">
                  <div className="top-bar-text">
                    <a
                      href="careers.html"
                      className="font-medium display-inline"
                    >
                      Now Hiring:
                    </a>{" "}
                    Are you a driven and motivated software Engineer?
                  </div>
                </div>
                <div className="top-bar-right">
                  <ul className="top-bar-info">
                    <li className="info-item">
                      <a href="tel:918093962212" className="info-link">
                        <i className="info-icon fa fa-phone"></i>
                        <span className="info-text">
                          <strong>+91-809-396-2212</strong>
                        </span>
                      </a>
                    </li>
                    <li className="info-item">
                      <i className="info-icon fa fa-map-marker-alt"></i>
                      <span className="info-text">
                        Indira Nagar, Bangalore, KA
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="header-bottom-wrap header-sticky bg-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="header position-relative">
                {/* <!-- brand logo --> */}
                <div className="header__logo">
                  <a href="index.html">
                    <img
                      src="assets/images/logo/logo-dark.png"
                      className="img-fluid"
                      alt=""
                    />
                  </a>
                </div>

                <div className="header-right">
                  {/* <!-- navigation menu --> */}
                  <div className="header__navigation menu-style-three d-none d-xl-block">
                    <nav className="navigation-menu">
                      <ul>
                        <li>
                          <a href="index.html">
                            <span>Home</span>
                          </a>
                        </li>
                        <li>
                          <a href="about-us.html">
                            <span>About</span>
                          </a>
                        </li>
                        <li className="has-children has-children--multilevel-submenu">
                          <a href="#">
                            <span>Company</span>
                          </a>
                          <ul className="submenu">
                            <li>
                              <a href="why-choose-us.html">
                                <span>Why choose us</span>
                              </a>
                            </li>
                            <li>
                              <a href="our-history.html">
                                <span>Our history</span>
                              </a>
                            </li>
                            <li>
                              <a href="faqs.html">
                                <span>FAQs</span>
                              </a>
                            </li>
                            <li>
                              <a href="careers.html">
                                <span>Careers</span>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="has-children has-children--multilevel-submenu">
                          <a href="#">
                            <span>Solutions</span>
                          </a>
                          <ul className="submenu">
                            <li>
                              <a href="it-services.html">
                                <span>IT Services</span>
                              </a>
                            </li>
                            <li>
                              <a href="managed-it-service.html">
                                <span>Managed IT Services</span>
                              </a>
                            </li>
                            <li>
                              <a href="industries.html">
                                <span>Industries</span>
                              </a>
                            </li>
                            <li>
                              <a href="business-solution.html">
                                <span>Business solution</span>
                              </a>
                            </li>
                            <li>
                              <a href="it-services-details.html">
                                <span>IT Services Details</span>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="case-studies.html">
                            <span>Case Studies</span>
                          </a>
                        </li>
                        <li>
                          <a href="contact-us.html">
                            <span>Contact</span>
                          </a>
                        </li>
                        <li>
                          <a href="blog.html">
                            <span>Blog</span>
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>

                  {/* <!-- mobile menu --> */}
                  <div
                    className="mobile-navigation-icon d-block d-xl-none"
                    id="mobile-menu-trigger"
                  >
                    <i></i>
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

export default Header;
