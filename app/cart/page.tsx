"use client";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useCart } from "../context/cart";

const Header2 = dynamic(() => import("../components/Header2"), { ssr: false });

function CartPageContent() {
  const { items, removeFromCart, getCartTotal, updateCartItemQuantity } =
    useCart();

  const updateQuantity = (productId: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
    } else {
      updateCartItemQuantity(productId, newQuantity);
    }
  };

  if (items.length === 0) {
    return (
      <>
        <Header2 />
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
        <div className="xc-cart-page pt-80 pb-80">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="text-center py-5">
                  <h2>Your cart is empty</h2>
                  <p className="mb-4">
                    Add some products to your cart to get started.
                  </p>
                  <Link href="/shop" className="btn btn-primary">
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Header2 />
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

      <div className="xc-cart-page pt-80 pb-80">
        <div className="container">
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
                    {items.map((item: any) => (
                      <tr key={item.id}>
                        <td className="product-thumbnail">
                          <Link href={`/shop/${item.id}`}>
                            <img src={item.image} alt={item.name} />
                          </Link>
                        </td>
                        <td className="product-name">
                          <Link href={`/shop/${item.id}`}>{item.name}</Link>
                        </td>
                        <td className="product-price">
                          <span className="amount">${item.price}</span>
                        </td>
                        <td className="product-quantity">
                          <div className="xc-product-quantity mt-10 mb-10">
                            <button
                              className="xc-cart-minus sub"
                              type="button"
                              onClick={() =>
                                updateQuantity(item.id, item.quantity - 1)
                              }
                            >
                              <i className="fas fa-minus" />
                            </button>
                            <input
                              className="xc-cart-input"
                              type="number"
                              value={item.quantity}
                              onChange={(e) =>
                                updateQuantity(
                                  item.id,
                                  parseInt(e.target.value) || 0
                                )
                              }
                            />
                            <button
                              className="xc-cart-plus add"
                              type="button"
                              onClick={() =>
                                updateQuantity(item.id, item.quantity + 1)
                              }
                            >
                              <i className="fas fa-plus" />
                            </button>
                          </div>
                        </td>
                        <td className="product-subtotal">
                          <span className="amount">
                            ${(item.price * item.quantity).toFixed(2)}
                          </span>
                        </td>
                        <td className="product-remove">
                          <button
                            type="button"
                            onClick={() => removeFromCart(item.id)}
                          >
                            <i className="fa fa-times" />
                          </button>
                        </td>
                      </tr>
                    ))}
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
                        <div className="cart-subtitle d-flex justify-content-between">
                          <h4>Subtotal</h4>
                          <h4>${getCartTotal().toFixed(2)}</h4>
                        </div>
                        <div className="cart-totails d-flex justify-content-between">
                          <h4>Total</h4>
                          <h4>
                            $
                            {(
                              getCartTotal() + (getCartTotal() > 100 ? 0 : 10)
                            ).toFixed(2)}
                          </h4>
                        </div>
                        <p>
                          Free shipping on orders. Secure checkout and fast
                          delivery. Thank you for shopping with e-tus!
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
        </div>
      </div>
    </>
  );
}

export default function CartPage() {
  return <CartPageContent />;
}
