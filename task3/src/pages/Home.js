import React from "react";

function Home() {
  return (
    <div>
      <div className="preloader-activate preloader-active open_tm_preloader">
        <div className="preloader-area-wrap">
          <div className="spinner d-flex justify-content-center align-items-center h-100">
            <div className="bounce1"></div>
            <div className="bounce2"></div>
            <div className="bounce3"></div>
          </div>
        </div>
      </div>

      {/* <!--====================  header area ====================--> */}
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
                      </a>
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
                    <div
                      className="
                      header__navigation
                      menu-style-three
                      d-none d-xl-block
                    "
                    >
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
      {/* <!--====================  End of header area  ====================--> */}

      <div id="main-wrapper">
        <div className="site-wrapper-reveal section-space--pt__120">
          {/* <!--============ Service Hero Start ============--> */}
          <div className="service-hero-wrapper service-hero-space service-hero-bg">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-md-12 ml-auto mr-auto">
                  <div className="service-hero-wrap wow move-up">
                    <div className="service-hero-text text-center">
                      <h3 className="text-white">Responsive Design</h3>
                      <h1 className="font-weight--reguler text-white mb-30">
                        for IT Services
                      </h1>

                      <div className="service-solution-form-wrap mr-auto ml-auto">
                        <form action="#" method="post">
                          <div className="hero-select-form">
                            <div className="contact-select">
                              <div className="form-item contact-inner">
                                <span className="inquiry">
                                  <select className="select-item">
                                    <option value="Your inquiry about">
                                      How can we help you?
                                    </option>
                                    <option value="General Information Request">
                                      It Services
                                    </option>
                                    <option value="Partner Relations">
                                      Managed IT Services
                                    </option>
                                  </select>
                                </span>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                      <p className="text-white">
                        Highly Tailored IT Design, Management & Support
                        Services.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!--============ Service Hero End ============-->
        <!--===========  feature-images-wrapper  Start =============--> */}
          <div className="feature-images-wrapper position-relative">
            <div className="grid-wrapper">
              <div className="line line-1"></div>
              <div className="line line-2"></div>
              <div className="line line-3"></div>
              <div className="line line-4"></div>
            </div>
            <div className="swiper-container service-slider__container">
              <div
                className="
                swiper-wrapper
                service-slider__wrapper
                feature-images__three
              "
              >
                <div className="swiper-slide">
                  {/* <!-- ht-box-icon Start --> */}
                  <a href="#" className="ht-box-images style-03 wow move-up">
                    <div className="image-box-wrap">
                      <div className="box-image">
                        <img
                          className="img-fulid"
                          src="assets/images/icons/mitech-processing-service-image-01-80x83.png"
                          alt=""
                        />
                      </div>
                      <div className="content">
                        <h5 className="heading">Business Reform</h5>
                        <div className="text">
                          We propose feasible &amp; practical plans for
                          successfully transform businesses based on.
                        </div>
                      </div>
                    </div>
                  </a>
                  {/* <!-- ht-box-icon End --> */}
                </div>
                <div className="swiper-slide">
                  {/* <!-- ht-box-icon Start --> */}
                  <a href="#" className="ht-box-images style-03 wow move-up">
                    <div className="image-box-wrap">
                      <div className="box-image">
                        <img
                          className="img-fulid"
                          src="assets/images/icons/mitech-processing-service-image-02-80x83.png"
                          alt=""
                        />
                      </div>
                      <div className="content">
                        <h5 className="heading">Infrastructure Plan</h5>
                        <div className="text">
                          Mitech takes into account all conditions and budgets
                          needed for building infrastructure plan.
                        </div>
                      </div>
                    </div>
                  </a>
                  {/* <!-- ht-box-icon End --> */}
                </div>
                <div className="swiper-slide">
                  {/* <!-- ht-box-icon Start --> */}
                  <a href="#" className="ht-box-images style-03 wow move-up">
                    <div className="image-box-wrap">
                      <div className="box-image">
                        <img
                          className="img-fulid"
                          src="assets/images/icons/mitech-processing-service-image-03-80x83.png"
                          alt=""
                        />
                      </div>
                      <div className="content">
                        <h5 className="heading">Firewall Advancement</h5>
                        <div className="text">
                          Enhancing the strength and security of firewalls to
                          protect online data from malicious sources.
                        </div>
                      </div>
                    </div>
                  </a>
                  {/* <!-- ht-box-icon End --> */}
                </div>
                <div className="swiper-slide">
                  {/* <!-- ht-box-icon Start --> */}
                  <a href="#" className="ht-box-images style-03 wow move-up">
                    <div className="image-box-wrap">
                      <div className="box-image">
                        <img
                          className="img-fulid"
                          src="assets/images/icons/mitech-processing-service-image-04-80x83.png"
                          alt=""
                        />
                      </div>
                      <div className="content">
                        <h5 className="heading">Desktop Computing</h5>
                        <div className="text">
                          Programming is taken care of by our experienced and
                          professional specialist in IT management.
                        </div>
                      </div>
                    </div>
                  </a>
                  {/* <!-- ht-box-icon End --> */}
                </div>
                <div className="swiper-slide">
                  {/* <!-- ht-box-icon Start --> */}
                  <a href="#" className="ht-box-images style-03 wow move-up">
                    <div className="image-box-wrap">
                      <div className="box-image">
                        <img
                          className="img-fulid"
                          src="assets/images/icons/mitech-processing-service-image-05-80x83.png"
                          alt=""
                        />
                      </div>
                      <div className="content">
                        <h5 className="heading">Firewall Advancement</h5>
                        <div className="text">
                          Programming is taken care of by our experienced and
                          professional specialist in IT management.
                        </div>
                      </div>
                    </div>
                  </a>
                  {/* <!-- ht-box-icon End --> */}
                </div>
              </div>
              <div
                className="
                swiper-pagination swiper-pagination-service
                section-space--mt_30
              "
              ></div>
            </div>
          </div>
          {/* <!--===========  feature-images-wrapper  End =============-->

        <!--===========  Our Company History Start =============--> */}

          <div className="our-company-history section-space--ptb_100">
            <div className="container-fluid">
              <div className="grid-wrapper">
                <div className="line line-1"></div>
                <div className="line line-2"></div>
                <div className="line line-3"></div>
                <div className="line line-4"></div>
              </div>

              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="faq-custom-col">
                    <div className="section-title-wrap">
                      <h6 className="section-sub-title mb-20">Our company</h6>
                      <h3 className="heading">
                        We’ve been triumphing <br />
                        all these
                        <span className="text-color-primary">
                          {" "}
                          38 years.
                        </span>{" "}
                        <br />
                        Sacrifices are made up <br />
                        with success.
                      </h3>

                      <p className="text mt-30">
                        Mitech takes into consideration every little detail to
                        make sure the system run smoothly and responsively.
                        Mitech employs a new technique called Minified
                        Technology for securing customers’ database & building
                        up highly confidential firewalls.
                      </p>

                      <div className="inner-button-box section-space--mt_60">
                        <a href="#" className="ht-btn ht-btn-md">
                          Find out more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="rv-video-section">
                    <div className="ht-banner-01">
                      <img
                        className="
                        img-fluid
                        border-radus-5
                        animation_images
                        one
                        wow
                        fadeInDown
                      "
                        src="assets/images/banners/home-processing-video-intro-slider-slide-01-image-02.jpg"
                        alt=""
                      />
                    </div>

                    <div className="ht-banner-02">
                      <img
                        className="
                        img-fluid
                        border-radus-5
                        animation_images
                        two
                        wow
                        fadeInDown
                      "
                        src="assets/images/banners/home-processing-video-intro-slider-slide-01-image-03.jpg"
                        alt=""
                      />
                    </div>

                    <div className="main-video-box video-popup">
                      <a
                        href="https://www.youtube.com/watch?v=9No-FiEInLA"
                        className="video-link mt-30"
                      >
                        <div className="single-popup-wrap">
                          <img
                            className="img-fluid border-radus-5"
                            src="assets/images/banners/home-processing-video-intro-slider-slide-01-image-01.jpg"
                            alt=""
                          />
                          <div className="ht-popup-video video-button">
                            <div className="video-mark">
                              <div className="wave-pulse wave-pulse-1"></div>
                              <div className="wave-pulse wave-pulse-2"></div>
                            </div>
                            <div className="video-button__two">
                              <div className="video-play">
                                <span className="video-play-icon"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>

                    <div className="ht-banner-03">
                      <img
                        className="
                        img-fluid
                        border-radus-5
                        animation_images
                        three
                        wow
                        fadeInDown
                      "
                        src="assets/images/banners/home-processing-video-intro-slider-slide-01-image-04.jpg"
                        alt=""
                      />
                    </div>

                    <div className="ht-banner-04">
                      <img
                        className="
                        img-fluid
                        border-radus-5
                        animation_images
                        four
                        wow
                        fadeInDown
                      "
                        src="assets/images/banners/home-processing-video-intro-slider-slide-01-image-05.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 
        <!--===========  Our Company History Start  End =============-->

        <!--===========  feature-icon-wrapper  Start =============--> */}
          <div className="feature-icon-wrapper bg-gray section-space--ptb_100">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title-wrap text-center section-space--mb_40">
                    <h6 className="section-sub-title mb-20">
                      Industries we Serve
                    </h6>
                    <h3 className="heading">
                      Services We Deliver
                      <br />
                      we provide
                      <span className="text-color-primary">
                        truly prominent IT solutions.
                      </span>
                    </h3>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <div className="feature-list__two">
                    <div className="row">
                      <div className="col-lg-4 col-md-6 wow move-up">
                        <div className="ht-box-icon style-02 single-svg-icon-box">
                          <div className="icon-box-wrap">
                            <div className="icon">
                              <div
                                className="svg-icon"
                                id="svg-1"
                                data-svg-icon="assets/images/svg/linea-basic-heart.svg"
                              ></div>
                            </div>
                            <div className="content">
                              <h5 className="heading">IT Design</h5>
                              <div className="text">
                                We provide the most responsive and functional IT
                                design for companies and businesses worldwide.
                              </div>
                              <div className="feature-btn">
                                <a href="#">
                                  <span className="button-text">
                                    Discover now
                                  </span>
                                  <i className="far fa-long-arrow-right"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 wow move-up">
                        <div className="ht-box-icon style-02 single-svg-icon-box">
                          <div className="icon-box-wrap">
                            <div className="icon">
                              <div
                                className="svg-icon"
                                id="svg-2"
                                data-svg-icon="assets/images/svg/linea-basic-case.svg"
                              ></div>
                            </div>
                            <div className="content">
                              <h5 className="heading">IT Management</h5>
                              <div className="text">
                                It’s possible to simultaneously manage and
                                transform information from one server to
                                another.
                              </div>
                              <div className="feature-btn">
                                <a href="#">
                                  <span className="button-text">
                                    Discover now
                                  </span>
                                  <i className="far fa-long-arrow-right"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 wow move-up">
                        <div className="ht-box-icon style-02 single-svg-icon-box">
                          {/* <!-- ht-box-icon Start --> */}
                          <div className="icon-box-wrap">
                            <div className="icon">
                              <div
                                className="svg-icon"
                                id="svg-3"
                                data-svg-icon="assets/images/svg/linea-basic-alarm.svg"
                              ></div>
                            </div>
                            <div className="content">
                              <h5 className="heading">Data Security</h5>
                              <div className="text">
                                We provide the most responsive and functional IT
                                design for companies and businesses worldwide.
                              </div>
                              <div className="feature-btn">
                                <a href="#">
                                  <span className="button-text">
                                    Discover now
                                  </span>
                                  <i className="far fa-long-arrow-right"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                          {/* <!-- ht-box-icon End --> */}
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 wow move-up">
                        <div className="ht-box-icon style-02 single-svg-icon-box">
                          {/* <!-- ht-box-icon Start --> */}
                          <div className="icon-box-wrap">
                            <div className="icon">
                              <div
                                className="svg-icon"
                                id="svg-4"
                                data-svg-icon="assets/images/svg/linea-basic-geolocalize-05.svg"
                              ></div>
                            </div>
                            <div className="content">
                              <h5 className="heading">Business Reform</h5>
                              <div className="text">
                                We provide the most responsive and functional IT
                                design for companies and businesses worldwide.
                              </div>
                              <div className="feature-btn">
                                <a href="#">
                                  <span className="button-text">
                                    Discover now
                                  </span>
                                  <i className="far fa-long-arrow-right"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                          {/* <!-- ht-box-icon End --> */}
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 wow move-up">
                        <div className="ht-box-icon style-02 single-svg-icon-box">
                          {/* <!-- ht-box-icon Start --> */}
                          <div className="icon-box-wrap">
                            <div className="icon">
                              <div
                                className="svg-icon"
                                id="svg-5"
                                data-svg-icon="assets/images/svg/linea-ecommerce-money.svg"
                              ></div>
                            </div>
                            <div className="content">
                              <h5 className="heading">Infrastructure Plan</h5>
                              <div className="text">
                                We provide the most responsive and functional IT
                                design for companies and businesses worldwide.
                              </div>
                              <div className="feature-btn">
                                <a href="#">
                                  <span className="button-text">
                                    Discover now
                                  </span>
                                  <i className="far fa-long-arrow-right"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                          {/* <!-- ht-box-icon End --> */}
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 wow move-up">
                        <div className="ht-box-icon style-02 single-svg-icon-box">
                          {/* <!-- ht-box-icon Start --> */}
                          <div className="icon-box-wrap">
                            <div className="icon">
                              <div
                                className="svg-icon"
                                id="svg-6"
                                data-svg-icon="assets/images/svg/linea-basic-spread-text-bookmark.svg"
                              ></div>
                            </div>
                            <div className="content">
                              <h5 className="heading">Firewall Advance</h5>
                              <div className="text">
                                We provide the most responsive and functional IT
                                design for companies and businesses worldwide.
                              </div>
                              <div className="feature-btn">
                                <a href="#">
                                  <span className="button-text">
                                    Discover now
                                  </span>
                                  <i className="far fa-long-arrow-right"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                          {/* <!-- ht-box-icon End --> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="feature-list-button-box mt-30 text-center">
                    <a href="#" className="ht-btn ht-btn-md">
                      Talk to a consultant
                    </a>
                    <a href="#" className="ht-btn ht-btn-md ht-btn--outline">
                      Contact us now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!--===========  feature-icon-wrapper  End =============-->

        <!--====================  gradation process area ====================--> */}
          <div className="gradation-process-area section-space--ptb_100">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="gradation-title-wrapper section-space--mb_60">
                    <div className="gradation-title-wrap">
                      <h6 className="section-sub-title text-black mb-20">
                        How we works
                      </h6>
                      <h4 className="heading">
                        How it helps
                        <span className="text-color-primary">
                          your <br />
                          business succeed
                        </span>
                      </h4>
                    </div>

                    <div className="gradation-sub-heading">
                      <h3 className="heading">
                        <mark>04</mark> Steps
                      </h3>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-12">
                  <div className="ht-gradation style-01">
                    {/* <!-- Single item gradation Start --> */}
                    <div
                      className="item item-1 animate wow fadeInRight"
                      data-wow-delay="0.1s"
                    >
                      <div className="line"></div>
                      <div className="circle-wrap">
                        <div className="mask">
                          <div className="wave-pulse wave-pulse-1"></div>
                          <div className="wave-pulse wave-pulse-2"></div>
                          <div className="wave-pulse wave-pulse-3"></div>
                        </div>

                        <h6 className="circle">1</h6>
                      </div>

                      <div className="content-wrap">
                        <h6 className="heading">01. Discussion</h6>

                        <div className="text">
                          We meet customers in set place to discuss the details
                          about needs and demands before proposing a plan.
                        </div>

                        <a className="gradation-btn" href="#">
                          <span className="button-text" data-text="Look more">
                            Look more
                          </span>
                          <span className="button-icon far fa-long-arrow-right"></span>
                        </a>
                      </div>
                    </div>
                    {/* <!-- Single item gradation End -->

                  <!-- Single item gradation Start --> */}
                    <div
                      className="item item-1 animate wow fadeInRight"
                      data-wow-delay="0.15s"
                    >
                      <div className="line"></div>
                      <div className="circle-wrap">
                        <div className="mask">
                          <div className="wave-pulse wave-pulse-1"></div>
                          <div className="wave-pulse wave-pulse-2"></div>
                          <div className="wave-pulse wave-pulse-3"></div>
                        </div>

                        <h6 className="circle">2</h6>
                      </div>

                      <div className="content-wrap">
                        <h6 className="heading">
                          02. Concepts &amp; Initatives
                        </h6>

                        <div className="text">
                          Our experts come up with all kinds of ideas and
                          initiatives for delivering the best solutions for IT
                          services chosen.
                        </div>

                        <a className="gradation-btn" href="#">
                          <span className="button-text" data-text="Look more">
                            Look more
                          </span>
                          <span className="button-icon far fa-long-arrow-right"></span>
                        </a>
                      </div>
                    </div>
                    {/* <!-- Single item gradation End -->

                  <!-- Single item gradation Start --> */}
                    <div
                      className="item item-1 animate wow fadeInRight"
                      data-wow-delay="0.20s"
                    >
                      <div className="line"></div>
                      <div className="circle-wrap">
                        <div className="mask">
                          <div className="wave-pulse wave-pulse-1"></div>
                          <div className="wave-pulse wave-pulse-2"></div>
                          <div className="wave-pulse wave-pulse-3"></div>
                        </div>

                        <h6 className="circle">3</h6>
                      </div>

                      <div className="content-wrap">
                        <h6 className="heading">03. Testing &amp; Trying</h6>

                        <div className="text">
                          After agreeing on the ideas and plans, we will conduct
                          as scheduled and give comments on the results &amp;
                          adaptations.
                        </div>

                        <a className="gradation-btn" href="#">
                          <span className="button-text" data-text="Look more">
                            Look more
                          </span>
                          <span className="button-icon far fa-long-arrow-right"></span>
                        </a>
                      </div>
                    </div>
                    {/* <!-- Single item gradation End -->

                  <!-- Single item gradation Start --> */}
                    <div
                      className="item item-1 animate wow fadeInRight"
                      data-wow-delay="0.25s"
                    >
                      <div className="line"></div>
                      <div className="circle-wrap">
                        <div className="mask">
                          <div className="wave-pulse wave-pulse-1"></div>
                          <div className="wave-pulse wave-pulse-2"></div>
                          <div className="wave-pulse wave-pulse-3"></div>
                        </div>

                        <h6 className="circle">4</h6>
                      </div>

                      <div className="content-wrap">
                        <h6 className="heading">04. Execute &amp; install</h6>

                        <div className="text">
                          Once the final plan is approved, everything will be
                          conducted according to the agreed contract.
                        </div>

                        <a className="gradation-btn" href="#">
                          <span className="button-text" data-text="Look more">
                            Look more
                          </span>
                          <span className="button-icon far fa-long-arrow-right"></span>
                        </a>
                      </div>
                    </div>
                    {/* <!-- Single item gradation End --> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!--====================  End of gradation process area  ====================-->

        <!--========== Call to Action Area Start ============--> */}
          <div className="cta-image-area_one section-space--ptb_80 cta-bg-image_one">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-8 col-lg-7">
                  <div className="cta-content md-text-center">
                    <h3 className="heading text-white">
                      We run all kinds of IT services that vow your
                      <span className="text-color-secondary"> success</span>
                    </h3>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-5">
                  <div className="cta-button-group--one text-center">
                    <a href="#" className="btn btn--white btn-one">
                      <span className="btn-icon mr-2">
                        <i className="far fa-comment-alt-dots"></i>
                      </span>
                      Let's talk
                    </a>
                    <a href="#" className="btn btn--secondary btn-two">
                      <span className="btn-icon mr-2">
                        <i className="far fa-info-circle"></i>
                      </span>
                      Get info
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!--========== Call to Action Area End ============-->

        <!--=========== Service Projects Wrapper Start =============--> */}
          <div className="service-projects-wrapper section-space--pt_100 mb-20">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title-wrap text-center section-space--mb_60">
                    <h6 className="section-sub-title mb-20">Case studies</h6>
                    <h3 className="heading">
                      Proud projects that
                      <span className="text-color-primary">
                        make us stand out
                      </span>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="swiper-container service-slider__project-active">
                <div className="swiper-wrapper service-slider__project">
                  <div className="swiper-slide">
                    <div className="row">
                      <div className="slide-content col-lg-6 col-xl-5 order-2 order-lg-1">
                        <div className="service-project-slide-info">
                          <h4 className="heading font-weight--reguler mb-10">
                            Aqua Technology Case Studies
                          </h4>
                          <p className="sub-text text-color-primary">
                            Cyber Security
                          </p>
                          <div className="text">
                            ARM Holdings is the world's leading semiconductor
                            Intellectual Property (IP) supplier. A semiconductor
                            is the electronic controller at the heart of many
                            devices that we use every day.
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-6 col-xl-7 order-1 order-lg-2">
                        <div className="slide-image">
                          <div className="image-wrap">
                            <div className="image">
                              <img
                                className="img-fluid"
                                src="assets/images/features/home-services-case-study-slide-image-01.png"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="row">
                      <div className="slide-content col-lg-6 col-xl-5 order-2 order-lg-1">
                        <div className="service-project-slide-info">
                          <h4 className="heading font-weight--reguler mb-10">
                            Aqua Technology Case Studies
                          </h4>
                          <p className="sub-text text-color-primary">
                            Cyber Security
                          </p>
                          <div className="text">
                            ARM Holdings is the world's leading semiconductor
                            Intellectual Property (IP) supplier. A semiconductor
                            is the electronic controller at the heart of many
                            devices that we use every day.
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-6 col-xl-7 order-1 order-lg-2">
                        <div className="slide-image">
                          <div className="image-wrap">
                            <div className="image">
                              <img
                                className="img-fluid"
                                src="assets/images/features/home-services-case-study-slide-image-02.png"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!--=========== Service Projects Wrapper End =============-->

        <!--========= Pricing Table Area Start ==========--> */}
          <div className="pricing-table-area section-space--pb_70 bg-gradient">
            <div className="pricing-table-title-area position-relative">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div
                      className="
                      section-title-wrapper
                      text-center
                      section-space--mb_60
                      wow
                      move-up
                    "
                    >
                      <h6 className="section-sub-title mb-20">
                        Pricing and plan
                      </h6>
                      <h3 className="section-title">
                        1 monthly fee for
                        <span className="text-color-primary">
                          all IT services.
                        </span>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pricing-table-content-area">
              <div className="container">
                <div className="row pricing-table-one">
                  <div
                    className="
                    col-12 col-md-6 col-lg-4 col-xl-4
                    pricing-table
                    wow
                    move-up
                  "
                  >
                    <div className="pricing-table__inner">
                      <div className="pricing-table__header">
                        <h6 className="sub-title">Basic</h6>
                        <div className="pricing-table__image">
                          <img
                            src="assets/images/icons/mitech-pricing-box-icon-01-90x90.png"
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                        <div className="pricing-table__price-wrap">
                          <h6 className="currency">$</h6>
                          <h6 className="price">19</h6>
                          <h6 className="period">/mo</h6>
                        </div>
                      </div>
                      <div className="pricing-table__body">
                        <div className="pricing-table__footer">
                          <a
                            href="#"
                            className="ht-btn ht-btn-md ht-btn--outline"
                          >
                            Get started
                          </a>
                        </div>
                        <ul className="pricing-table__list text-left">
                          <li>03 projects</li>
                          <li>Quality &amp; Customer Experience</li>
                          <li>
                            <span className="featured">
                              Try for free, forever!
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div
                    className="
                    col-12 col-md-6 col-lg-4 col-xl-4
                    pricing-table pricing-table--popular
                    wow
                    move-up
                  "
                  >
                    <div className="pricing-table__inner">
                      <div className="pricing-table__feature-mark">
                        <span>Popular Choice</span>
                      </div>
                      <div className="pricing-table__header">
                        <h6 className="sub-title">Professional</h6>
                        <div className="pricing-table__image">
                          <img
                            src="assets/images/icons/mitech-pricing-box-icon-02-88x88.png"
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                        <div className="pricing-table__price-wrap">
                          <h6 className="currency">$</h6>
                          <h6 className="price">59</h6>
                          <h6 className="period">/mo</h6>
                        </div>
                      </div>
                      <div className="pricing-table__body">
                        <div className="pricing-table__footer">
                          <a href="#" className="ht-btn ht-btn-md">
                            Get started
                          </a>
                        </div>
                        <ul className="pricing-table__list text-left">
                          <li>Unlimited project</li>
                          <li>Power And Predictive Dialing</li>
                          <li>Quality &amp; Customer Experience</li>
                          <li>24/7 phone and email support</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div
                    className="
                    col-12 col-md-6 col-lg-4 col-xl-4
                    pricing-table
                    wow
                    move-up
                  "
                  >
                    <div className="pricing-table__inner">
                      <div className="pricing-table__header">
                        <h6 className="sub-title">Professional</h6>
                        <div className="pricing-table__image">
                          <img
                            src="assets/images/icons/mitech-pricing-box-icon-03-90x90.png"
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                        <div className="pricing-table__price-wrap">
                          <h6 className="currency">$</h6>
                          <h6 className="price">29</h6>
                          <h6 className="period">/mo</h6>
                        </div>
                      </div>
                      <div className="pricing-table__body">
                        <div className="pricing-table__footer">
                          <a
                            href="#"
                            className="ht-btn ht-btn-md ht-btn--outline"
                          >
                            Get started
                          </a>
                        </div>
                        <ul className="pricing-table__list text-left">
                          <li>10 projects</li>
                          <li>Power And Predictive Dialing</li>
                          <li>Quality &amp; Customer Experience</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!--========= Pricing Table Area End ==========-->
        <!--=========== Service Projects Wrapper Start =============--> */}
          <div className="service-projects-wrapper section-space--ptb_100">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title-wrap text-center section-space--mb_60">
                    <h6 className="section-sub-title mb-20">Latest news</h6>
                    <h3 className="heading">
                      Latest news are
                      <span className="text-color-primary">
                        on top all times
                      </span>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="latest-news-wrap">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="single-blog-lg-item wow move-up">
                      {/* <!-- Post Feature Start --> */}
                      <a href="blog-post-layout-one.html">
                        <div className="post-blog-thumbnail">
                          <img
                            className="img-fluid"
                            src="assets/images/blog/blog-03-540x330.jpg"
                            alt="Blog Images"
                          />
                          <div className="post-meta mt-20">
                            <div className="post-author">
                              <img
                                className="img-fluid avatar-96"
                                src="assets/images/team/admin.jpeg"
                                alt=""
                              />
                              Harry Ferguson
                            </div>
                            <div className="post-date">
                              <span className="far fa-calendar meta-icon"></span>
                              January 18, 2019
                            </div>
                          </div>
                        </div>
                      </a>
                      {/* <!-- Post Feature End -->

                    <!-- Post info Start --> */}
                      <div className="post-info lg-blog-post-info mt-20">
                        <h4 className="post-title">
                          <a href="blog-post-layout-one.html">
                            5 Ways Technology Has Improved Business Today
                          </a>
                        </h4>
                        <div className="post-excerpt mt-15">
                          <p>
                            They play a role in making operations more seamless,
                            bridging the gap between authorities, consumers and
                            businesses. …
                          </p>
                        </div>
                        <div className="btn-text mt-15">
                          <a href="#">
                            Read more
                            <i className="ml-1 button-icon far fa-long-arrow-right"></i>
                          </a>
                        </div>
                      </div>
                      {/* <!-- Post info End --> */}
                    </div>
                  </div>
                  <div className="col-lg-6 blog-list-service">
                    <div className="single-blog-lg-list wow move-up">
                      {/* <!-- Post Feature Start --> */}
                      <a href="blog-post-layout-one.html">
                        <div className="post-blog-thumbnail">
                          <img
                            className="img-fluid"
                            src="assets/images/blog/blog-01-480x312.jpg"
                            alt="Blog Images"
                          />
                          <div className="post-meta mt-20">
                            <div className="post-author">
                              <img
                                className="img-fluid avatar-96"
                                src="assets/images/team/admin.jpeg"
                                alt=""
                              />
                              Harry Ferguson
                            </div>
                          </div>
                        </div>
                      </a>
                      {/* <!-- Post Feature End -->

                    <!-- Post info Start --> */}
                      <div className="post-info lg-blog-post-info">
                        <div className="post-meta mb-10">
                          <div className="post-date">
                            <span className="far fa-calendar meta-icon"></span>
                            January 18, 2019
                          </div>
                        </div>
                        <h5 className="post-title">
                          <a href="blog-post-layout-one.html">
                            Ideas for High Returns on Investment
                          </a>
                        </h5>
                      </div>
                      {/* <!-- Post info End --> */}
                    </div>
                    <div className="single-blog-lg-list wow move-up">
                      {/* <!-- Post Feature Start --> */}
                      <a href="blog-post-layout-one.html">
                        <div className="post-blog-thumbnail">
                          <img
                            className="img-fluid"
                            src="assets/images/blog/blog-08-480x312.jpg"
                            alt="Blog Images"
                          />
                          <div className="post-meta mt-20">
                            <div className="post-author">
                              <img
                                className="img-fluid avatar-96"
                                src="assets/images/team/admin-02.jpeg"
                                alt=""
                              />
                              Harry Ferguson
                            </div>
                          </div>
                        </div>
                      </a>
                      {/* <!-- Post Feature End -->

                    <!-- Post info Start --> */}
                      <div className="post-info lg-blog-post-info">
                        <div className="post-meta mb-10">
                          <div className="post-date">
                            <span className="far fa-calendar meta-icon"></span>
                            February 21, 2019
                          </div>
                        </div>
                        <h5 className="post-title">
                          <a href="blog-post-layout-one.html">
                            How Technology Made Businesses More Efficient
                          </a>
                        </h5>
                      </div>
                      {/* <!-- Post info End --> */}
                    </div>
                    <div className="single-blog-lg-list wow move-up">
                      {/* <!-- Post Feature Start --> */}
                      <a href="blog-post-layout-one.html">
                        <div className="post-blog-thumbnail">
                          <img
                            className="img-fluid"
                            src="assets/images/blog/blog-07-480x312.jpg"
                            alt="Blog Images"
                          />
                          <div className="post-meta mt-20">
                            <div className="post-author">
                              <img
                                className="img-fluid avatar-96"
                                src="assets/images/team/admin-02.jpeg"
                                alt=""
                              />
                              Harry Ferguson
                            </div>
                          </div>
                        </div>
                      </a>
                      {/* <!-- Post Feature End -->

                    <!-- Post info Start --> */}
                      <div className="post-info lg-blog-post-info">
                        <div className="post-meta mb-10">
                          <div className="post-date">
                            <span className="far fa-calendar meta-icon"></span>
                            January 18, 2019
                          </div>
                        </div>
                        <h5 className="post-title">
                          <a href="blog-post-layout-one.html">
                            Data Secure on Transitioning to a New Office
                          </a>
                        </h5>
                      </div>
                      {/* <!-- Post info End --> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!--=========== Service Projects Wrapper End =============-->

        <!--============ Contact Us Area Start =================--> */}
          <div className="contact-us-area service-contact-bg section-space--ptb_100">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-4">
                  <div className="contact-info sytle-one service-contact text-left">
                    <div className="contact-info-title-wrap text-center">
                      <h3 className="heading text-white mb-10">4.9/5.0</h3>
                      <div className="ht-star-rating lg-style">
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                      </div>
                      <p className="sub-text">
                        by 700+ customers for 3200+ clients
                      </p>
                    </div>

                    <div className="contact-list-item">
                      <a href="tel:190068668" className="single-contact-list">
                        <div className="content-wrap">
                          <div className="content">
                            <div className="icon">
                              <span className="fal fa-phone"></span>
                            </div>
                            <div className="main-content">
                              <h6 className="heading">Call for advice now!</h6>
                              <div className="text">+91-809-396-2212</div>
                            </div>
                          </div>
                        </div>
                      </a>
                      <a
                        href="mailto:connect@coolhaxlabs.com"
                        className="single-contact-list"
                      >
                        <div className="content-wrap">
                          <div className="content">
                            <div className="icon">
                              <span className="fal fa-envelope"></span>
                            </div>
                            <div className="main-content">
                              <h6 className="heading">Say hello</h6>
                              <div className="text">
                                connect@coolhaxlabs.com
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-7 ml-auto">
                  <div className="contact-form-service-wrap">
                    <div className="contact-title text-center section-space--mb_40">
                      <h3 className="mb-10">Need a hand?</h3>
                      <p className="text">
                        Reach out to the world’s most reliable IT services.
                      </p>
                    </div>

                    {/* <!-- <form className="contact-form" id="contact-form-2" action="https://whizthemes.com/mail-php/jowel/mitech/php/services-mail.php" method="post"> --> */}
                    <form
                      className="contact-form"
                      id="contact-form-2"
                      action="assets/php/services-mail.php"
                      method="post"
                    >
                      <div className="contact-form__two">
                        <div className="contact-input">
                          <div className="contact-inner">
                            <input
                              name="con_name"
                              type="text"
                              placeholder="Name *"
                            />
                          </div>
                          <div className="contact-inner">
                            <input
                              name="con_email"
                              type="email"
                              placeholder="Email *"
                            />
                          </div>
                        </div>
                        <div className="contact-select">
                          <div className="form-item contact-inner">
                            <span className="inquiry">
                              <select id="Visiting" name="Visiting">
                                <option disabled selected>
                                  Select Department to email
                                </option>
                                <option value="Your inquiry about">
                                  Your inquiry about
                                </option>
                                <option value="General Information Request">
                                  General Information Request
                                </option>
                                <option value="Partner Relations">
                                  Partner Relations
                                </option>
                                <option value="Careers">Careers</option>
                                <option value="Software Licencing">
                                  Software Licencing
                                </option>
                              </select>
                            </span>
                          </div>
                        </div>
                        <div className="contact-inner contact-message">
                          <textarea
                            name="con_message"
                            placeholder="Please describe what you need."
                          ></textarea>
                        </div>
                        <div className="comment-submit-btn">
                          <button className="ht-btn ht-btn-md" type="submit">
                            Send message
                          </button>
                          <p className="form-messege-2"></p>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!--============ Contact Us Area End =================-->
        <!--====================  brand logo slider area ====================--> */}
          <div className="brand-logo-slider-area section-space--ptb_60">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  {/* <!-- brand logo slider --> */}
                  <div className="brand-logo-slider__container-area">
                    <div className="swiper-container brand-logo-slider__container">
                      <div className="swiper-wrapper brand-logo-slider__one">
                        <div className="swiper-slide brand-logo brand-logo--slider">
                          <a href="#">
                            <div className="brand-logo__image">
                              <img
                                src="assets/images/brand/mitech-client-logo-01.png"
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                            <div className="brand-logo__image-hover">
                              <img
                                src="assets/images/brand/mitech-client-logo-01-hover.png"
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                          </a>
                        </div>
                        <div className="swiper-slide brand-logo brand-logo--slider">
                          <a href="#">
                            <div className="brand-logo__image">
                              <img
                                src="assets/images/brand/mitech-client-logo-02.png"
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                            <div className="brand-logo__image-hover">
                              <img
                                src="assets/images/brand/mitech-client-logo-02-hover.png"
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                          </a>
                        </div>
                        <div className="swiper-slide brand-logo brand-logo--slider">
                          <a href="#">
                            <div className="brand-logo__image">
                              <img
                                src="assets/images/brand/mitech-client-logo-03.png"
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                            <div className="brand-logo__image-hover">
                              <img
                                src="assets/images/brand/mitech-client-logo-03-hover.png"
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                          </a>
                        </div>
                        <div className="swiper-slide brand-logo brand-logo--slider">
                          <a href="#">
                            <div className="brand-logo__image">
                              <img
                                src="assets/images/brand/mitech-client-logo-04.png"
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                            <div className="brand-logo__image-hover">
                              <img
                                src="assets/images/brand/mitech-client-logo-04-hover.png"
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                          </a>
                        </div>
                        <div className="swiper-slide brand-logo brand-logo--slider">
                          <a href="#">
                            <div className="brand-logo__image">
                              <img
                                src="assets/images/brand/mitech-client-logo-05.png"
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                            <div className="brand-logo__image-hover">
                              <img
                                src="assets/images/brand/mitech-client-logo-05-hover.png"
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                          </a>
                        </div>
                        <div className="swiper-slide brand-logo brand-logo--slider">
                          <a href="#">
                            <div className="brand-logo__image">
                              <img
                                src="assets/images/brand/mitech-client-logo-06.png"
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                            <div className="brand-logo__image-hover">
                              <img
                                src="assets/images/brand/mitech-client-logo-06-hover.png"
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                          </a>
                        </div>
                        <div className="swiper-slide brand-logo brand-logo--slider">
                          <a href="#">
                            <div className="brand-logo__image">
                              <img
                                src="assets/images/brand/mitech-client-logo-07.png"
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                            <div className="brand-logo__image-hover">
                              <img
                                src="assets/images/brand/mitech-client-logo-07-hover.png"
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                          </a>
                        </div>
                        <div className="swiper-slide brand-logo brand-logo--slider">
                          <a href="#">
                            <div className="brand-logo__image">
                              <img
                                src="assets/images/brand/mitech-client-logo-08.png"
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                            <div className="brand-logo__image-hover">
                              <img
                                src="assets/images/brand/mitech-client-logo-08-hover.png"
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                          </a>
                        </div>
                        <div className="swiper-slide brand-logo brand-logo--slider">
                          <a href="#">
                            <div className="brand-logo__image">
                              <img
                                src="assets/images/brand/mitech-client-logo-09.png"
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                            <div className="brand-logo__image-hover">
                              <img
                                src="assets/images/brand/mitech-client-logo-09-hover.png"
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!--====================  End of brand logo slider area  ====================--> */}
        </div>

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
      </div>
      {/* <!--====================  scroll top ====================--> */}
      <a href="#" className="scroll-top" id="scroll-top">
        <i className="arrow-top fal fa-long-arrow-up"></i>
        <i className="arrow-bottom fal fa-long-arrow-up"></i>
      </a>
      {/* <!--====================  End of scroll top  ====================--> */}

      {/* <!--====================  mobile menu overlay ====================--> */}
      <div className="mobile-menu-overlay" id="mobile-menu-overlay">
        <div className="mobile-menu-overlay__inner">
          <div className="mobile-menu-overlay__header">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-md-6 col-8">
                  {/* <!-- logo --> */}
                  <div className="logo">
                    <a href="index.html">
                      <img
                        src="assets/images/logo/logo-dark.png"
                        className="img-fluid"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
                <div className="col-md-6 col-4">
                  {/* <!-- mobile menu content --> */}
                  <div className="mobile-menu-content text-right">
                    <span
                      className="mobile-navigation-close-icon"
                      id="mobile-menu-close-trigger"
                    ></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mobile-menu-overlay__body">
            <nav className="offcanvas-navigation">
              <ul>
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="about-us.html">About</a>
                </li>
                <li className="has-children">
                  <a href="#">Company</a>
                  <ul className="sub-menu">
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
                <li className="has-children">
                  <a href="#">IT solutions</a>
                  <ul className="sub-menu">
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
                  <a href="case-studies.html">Case Studies</a>
                </li>
                <li>
                  <a href="contact-us.html">
                    <span>Contact us</span>
                  </a>
                </li>
                <li>
                  <a href="blog.html">Blog</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
