"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useCart } from "../context/cart";
import { useProducts, Product } from "../hooks/useProducts";

const Header2 = dynamic(() => import("../components/Header2"), { ssr: false });

export default function ShopPage() {
  const { addToCart } = useCart();
  const { data: products, isLoading } = useProducts();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const [cartMessage, setCartMessage] = useState("");
  const itemsPerPage = 12;

  // Get unique values for filters
  const allBrands: string[] = Array.from(
    new Set(products?.map((p) => p.brand).filter(Boolean) || [])
  );

  // Get unique categories from products
  const allCategories: string[] = Array.from(
    new Set(products?.flatMap((p) => p.categories || []).filter(Boolean) || [])
  );

  // Filter products
  let filteredProducts: Product[] = (products || []).filter((product: Product) => {
    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.some((cat) => (product.categories || []).includes(cat));

    const matchesBrand =
      selectedBrands.length === 0 || selectedBrands.includes(product.brand || "");

    const matchesSize =
      selectedSizes.length === 0 || selectedSizes.includes(product.size || "");

    const matchesPrice =
      selectedPriceRange === "" ||
      (selectedPriceRange === "under50" && product.price < 50) ||
      (selectedPriceRange === "50-100" &&
        product.price >= 50 &&
        product.price <= 100) ||
      (selectedPriceRange === "100-200" &&
        product.price >= 100 &&
        product.price <= 200) ||
      (selectedPriceRange === "200-500" &&
        product.price >= 200 &&
        product.price <= 500) ||
      (selectedPriceRange === "500-1000" &&
        product.price >= 500 &&
        product.price <= 1000) ||
      (selectedPriceRange === "1000plus" && product.price > 1000);

    return matchesCategory && matchesBrand && matchesSize && matchesPrice;
  });

  // Sort products
  filteredProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "priceLow":
        return a.price - b.price;
      case "priceHigh":
        return b.price - a.price;
      case "name":
        return a.name.localeCompare(b.name);
      case "rating":
        return (b.rating || 0) - (a.rating || 0);
      default:
        return 0;
    }
  });

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const totalProducts = filteredProducts.length;
  const startIndex = (currentPage - 1) * itemsPerPage + 1;
  const endIndex = Math.min(currentPage * itemsPerPage, totalProducts);

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [
    selectedCategories,
    selectedBrands,
    selectedSizes,
    selectedPriceRange,
    sortBy,
  ]);

  // Handle brand filter change
  const handleBrandChange = (brand: string, checked: boolean) => {
    if (checked) {
      setSelectedBrands([...selectedBrands, brand]);
    } else {
      setSelectedBrands(selectedBrands.filter((b) => b !== brand));
    }
  };

  // Handle category filter change
  const handleCategoryChange = (category: string, checked: boolean) => {
    if (checked) {
      setSelectedCategories([...selectedCategories, category]);
    } else {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    }
  };

  // Handle sort change
  const handleSortChange = (sort: string) => {
    setSortBy(sort);
  };

  // Generate pagination numbers
  const getPaginationNumbers = () => {
    const numbers = [];
    const maxVisible = 5;
    let start = Math.max(1, currentPage - Math.floor(maxVisible / 2));
    const end = Math.min(totalPages, start + maxVisible - 1);

    if (end - start + 1 < maxVisible) {
      start = Math.max(1, end - maxVisible + 1);
    }

    for (let i = start; i <= end; i++) {
      numbers.push(i);
    }
    return numbers;
  };
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
                  <span>Shop</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* xc-breadcrumb area end */}
      {/* shop area start */}
      <section className="xc-shop-area pt-80 pb-80">
        <div className="container">
          {isLoading && (
            <div className="text-center py-5">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading products...</span>
              </div>
              <p className="mt-3">Loading products...</p>
            </div>
          )}
          {!isLoading && (
            <>
              {cartMessage && (
                <div
                  className="alert alert-success alert-dismissible fade show mb-4"
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
              <div className="row">
            <div className="col-xl-3 col-lg-4">
              <div className="shop__sidebar on-left">
                <div className="shop__widget xc-accordion">
                  <div className="accordion" id="shop_category">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="category__widget">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#cagetory_widget_collapse"
                          aria-expanded="true"
                          aria-controls="cagetory_widget_collapse"
                        >
                          Categories
                        </button>
                      </h2>
                      <div
                        id="cagetory_widget_collapse"
                        className="accordion-collapse collapse show"
                        aria-labelledby="category__widget"
                        data-bs-parent="#shop_category"
                      >
                        <div className="accordion-body">
                          <div className="shop__widget-list">
                            <div className="shop__widget-list-item">
                              <input
                                type="checkbox"
                                id="all-categories"
                                checked={selectedCategories.length === 0}
                                onChange={(e) => {
                                  if (e.target.checked) {
                                    setSelectedCategories([]);
                                  }
                                }}
                              />
                              <label
                                htmlFor="all-categories"
                                style={{ padding: "0 1rem" }}
                              >
                                All Categories
                              </label>
                            </div>
                            {allCategories.map((category) => (
                              <div
                                key={category}
                                className="shop__widget-list-item"
                              >
                                <input
                                  type="checkbox"
                                  id={`cat-${category}`}
                                  checked={selectedCategories.includes(
                                    category
                                  )}
                                  onChange={(e) =>
                                    handleCategoryChange(
                                      category,
                                      e.target.checked
                                    )
                                  }
                                />
                                <label
                                  htmlFor={`cat-${category}`}
                                  style={{ padding: "0 1rem" }}
                                >
                                  {category}
                                </label>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="shop__widget xc-accordion">
                  <div className="accordion" id="shop_brand">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="brand__widget">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#brand_widget_collapse"
                          aria-expanded="true"
                          aria-controls="brand_widget_collapse"
                        >
                          Brands
                        </button>
                      </h2>
                      <div
                        id="brand_widget_collapse"
                        className="accordion-collapse collapse show"
                        aria-labelledby="brand__widget"
                        data-bs-parent="#shop_brand"
                      >
                        <div className="accordion-body">
                          <div className="shop__widget-list">
                            <div className="shop__widget-list-item">
                              <input
                                type="checkbox"
                                id="all-brands"
                                checked={selectedBrands.length === 0}
                                onChange={(e) => {
                                  if (e.target.checked) {
                                    setSelectedBrands([]);
                                  }
                                }}
                              />
                              <label
                                htmlFor="all-brands"
                                style={{ padding: "0 1rem" }}
                              >
                                All Brands
                              </label>
                            </div>
                            {allBrands.map((brand) => (
                              <div
                                key={brand}
                                className="shop__widget-list-item"
                              >
                                <input
                                  type="checkbox"
                                  id={`brand-${brand}`}
                                  checked={selectedBrands.includes(brand)}
                                  onChange={(e) =>
                                    handleBrandChange(brand, e.target.checked)
                                  }
                                />
                                <label
                                  style={{ padding: "0 1rem" }}
                                  htmlFor={`brand-${brand}`}
                                >
                                  {brand}
                                </label>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="shop__widget xc-accordion">
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
                          Size
                        </button>
                      </h2>
                      <div
                        id="size_widget_collapse"
                        className="accordion-collapse collapse show"
                        aria-labelledby="size__widget"
                        data-bs-parent="#shop_size"
                      >
                        <div className="accordion-body">
                          <div className="shop__widget-list">
                            <div className="shop__widget-list-item-2">
                              <input
                                type="checkbox"
                                id="all-sizes"
                                checked={selectedSizes.length === 0}
                                onChange={(e) => {
                                  if (e.target.checked) {
                                    setSelectedSizes([]);
                                  }
                                }}
                              />
                              <label htmlFor="all-sizes">All Sizes</label>
                            </div>
                            {allSizes.map((size) => (
                              <div
                                key={size}
                                className="shop__widget-list-item-2"
                              >
                                <input
                                  type="checkbox"
                                  id={`size-${size}`}
                                  checked={selectedSizes.includes(size)}
                                  onChange={(e) =>
                                    handleSizeChange(size, e.target.checked)
                                  }
                                />
                                <label htmlFor={`size-${size}`}>{size}</label>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
                {/* <div className="shop__widget xc-accordion">
                  <div className="accordion" id="shop_range">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="range__widget">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#range_widget_collapse"
                          aria-expanded="true"
                          aria-controls="range_widget_collapse"
                        >
                          Price range
                        </button>
                      </h2>
                      <div
                        id="range_widget_collapse"
                        className="accordion-collapse collapse show"
                        aria-labelledby="range__widget"
                        data-bs-parent="#shop_range"
                      >
                        <div className="accordion-body">
                          <div className="price-ranger">
                            <div
                              id="slider-range"
                              className="ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all"
                            >
                              <div className="ui-slider-range ui-widget-header ui-corner-all" />
                              <span
                                className="ui-slider-handle ui-state-default ui-corner-all"
                                tabIndex={0}
                              />
                              <span
                                className="ui-slider-handle ui-state-default ui-corner-all"
                                tabIndex={0}
                              />
                            </div>
                            <div className="ranger-min-max-block">
                              <input type="text" readOnly className="min" />
                              <span>-</span>
                              <input type="text" readOnly className="max" />
                              <input type="submit" defaultValue="Filter" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
                {/* <div className="shop__widget xc-accordion">
                  <div className="accordion" id="shop_price">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="price__widget">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#price_widget_collapse"
                          aria-expanded="true"
                          aria-controls="price_widget_collapse"
                        >
                          Price
                        </button>
                      </h2>
                      <div
                        id="price_widget_collapse"
                        className="accordion-collapse collapse show"
                        aria-labelledby="price__widget"
                        data-bs-parent="#shop_price"
                      >
                        <div className="accordion-body">
                          <div className="shop__widget-list">
                            <div className="shop__widget-list-item">
                              <input
                                type="radio"
                                id="all-prices"
                                name="price-range"
                                checked={selectedPriceRange === ""}
                                onChange={() => handlePriceRangeChange("")}
                              />
                              <label htmlFor="all-prices">All Prices</label>
                            </div>
                            <div className="shop__widget-list-item">
                              <input
                                type="radio"
                                id="under50"
                                name="price-range"
                                checked={selectedPriceRange === "under50"}
                                onChange={() =>
                                  handlePriceRangeChange("under50")
                                }
                              />
                              <label htmlFor="under50">Under $50</label>
                            </div>
                            <div className="shop__widget-list-item">
                              <input
                                type="radio"
                                id="50-100"
                                name="price-range"
                                checked={selectedPriceRange === "50-100"}
                                onChange={() =>
                                  handlePriceRangeChange("50-100")
                                }
                              />
                              <label htmlFor="50-100">$50 - $100</label>
                            </div>
                            <div className="shop__widget-list-item">
                              <input
                                type="radio"
                                id="100-200"
                                name="price-range"
                                checked={selectedPriceRange === "100-200"}
                                onChange={() =>
                                  handlePriceRangeChange("100-200")
                                }
                              />
                              <label htmlFor="100-200">$100 - $200</label>
                            </div>
                            <div className="shop__widget-list-item">
                              <input
                                type="radio"
                                id="200-500"
                                name="price-range"
                                checked={selectedPriceRange === "200-500"}
                                onChange={() =>
                                  handlePriceRangeChange("200-500")
                                }
                              />
                              <label htmlFor="200-500">$200 - $500</label>
                            </div>
                            <div className="shop__widget-list-item">
                              <input
                                type="radio"
                                id="500-1000"
                                name="price-range"
                                checked={selectedPriceRange === "500-1000"}
                                onChange={() =>
                                  handlePriceRangeChange("500-1000")
                                }
                              />
                              <label htmlFor="500-1000">$500 - $1000</label>
                            </div>
                            <div className="shop__widget-list-item">
                              <input
                                type="radio"
                                id="1000plus"
                                name="price-range"
                                checked={selectedPriceRange === "1000plus"}
                                onChange={() =>
                                  handlePriceRangeChange("1000plus")
                                }
                              />
                              <label htmlFor="1000plus">$1000+</label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="col-xl-9 col-lg-8">
              <div className="xc-shop-main-wrapper">
                <div className="xc-shop-top mb-45 bg-white">
                  <div className="row align-items-center">
                    <div className="col-md-6">
                      <div className="xc-shop-top-left d-flex align-items-center ">
                        <div className="xc-shop-top-result">
                          <p>
                            Showing {startIndex}–{endIndex} of {totalProducts}{" "}
                            results
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="xc-shop-top-right d-sm-flex align-items-center justify-content-md-end">
                        <div className="xc-shop-top-select">
                          <select
                            value={sortBy}
                            onChange={(e) => handleSortChange(e.target.value)}
                          >
                            <option value="default">Default Sorting</option>
                            <option value="name">Name (A-Z)</option>
                            <option value="priceLow">
                              Price (Low to High)
                            </option>
                            <option value="priceHigh">
                              Price (High to Low)
                            </option>
                            <option value="rating">Rating</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="xc-shop-items-wrapper xc-shop-item-primary">
                  <div className="row gutter-y-20">
                    {paginatedProducts.map((product) => (
                      <div
                        key={product.id}
                        className="col-xl-3 col-md-6 col-sm-6 infinite-item"
                      >
                        <div className="xc-product-two__item">
                          {product.offer && (
                            <span className="xc-product-two__deal">
                              {product.offer}
                            </span>
                          )}
                          <div className="xc-product-two__img">
                            <img src={product.image} alt={product.name} />
                          </div>
                          <div className="xc-product-two__ratting">
                            {[...Array(5)].map((_, i) => (
                              <i
                                key={i}
                                className={`icon-star ${
                                  i < Math.floor(product.rating || 0)
                                    ? ""
                                    : "text-muted"
                                }`}
                              />
                            ))}
                            ({product.reviews || 0})
                          </div>
                          <h3 className="xc-product-two__title">
                            <Link href={`/shop/${product.id}`}>
                              {product.name}
                            </Link>
                          </h3>
                          <h4 className="xc-product-two__price">
                            ${product.price}
                            {product.oldPrice && (
                              <span className="text-muted text-decoration-line-through ms-2">
                                ${product.oldPrice}
                              </span>
                            )}
                          </h4>
                          <div className="xc-product-two__btn">
                            <Link href={`/shop/${product.id}`}>
                              <i className="icon-eye" />
                            </Link>
                            <Link href={"#"}>
                              <button
                                onClick={(e) => {
                                   e.preventDefault();
                                   addToCart({
                                     ...product,
                                     fullDescription: product.fullDescription || product.description,
                                     rating: product.rating || 0,
                                     reviews: product.reviews || 0,
                                     sku: product.sku || `SKU-${product.id}`,
                                     additionalInfo: product.additionalInfo?.map(item => ({
                                       label: item.key,
                                       value: item.value
                                     })) || []
                                   });
                                   setCartMessage(
                                     `${product.name} added to cart!`
                                   );
                                   setTimeout(() => setCartMessage(""), 3000);
                                 }}
                                title="Add to Cart"
                              >
                                <i className="icon-grocery-store" />
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {totalPages > 1 && (
                  <div className="xc-shop-pagination mt-20">
                    <div className="xc-pagination text-center">
                      <ul>
                        <li>
                          <button
                            className={`prev page-numbers ${
                              currentPage === 1 ? "disabled" : ""
                            }`}
                            onClick={() => setCurrentPage(currentPage - 1)}
                            disabled={currentPage === 1}
                          >
                            <i className="fa-solid fa-angle-left" />
                          </button>
                        </li>
                        {getPaginationNumbers().map((number) => (
                          <li key={number}>
                            <button
                              className={`page-numbers ${
                                currentPage === number ? "current" : ""
                              }`}
                              onClick={() => setCurrentPage(number)}
                            >
                              {number}
                            </button>
                          </li>
                        ))}
                        <li>
                          <button
                            className={`next page-numbers ${
                              currentPage === totalPages ? "disabled" : ""
                            }`}
                            onClick={() => setCurrentPage(currentPage + 1)}
                            disabled={currentPage === totalPages}
                          >
                            <i className="fa-solid fa-angle-right" />
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
            </>
          )}
        </div>
      </section>
      {/* shop area end */}
    </>
  );
}
