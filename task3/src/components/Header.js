import React from 'react'

function Header() {
    return (
        <div class="header-area">

        <div class="header-top-bar-info bg-gray d-none d-lg-block">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="top-bar-wrap">
                            <div class="top-bar-left">
                                <div class="top-bar-text"><a href="careers.html" class="font-medium display-inline">Now Hiring:</a> Are you a driven and motivated software Engineer?</div>
                            </div>
                            <div class="top-bar-right">
                                <ul class="top-bar-info">
                                    <li class="info-item">
                                        <a href="tel:918093962212" class="info-link">
                                            <i class="info-icon fa fa-phone"></i>
                                            <span class="info-text"><strong>+91-809-396-2212</strong></span>
                                        </a>
                                    </li>
                                    <li class="info-item">
                                        <i class="info-icon fa fa-map-marker-alt"></i>
                                        <span class="info-text">Indira Nagar, Bangalore, KA</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="header-bottom-wrap header-sticky bg-white">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="header position-relative">
                            {/* <!-- brand logo --> */}
                            <div class="header__logo">
                                <a href="index.html">
                                    <img src="assets/images/logo/logo-dark.png" class="img-fluid" alt="" />
                                </a>
                            </div>

                            <div class="header-right">

                                {/* <!-- navigation menu --> */}
                                <div class="header__navigation menu-style-three d-none d-xl-block">
                                    <nav class="navigation-menu">
                                        <ul>
                                            <li>
                                                <a href="index.html"><span>Home</span></a>                                    
                                            </li>
                                            <li>
                                                <a href="about-us.html"><span>About</span></a>                                    
                                            </li>
                                            <li class="has-children has-children--multilevel-submenu">
                                                <a href="#"><span>Company</span></a>
                                                <ul class="submenu">
                                                    <li><a href="why-choose-us.html"><span>Why choose us</span></a></li>
                                                    <li><a href="our-history.html"><span>Our history</span></a></li>
                                                    <li><a href="faqs.html"><span>FAQs</span></a></li>
                                                    <li><a href="careers.html"><span>Careers</span></a></li>
                                                </ul>
                                            </li>
                                            <li class="has-children has-children--multilevel-submenu">
                                                <a href="#"><span>Solutions</span></a>
                                                <ul class="submenu">
                                                    <li><a href="it-services.html"><span>IT Services</span></a></li>
                                                    <li><a href="managed-it-service.html"><span>Managed IT Services</span></a></li>
                                                    <li><a href="industries.html"><span>Industries</span></a></li>
                                                    <li><a href="business-solution.html"><span>Business solution</span></a></li>
                                                    <li><a href="it-services-details.html"><span>IT Services Details</span></a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="case-studies.html"><span>Case Studies</span></a>
                                            </li>
                                            <li>
                                                <a href="contact-us.html"><span>Contact</span></a>                                    
                                            </li>
                                            <li>
                                                <a href="blog.html"><span>Blog</span></a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                                
                                {/* <!-- mobile menu --> */}
                                <div class="mobile-navigation-icon d-block d-xl-none" id="mobile-menu-trigger">
                                    <i></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </div>
    )
}

export default Header