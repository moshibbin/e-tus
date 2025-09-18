'use client';
import Link from "next/link";
import { products } from "../../../data/products";
import Header2 from "../../../components/Header2";
import { useCart } from "../../../context/cart";

export default function ProductDetailsPage({ params }: { params: { id: string } }) {
  const { addToCart } = useCart();
  const product = products.find((p) => p.id === parseInt(params.id));

  if (!product) {
    return <div>Product not found</div>;
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
                  <span>Product Details</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* xc-breadcrumb area end */}
      {/* product details area start */}
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
                      <img src={product.image} alt={product.name} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="product__details-wrapper">
                <div className="product__details-stock">
                  <span>{product.stock} In Stock</span>
                </div>
                <h3 className="product__details-title">{product.name}</h3>
                <div className="product__details-rating d-flex align-items-center">
                  <div className="product__rating product__rating-2 d-flex">
                    {[...Array(product.rating)].map((_, i) => (
                      <span key={i}>
                        <i className="icon-star" />
                      </span>
                    ))}
                  </div>
                  <div className="product__details-rating-count">
                    <span>({product.reviews} customer review)</span>
                  </div>
                </div>
                <p>{product.description}</p>
                <div className="product__details-price">
                  {product.oldPrice && (
                    <span className="product__details-ammount old-ammount">
                      ${product.oldPrice.toFixed(2)}
                    </span>
                  )}
                  <span className="product__details-ammount new-ammount">
                    ${product.price.toFixed(2)}
                  </span>
                  {product.offer && (
                    <span className="product__details-offer">
                      {product.offer}
                    </span>
                  )}
                </div>
                <div className="product__details-quantity">
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
                </div>
                <div className="product__details-action d-flex flex-wrap align-items-center">
                  <button
                    onClick={() => addToCart(product)}
                    className="product-add-cart-btn swiftcart-btn"
                  >
                    Add to Cart
                  </button>
                  <button type="button" className="product-action-btn">
                    <i className="icon-love" />
                  </button>
                  <button type="button" className="product-action-btn">
                    <i className="icon-eye" />
                  </button>
                </div>
                <div className="product__details-sku product__details-more">
                  <p>SKU:</p>
                  <span>{product.sku}</span>
                </div>
                <div className="product__details-categories product__details-more">
                  <p>Categories:</p>
                  {product.categories.map((cat, i) => (
                    <span key={i}>
                      <Link href="#">{cat},</Link>
                    </span>
                  ))}
                </div>
                <div className="product__details-tags">
                  <span>Tags:</span>
                  {product.tags.map((tag, i) => (
                    <Link key={i} href="#">{tag}</Link>
                  ))}
                </div>
                <div className="product__details-share">
                  <span>Share:</span>
                  <Link href="#">
                    <i className="fa-brands fa-facebook-f" />
                  </Link>
                  <Link href="#">
                    <i className="fa-brands fa-twitter" />
                  </Link>
                  <Link href="#">
                    <i className="fa-brands fa-linkedin-in" />
                  </Link>
                  <Link href="#">
                    <i className="fa-brands fa-youtube" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
