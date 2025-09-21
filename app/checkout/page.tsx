"use client";
import { useState } from "react";
import Link from "next/link";
import Header2 from "../components/Header2";
import { useCart } from "../context/cart";

export default function CheckoutPage() {
  const { items, getCartTotal } = useCart();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    address: "",
    city: "",
    email: "",
    state: "",
    postcode: "",
    phone: "",
    message: "",
    paymentMethod: "cod",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      paymentMethod: e.target.id,
    }));
  };

  const formatOrderForWhatsApp = () => {
    const {
      firstName,
      lastName,
      company,
      address,
      city,
      email,
      state,
      postcode,
      phone,
      message,
      paymentMethod,
    } = formData;

    const customerInfo = `
👤 *Customer Information*
Name: ${firstName} ${lastName}
${company ? `Company: ${company}` : ""}
Email: ${email}
Phone: ${phone}
Address: ${address}, ${city}, ${state} ${postcode}

💬 Message: ${message || "No additional message"}
    `.trim();

    const orderDetails = items
      .map(
        (item, index) =>
          `${index + 1}. ${item.name}
   Qty: ${item.quantity}
   Price: $${item.price}
   Total: $${(item.price * item.quantity).toFixed(2)}`
      )
      .join("\n");

    const paymentMethods = {
      "c-shipping": "Cash on Delivery",
      "p-rate": "Direct Bank Transfer",
      "p-pickup": "PayPal",
    };

    const orderSummary = `
🛒 *Order Summary*
${orderDetails}

Subtotal: $${getCartTotal().toFixed(2)}
${getCartTotal() <= 100 ? "Shipping: $10.00" : "Shipping: Free"}
Total: $${(getCartTotal() + (getCartTotal() > 100 ? 0 : 10)).toFixed(2)}

💳 Payment Method: ${
      paymentMethods[paymentMethod as keyof typeof paymentMethods] ||
      "Cash on Delivery"
    }
    `.trim();

    return `*🛍️ NEW ORDER - eTus Camera Store*\n\n${customerInfo}\n\n${orderSummary}`;
  };

  const sendToWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phone
    ) {
      alert("Please fill in all required fields (Name, Email, Phone)");
      return;
    }

    setIsSubmitting(true);

    try {
      const orderMessage = encodeURIComponent(formatOrderForWhatsApp());
      const phoneNumber = "252637002225"; // eTus business number
      const whatsappURL = `https://wa.me/${phoneNumber}?text=${orderMessage}`;

      // Open WhatsApp
      window.open(whatsappURL, "_blank");

      // Show success message
      alert(
        "Order sent to WhatsApp successfully! Please complete your order by sending the message."
      );
    } catch (error) {
      console.error("Error sending to WhatsApp:", error);
      alert("Error sending order to WhatsApp. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (items.length === 0) {
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
                    <span>Checkout</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* xc-breadcrumb area end */}
        <div className="xc-cart-page pt-80 pb-80">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="text-center py-5">
                  <h2>Your cart is empty</h2>
                  <p className="mb-4">
                    Add some products to your cart before checkout.
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
                  <span>Checkout</span>
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
          <form onSubmit={sendToWhatsApp}>
            <div className="row">
              <div className="col-lg-8">
                <div className="checkbox-form">
                  <h3 className="mb-30">Billing Details</h3>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <input
                          type="text"
                          name="firstName"
                          placeholder="First Name *"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <input
                          type="text"
                          name="lastName"
                          placeholder="Last Name *"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <input
                          type="text"
                          name="company"
                          placeholder="Company (Optional)"
                          value={formData.company}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <input
                          type="text"
                          name="address"
                          placeholder="Street address *"
                          value={formData.address}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <input
                          type="text"
                          name="city"
                          placeholder="Town / City *"
                          value={formData.city}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <input
                          type="text"
                          name="state"
                          placeholder="State / County *"
                          value={formData.state}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <input
                          type="text"
                          name="postcode"
                          placeholder="Postcode / Zip *"
                          value={formData.postcode}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <input
                          type="email"
                          name="email"
                          placeholder="Your Email *"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <input
                          type="text"
                          name="phone"
                          placeholder="Phone number *"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="checkout-form-list">
                        <textarea
                          name="message"
                          placeholder="Additional Message (Optional)"
                          value={formData.message}
                          onChange={handleInputChange}
                        />
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
                          {/* Cart Items Summary */}
                          {items.map((item: any) => (
                            <div
                              key={item.id}
                              className="cart-item-summary mb-2"
                            >
                              <div className="d-flex justify-content-between">
                                <span>{item.name}</span>
                                <span>
                                  ${(item.price * item.quantity).toFixed(2)}
                                </span>
                              </div>
                              <small className="text-muted">
                                Qty: {item.quantity}
                              </small>
                            </div>
                          ))}

                          <div className="cart-subtitle">
                            <h4>Subtotal</h4>
                            <h4>${getCartTotal().toFixed(2)}</h4>
                          </div>

                          <div className="cart-totails">
                            <h4>Total</h4>
                            <h4>
                              $
                              {(
                                getCartTotal() + (getCartTotal() > 100 ? 0 : 10)
                              ).toFixed(2)}
                            </h4>
                          </div>
                          <p>
                            Your order will be sent to our WhatsApp business
                            number for processing. Please ensure all information
                            is correct before submitting.
                          </p>
                          <button
                            type="submit"
                            className="cart-checkout-btn"
                            disabled={isSubmitting}
                            style={{
                              backgroundColor: "#25D366",
                              borderColor: "#25D366",
                              display: "flex",
                              alignItems: "center",
                              gap: "8px",
                            }}
                          >
                            {isSubmitting ? (
                              <>
                                <i
                                  className="fas fa-spinner fa-spin"
                                  style={{ marginLeft: "4rem" }}
                                ></i>
                                Sending to WhatsApp...
                              </>
                            ) : (
                              <>
                                <i
                                  className="fab fa-whatsapp"
                                  style={{ marginLeft: "4rem" }}
                                ></i>
                                Send Order via WhatsApp
                              </>
                            )}
                          </button>
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
