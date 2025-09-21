import Link from "next/link";
import Header2 from "../components/Header2";

export default function ContactPage() {
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
                  <span>Contact</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* xc-breadcrumb area end */}
      <div className="xc-contact-one pt-80 pb-40">
        <div className="container">
          <div className="row gutter-y-30">
            <div className="col-md-4">
              <h3 className="xc-contact-one__title">Get in Touch</h3>
              <p className="xc-contact-one__info">
                Contact eTus Media Solutions for professional media equipment
                inquiries, technical support, or business partnerships.
                We&apos;re here to help you find the perfect equipment for your
                creative projects.
              </p>
              <div className="xc-contact-one__cta">
                <div className="xc-contact-one__icon">
                  <span>
                    <i className="icon-phone" />
                  </span>
                </div>
                <div className="xc-contact-one__ct">
                  <h4 className="xc-contact-one__head">Phone</h4>
                  <a href="tel:+252637002225">+(252) 637002225</a>
                </div>
              </div>
              <div className="xc-contact-one__cta">
                <div className="xc-contact-one__icon">
                  <span>
                    <i className="icon-email" />
                  </span>
                </div>
                <div className="xc-contact-one__ct">
                  <h4 className="xc-contact-one__head">Email</h4>
                  <a href="mailto:nfo@etus.com">nfo@etus.com</a>
                </div>
              </div>
              <div className="xc-contact-one__cta">
                <div className="xc-contact-one__icon">
                  <span>
                    <i className="icon-location" />
                  </span>
                </div>
                <div className="xc-contact-one__ct">
                  <h4 className="xc-contact-one__head">Address</h4>
                  <address>
                    Cimaratu Khayr Building
                    <br />
                    Hargeisa, Somaliland
                  </address>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="xc-contact-one__map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7298.274922354233!2d90.34987890702513!3d23.849252062908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1662780394373!5m2!1sen!2sbd"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="xc-contact-main pb-80">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="xc-contact-main__title">Contact us</h3>
              <p className="xc-contact-main__info">
                Your email address will not be published. Required fields are
                marked *
              </p>
            </div>
            <form action="#" className="xc-contact-main__form">
              <div className="row gutter-y-30">
                <div className="col-lg-6">
                  <div className="xc-form__input">
                    <input type="text" placeholder="Your Name *" required />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="xc-form__input">
                    <input type="email" placeholder="Your Email *" required />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="xc-form__input">
                    <input type="text" placeholder="Subject *" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="xc-form__input">
                    <input type="text" placeholder="Phone" />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="xc-form__textarea">
                    <textarea name="message" placeholder="Message *" required />
                    <div className="xc-form__textarea-check mt-20 mb-25">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" />
                        <label className="form-check-label">
                          Save my name, email in this brower for the next time I
                          comment
                        </label>
                      </div>
                    </div>
                    <button className="swiftcart-btn">Send message</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
