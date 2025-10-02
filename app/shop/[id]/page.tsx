"use client";
import { useState, use } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useProducts, Product } from "../../hooks/useProducts";
import { useCart } from "../../context/cart";

const Header2 = dynamic(() => import("../../components/Header2"), { ssr: false });

export default function ProductDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const { data: products, isLoading } = useProducts();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [cartMessage, setCartMessage] = useState("");

  const product = products?.find((p: Product) => p.id.toString() === resolvedParams.id);

  if (isLoading) {
    return (
      <>
        <Header2 />
        <div className="container pt-80 pb-80">
          <div className="text-center py-5">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading product...</span>
            </div>
            <p className="mt-3">Loading product details...</p>
          </div>
        </div>
      </>
    );
  }

  if (!product) {
    return (
      <>
        <Header2 />
        <div className="container pt-80 pb-80">
          <div className="alert alert-danger" role="alert">
            <h4 className="alert-heading">Product Not Found</h4>
            <p>The product you're looking for doesn't exist or may have been removed.</p>
            <hr />
            <p className="mb-0">
              <Link href="/shop" className="btn btn-primary">
                Back to Shop
              </Link>
            </p>
          </div>
        </div>
      </>
    );
  }

  const relatedProducts = products
    ?.filter((p: Product) => p.id !== product.id)
    .slice(0, 4) || [];

  const getImage = (index: number) => {
    // Ensure product.image exists as fallback
    if (!product.image) {
      console.warn('Product missing main image:', product.id);
      return '/assets/img/placeholder.png'; // Placeholder image
    }

    // First try to get from images array if it exists and has items
    if (product.images && Array.isArray(product.images) && product.images.length > index) {
      const image = product.images[index];
      if (image && image.trim()) {
        return image;
      }
    }

    // Then try to get from thumbs array if it exists and has items
    if (product.thumbs && Array.isArray(product.thumbs) && product.thumbs.length > index) {
      const thumb = product.thumbs[index];
      if (thumb && thumb.trim()) {
        return thumb;
      }
    }

    // Finally fall back to main product image
    return product.image;
  };

  const getThumb = (index: number) => {
    // Ensure product.image exists as fallback
    if (!product.image) {
      console.warn('Product missing main image:', product.id);
      return '/assets/img/placeholder.png'; // Placeholder image
    }

    // First try to get from thumbs array if it exists and has items
    if (product.thumbs && Array.isArray(product.thumbs) && product.thumbs.length > index) {
      const thumb = product.thumbs[index];
      if (thumb && thumb.trim()) {
        return thumb;
      }
    }

    // Then try to get from images array if it exists and has items
    if (product.images && Array.isArray(product.images) && product.images.length > index) {
      const image = product.images[index];
      if (image && image.trim()) {
        return image;
      }
    }

    // Finally fall back to main product image
    return product.image;
  };

  const renderStars = (rating: number) =>
    Array.from({ length: rating }, (_, i) => (
      <span key={i}>
        <i className="icon-star"></i>
      </span>
    ));

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart({
        ...product,
        fullDescription: product.fullDescription || product.description,
        rating: product.rating || 0,
        reviews: product.reviews || 0,
        sku: product.sku || `SKU-${product.id}`,
        additionalInfo: product.additionalInfo?.map((item: { key: string; value: string }) => ({
          label: item.key,
          value: item.value
        })) || []
      });
    }
    setCartMessage(`${product.name} added to cart!`);
    setTimeout(() => setCartMessage(""), 3000);
  };

  const handleBuyNow = () => {
    // Add product to cart and redirect to checkout
    for (let i = 0; i < quantity; i++) {
      addToCart({
        ...product,
        fullDescription: product.fullDescription || product.description,
        rating: product.rating || 0,
        reviews: product.reviews || 0,
        sku: product.sku || `SKU-${product.id}`,
        additionalInfo: product.additionalInfo?.map((item: { key: string; value: string }) => ({
          label: item.key,
          value: item.value
        })) || []
      });
    }
    window.location.href = "/checkout";
  };

  const updateQuantity = (newQuantity: number) => {
    if (newQuantity >= 1 && newQuantity <= product.stock) {
      setQuantity(newQuantity);
    }
  };

  return (
    <>
      <Header2 />
      {cartMessage && (
        <div
          className="alert alert-success alert-dismissible fade show"
          style={{
            position: "fixed",
            top: "20px",
            right: "20px",
            zIndex: 9999,
            minWidth: "300px",
          }}
          role="alert"
        >
          <i className="icon-check-circle me-2"></i>
          {cartMessage}
          <button
            type="button"
            className="btn-close"
            onClick={() => setCartMessage("")}
          ></button>
        </div>
      )}
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
                      <img src={getImage(0)} alt={product.name} />
                    </div>
                    <div
                      className="tab-pane fade"
                      id="nav-two"
                      role="tabpanel"
                      aria-labelledby="nav-two-tab"
                    >
                      <img src={getImage(1)} alt={product.name} />
                    </div>
                    <div
                      className="tab-pane fade"
                      id="nav-three"
                      role="tabpanel"
                      aria-labelledby="nav-three-tab"
                    >
                      <img src={getImage(2)} alt={product.name} />
                    </div>
                    <div
                      className="tab-pane fade"
                      id="nav-four"
                      role="tabpanel"
                      aria-labelledby="nav-four-tab"
                    >
                      <img src={getImage(3)} alt={product.name} />
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
                        <img src={getThumb(0)} alt={product.name} />
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
                        <img src={getThumb(1)} alt={product.name} />
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
                        <img src={getThumb(2)} alt={product.name} />
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
                        <img src={getThumb(3)} alt={product.name} />
                      </button>
                    </div>
                  </nav>
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
                    {renderStars(product.rating)}
                  </div>
                  <div className="product__details-rating-count">
                    <span>({product.reviews} customer reviews)</span>
                  </div>
                </div>

                <p>{product.description}</p>

                <div className="product__details-price">
                  {product.oldPrice && (
                    <span className="product__details-ammount old-ammount">
                      ${product.oldPrice}.00
                    </span>
                  )}
                  <span className="product__details-ammount new-ammount">
                    ${product.price}.00
                  </span>
                  {product.offer && (
                    <span className="product__details-offer">
                      {product.offer}
                    </span>
                  )}
                </div>

                <div className="product__details-quantity">
                  <div className="xc-product-quantity mt-10 mb-10">
                    <span
                      className="xc-cart-minus sub"
                      onClick={() => updateQuantity(quantity - 1)}
                      style={{ cursor: "pointer" }}
                    >
                      <i className="fas fa-minus"></i>
                    </span>
                    <input
                      className="xc-cart-input"
                      type="text"
                      value={quantity}
                      onChange={(e) =>
                        updateQuantity(parseInt(e.target.value) || 1)
                      }
                      min="1"
                      max={product.stock}
                    />
                    <span
                      className="xc-cart-plus add"
                      onClick={() => updateQuantity(quantity + 1)}
                      style={{ cursor: "pointer" }}
                    >
                      <i className="fas fa-plus"></i>
                    </span>
                  </div>
                </div>

                <div className="product__details-action d-flex flex-wrap align-items-center">
                  <button
                    onClick={handleAddToCart}
                    className="product-add-cart-btn swiftcart-btn"
                    style={{ marginRight: "10px" }}
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={handleBuyNow}
                    className="product-add-cart-btn swiftcart-btn"
                    style={{
                      backgroundColor: "#28a745",
                      borderColor: "#28a745",
                      marginRight: "10px",
                    }}
                  >
                    Buy Now
                  </button>
                  <button type="button" className="product-action-btn">
                    <i className="icon-love"></i>
                  </button>
                  <button type="button" className="product-action-btn">
                    <i className="icon-eye"></i>
                  </button>
                </div>
                <div className="product__details-sku product__details-more">
                  <p>SKU:</p>
                  <span>{product.sku}</span>
                </div>
                <div className="product__details-categories product__details-more">
                  <p>Categories:</p>
                  {product.categories.map((cat: string, index: number) => (
                    <span key={index}>
                      <a href="#">
                        {cat}
                        {index < product.categories.length - 1 ? "," : ""}
                      </a>
                    </span>
                  ))}
                </div>
                <div className="product__details-tags">
                  <span>Tags:</span>
                  {product.tags?.map((tag: string, index: number) => (
                    <a key={index} href="#">
                      {tag}
                    </a>
                  )) || []}
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
                        <p className="mb-0">{product.fullDescription}</p>
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
                            {product.additionalInfo?.map((info: { label: string; value: string }, index: number) => (
                              <tr key={index}>
                                <th scope="row">{info.label}:</th>
                                <td>{info.value}</td>
                              </tr>
                            )) || []}
                          </tbody>
                        </table>
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
            {relatedProducts.map((relProduct: Product) => (
              <div key={relProduct.id} className="col-xl-3 col-md-6">
                <div className="xc-product-eight__item">
                  <div className="xc-product-eight__img">
                    <img
                      src={relProduct.image}
                      alt={relProduct.name}
                    />
                    {relProduct.offer && (
                      <span className="xc-product-eight__offer">{relProduct.offer}</span>
                    )}
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
                      {[...Array(5)].map((_, i) => (
                        <i
                          key={i}
                          className={`icon-star ${
                            i < Math.floor(relProduct.rating || 0) ? "" : "text-muted"
                          }`}
                        />
                      ))}
                      ({relProduct.reviews || 0} Reviews)
                    </div>
                    <h3 className="xc-product-eight__title">
                      <Link href={`/shop/${relProduct.id}`}>
                        {relProduct.name}
                      </Link>
                    </h3>
                    <h5 className="xc-product-eight__price">
                      {relProduct.oldPrice && <del>${relProduct.oldPrice}</del>}
                      <span>${relProduct.price}</span>
                    </h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
