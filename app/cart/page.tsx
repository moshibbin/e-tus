import Link from "next/link";
import Header2 from "../components/Header2";

export default function CartPage() {
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
      <div className="xc-cart-page pt-80 pb-80">
        <div className="container">
          <form action="#">
            <div className="row gutter-y-30 gx-5">
              <div className="col-lg-8 col-xl-9">
                <div className="xc-cart-page__table">
                  <table className="table">
                    <thead>
                      <tr>
                        <th className="product-thumbnail">Images</th>
                        <th className="cart-product-name">Product</th>
                        <th className="product-price">Unit Price</th>
                        <th className="product-quantity">Quantity</th>
                        <th className="product-subtotal">Total</th>
                        <th className="product-remove">Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="product-thumbnail">
                          <Link href="/product-details">
                            <img src="/assets/img/cart/cart-1.png" alt="" />
                          </Link>
                        </td>
                        <td className="product-name">
                          <Link href="/product-details">
                            Level Bolt Smart Lock
                          </Link>
                        </td>
                        <td className="product-price">
                          <span className="amount">$130.00</span>
                        </td>
                        <td className="product-quantity">
                          <div className="xc-product-quantity mt-10 mb-10">
                            <span className="xc-cart-minus sub">
                              <i className="fas fa-minus" />
                            </span>
                            <input
                              className="xc-cart-input"
                              type="text"
                              defaultValue="1"
                            />
                            <span className="xc-cart-plus add">
                              <i className="fas fa-plus" />
                            </span>
                          </div>
                        </td>
                        <td className="product-subtotal">
                          <span className="amount">$130.00</span>
                        </td>
                        <td className="product-remove">
                          <button type="submit">
                            <i className="fa fa-times" />
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td className="product-thumbnail">
                          <Link href="/product-details">
                            <img src="/assets/img/cart/cart-2.png" alt="" />
                          </Link>
                        </td>
                        <td className="product-name">
                          <Link href="/product-details">
                            Level Bolt Smart Lock
                          </Link>
                        </td>
                        <td className="product-price">
                          <span className="amount">$130.00</span>
                        </td>
                        <td className="product-quantity">
                          <div className="xc-product-quantity mt-10 mb-10">
                            <span className="xc-cart-minus sub">
                              <i className="fas fa-minus" />
                            </span>
                            <input
                              className="xc-cart-input"
                              type="text"
                              defaultValue="1"
                            />
                            <span className="xc-cart-plus add">
                              <i className="fas fa-plus" />
                            </span>
                          </div>
                        </td>
                        <td className="product-subtotal">
                          <span className="amount">$130.00</span>
                        </td>
                        <td className="product-remove">
                          <button type="submit">
                            <i className="fa fa-times" />
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td className="product-thumbnail">
                          <Link href="/product-details">
                            <img src="/assets/img/cart/cart-3.png" alt="" />
                          </Link>
                        </td>
                        <td className="product-name">
                          <Link href="/product-details">
                            Level Bolt Smart Lock
                          </Link>
                        </td>
                        <td className="product-price">
                          <span className="amount">$130.00</span>
                        </td>
                        <td className="product-quantity">
                          <div className="xc-product-quantity mt-10 mb-10">
                            <span className="xc-cart-minus sub">
                              <i className="fas fa-minus" />
                            </span>
                            <input
                              className="xc-cart-input"
                              type="text"
                              defaultValue="1"
                            />
                            <span className="xc-cart-plus add">
                              <i className="fas fa-plus" />
                            </span>
                          </div>
                        </td>
                        <td className="product-subtotal">
                          <span className="amount">$130.00</span>
                        </td>
                        <td className="product-remove">
                          <button type="submit">
                            <i className="fa fa-times" />
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-xl-3">
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
                          <div className="cart-totails">
                            <h4>Subtotal</h4>
                            <h4>$4589</h4>
                          </div>
                          <p>
                            Wetters, as opposed to using Content here, content
                            here, making it look like readable English. Many
                            desktop
                          </p>
                          <Link className="cart-checkout-btn" href="/checkout">
                            Checkout
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
      </div>
    </>
  );
}
