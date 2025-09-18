import Link from "next/link";
import Header2 from "../components/Header2";

export default function FaqPage() {
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
                  <span>FAQ</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* xc-breadcrumb area end */}
      <div className="xc-faq-one pb-80 pt-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="xc-faq-one__left">
                <div className="xc-faq-one__search">
                  <form action="#">
                    <input type="text" placeholder="Search here" />
                    <button type="submit">
                      <i className="icon-magnifying-glass" />
                    </button>
                  </form>
                </div>
                <div className="xc-faq-one__form">
                  <h3 className="xc-faq-one__form__title">Ask a Question</h3>
                  <form action="#">
                    <input type="text" placeholder="Your Full Name" required />
                    <input type="email" placeholder="Email Address" required />
                    <textarea placeholder="Type Question" required />
                    <button className="swiftcart-btn">Send Request</button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="xc-faq-one__right">
                <div className="xc-faq-one__title mb-35">
                  <h3 className="xc-sec-heading__title">General Question</h3>
                </div>
                <div
                  className="xc-accordion-grp swiftcart-accordion swiftcart-accordion-active"
                  data-grp-name="swiftcart-accordion-one"
                >
                  <div className="xc-accordion active">
                    <div className="xc-accordion-title">
                      <h4 className="xc-accordion-question">
                        How buy online product?{" "}
                      </h4>
                      <span>
                        <i className="icon-arrow-right" />
                      </span>
                    </div>
                    <div className="xc-accordion-content">
                      <div className="xc-accordion-answer">
                        <p>
                          An ecommerce website is your digital storefront on the
                          internet.It facilitates the transaction between a
                          buyer and seller. It is the virtual space where you
                          showcase products, and online customers make
                          selections.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="xc-accordion">
                    <div className="xc-accordion-title">
                      <h4 className="xc-accordion-question">
                        How do you successfully e-commerce?
                      </h4>
                      <span>
                        <i className="icon-arrow-right" />
                      </span>
                    </div>
                    <div className="xc-accordion-content">
                      <div className="xc-accordion-answer">
                        <p>
                          An ecommerce website is your digital storefront on the
                          internet.It facilitates the transaction between a
                          buyer and seller. It is the virtual space where you
                          showcase products, and online customers make
                          selections.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="xc-accordion">
                    <div className="xc-accordion-title">
                      <h4 className="xc-accordion-question">
                        How do you Order Online?
                      </h4>
                      <span>
                        <i className="icon-arrow-right" />
                      </span>
                    </div>
                    <div className="xc-accordion-content">
                      <div className="xc-accordion-answer">
                        <p>
                          An ecommerce website is your digital storefront on the
                          internet.It facilitates the transaction between a
                          buyer and seller. It is the virtual space where you
                          showcase products, and online customers make
                          selections.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="xc-accordion">
                    <div className="xc-accordion-title">
                      <h4 className="xc-accordion-question">
                        What is e-commerce?
                      </h4>
                      <span>
                        <i className="icon-arrow-right" />
                      </span>
                    </div>
                    <div className="xc-accordion-content">
                      <div className="xc-accordion-answer">
                        <p>
                          An ecommerce website is your digital storefront on the
                          internet.It facilitates the transaction between a
                          buyer and seller. It is the virtual space where you
                          showcase products, and online customers make
                          selections.
                        </p>
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
