"use client";
import Link from "next/link";
import dynamic from "next/dynamic";
import ClientOnly from "../components/ClientOnly";

const Header2 = dynamic(() => import("../components/Header2"), { ssr: false });

export default function AboutPage() {
  return (
    <>
      <ClientOnly>
        <Header2 />
      </ClientOnly>
      {/* xc-breadcrumb area start */}
      <div className="xc-breadcrumb__area base-bg">
        <div className="xc-breadcrumb__bg w-img xc-breadcrumb__overlay" />
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="xc-breadcrumb__content p-relative z-index-1">
                <div className="xc-breadcrumb__list">
                  <span>
                    <Link href="/">Home</Link>
                  </span>
                  <span className="dvdr">
                    <i className="icon-arrow-right" />
                  </span>
                  <span>About</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* xc-breadcrumb area end */}
      {/* about one start */}
      <div className="xc-about-one pt-80 pb-80">
        <div className="container">
          <div className="row gutter-y-30 align-items-center">
            <div className="col-xl-6 col-xxl-7">
              <div className="xc-about-one__left">
                <div className="xc-about-one__img">
                  <img src="/assets/img/about/about-1-1.jpg" alt="about" />
                </div>
                <div className="xc-about-one__img-2">
                  <img src="/assets/img/about/about-1-2.jpg" alt="about" />
                  <img src="/assets/img/about/about-1-3.jpg" alt="about" />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-xxl-5">
              <div className="xc-about-one__right">
                <div className="xc-about-one__heading">
                  <span className="xc-about-one__subtitle">discover US </span>
                  <h3 className="xc-about-one__title">About eTus </h3>
                  <p className="xc-about-one__info">
                    eTus is a Media Solutions leading provider of professional
                    media equipment, offering high-quality cameras, audio gear,
                    lighting, broadcasting tools, and accessories. We cater to
                    filmmakers, content creators, production studios, and
                    broadcasters, ensuring they have the best technology to
                    bring their creative visions to life.
                  </p>
                </div>
                <ul className="xc-about-one__checklist">
                  <li>
                    <i className="fas fa-check-circle" />
                    Professional-grade cameras, lenses, and accessories for all
                    production needs
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    High-quality audio equipment and recording solutions for
                    crystal-clear sound
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    Professional lighting systems and studio equipment for
                    perfect illumination
                  </li>
                </ul>
                <Link href="/shop" className="swiftcart-btn text-uppercase">
                  Explore Equipment
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* about one end */}
      {/* vision mission start */}
      <div className="xc-vision-mission pt-80 pb-80">
        <div className="container">
          <div className="row gutter-y-30">
            <div className="col-12">
              {/* <div className="xc-sec-heading text-center mb-50">
                <h3 className="xc-sec-heading__title">
                  <span>
                    <i className="icon-eye" />
                  </span>
                  Our Vision & Mission
                </h3>
              </div> */}
            </div>
          </div>
          <div className="row gutter-y-30 align-items-center">
            <div className="col-lg-6">
              <div className="xc-vision-mission__item">
                <div className="xc-vision-mission__icon">
                  <i className="fas fa-eye" />
                </div>
                <div className="xc-vision-mission__content">
                  <h4 className="xc-vision-mission__title">Our Vision</h4>
                  <p className="xc-vision-mission__text">
                    To be the most trusted provider of media production
                    equipment, empowering creators and professionals with
                    innovative technology and exceptional service.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="xc-vision-mission__item">
                <div className="xc-vision-mission__icon">
                  <i className="fas fa-rocket" />
                </div>
                <div className="xc-vision-mission__content">
                  <h4 className="xc-vision-mission__title">Our Mission</h4>
                  <p className="xc-vision-mission__text">
                    To equip media professionals and content creators with the
                    highest quality tools and technology to enhance their
                    creativity and storytelling.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* vision mission end */}
      {/* counter start  */}
      {/* <div className="xc-counter-one base-bg pt-60 pb-60">
        <div className="container">
          <div className="row gutter-y-30">
            <div className="col-lg-3 col-sm-6">
              <div className="xc-counter-one__item">
                <div>
                  <h3 className="xc-counter-one__count xc-count-box">
                    <span
                      className="xc-counter-up xc-count-number"
                      data-stop={3070}
                      data-speed={1500}
                    />
                  </h3>
                  <p className="xc-counter-one__title">Total vendor</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="xc-counter-one__item">
                <div>
                  <h3 className="xc-counter-one__count xc-count-box">
                    <span
                      className="xc-counter-up xc-count-number"
                      data-stop={56}
                      data-speed={1500}
                    />
                  </h3>
                  <p className="xc-counter-one__title">Categories</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="xc-counter-one__item">
                <div>
                  <h3 className="xc-counter-one__count xc-count-box">
                    <span
                      className="xc-counter-up xc-count-number"
                      data-stop={78}
                      data-speed={1500}
                    />
                    <span>m</span>
                  </h3>
                  <p className="xc-counter-one__title">Categories</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="xc-counter-one__item">
                <div>
                  <h3 className="xc-counter-one__count xc-count-box">
                    <span
                      className="xc-counter-up xc-count-number"
                      data-stop={86}
                      data-speed={1500}
                    />
                    <span>m</span>
                  </h3>
                  <p className="xc-counter-one__title">Product Sale</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* counter end  */}
      {/* testimonil start  */}
      {/* <div className="xc-testimonial-three pt-80 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div
                className="xc-testimonial-three__carousel swiftcart-owl__carousel owl-carousel"
                data-owl-options='{
                    "loop": true,
                    "animateOut": "fadeOut",
                    "animateIn": "fadeIn",
                    "items": 1,
                    "autoplay": true,
                    "autoplayTimeout": 7000,
                    "smartSpeed": 1000,
                    "nav": false,
                    "navText": ["<span className=\"fa-solid fa-chevron-left\"></span>","<span className=\"fa-solid fa-chevron-right\"></span>"],
                    "dots": true,
                    "margin": 0
                    }'
              >
                <div className="xc-testimonial-three__item">
                  <div className="xc-testimonial-three__img">
                    <img
                      src="/assets/img/testimonial/testimonial-3-1.jpg"
                      alt="test"
                    />
                    <span>
                      <i className="fa-solid fa-quote-right" />
                    </span>
                  </div>
                  <h3 className="xc-testimonial-three__name">
                    Ronald Richards
                  </h3>
                  <span className="xc-testimonial-three__bio">
                    Customer, USA
                  </span>
                  <p className="xc-testimonial-three__review">
                    Maecenas nec odio et ante tincidunt tempus. Donec vitae
                    sapien ut libero venenatis <br /> faucibus. Nullam quis
                    ante. Etiam sit amet orci eget eros faucibus tincidunt.Duis
                    leo. Sed <br /> fringilla mauris sit amet nibh. Donec
                    sodales sagittis magna.
                  </p>
                </div>
                <div className="xc-testimonial-three__item">
                  <div className="xc-testimonial-three__img">
                    <img
                      src="/assets/img/testimonial/testimonial-3-1.jpg"
                      alt="test"
                    />
                    <span>
                      <i className="fa-solid fa-quote-right" />
                    </span>
                  </div>
                  <h3 className="xc-testimonial-three__name">
                    Ronald Richards
                  </h3>
                  <span className="xc-testimonial-three__bio">
                    Customer, USA
                  </span>
                  <p className="xc-testimonial-three__review">
                    Maecenas nec odio et ante tincidunt tempus. Donec vitae
                    sapien ut libero venenatis <br /> faucibus. Nullam quis
                    ante. Etiam sit amet orci eget eros faucibus tincidunt.Duis
                    leo. Sed <br /> fringilla mauris sit amet nibh. Donec
                    sodales sagittis magna.
                  </p>
                </div>
                <div className="xc-testimonial-three__item">
                  <div className="xc-testimonial-three__img">
                    <img
                      src="/assets/img/testimonial/testimonial-3-1.jpg"
                      alt="test"
                    />
                    <span>
                      <i className="fa-solid fa-quote-right" />
                    </span>
                  </div>
                  <h3 className="xc-testimonial-three__name">
                    Ronald Richards
                  </h3>
                  <span className="xc-testimonial-three__bio">
                    Customer, USA
                  </span>
                  <p className="xc-testimonial-three__review">
                    Maecenas nec odio et ante tincidunt tempus. Donec vitae
                    sapien ut libero venenatis <br /> faucibus. Nullam quis
                    ante. Etiam sit amet orci eget eros faucibus tincidunt.Duis
                    leo. Sed <br /> fringilla mauris sit amet nibh. Donec
                    sodales sagittis magna.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* testimonil end  */}
      {/* ads start */}
      {/* <div className="xc-ads-one">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="xc-ads-one__img w-img">
                <Link href="#">
                  <img src="/assets/img/ads/ads-1.png" alt="ads" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* ads end */}
      {/* seller one start  */}
      {/* <div className="xc-brand-one pt-80 pb-80">
        <div className="container">
          <div className="xc-sec-heading xc-has-btn">
            <h3 className="xc-sec-heading__title">
              <span>
                <i className="icon-power" />
              </span>
              Top Brand
            </h3>
            <div className="xc-sec-heading__btn">
              <Link href="/shop" className="xc-sec-heading-btn">
                show all
              </Link>
            </div>
          </div>
          <div className="xc-brand-one__wrapper">
            <div className="row gutter-y-20">
              <div className="col-sm-6 col-md-3 col-xl-2">
                <div className="xc-brand-one__item">
                  <img src="/assets/img/brand/brand-1-1.png" alt="seller" />
                  <h3 className="xc-brand-one__title">
                    <Link href="#">Betway</Link>
                  </h3>
                </div>
              </div>
              <div className="col-sm-6 col-md-3 col-xl-2">
                <div className="xc-brand-one__item">
                  <img src="/assets/img/brand/brand-1-2.png" alt="seller" />
                  <h3 className="xc-brand-one__title">
                    <Link href="#">Cool.fm</Link>
                  </h3>
                </div>
              </div>
              <div className="col-sm-6 col-md-3 col-xl-2">
                <div className="xc-brand-one__item">
                  <img src="/assets/img/brand/brand-1-3.png" alt="seller" />
                  <h3 className="xc-brand-one__title">
                    <Link href="#">Suzuki</Link>
                  </h3>
                </div>
              </div>
              <div className="col-sm-6 col-md-3 col-xl-2">
                <div className="xc-brand-one__item">
                  <img src="/assets/img/brand/brand-1-4.png" alt="seller" />
                  <h3 className="xc-brand-one__title">
                    <Link href="#">Samsung</Link>
                  </h3>
                </div>
              </div>
              <div className="col-sm-6 col-md-3 col-xl-2">
                <div className="xc-brand-one__item">
                  <img src="/assets/img/brand/brand-1-5.png" alt="seller" />
                  <h3 className="xc-brand-one__title">
                    <Link href="#">adidas</Link>
                  </h3>
                </div>
              </div>
              <div className="col-sm-6 col-md-3 col-xl-2">
                <div className="xc-brand-one__item">
                  <img src="/assets/img/brand/brand-1-6.png" alt="seller" />
                  <h3 className="xc-brand-one__title">
                    <Link href="#">Ricky’s</Link>
                  </h3>
                </div>
              </div>
              <div className="col-sm-6 col-md-3 col-xl-2">
                <div className="xc-brand-one__item">
                  <img src="/assets/img/brand/brand-1-7.png" alt="seller" />
                  <h3 className="xc-brand-one__title">
                    <Link href="#">Renzzi</Link>
                  </h3>
                </div>
              </div>
              <div className="col-sm-6 col-md-3 col-xl-2">
                <div className="xc-brand-one__item">
                  <img src="/assets/img/brand/brand-1-8.png" alt="seller" />
                  <h3 className="xc-brand-one__title">
                    <Link href="#">Hyundai</Link>
                  </h3>
                </div>
              </div>
              <div className="col-sm-6 col-md-3 col-xl-2">
                <div className="xc-brand-one__item">
                  <img src="/assets/img/brand/brand-1-9.png" alt="seller" />
                  <h3 className="xc-brand-one__title">
                    <Link href="#">Toyota</Link>
                  </h3>
                </div>
              </div>
              <div className="col-sm-6 col-md-3 col-xl-2">
                <div className="xc-brand-one__item">
                  <img src="/assets/img/brand/brand-1-10.png" alt="seller" />
                  <h3 className="xc-brand-one__title">
                    <Link href="#">Puma</Link>
                  </h3>
                </div>
              </div>
              <div className="col-sm-6 col-md-3 col-xl-2">
                <div className="xc-brand-one__item">
                  <img src="/assets/img/brand/brand-1-11.png" alt="seller" />
                  <h3 className="xc-brand-one__title">
                    <Link href="#">Fashion</Link>
                  </h3>
                </div>
              </div>
              <div className="col-sm-6 col-md-3 col-xl-2">
                <div className="xc-brand-one__item">
                  <img src="/assets/img/brand/brand-1-12.png" alt="seller" />
                  <h3 className="xc-brand-one__title">
                    <Link href="#">Duke</Link>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* seller one end  */}
    </>
  );
}
