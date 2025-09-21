import Link from "next/link";

const FeaturedProducts = () => {
  return (
    <div className="xc-product-six pb-80">
      <div className="container">
        <div className="xc-sec-heading xc-sec-heading-two xc-has-btn">
          <div>
            <span className="xc-sec-heading__subtitle has-before">
              This Month
            </span>
            <h3 className="xc-sec-heading__title">Featured Product</h3>
          </div>
          <div className="xc-sec-heading__btn">
            <Link href="/shop" className="xc-sec-heading-btn">
              show all
            </Link>
          </div>
        </div>
        <div className="row gutter-y-20">
          <div className="col-md-6 col-lg-4 col-xl-3">
            <div className="xc-product-six__item">
              <span className="xc-product-six__offer">20%</span>
              <div className="xc-product-six__img">
                <img src="assets/img/products/f-product-1-1.png" alt="" />
              </div>
              <h5 className="xc-product-six__price">
                <del>$460</del>
                <span>$450</span>
              </h5>
              <h3 className="xc-product-six__title">
                <Link href="/shop/10">
                  GoPro HERO11 Action Camera
                  <br />
                  5.3K Video Recording...
                </Link>
              </h3>
              <div className="xc-product-six__ratting">
                <i className="icon-star"></i>
                <i className="icon-star"></i>
                <i className="icon-star"></i>
                <i className="icon-star"></i>
                <i className="icon-star"></i>
                (25)
              </div>
              <div className="xc-product-six__btns">
                <a className="swiftcart-btn-black" href="cart.html">
                  Add to Cart
                </a>
                <a className="xc-wish-btn" href="#">
                  <i className="icon-love"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-3">
            <div className="xc-product-six__item">
              <div className="xc-product-six__img">
                <img src="assets/img/products/f-product-1-1.png" alt="" />
              </div>
              <h5 className="xc-product-six__price">
                <span>$350</span>
              </h5>
              <h3 className="xc-product-six__title">
                <Link href="/shop/5">
                  Sony Alpha A7 III Mirrorless
                  <br />
                  Full-Frame Camera...
                </Link>
              </h3>
              <div className="xc-product-six__ratting">
                <i className="icon-star"></i>
                <i className="icon-star"></i>
                <i className="icon-star"></i>
                <i className="icon-star"></i>
                <i className="icon-star"></i>
                (25)
              </div>
              <div className="xc-product-six__btns">
                <a className="swiftcart-btn-black" href="cart.html">
                  Add to Cart
                </a>
                <a className="xc-wish-btn" href="#">
                  <i className="icon-love"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-3">
            <div className="xc-product-six__item">
              <span className="xc-product-six__offer">20%</span>
              <div className="xc-product-six__img">
                <img src="assets/img/products/f-product-1-1.png" alt="" />
              </div>
              <h5 className="xc-product-six__price">
                <del>$540</del>
                <span>$520</span>
              </h5>
              <h3 className="xc-product-six__title">
                <Link href="/shop/8">
                  Canon EOS R5 Mirrorless Camera
                  <br />
                  Professional 8K Video...
                </Link>
              </h3>
              <div className="xc-product-six__ratting">
                <i className="icon-star"></i>
                <i className="icon-star"></i>
                <i className="icon-star"></i>
                <i className="icon-star"></i>
                <i className="icon-star"></i>
                (25)
              </div>
              <div className="xc-product-six__btns">
                <a className="swiftcart-btn-black" href="cart.html">
                  Add to Cart
                </a>
                <a className="xc-wish-btn" href="#">
                  <i className="icon-love"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-3">
            <div className="xc-product-six__item">
              <span className="xc-product-six__offer">20%</span>
              <div className="xc-product-six__img">
                <img src="assets/img/products/f-product-1-1.png" alt="" />
              </div>
              <h5 className="xc-product-six__price">
                <del>$440</del>
                <span>$410</span>
              </h5>
              <h3 className="xc-product-six__title">
                <Link href="/shop/6">
                  Nikon D850 DSLR Camera
                  <br />
                  45.7MP Professional...
                </Link>
              </h3>
              <div className="xc-product-six__ratting">
                <i className="icon-star"></i>
                <i className="icon-star"></i>
                <i className="icon-star"></i>
                <i className="icon-star"></i>
                <i className="icon-star"></i>
                (25)
              </div>
              <div className="xc-product-six__btns">
                <a className="swiftcart-btn-black" href="cart.html">
                  Add to Cart
                </a>
                <a className="xc-wish-btn" href="#">
                  <i className="icon-love"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
