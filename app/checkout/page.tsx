import Link from "next/link";
import Header2 from "../components/Header2";

export default function CheckoutPage() {
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
                  <span>Shopping Cart</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* xc-breadcrumb area end */}
      {/* checkout-area start */}
      <section className="checkout-area pt-80 pb-85">
        <div className="container">
          <form action="#">
            <div className="row">
              <div className="col-lg-8">
                <div className="checkbox-form">
                  <h3 className="mb-30">Billing Details</h3>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <input type="text" placeholder="First Name" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <input type="text" placeholder="Last Name" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <input type="text" placeholder="Example LTD." />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <input type="text" placeholder="Street address" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <input type="text" placeholder="Town / City" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <input type="email" placeholder="Town / City" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <input type="text" placeholder="State / County" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <input type="text" placeholder="Postcode / Zip" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <input type="email" placeholder="Your Email" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <input type="text" placeholder="Phone number" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="checkout-form-list">
                        <textarea placeholder="Message" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="shop_cart_widget xc-accordion">
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
                          Shopping Cart
                        </button>
                      </h2>
                      <div
                        id="size_widget_collapse"
                        className="accordion-collapse collapse show"
                        aria-labelledby="size__widget"
                        data-bs-parent="#shop_size"
                      >
                        <div className="accordion-body">
                          <div className="cart-coupon-code">
                            <input type="text" placeholder="Coupon Code" />
                            <button>Apply</button>
                          </div>
                          <div className="cart-subtitle">
                            <h4>Subtotal</h4>
                            <h4>$4589</h4>
                          </div>
                          <div className="cart-checkout">
                            <h4>Shipping</h4>
                            <div className="shop__widget-list">
                              <div className="shop__widget-list-item-2">
                                <input type="radio" name="pay" id="c-rate" />
                                <label htmlFor="c-rate">Flat rate</label>
                              </div>
                              <div className="shop__widget-list-item-2 has-orange">
                                <input type="radio" name="pay" id="c-Free" />
                                <label htmlFor="c-Free">Free shipping</label>
                              </div>
                              <div className="shop__widget-list-item-2 has-green">
                                <input type="radio" name="pay" id="c-pickup" />
                                <label htmlFor="c-pickup">Local pickup</label>
                              </div>
                            </div>
                          </div>
                          <div className="cart-checkout">
                            <h4>Payment Method</h4>
                            <div className="shop__widget-list">
                              <div className="shop__widget-list-item-2">
                                <input type="radio" name="opt" id="p-rate" />
                                <label htmlFor="p-rate">
                                  Direct bank transfer
                                </label>
                              </div>
                              <div className="shop__widget-list-item-2 has-orange">
                                <input
                                  type="radio"
                                  name="opt"
                                  id="c-shipping"
                                />
                                <label htmlFor="c-shipping">
                                  Cash on delivery
                                </label>
                              </div>
                              <div className="shop__widget-list-item-2 has-green">
                                <input type="radio" name="opt" id="p-pickup" />
                                <label htmlFor="p-pickup">PayPal</label>
                              </div>
                            </div>
                          </div>
                          <div className="cart-totails">
                            <h4>total</h4>
                            <h4>$4589</h4>
                          </div>
                          <p>
                            Wetters, as opposed to using Content here, content
                            here, making it look like readable English. Many
                            desktop
                          </p>
                          <Link className="cart-checkout-btn" href="#">
                            Place Order
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
      {/* checkout-area end */}
    </>
  );
}
