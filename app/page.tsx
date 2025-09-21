import Features from "./components/Features";
import Header from "./components/Header";
import MainSlider from "./components/MainSlider";

import Banners from "./components/Banners";
import BestDeals from "./components/BestDeals";
import FeaturedProducts from "./components/FeaturedProducts";
import PopularCategories from "./components/PopularCategories";

export default function Home() {
  return (
    <div>
      <Header />
      {/* <MobileNav /> */}
      <MainSlider />
      <Features />
      <PopularCategories />
      <FeaturedProducts />
      <Banners />
      <BestDeals />
    </div>
  );
}
