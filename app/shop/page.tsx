
import Link from "next/link";
import Header2 from "../components/Header2";

export default function ShopPage() {
  return (
    <>
      <Header2 />
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
                  <span>Shop</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* xc-breadcrumb area end */}
      {/* shop area start */}
      <section className="xc-shop-area pt-80 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-4">
              <div className="shop__sidebar on-left">
                <div className="shop__widget xc-accordion">
                  <div className="accordion" id="shop_category">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="category__widget">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#cagetory_widget_collapse"
                          aria-expanded="true"
                          aria-controls="cagetory_widget_collapse"
                        >
                          Categories
                        </button>
                      </h2>
                      <div
                        id="cagetory_widget_collapse"
                        className="accordion-collapse collapse show"
                        aria-labelledby="category__widget"
                        data-bs-parent="#shop_category"
                      >
                        <div className="accordion-body">
                          <div className="shop__widget-list">
                            <div className="shop__widget-list-item">
                              <input
                                type="checkbox"
                                id="all"
                                defaultChecked
                              />
                              <label htmlFor="all">All</label>
                            </div>
                            <div className="shop__widget-list-item">
                              <input
                                type="checkbox"
                                id="man"
                                defaultChecked
                              />
                              <label htmlFor="man">Man</label>
                            </div>
                            <div className="shop__widget-list-item">
                              <input type="checkbox" id="women" />
                              <label htmlFor="women">Women</label>
                            </div>
                            <div className="shop__widget-list-item">
                              <input type="checkbox" id="child" />
                              <label htmlFor="child">Child</label>
                            </div>
                            <div className="shop__widget-list-item">
                              <input type="checkbox" id="tshirt" />
                              <label htmlFor="tshirt">T-shirt</label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="shop__widget xc-accordion">
                  <div className="accordion" id="shop_brand">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="brand__widget">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#brand_widget_collapse"
                          aria-expanded="true"
                          aria-controls="brand_widget_collapse"
                        >
                          Brands
                        </button>
                      </h2>
                      <div
                        id="brand_widget_collapse"
                        className="accordion-collapse collapse show"
                        aria-labelledby="brand__widget"
                        data-bs-parent="#shop_brand"
                      >
                        <div className="accordion-body">
                          <div className="shop__widget-list">
                            <div className="shop__widget-list-item">
                              <input type="checkbox" id="iphone_12" />
                              <label htmlFor="iphone_12">Rich Man</label>
                            </div>
                            <div className="shop__widget-list-item">
                              <input type="checkbox" id="iphone_12_pro" />
                              <label htmlFor="iphone_12_pro">Doji Bari</label>
                            </div>
                            <div className="shop__widget-list-item">
                              <input type="checkbox" id="iphone_11_pro" />
                              <label htmlFor="iphone_11_pro">
                                Polo Cotton
                              </label>
                            </div>
                            <div className="shop__widget-list-item">
                              <input
                                type="checkbox"
                                id="samsung"
                                defaultChecked
                              />
                              <label htmlFor="samsung">Easy</label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="shop__widget xc-accordion">
                  <div className="accordion" id="shop_size">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="size__widget">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#size_widget_collapse"
                          aria-expanded="true"
                          aria-controls="size_widget_collapse"
                        >
                          Size
                        </button>
                      </h2>
                      <div
                        id="size_widget_collapse"
                        className="accordion-collapse collapse show"
                        aria-labelledby="size__widget"
                        data-bs-parent="#shop_size"
                      >
                        <div className="accordion-body">
                          <div className="shop__widget-list">
                            <div className="shop__widget-list-item-2">
                              <input
                                type="checkbox"
                                id="c-black"
                                defaultChecked
                              />
                              <label htmlFor="c-black">S</label>
                            </div>
                            <div className="shop__widget-list-item-2 has-orange">
                              <input type="checkbox" id="c-orange" />
                              <label htmlFor="c-orange">M</label>
                            </div>
                            <div className="shop__widget-list-item-2 has-green">
                              <input type="checkbox" id="c-green" />
                              <label htmlFor="c-green">L</label>
                            </div>
                            <div className="shop__widget-list-item-2 has-red">
                              <input
                                type="checkbox"
                                id="c-red"
                                defaultChecked
                              />
                              <label htmlFor="c-red">Xl</label>
                            </div>
                            <div className="shop__widget-list-item-2 has-yellow">
                              <input type="checkbox" id="c-XXL" />
                              <label htmlFor="c-XXL">XXL</label>
                            </div>
                            <div className="shop__widget-list-item-2 has-yellow">
                              <input type="checkbox" id="c-XXXL" />
                              <label htmlFor="c-XXXL">XXXL</label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="shop__widget xc-accordion">
                  <div className="accordion" id="shop_range">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="range__widget">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#range_widget_collapse"
                          aria-expanded="true"
                          aria-controls="range_widget_collapse"
                        >
                          Price range
                        </button>
                      </h2>
                      <div
                        id="range_widget_collapse"
                        className="accordion-collapse collapse show"
                        aria-labelledby="range__widget"
                        data-bs-parent="#shop_range"
                      >
                        <div className="accordion-body">
                          <div className="price-ranger">
                            <div
                              id="slider-range"
                              className="ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all"
                            >
                              <div className="ui-slider-range ui-widget-header ui-corner-all" />
                              <span
                                className="ui-slider-handle ui-state-default ui-corner-all"
                                tabIndex={0}
                              />
                              <span
                                className="ui-slider-handle ui-state-default ui-corner-all"
                                tabIndex={0}
                              />
                            </div>
                            <div className="ranger-min-max-block">
                              <input
                                type="text"
                                readOnly
                                className="min"
                              />
                              <span>-</span>
                              <input
                                type="text"
                                readOnly
                                className="max"
                              />
                              <input type="submit" defaultValue="Filter" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="shop__widget xc-accordion">
                  <div className="accordion" id="shop_price">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="price__widget">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#price_widget_collapse"
                          aria-expanded="true"
                          aria-controls="price_widget_collapse"
                        >
                          Price
                        </button>
                      </h2>
                      <div
                        id="price_widget_collapse"
                        className="accordion-collapse collapse show"
                        aria-labelledby="price__widget"
                        data-bs-parent="#shop_price"
                      >
                        <div className="accordion-body">
                          <div className="shop__widget-list">
                            <div className="shop__widget-list-item">
                              <input type="checkbox" id="higher" />
                              <label htmlFor="higher">$10.00 - $49.00</label>
                            </div>
                            <div className="shop__widget-list-item">
                              <input
                                type="checkbox"
                                id="high"
                                defaultChecked
                              />
                              <label htmlFor="high">$50.00 - $99.00</label>
                            </div>
                            <div className="shop__widget-list-item">
                              <input type="checkbox" id="medium" />
                              <label htmlFor="medium">
                                $100.00 - $199.00
                              </label>
                            </div>
                            <div className="shop__widget-list-item">
                              <input type="checkbox" id="low" />
                              <label htmlFor="low">$200.00 +</label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-9 col-lg-8">
              <div className="xc-shop-main-wrapper">
                <div className="xc-shop-top mb-45 bg-white">
                  <div className="row align-items-center">
                    <div className="col-md-6">
                      <div className="xc-shop-top-left d-flex align-items-center ">
                        <div className="xc-shop-top-result">
                          <p>Showing 1–14 of 26 results</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="xc-shop-top-right d-sm-flex align-items-center justify-content-md-end">
                        <div className="xc-shop-top-select">
                          <select>
                            <option>Default Sorting</option>
                            <option>Low to Hight</option>
                            <option>High to Low</option>
                            <option>New Added</option>
                            <option>On Sale</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="xc-shop-items-wrapper xc-shop-item-primary">
                  <div className="row gutter-y-20">
                    <div className="col-xl-3 col-md-6 col-sm-6 infinite-item">
                      <div className="xc-product-two__item">
                        <div className="xc-product-two__img">
                          <img
                            src="/assets/img/products/f-product-1-1.png"
                            alt="product"
                          />
                        </div>
                        <div className="xc-product-two__ratting">
                          <i className="icon-star" />
                          <i className="icon-star" />
                          <i className="icon-star" />
                          <i className="icon-star" />
                          <i className="icon-star" />
                          (125)
                        </div>
                        <h3 className="xc-product-two__title">
                          <Link href="#">
                            Basics High-Speed HDMI Cable 18 Gbps, 4K/6
                          </Link>
                        </h3>
                        <h4 className="xc-product-two__price">$360</h4>
                        <div className="xc-product-two__btn">
                          <Link href="/product-details">
                            <i className="icon-eye" />
                          </Link>
                          <Link href="/cart">
                            <i className="icon-grocery-store" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-md-6 col-sm-6 infinite-item">
                      <div className="xc-product-two__item">
                        <span className="xc-product-two__deal">
                          BEST DEALS
                        </span>
                        <div className="xc-product-two__img">
                          <img
                            src="/assets/img/products/f-product-1-2.png"
                            alt="product"
                          />
                        </div>
                        <div className="xc-product-two__ratting">
                          <i className="icon-star" />
                          <i className="icon-star" />
                          <i className="icon-star" />
                          <i className="icon-star" />
                          <i className="icon-star" />
                          (125)
                        </div>
                        <h3 className="xc-product-two__title">
                          <Link href="#">
                            Basics High-Speed HDMI Cable 18 Gbps, 4K/6
                          </Link>
                        </h3>
                        <h4 className="xc-product-two__price">$360</h4>
                        <div className="xc-product-two__btn">
                          <Link href="/product-details">
                            <i className="icon-eye" />
                          </Link>
                          <Link href="/cart">
                            <i className="icon-grocery-store" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-md-6 col-sm-6 infinite-item">
                      <div className="xc-product-two__item">
                        <span className="xc-product-two__deal">
                          BEST DEALS
                        </span>
                        <div className="xc-product-two__img">
                          <img
                            src="/assets/img/products/f-product-1-3.png"
                            alt="product"
                          />
                        </div>
                        <div className="xc-product-two__ratting">
                          <i className="icon-star" />
                          <i className="icon-star" />
                          <i className="icon-star" />
                          <i className="icon-star" />
                          <i className="icon-star" />
                          (125)
                        </div>
                        <h3 className="xc-product-two__title">
                          <Link href="#">
                            Basics High-Speed HDMI Cable 18 Gbps, 4K/6
                          </Link>
                        </h3>
                        <h4 className="xc-product-two__price">$360</h4>
                        <div className="xc-product-two__btn">
                          <Link href="/product-details">
                            <i className="icon-eye" />
                          </Link>
                          <Link href="/cart">
                            <i className="icon-grocery-store" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-md-6 col-sm-6 infinite-item">
                      <div className="xc-product-two__item">
                        <span className="xc-product-two__deal">
                          BEST DEALS
                        </span>
                        <div className="xc-product-two__img">
                          <img
                            src="/assets/img/products/f-product-1-4.png"
                            alt="product"
                          />
                        </div>
                        <div className="xc-product-two__ratting">
                          <i className="icon-star" />
                          <i className="icon-star" />
                          <i className="icon-star" />
                          <i className="icon-star" />
                          <i className="icon-star" />
                          (125)
                        </div>
                        <h3 className="xc-product-two__title">
                          <Link href="#">
                            Basics High-Speed HDMI Cable 18 Gbps, 4K/6
                          </Link>
                        </h3>
                        <h4 className="xc-product-two__price">$360</h4>
                        <div className="xc-product-two__btn">
                          <Link href="/product-details">
                            <i className="icon-eye" />
                          </Link>
                          <Link href="/cart">
                            <i className="icon-grocery-store" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-md-6 col-sm-6 infinite-item">
                      <div className="xc-product-two__item">
                        <span className="xc-product-two__deal">
                          BEST DEALS
                        </span>
                        <div className="xc-product-two__img">
                          <img
                            src="/assets/img/products/f-product-1-5.png"
                            alt="product"
                          />
                        </div>
                        <div className="xc-product-two__ratting">
                          <i className="icon-star" />
                          <i className="icon-star" />
                          <i className="icon-star" />
                          <i className="icon-star" />
                          <i className="icon-star" />
                          (125)
                        </div>
                        <h3 className="xc-product-two__title">
                          <Link href="#">
                            Basics High-Speed HDMI Cable 18 Gbps, 4K/6
                          </Link>
                        </h3>
                        <h4 className="xc-product-two__price">$360</h4>
                        <div className="xc-product-two__btn">
                          <Link href="/product-details">
                            <i className="icon-eye" />
                          </Link>
                          <Link href="/cart">
                            <i className="icon-grocery-store" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-md-6 col-sm-6 infinite-item">
                      <div className="xc-product-two__item">
                        <div className="xc-product-two__img">
                          <img
                            src="/assets/img/products/f-product-1-6.png"
                            alt="product"
                          />
                        </div>
                        <div className="xc-product-two__ratting">
                          <i className="icon-star" />
                          <i className="icon-star" />
                          <i className="icon-star" />
                          <i className="icon-star" />
                          <i className="icon-star" />
                          (125)
                        </div>
                        <h3 className="xc-product-two__title">
                          <Link href="#">
                            Basics High-Speed HDMI Cable 18 Gbps, 4K/6
                          </Link>
                        </h3>
                        <h4 className="xc-product-two__price">$360</h4>
                        <div className="xc-product-two__btn">
                          <Link href="/product-details">
                            <i className="icon-eye" />
                          </Link>
                          <Link href="/cart">
                            <i className="icon-grocery-store" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-md-6 col-sm-6 infinite-item">
                      <div className="xc-product-two__item">
                        <span className="xc-product-two__deal">
                          BEST DEALS
                        </span>
                        <div className="xc-product-two__img">
                          <img
                            src="/assets/img/products/f-product-1-7.png"
                            alt="product"
                          />
                        </div>
                        <div className="xc-product-two__ratting">
                          <i className="icon-star" />
                          <i className="icon-star" />
                          <i className="icon-star" />
                          <i className="icon-star" />
                          <i className="icon-star" />
                          (125)
                        </div>
                        <h3 className="xc-product-two__title">
                          <Link href="#">
                            Basics High-Speed HDMI Cable 18 Gbps, 4K/6
                          </Link>
                        </h3>
                        <h4 className="xc-product-two__price">$360</h4>
                        <div className="xc-product-two__btn">
                          <Link href="/product-details">
                            <i className="icon-eye" />
                          </Link>
                          <Link href="/cart">
                            <i className="icon-grocery-store" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-md-6 col-sm-6 infinite-item">
                      <div className="xc-product-two__item">
                        <div className="xc-product-two__img">
                          <img
                            src="/assets/img/products/f-product-1-8.png"
                            alt="product"
                          />
                        </div>
                        <div className="xc-product-two__ratting">
                          <i className="icon-star" />
                          <i className="icon-star" />
                          <i className="icon-star" />
                          <i className="icon-star" />
                          <i className="icon-star" />
                          (125)
                        </div>
                        <h3 className="xc-product-two__title">
                          <Link href="#">
                            Basics High-Speed HDMI Cable 18 Gbps, 4K/6
                          </Link>
                        </h3>
                        <h4 className="xc-product-two__price">$360</h4>
                        <div className="xc-product-two__btn">
                          <Link href="/product-details">
                            <i className="icon-eye" />
                          </Link>
                          <Link href="/cart">
                            <i className="icon-grocery-store" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-md-6 col-sm-6 infinite-item">
                      <div className="xc-product-two__item">
                        <span className="xc-product-two__deal">
                          BEST DEALS
                        </span>
                        <div className="xc-product-two__img">
                          <img
                            src="/assets/img/products/f-product-1-9.png"
                            alt="product"
                          />
                        </div>
                        <div className="xc-product-two__ratting">
                          <i className="icon-star" />
                          <i className="icon-star" />
                          <i className="icon-star" />
                          <i className="icon-star" />
                          <i className="icon-star" />
                          (125)
                        </div>
                        <h3 className="xc-product-two__title">
                          <Link href="#">
                            Basics High-Speed HDMI Cable 18 Gbps, 4K/6
                          </Link>
                        </h3>
                        <h4 className="xc-product-two__price">$360</h4>
                        <div className="xc-product-two__btn">
                          <Link href="/product-details">
                            <i className="icon-eye" />
                          </Link>
                          <Link href="/cart">
                            <i className="icon-grocery-store" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-md-6 col-sm-6 infinite-item">
                      <div className="xc-product-two__item">
                        <span className="xc-product-two__deal">
                          BEST DEALS
                        </span>
                        <div className="xc-product-two__img">
                          <img
                            src="/assets/img/products/f-product-1-10.png"
                            alt="product"
                          />
                        </div>
                        <div className="xc-product-two__ratting">
                          <i className="icon-star" />
                          <i className="icon-star" />
                          <i className="icon-star" />
                          <i className="icon-star" />
                          <i className="icon-star" />
                          (125)
                        </div>
                        <h3 className="xc-product-two__title">
                          <Link href="#">
                            Basics High-Speed HDMI Cable 18 Gbps, 4K/6
                          </Link>
                        </h3>
                        <h4 className="xc-product-two__price">$360</h4>
                        <div className="xc-product-two__btn">
                          <Link href="/product-details">
                            <i className="icon-eye" />
                          </Link>
                          <Link href="/cart">
                            <i className="icon-grocery-store" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-md-6 col-sm-6 infinite-item">
                      <div className="xc-product-two__item">
                        <div className="xc-product-two__img">
                          <img
                            src="/assets/img/products/f-product-1-11.png"
                            alt="product"
                          />
                        </div>
                        <div className="xc-product-two__ratting">
                          <i className="icon-star" />
                          <i className="icon-star" />
                          <i className="icon-star" />
                          <i className="icon-star" />
                          <i className="icon-star" />
                          (125)
                        </div>
                        <h3 className="xc-product-two__title">
                          <Link href="#">
                            Basics High-Speed HDMI Cable 18 Gbps, 4K/6
                          </Link>
                        </h3>
                        <h4 className="xc-product-two__price">$360</h4>
                        <div className="xc-product-two__btn">
                          <Link href="/product-details">
                            <i className="icon-eye" />
                          </Link>
                          <Link href="/cart">
                            <i className="icon-grocery-store" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-md-6 col-sm-6 infinite-item">
                      <div className="xc-product-two__item">
                        <div className="xc-product-two__img">
                          <img
                            src="/assets/img/products/f-product-1-12.png"
                            alt="product"
                          />
                        </div>
                        <div className="xc-product-two__ratting">
                          <i className="icon-star" />
                          <i className="icon-star" />
                          <i className="icon-star" />
                          <i className="icon-star" />
                          <i className="icon-star" />
                          (125)
                        </div>
                        <h3 className="xc-product-two__title">
                          <Link href="#">
                            Basics High-Speed HDMI Cable 18 Gbps, 4K/6
                          </Link>
                        </h3>
                        <h4 className="xc-product-two__price">$360</h4>
                        <div className="xc-product-two__btn">
                          <Link href="/product-details">
                            <i className="icon-eye" />
                          </Link>
                          <Link href="/cart">
                            <i className="icon-grocery-store" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="xc-shop-pagination mt-20">
                  <div className="xc-pagination text-center">
                    <ul>
                      <li>
                        <Link href="/blog" className="prev page-numbers">
                          <i className="fa-solid fa-angle-left" />
                        </Link>
                      </li>
                      <li>
                        <Link className="current" href="/blog">
                          1
                        </Link>
                      </li>
                      <li>
                        <span>2</span>
                      </li>
                      <li>
                        <Link href="/blog">3</Link>
                      </li>
                      <li>
                        <Link href="/blog" className="next page-numbers">
                          <i className="fa-solid fa-angle-right" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* shop area end */}
    </>
  );
}
