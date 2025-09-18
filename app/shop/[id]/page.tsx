import Link from "next/link";
import { products } from "../../data/products";
import Header2 from "../../components/Header2";

export default function ProductDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const product = products.find((p) => p.id === parseInt(params.id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <Header2 />
      {/* xc-breadcrumb area start */}
      <section className="product__details-area pt-80 pb-80">
        <div className="container">
          <div className="row gutter-y-30">
            <div className="col-xl-6 col-lg-6">
              <div className="product__details-thumb-tab">
                <div className="product__details-thumb-content w-img">
                  <div className="tab-content" id="nav-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="nav-one"
                      role="tabpanel"
                      aria-labelledby="nav-one-tab"
                    >
                      <img
                        src="/assets/img/product-details/product-details-1.png"
                        alt=""
                      />
                    </div>
                    <div
                      className="tab-pane fade"
                      id="nav-two"
                      role="tabpanel"
                      aria-labelledby="nav-two-tab"
                    >
                      <img
                        src="/assets/img/product-details/product-details-2.png"
                        alt=""
                      />
                    </div>
                    <div
                      className="tab-pane fade"
                      id="nav-three"
                      role="tabpanel"
                      aria-labelledby="nav-three-tab"
                    >
                      <img
                        src="/assets/img/product-details/product-details-3.png"
                        alt=""
                      />
                    </div>
                    <div
                      className="tab-pane fade"
                      id="nav-four"
                      role="tabpanel"
                      aria-labelledby="nav-four-tab"
                    >
                      <img
                        src="/assets/img/product-details/product-details-4.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="product__details-thumb-nav xc-tab">
                  <nav>
                    <div
                      className="nav nav-tabs justify-content-sm-between"
                      id="nav-tab"
                      role="tablist"
                    >
                      <button
                        className="nav-link active"
                        id="nav-one-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-one"
                        type="button"
                        role="tab"
                        aria-controls="nav-one"
                        aria-selected="true"
                      >
                        <img
                          src="/assets/img/product-details/product-details-sm-1.png"
                          alt=""
                        />
                      </button>
                      <button
                        className="nav-link"
                        id="nav-two-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-two"
                        type="button"
                        role="tab"
                        aria-controls="nav-two"
                        aria-selected="false"
                      >
                        <img
                          src="/assets/img/product-details/product-details-sm-2.png"
                          alt=""
                        />
                      </button>
                      <button
                        className="nav-link"
                        id="nav-three-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-three"
                        type="button"
                        role="tab"
                        aria-controls="nav-three"
                        aria-selected="false"
                      >
                        <img
                          src="/assets/img/product-details/product-details-sm-3.png"
                          alt=""
                        />
                      </button>
                      <button
                        className="nav-link"
                        id="nav-four-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-four"
                        type="button"
                        role="tab"
                        aria-controls="nav-four"
                        aria-selected="false"
                      >
                        <img
                          src="/assets/img/product-details/product-details-sm-4.png"
                          alt=""
                        />
                      </button>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="product__details-wrapper">
                <div className="product__details-stock">
                  <span>18 In Stock</span>
                </div>
                <h3 className="product__details-title">
                  Apple Watch Series 7{" "}
                </h3>

                <div className="product__details-rating d-flex align-items-center">
                  <div className="product__rating product__rating-2 d-flex">
                    <span>
                      <i className="icon-star"></i>
                    </span>
                    <span>
                      <i className="icon-star"></i>
                    </span>
                    <span>
                      <i className="icon-star"></i>
                    </span>
                    <span>
                      <i className="icon-star"></i>
                    </span>
                    <span>
                      <i className="icon-star"></i>
                    </span>
                  </div>
                  <div className="product__details-rating-count">
                    <span>(4 customer review)</span>
                  </div>
                </div>

                <p>
                  Shop Harry.com for every day low prices. Free shipping on
                  orders $35+ or Pickup In-store and get
                </p>

                <div className="product__details-price">
                  <span className="product__details-ammount old-ammount">
                    $82.00
                  </span>
                  <span className="product__details-ammount new-ammount">
                    $54.00
                  </span>
                  <span className="product__details-offer">-12%</span>
                </div>

                <div className="product__details-quantity">
                  <div className="xc-product-quantity mt-10 mb-10">
                    <span className="xc-cart-minus sub">
                      <i className="fas fa-minus"></i>
                    </span>
                    <input className="xc-cart-input" type="text" value="1" />
                    <span className="xc-cart-plus add">
                      <i className="fas fa-plus"></i>
                    </span>
                  </div>
                </div>

                <div className="product__details-action d-flex flex-wrap align-items-center">
                  <a
                    href="cart.html"
                    className="product-add-cart-btn swiftcart-btn"
                  >
                    Add to Cart
                  </a>
                  <button type="button" className="product-action-btn">
                    <i className="icon-love"></i>
                  </button>
                  <button type="button" className="product-action-btn">
                    <i className="icon-eye"></i>
                  </button>
                </div>
                <div className="product__details-sku product__details-more">
                  <p>SKU:</p>
                  <span>29045-SB-8</span>
                </div>
                <div className="product__details-categories product__details-more">
                  <p>Categories:</p>
                  <span>
                    <a href="#">Bag,</a>
                  </span>
                  <span>
                    <a href="#">Ladies Bag,</a>
                  </span>
                  <span>
                    <a href="#">Handbags</a>
                  </span>
                </div>
                <div className="product__details-tags">
                  <span>Tags:</span>
                  <a href="#">Bag</a>
                  <a href="#">Woman</a>
                  <a href="#">fashion</a>
                </div>
                <div className="product__details-share">
                  <span>Share:</span>

                  <a href="#">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="product__details-tab-area pb-70">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="product__details-tab-nav">
                <nav>
                  <div
                    className="product__details-tab-nav-inner nav xc-tab-menu d-flex flex-sm-nowrap flex-wrap"
                    id="nav-tab-info"
                    role="tablist"
                  >
                    <button
                      className="nav-link active"
                      id="nav-desc-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-desc"
                      type="button"
                      role="tab"
                      aria-controls="nav-desc"
                      aria-selected="true"
                    >
                      Description
                    </button>

                    <button
                      className="nav-link"
                      id="nav-additional-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-additional"
                      type="button"
                      role="tab"
                      aria-controls="nav-additional"
                      aria-selected="false"
                    >
                      Additional information
                    </button>

                    <button
                      className="nav-link"
                      id="nav-review-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-review"
                      type="button"
                      role="tab"
                      aria-controls="nav-review"
                      aria-selected="false"
                    >
                      Reviews (02)
                    </button>
                    <span
                      id="marker"
                      className="xc-tab-line d-none d-sm-inline-block"
                    ></span>
                  </div>
                </nav>
              </div>
              <div className="product__details-tab-content">
                <div className="tab-content" id="nav-tabContent-info">
                  <div
                    className="tab-pane fade show active"
                    id="nav-desc"
                    role="tabpanel"
                    aria-labelledby="nav-desc-tab"
                  >
                    <div className="product__details-description product__details-review-inner mt-60">
                      <div className="product__details-description-content">
                        <p className="mb-0">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Lorem ipsum dolor sit amet,
                          consectetur adipisicing elit, sed do eiusmod tempor
                          incididunt ut labore et dolore magna aliqua. Ut enim
                          ad minim veniam, Quis nostrud exercitation ullamco
                          laboris nisi ut aliquip ex ea commodo consequat. Duis
                          aute irure dolor in reprehenderit in voluptate velit
                          esse cillum dolore eu fugiat nulla pariatur.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-additional"
                    role="tabpanel"
                    aria-labelledby="nav-additional-tab"
                  >
                    <div className="product__details-additional">
                      <div className="product__details-additional-inner">
                        <table>
                          <tbody>
                            <tr>
                              <th scope="row">Brand:</th>
                              <td>Apple</td>
                            </tr>
                            <tr>
                              <th scope="row">Style:</th>
                              <td>GPS</td>
                            </tr>
                            <tr>
                              <th scope="row">Screen Size:</th>
                              <td>41 Millimeters</td>
                            </tr>
                            <tr>
                              <th scope="row">Color:</th>
                              <td>
                                Green Aluminum Case with Clover Sport Band
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">Compatible Devices:</th>
                              <td>Smarxchone</td>
                            </tr>
                            <tr>
                              <th scope="row">Special Feature:</th>
                              <td>
                                Activity Tracker, Heart Rate Monitor, Sleep
                                Monitor, Blood Oxygen
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">Capacity:</th>
                              <td>32GB</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-review"
                    role="tabpanel"
                    aria-labelledby="nav-review-tab"
                  >
                    <div className="product__details-review pt-60">
                      <div className="product__details-review-inner">
                        <div className="product-rating">
                          <h4 className="product-rating-title">
                            Ratings and reviews
                          </h4>
                          <div className="product-rating-wrapper d-flex flex-wrap align-items-center mb-50">
                            <div className="product-rating-number mr-40">
                              <h4 className="product-rating-number-title">
                                4.5
                              </h4>
                              <div className="product-rating-star">
                                <span>
                                  <i className="icon-star"></i>
                                </span>
                                <span>
                                  <i className="icon-star"></i>
                                </span>
                                <span>
                                  <i className="icon-star"></i>
                                </span>
                                <span>
                                  <i className="icon-star"></i>
                                </span>
                                <span>
                                  <i className="icon-star"></i>
                                </span>
                              </div>
                            </div>
                            <div className="product-rating-bar-wrapper">
                              <div className="product-rating-bar-item d-flex align-items-center">
                                <div className="product-rating-bar-text">
                                  <span>5</span>
                                </div>
                                <div className="product-rating-bar">
                                  <div
                                    className="single-progress"
                                    data-width="70%"
                                  ></div>
                                </div>
                              </div>
                              <div className="product-rating-bar-item d-flex align-items-center">
                                <div className="product-rating-bar-text">
                                  <span>4</span>
                                </div>
                                <div className="product-rating-bar">
                                  <div
                                    className="single-progress"
                                    data-width="60%"
                                  ></div>
                                </div>
                              </div>
                              <div className="product-rating-bar-item d-flex align-items-center">
                                <div className="product-rating-bar-text">
                                  <span>3</span>
                                </div>
                                <div className="product-rating-bar">
                                  <div
                                    className="single-progress"
                                    data-width="40%"
                                  ></div>
                                </div>
                              </div>
                              <div className="product-rating-bar-item d-flex align-items-center">
                                <div className="product-rating-bar-text">
                                  <span>2</span>
                                </div>
                                <div className="product-rating-bar">
                                  <div
                                    className="single-progress"
                                    data-width="10%"
                                  ></div>
                                </div>
                              </div>
                              <div className="product-rating-bar-item d-flex align-items-center">
                                <div className="product-rating-bar-text">
                                  <span>1</span>
                                </div>
                                <div className="product-rating-bar">
                                  <div
                                    className="single-progress"
                                    data-width="25%"
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="product__details-review-list mb-65">
                          <div className="product-review-item">
                            <div className="product-review-avater d-flex align-items-center">
                              <div className="product-review-avater-thumb">
                                <img
                                  src="/assets/img/blog/comment-avata-1.jpg"
                                  alt=""
                                />
                              </div>
                              <div className="product-review-avater-info">
                                <h4 className="product-review-avater-title">
                                  Michelle Hunter
                                </h4>
                              </div>
                            </div>
                            <div className="product-review-rating d-flex align-items-center">
                              <div className="product-review-rating-wrapper d-flex">
                                <span>
                                  <i className="icon-star"></i>
                                </span>
                                <span>
                                  <i className="icon-star"></i>
                                </span>
                                <span>
                                  <i className="icon-star"></i>
                                </span>
                                <span>
                                  <i className="icon-star"></i>
                                </span>
                                <span>
                                  <i className="icon-star"></i>
                                </span>
                              </div>
                              <div className="product-review-rating-date">
                                <span>August 8, 2022</span>
                              </div>
                            </div>
                            <p>
                              I’m upgrading from a series 1, so it is a
                              completely different watch. I am very satisfied
                              with this purchase. Most of the heart monitoring
                              functions only work with people.
                            </p>
                          </div>
                          <div className="product-review-item">
                            <div className="product-review-avater d-flex align-items-center">
                              <div className="product-review-avater-thumb">
                                <img
                                  src="/assets/img/blog/comment-avata-2.jpg"
                                  alt=""
                                />
                              </div>
                              <div className="product-review-avater-info">
                                <h4 className="product-review-avater-title">
                                  Sean Hathaway
                                </h4>
                              </div>
                            </div>
                            <div className="product-review-rating d-flex align-items-center">
                              <div className="product-review-rating-wrapper d-flex">
                                <span>
                                  <i className="icon-star"></i>
                                </span>
                                <span>
                                  <i className="icon-star"></i>
                                </span>
                                <span>
                                  <i className="icon-star"></i>
                                </span>
                                <span>
                                  <i className="icon-star"></i>
                                </span>
                                <span>
                                  <i className="icon-star"></i>
                                </span>
                              </div>
                              <div className="product-review-rating-date">
                                <span>August 10, 2022</span>
                              </div>
                            </div>
                            <p>
                              I’m upgrading from a series 1, so it is a
                              completely different watch. I am very satisfied
                              with this purchase. Most of the heart monitoring
                              functions only work with people.
                            </p>
                          </div>
                        </div>
                        <div className="product-review-form">
                          <h3 className="product-review-form-title">
                            Add a review
                          </h3>
                          <p>
                            Your email address will not be published. Required
                            fields are marked *
                          </p>
                          <form action="#">
                            <div className="product-review-form-rating  mb-25">
                              <h3 className="rate-title">Rate this product:</h3>
                              <div className="product-review-rating-wrapper d-flex">
                                <span>
                                  <i className="icon-star"></i>
                                </span>
                                <span>
                                  <i className="icon-star"></i>
                                </span>
                                <span>
                                  <i className="icon-star"></i>
                                </span>
                                <span>
                                  <i className="icon-star"></i>
                                </span>
                                <span>
                                  <i className="icon-star"></i>
                                </span>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-lg-12">
                                <div className="product-review-input is-textarea">
                                  <textarea placeholder="Your Review Here..."></textarea>
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="product-review-input">
                                  <input type="text" placeholder="Name*" />
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="product-review-input">
                                  <input type="email" placeholder="Email*" />
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="product-review-agree d-flex align-items-start mb-25">
                                  <input type="checkbox" id="p-agree" />
                                  <label>
                                    Save my name, email, and website in this
                                    browser for the next time I comment
                                  </label>
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="product-review-btn">
                                  <button
                                    className="swiftcart-btn"
                                    type="submit"
                                  >
                                    Submit Review
                                  </button>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="xc-related-product pb-80">
        <div className="container">
          <h3 className="xc-section-title mb-30">Related products</h3>
          <div className="row gutter-y-30">
            <div className="col-xl-3 col-md-6">
              <div className="xc-product-eight__item">
                <div className="xc-product-eight__img">
                  <img src="/assets/img/products/product-fas-1.png" alt="fas" />
                  <span className="xc-product-eight__offer">30% off</span>
                  <div className="xc-product-eight__icons">
                    <button className="xc-product-eight__action">
                      <i className="icon-love"></i>
                      <span className="xc-product-eight__tooltip">
                        Add To Wishlist
                      </span>
                    </button>
                    <button className="xc-product-eight__action">
                      <i className="icon-magnifying-glass"></i>
                      <span className="xc-product-eight__tooltip">
                        Quick view
                      </span>
                    </button>
                    <button className="xc-product-eight__action">
                      <i className="icon-shopping-cart"></i>
                      <span className="xc-product-eight__tooltip">
                        Add To Cart
                      </span>
                    </button>
                  </div>
                </div>
                <div className="xc-product-eight__content">
                  <div className="xc-product-eight__ratting">
                    <i className="icon-star"></i>
                    <i className="icon-star"></i>
                    <i className="icon-star"></i>
                    <i className="icon-star"></i>
                    <i className="icon-star"></i>
                    (25 Reviews)
                  </div>
                  <h3 className="xc-product-eight__title">
                    <a href="product-details.html">women Billie Eilish n21</a>
                  </h3>
                  <h5 className="xc-product-eight__price">
                    <del>$489</del> $289
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="xc-product-eight__item">
                <div className="xc-product-eight__img">
                  <img src="/assets/img/products/product-fas-2.png" alt="fas" />
                  <span className="xc-product-eight__offer">30% off</span>
                  <div className="xc-product-eight__icons">
                    <button className="xc-product-eight__action">
                      <i className="icon-love"></i>
                      <span className="xc-product-eight__tooltip">
                        Add To Wishlist
                      </span>
                    </button>
                    <button className="xc-product-eight__action">
                      <i className="icon-magnifying-glass"></i>
                      <span className="xc-product-eight__tooltip">
                        Quick view
                      </span>
                    </button>
                    <button className="xc-product-eight__action">
                      <i className="icon-shopping-cart"></i>
                      <span className="xc-product-eight__tooltip">
                        Add To Cart
                      </span>
                    </button>
                  </div>
                </div>
                <div className="xc-product-eight__content">
                  <div className="xc-product-eight__ratting">
                    <i className="icon-star"></i>
                    <i className="icon-star"></i>
                    <i className="icon-star"></i>
                    <i className="icon-star"></i>
                    <i className="icon-star"></i>
                    (25 Reviews)
                  </div>
                  <h3 className="xc-product-eight__title">
                    <a href="product-details.html">women Billie Eilish n21</a>
                  </h3>
                  <h5 className="xc-product-eight__price">
                    <del>$489</del> $289
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="xc-product-eight__item">
                <div className="xc-product-eight__img">
                  <img src="/assets/img/products/product-fas-3.png" alt="fas" />
                  <span className="xc-product-eight__offer">30% off</span>
                  <div className="xc-product-eight__icons">
                    <button className="xc-product-eight__action">
                      <i className="icon-love"></i>
                      <span className="xc-product-eight__tooltip">
                        Add To Wishlist
                      </span>
                    </button>
                    <button className="xc-product-eight__action">
                      <i className="icon-magnifying-glass"></i>
                      <span className="xc-product-eight__tooltip">
                        Quick view
                      </span>
                    </button>
                    <button className="xc-product-eight__action">
                      <i className="icon-shopping-cart"></i>
                      <span className="xc-product-eight__tooltip">
                        Add To Cart
                      </span>
                    </button>
                  </div>
                </div>
                <div className="xc-product-eight__content">
                  <div className="xc-product-eight__ratting">
                    <i className="icon-star"></i>
                    <i className="icon-star"></i>
                    <i className="icon-star"></i>
                    <i className="icon-star"></i>
                    <i className="icon-star"></i>
                    (25 Reviews)
                  </div>
                  <h3 className="xc-product-eight__title">
                    <a href="product-details.html">women Billie Eilish n21</a>
                  </h3>
                  <h5 className="xc-product-eight__price">
                    <del>$489</del> $289
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="xc-product-eight__item">
                <div className="xc-product-eight__img">
                  <img src="/assets/img/products/product-fas-4.png" alt="fas" />
                  <span className="xc-product-eight__offer">30% off</span>
                  <div className="xc-product-eight__icons">
                    <button className="xc-product-eight__action">
                      <i className="icon-love"></i>
                      <span className="xc-product-eight__tooltip">
                        Add To Wishlist
                      </span>
                    </button>
                    <button className="xc-product-eight__action">
                      <i className="icon-magnifying-glass"></i>
                      <span className="xc-product-eight__tooltip">
                        Quick view
                      </span>
                    </button>
                    <button className="xc-product-eight__action">
                      <i className="icon-shopping-cart"></i>
                      <span className="xc-product-eight__tooltip">
                        Add To Cart
                      </span>
                    </button>
                  </div>
                </div>
                <div className="xc-product-eight__content">
                  <div className="xc-product-eight__ratting">
                    <i className="icon-star"></i>
                    <i className="icon-star"></i>
                    <i className="icon-star"></i>
                    <i className="icon-star"></i>
                    <i className="icon-star"></i>
                    (25 Reviews)
                  </div>
                  <h3 className="xc-product-eight__title">
                    <a href="product-details.html">women Billie Eilish n21</a>
                  </h3>
                  <h5 className="xc-product-eight__price">
                    <del>$489</del> $289
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
