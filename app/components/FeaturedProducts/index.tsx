import { products } from "@/app/data/products";
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
          {products.slice(0, 4).map((item) => (
            <div className="col-md-6 col-lg-4 col-xl-3" key={item.id}>
              <div className="xc-product-six__item">
                <span className="xc-product-six__offer">20%</span>
                <div className="xc-product-six__img">
                  <img src="assets/img/products/f-product-1-1.png" alt="" />
                </div>
                <h5 className="xc-product-six__price">
                  <del>${item.price}</del>
                  <span>$450</span>
                </h5>
                <h3 className="xc-product-six__title">
                  <Link href={`/shop/${item.id}`}>{item.name}</Link>
                </h3>
                <div className="xc-product-six__ratting">
                  <i className="icon-star"></i>
                  <i className="icon-star"></i>
                  <i className="icon-star"></i>
                  <i className="icon-star"></i>
                  <i className="icon-star"></i>
                  (25)
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
