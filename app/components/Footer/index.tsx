import Link from "next/link";

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
                    <a href="index.html">
                      <img
                        src="/assets/img/logo/white-logo.png"
                        alt="swiftcart"
                        width="180"
                      />
                    </a>
                  </div>
                  <p className="xc-footer-one__about">
                    Cimaratu Khayr Building, Hargeisa, Somaliland
                  </p>
                  <div className="xc-footer-one__cta">
                    <span>
                      <a href="tel:+252637002225" style={{ color: "white" }}>
                        <i className="icon-phone"></i>+(252) 637002225
                      </a>
                    </span>
                    <span>
                      <a href="mailto:info@etus.com" style={{ color: "white" }}>
                        <i className="icon-mail"></i>info@etus.com
                      </a>
                    </span>
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
                    <li>
                      <a href="about.html">About us</a>
                    </li>
                    <li>
                      <a href="about.html">Our story</a>
                    </li>
                    <li>
                      <a href="team.html">Our Team</a>
                    </li>
                    <li>
                      <a href="blog-list.html">Latest News</a>
                    </li>
                    <li>
                      <a href="blog-list.html">Privacy Policy</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 col-xl-2">
                <div className="xc-footer-one__widget xc-widget-col-3">
                  <h3 className="xc-footer-one__widget-title">Top Category</h3>
                  <ul className="xc-footer-one__nav">
                    <li>
                      <a href="shop.html">Shop Product</a>
                    </li>
                    <li>
                      <a href="cart.html">Shoping Cart </a>
                    </li>
                    <li>
                      <a href="shop.html">Wishlist</a>
                    </li>
                    <li>
                      <a href="about.html">Our story</a>
                    </li>
                    <li>
                      <a href="contact.html">Customer Help</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-2">
                <div className="xc-footer-one__widget xc-widget-col-4">
                  <h3 className="xc-footer-one__widget-title"></h3>
                  {/* <div className="xc-footer-one__download d-flex flex-column gap-3">
                    <a href="#">
                      <img
                        src="assets/img/resourse/playstore-download.png"
                        alt="playsote"
                      />
                    </a>
                    <a href="#">
                      <img
                        src="assets/img/resourse/appstore-download.png"
                        alt="playsote"
                      />
                    </a>
                  </div> */}
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-3">
                <div className="xc-footer-one__widget xc-widget-col-4">
                  <h3 className="xc-footer-one__widget-title">Popular Tag</h3>
                  <div className="tagcloud tagcloud-style-2">
                    <Link
                      href="/shop"
                      style={{ color: "white", borderColor: "white" }}
                    >
                      DSLR Cameras
                    </Link>
                    <Link
                      href="/shop"
                      style={{ color: "white", borderColor: "white" }}
                    >
                      Mirrorless
                    </Link>
                    <Link
                      href="/shop"
                      style={{ color: "white", borderColor: "white" }}
                    >
                      Camera Lenses
                    </Link>
                    <Link
                      href="/shop"
                      style={{ color: "white", borderColor: "white" }}
                    >
                      Tripods
                    </Link>
                    <Link
                      href="/shop"
                      style={{ color: "white", borderColor: "white" }}
                    >
                      Lighting
                    </Link>
                    <Link
                      href="/shop"
                      style={{ color: "white", borderColor: "white" }}
                    >
                      Accessories
                    </Link>
                    <Link
                      href="/shop"
                      style={{ color: "white", borderColor: "white" }}
                    >
                      Memory Cards
                    </Link>
                    <Link
                      href="/shop"
                      style={{ color: "white", borderColor: "white" }}
                    >
                      Photography
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="xc-footer-one-copyright">
          <div className="container">
            <div className="xc-footer-one-copyright__wrapper">
              <p
                className="xc-footer-one-copyright__text"
                style={{ color: "white" }}
              >
                &copy; 2025 eTus, Inc. All rights reserved.{" "}
                <span className="xc-dynamic-year"></span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
