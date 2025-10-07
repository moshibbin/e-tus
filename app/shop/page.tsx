"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useCart } from "../context/cart";
import { useProducts, Product } from "../hooks/useProducts";
import { categories } from "../data/categories";
import { PRODUCT_CATEGORIES } from "../utils/constants";

const Header2 = dynamic(() => import("../components/Header2"), { ssr: false });

export default function ShopPage() {
  const { addToCart } = useCart();
  const { data: products, isLoading } = useProducts();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const [cartMessage, setCartMessage] = useState("");
  const itemsPerPage = 12;

  // Get unique brands
  const allBrands: string[] = Array.from(
    new Set(
      products
        ?.map((p) => p.brand)
        .filter((brand): brand is string => Boolean(brand)) || []
    )
  );

  // Get unique categories from products or use default categories
  const allCategories: string[] = Array.from(
    new Set(products?.flatMap((p) => p.categories || []).filter(Boolean) || [])
  );

  // If no categories found in products, use default categories
  const displayCategories =
    allCategories.length > 0 ? allCategories : Array.from(PRODUCT_CATEGORIES);

  // Filter products
  let filteredProducts: Product[] = (products || []).filter(
    (product: Product) => {
      // Handle category filtering - support both string and array categories
      const productCategories: string[] = [];
      if (Array.isArray(product.categories)) {
        productCategories.push(...product.categories);
      } else if (product.categories) {
        productCategories.push(product.categories);
      }

      const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.some((cat) => productCategories.includes(cat));

      const matchesBrand =
        selectedBrands.length === 0 ||
        selectedBrands.includes(product.brand || "");

      const matchesSearch =
        searchQuery === "" ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesBrand && matchesSearch;
    }
  );

  // Sort products
  filteredProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "priceLow":
        return a.price - b.price;
      case "priceHigh":
        return b.price - a.price;
      case "name":
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  // Get category counts for display
  const getCategoryCount = (category: string): number => {
    return (
      products?.filter((product: Product) => {
        const productCategories: string[] = [];
        if (Array.isArray(product.categories)) {
          productCategories.push(...product.categories);
        } else if (product.categories) {
          productCategories.push(product.categories);
        }
        return productCategories.includes(category);
      }).length || 0
    );
  };

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
  }, [selectedCategories, selectedBrands, searchQuery, sortBy]);

  const handleBrandChange = (brand: string, checked: boolean) => {
    if (checked) setSelectedBrands([...selectedBrands, brand]);
    else setSelectedBrands(selectedBrands.filter((b) => b !== brand));
  };

  const handleCategoryChange = (category: string, checked: boolean) => {
    if (checked) setSelectedCategories([...selectedCategories, category]);
    else
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
  };

  const handleSortChange = (sort: string) => setSortBy(sort);

  const clearAllFilters = () => {
    setSelectedCategories([]);
    setSelectedBrands([]);
    setSearchQuery("");
    setSortBy("default");
    setCurrentPage(1);
  };

  const hasActiveFilters =
    selectedCategories.length > 0 ||
    selectedBrands.length > 0 ||
    searchQuery.length > 0;

  const getPaginationNumbers = () => {
    const numbers = [];
    const maxVisible = 5;
    let start = Math.max(1, currentPage - Math.floor(maxVisible / 2));
    const end = Math.min(totalPages, start + maxVisible - 1);
    if (end - start + 1 < maxVisible) start = Math.max(1, end - maxVisible + 1);
    for (let i = start; i <= end; i++) numbers.push(i);
    return numbers;
  };

  return (
    <>
      <Header2 />
      {/* Breadcrumb */}
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

      {/* Shop area */}
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

              <div className="row mb-4">
                <div className="col-md-8">
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="form-control"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <div className="col-md-4">
                  {hasActiveFilters && (
                    <button
                      className="btn btn-outline-secondary w-100"
                      onClick={clearAllFilters}
                    >
                      <i className="fas fa-times me-2"></i>
                      Clear Filters
                    </button>
                  )}
                </div>
              </div>

              <div className="row">
                {/* Sidebar */}
                <div className="col-xl-3 col-lg-4">
                  <div className="shop__sidebar on-left">
                    {/* Categories */}
                    <div className="shop__widget xc-accordion">
                      <div className="accordion" id="shop_category">
                        <div className="accordion-item">
                          <h2
                            className="accordion-header"
                            id="category__widget"
                          >
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
                                      if (e.target.checked)
                                        setSelectedCategories([]);
                                    }}
                                  />
                                  <label
                                    htmlFor="all-categories"
                                    style={{ padding: "0 1rem" }}
                                  >
                                    All Categories
                                  </label>
                                </div>
                                {displayCategories.map((category) => (
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
                                      {category} ({getCategoryCount(category)})
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Brands */}
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
                                      if (e.target.checked)
                                        setSelectedBrands([]);
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
                                        handleBrandChange(
                                          brand,
                                          e.target.checked
                                        )
                                      }
                                    />
                                    <label
                                      htmlFor={`brand-${brand}`}
                                      style={{ padding: "0 1rem" }}
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
                  </div>
                </div>

                {/* Product Grid */}
                <div className="col-xl-9 col-lg-8">
                  <div className="xc-shop-main-wrapper">
                    <div className="xc-shop-top mb-45 bg-white">
                      <div className="row align-items-center">
                        <div className="col-md-6">
                          <div className="xc-shop-top-left d-flex align-items-center ">
                            <div className="xc-shop-top-result">
                              <p>
                                Showing {startIndex}–{endIndex} of{" "}
                                {totalProducts} results
                              </p>
                              {hasActiveFilters && (
                                <div className="mt-2">
                                  <small className="text-muted">
                                    Active filters:
                                    {selectedCategories.map((cat) => (
                                      <span
                                        key={cat}
                                        className="badge bg-primary ms-1"
                                      >
                                        {cat} ×
                                      </span>
                                    ))}
                                    {selectedBrands.map((brand) => (
                                      <span
                                        key={brand}
                                        className="badge bg-success ms-1"
                                      >
                                        {brand} ×
                                      </span>
                                    ))}
                                    {searchQuery && (
                                      <span className="badge bg-info ms-1">
                                        "{searchQuery}" ×
                                      </span>
                                    )}
                                  </small>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="xc-shop-top-right d-sm-flex align-items-center justify-content-md-end">
                            <div className="xc-shop-top-select">
                              <select
                                value={sortBy}
                                onChange={(e) =>
                                  handleSortChange(e.target.value)
                                }
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

                    {/* Product Cards */}
                    <div className="xc-shop-items-wrapper xc-shop-item-primary">
                      <div className="row gutter-y-20">
                        {paginatedProducts.map((product) => (
                          <div
                            key={product.id}
                            className="col-xl-3 col-md-6 col-sm-6 infinite-item"
                          >
                            <div className="xc-product-two__item">
                              <div
                                className="xc-product-two__img"
                                style={{ height: "200px", width: "200px" }}
                              >
                                <img
                                  src={product.image}
                                  alt={product.name}
                                  style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "contain",
                                  }}
                                />
                              </div>
                              <div className="xc-product-two__ratting">
                                {[...Array(5)].map((_, i) => (
                                  <i
                                    key={i}
                                    className={`icon-star text-muted"`}
                                  />
                                ))}
                              </div>
                              <h3 className="xc-product-two__title">
                                <Link href={`/shop/${product.id}`}>
                                  {product.name}
                                </Link>
                              </h3>
                              <h4 className="xc-product-two__price">
                                ${product.price}
                              </h4>
                              <div className="xc-product-two__btn">
                                <Link href={`/shop/${product.id}`}>
                                  <i className="icon-eye" />
                                </Link>
                                <button
                                  onClick={(e) => {
                                    e.preventDefault();
                                    addToCart({
                                      ...product,
                                      fullDescription:
                                        product.fullDescription ||
                                        product.description,
                                      rating: 0,
                                      reviews: 0,
                                      sku: `SKU-${product.id}`,
                                      additionalInfo:
                                        product.additionalInfo || [],
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
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Pagination */}
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
    </>
  );
}
