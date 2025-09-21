"use client";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import Link from "next/link";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

const MainSlider = () => {
  const sliderData = [
    {
      id: 1,
      subtitle: "PROFESSIONAL PHOTOGRAPHY GEAR",
      title: "Canon EOS R5",
      description:
        "Capture stunning 8K video and 45MP photos with Canon's flagship mirrorless camera. Professional-grade performance for creators.",
      buttonText: "Shop now",
      image: "/assets/img/slider/slider-1-1.png",
      price: "$3899",
      buttonLink: "/shop",
    },
    {
      id: 2,
      subtitle: "CAPTURE EVERY MOMENT",
      title: "Sony Alpha Series",
      description:
        "Experience cutting-edge autofocus and 4K video capabilities. Perfect for both photography and videography professionals.",
      buttonText: "Shop now",
      image: "/assets/img/slider/slider-1-2.png",
      price: "$1999",
      buttonLink: "/shop",
    },
    {
      id: 3,
      subtitle: "ADVENTURE READY CAMERAS",
      title: "GoPro HERO11",
      description:
        "Rugged 5.3K action camera with HyperSmooth stabilization. Built for extreme sports and outdoor adventures.",
      buttonText: "Shop now",
      image: "/assets/img/slider/slider-1-3.png",
      price: "$399",
      buttonLink: "/shop",
    },
  ];

  return (
    <div className="xc-header-two-banner pt-25 pb-25">
      <div className="container">
        <div className="row gutter-y-20">
          {/* Left: Slider */}
          <div className="col-xxl-8">
            <div className="xc-main-slider xc-main-slider-two">
              <Swiper
                modules={[Autoplay, EffectFade, Pagination]}
                loop={true}
                effect="fade"
                autoplay={{ delay: 500, disableOnInteraction: false }}
                speed={1000}
                pagination={{ clickable: true }}
                // className="xc-main-slider__carousel"
              >
                {/* Slide 1 */}

                {sliderData.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="xc-main-slider__item">
                      <div className="xc-main-slider__left">
                        <div className="xc-main-slidder__content">
                          <span className="xc-masin-slider__subtitle">
                            {item.subtitle}
                          </span>
                          <h3
                            className="xc-main-sdlider__title"
                            style={{ color: "white" }}
                          >
                            {item.title}
                          </h3>
                          <p
                            className="xc-main-dslider__info"
                            style={{ color: "white" }}
                          >
                            Experience cutting-edge autofocus and 4K video{" "}
                            <br /> capabilities for professionals.
                          </p>
                          <div
                            className="xc-main-slsider__btn"
                            style={{ color: "white" }}
                          >
                            <Link className="swiftcart-btn" href="/shop">
                              Shop now <i className="icon-next"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="xc-main-slider__right">
                        <div className="xc-main-slider__simg">
                          <img src={item.image} alt="Sony Alpha Series" />
                          {/* <span className="xc-main-slider__price">$1999</span> */}
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          {/* Right: Banners */}
          <div className="col-xxl-4">
            <div className="xc-header-two-banner">
              <div className="xc-header-two-banner-one bg-black">
                <div className="xc-header-two-banner-one__item">
                  <div className="xc-header-two-banner-one__left">
                    <span>Camera Deals</span>
                    <h3 className="xc-header-two-banner-one__title">
                      Nikon D850 <br /> Professional DSLR
                    </h3>
                    <Link className="swiftcart-btn" href="/shop">
                      Shop now <i className="icon-next"></i>
                    </Link>
                  </div>
                  <div className="xc-header-two-banner-one__right">
                    <img
                      src="/assets/img/banner/banner-home-1.png"
                      alt="banner"
                    />
                    <span className="xc-header-two-banner-one__offer">
                      29% OFF
                    </span>
                  </div>
                </div>
              </div>

              <div className="xc-header-two-banner-two bg-black">
                <div className="xc-header-two-banner-two__item">
                  <div className="xc-header-two-banner-two__right">
                    <img
                      src="/assets/img/banner/banner-home-2.png"
                      alt="banner"
                    />
                  </div>
                  <div className="xc-header-two-banner-two__left">
                    <h3 className="xc-header-two-banner-one__title">
                      Fujifilm <br /> X-T4 Mirrorless
                    </h3>

                    <Link className="swiftcart-btn" href="/shop">
                      Shop now <i className="icon-next"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Right Banners */}
        </div>
      </div>
    </div>
  );
};

export default MainSlider;
