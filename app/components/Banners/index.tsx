import Link from "next/link";

const Banners = () => {
  return (
    <div className="xc-banner-three pb-80">
      <div className="container">
        <div className="row gutter-y-20">
          <div className="col-xl-6">
            <div
              className="xc-banner-three__item item-2"
              style={{ backgroundColor: "#191C1F" }}
            >
              <div className="xc-banner-three__left">
                <div className="xc-banner-three__content">
                  <span className="xc-banner-three__subtitle">
                    INTRODUCING NEW
                  </span>
                  <h3 className="xc-banner-three__title">
                    Xiaomi Mi 11 Ultra <br /> 12GB+256GB
                  </h3>
                  <p className="xc-banner-three__info">
                    *Data provided by internal <br /> laboratories. Industry
                    measurement.
                  </p>
                  <div className="xc-banner-three__btn">
                    <Link className="swiftcart-btn" href="/shop">
                      Shop now <i className="icon-next"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="xc-banner-three__right">
                <div className="xc-banner-three__img">
                  <img src="assets/img/banner/banner-3-2.png" alt="mobile" />
                  {/* <span className="xc-banner-three__price">$590</span> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div
              className="xc-banner-three__item item-1"
              style={{ backgroundColor: "#EBEEEF" }}
            >
              <div className="xc-banner-three__left">
                <div className="xc-banner-three__content">
                  <span className="xc-banner-three__subtitle">INTRODUCING</span>
                  <h3 className="xc-banner-three__title">
                    New Apple <br /> Homepod Mini
                  </h3>
                  <p className="xc-banner-three__info">
                    Jam-packed with innovation, <br /> HomePod mini delivers
                    unexpectedly.
                  </p>
                  <div className="xc-banner-three__btn">
                    <Link className="swiftcart-btn" href="/shop">
                      Shop now <i className="icon-next"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="xc-banner-three__right">
                <div className="xc-banner-three__img xc-banner-three__img-center">
                  <img src="assets/img/banner/banner-3-1.png" alt="gmini" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banners;
