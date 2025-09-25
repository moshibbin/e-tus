"use client";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";

const PopularCategories = () => {
  const categories = [
    { name: "DSLR Cameras", image: "/assets/img/cats/pd-cat-1.png" },
    { name: "Mirrorless", image: "/assets/img/cats/pd-cat-2.png" },
    { name: "Action Cameras", image: "/assets/img/cats/pd-cat-3.png" },
    { name: "Camera Lenses", image: "/assets/img/cats/pd-cat-4.png" },
    { name: "Tripods & Stands", image: "/assets/img/cats/pd-cat-5.png" },
    { name: "Camera Bags", image: "/assets/img/cats/pd-cat-6.png" },
    { name: "Memory Cards", image: "/assets/img/cats/pd-cat-7.png" },
    { name: "Camera Filters", image: "/assets/img/cats/pd-cat-8.png" },
    { name: "Microphones", image: "/assets/img/cats/pd-cat-9.png" },
  ];

  return (
    <div className="xc-category-one pb-80">
      <div className="container">
        <div className="xc-sec-heading xc-sec-heading-two mb-40">
          <span className="xc-sec-heading__subtitle has-before">
            Categories
          </span>
          <h3 className="xc-sec-heading__title">Popular Categories</h3>
        </div>
        <div className="xc-category-slider__carousel">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={4}
            navigation={false}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              576: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              992: {
                slidesPerView: 5,
              },
            }}
            className="xc-category-swiper"
          >
            {categories.map((category, index) => (
              <SwiperSlide key={index}>
                <Link href="/shop">
                  <div className="xc-category-one__item">
                    <div className="xc-category-one__img">
                      <img src={category.image} alt={category.name} />
                    </div>
                    <h3 className="xc-category-one__title">
                      <Link href="/shop">{category.name}</Link>
                    </h3>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default PopularCategories;
