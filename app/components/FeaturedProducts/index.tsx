"use client";
import { useProducts, Product } from "@/app/hooks/useProducts";
import Link from "next/link";

const FeaturedProducts = () => {
  const { data: products, isLoading } = useProducts();

  if (isLoading) {
    return (
      <div className="xc-product-six pb-80">
        <div className="container">
          <div className="text-center py-5">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading featured products...</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const featuredProducts = products?.slice(0, 4) || [];

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
          {featuredProducts.map((item: Product) => (
            <div className="col-md-6 col-lg-4 col-xl-3" key={item.id}>
              <div className="xc-product-six__item">
                {item.offer && (
                  <span className="xc-product-six__offer">{item.offer}</span>
                )}
                <div className="xc-product-six__img">
                  <img src={item.image} alt={item.name} />
                </div>
                <h5 className="xc-product-six__price">
                  {item.oldPrice && <del>${item.oldPrice}</del>}
                  <span>${item.price}</span>
                </h5>
                <h3 className="xc-product-six__title">
                  <Link href={`/shop/${item.id}`}>{item.name}</Link>
                </h3>
                <div className="xc-product-six__ratting">
                  {[...Array(5)].map((_, i) => (
                    <i
                      key={i}
                      className={`icon-star ${
                        i < Math.floor(item.rating || 0) ? "" : "text-muted"
                      }`}
                    />
                  ))}
                  ({item.reviews || 0})
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
