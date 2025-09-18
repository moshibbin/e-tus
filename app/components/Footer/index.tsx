import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="xc-footer-one black-bg-2 pt-80">
                <div className="container">
                    <div className="xc-footer-one__wrapper pb-60">
                        <div className="row gutter-y-40">
                            <div className="col-md-6 col-lg-6 col-xl-3">
                                <div className="xc-footer-one__widget xc-widget-col-1">
                                    <div className="xc-footer-one__logo">
                                        <a href="index.html"><img src="assets/img/logo/white-logo.png" alt="swiftcart" width="180" /></a>
                                    </div>
                                    <p className="xc-footer-one__about">4517 Washington Ave. Manchester, Kentucky 39495</p>
                                    <div className="xc-footer-one__cta">
                                        <span><a href="tel:(629)-555-0129"><i className="icon-phone"></i>+54(0)24 6547
                                                8796</a></span>
                                        <span><a href="mailto:demo123@gmail.com"><i className="icon-mail"></i>demo123@gmail.com</a></span>
                                    </div>
                                    <div className="xc-footer-one__social">
                                        <a href="https://facebook.com">
                                            <i className="fab fa-facebook-f" aria-hidden="true"></i>
                                            <span className="sr-only">Facebook</span>
                                        </a>
                                        <a href="https://twitter.com">
                                            <i className="fab fa-x-twitter" aria-hidden="true"></i>
                                            <span className="sr-only">Twitter</span>
                                        </a>
                                        <a href="https://pinterest.com">
                                            <i className="fab fa-pinterest-p" aria-hidden="true"></i>
                                            <span className="sr-only">Pinterest</span>
                                        </a>
                                        <a href="https://instagram.com">
                                            <i className="fab fa-instagram" aria-hidden="true"></i>
                                            <span className="sr-only">Instagram</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3 col-xl-2">
                                <div className="xc-footer-one__widget xc-widget-col-2">
                                    <h3 className="xc-footer-one__widget-title">Quick links</h3>
                                    <ul className="xc-footer-one__nav">
                                        <li><a href="about.html">About us</a></li>
                                        <li><a href="about.html">Our story</a></li>
                                        <li><a href="team.html">Our Team</a></li>
                                        <li><a href="blog-list.html">Latest News</a></li>
                                        <li><a href="blog-list.html">Privacy Policy</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3 col-xl-2">
                                <div className="xc-footer-one__widget xc-widget-col-3">
                                    <h3 className="xc-footer-one__widget-title">Top Category</h3>
                                    <ul className="xc-footer-one__nav">
                                        <li><a href="shop.html">Shop Product</a></li>
                                        <li><a href="cart.html">Shoping Cart </a></li>
                                        <li><a href="shop.html">Wishlist</a></li>
                                        <li><a href="about.html">Our story</a></li>
                                        <li><a href="contact.html">Customer Help</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6 col-xl-2">
                                <div className="xc-footer-one__widget xc-widget-col-4">
                                    <h3 className="xc-footer-one__widget-title">Download App</h3>
                                    <div className="xc-footer-one__download d-flex flex-column gap-3">
                                        <a href="#"><img src="assets/img/resourse/playstore-download.png" alt="playsote" /></a>
                                        <a href="#"><img src="assets/img/resourse/appstore-download.png" alt="playsote" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6 col-xl-3">
                                <div className="xc-footer-one__widget xc-widget-col-4">
                                    <h3 className="xc-footer-one__widget-title">Popular Tag</h3>
                                    <div className="tagcloud tagcloud-style-2">
                                        <a href="blog-details.html">Software</a>
                                        <a href="blog-details.html">Outsourcing</a>
                                        <a href="blog-details.html">Online</a>
                                        <a href="blog-details.html">Business</a>
                                        <a href="blog-details.html">Security</a>
                                        <a href="blog-details.html">Technology</a>
                                        <a href="blog-details.html">UI/UX</a>
                                        <a href="blog-details.html">People</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xc-footer-one-copyright">
                    <div className="container">
                        <div className="xc-footer-one-copyright__wrapper">
                            <p className="xc-footer-one-copyright__text">&copy; Copyright <span className="xc-dynamic-year"></span> by
                                <a target="_blank" href="https://themeforest.net/user/SolverWp"> SolverWp </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;