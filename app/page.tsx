import Header from "./components/Header";
import MainSlider from "./components/MainSlider";
import MobileNav from "./components/MobileNav";
import Features from "./components/Features";

import FeaturedProducts from "./components/FeaturedProducts";
import Banners from "./components/Banners";
import BestDeals from "./components/BestDeals";
import Footer from "./components/Footer";
import PopularCategories from "./components/PopularCategories";

export default function Home() {
  return (
    <div>
      <Header />
      <MobileNav />
      <MainSlider />
      <Features />
      <PopularCategories />
      <FeaturedProducts />
      <Banners />
      <BestDeals />
    </div>
  );
}
