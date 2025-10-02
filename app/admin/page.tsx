"use client";

import React from "react";
import { useAuth } from "./context/AuthContext";

import Link from "next/link";
import { useProducts, useProductsBySites } from "../hooks/useProducts";

const AdminDashboard: React.FC = () => {
  const { user } = useAuth();
  const { data: products } = useProducts();

  const totalProducts = products?.length ?? 0;
  const featuredProducts = products?.length ?? 0;
  const lowStockProducts = products
    ? products.filter((p) => p.stock <= 10).length
    : 0;
  const outOfStockProducts = products
    ? products.filter((p) => p.stock === 0).length
    : 0;

  return (
    <div className="admin-dashboard">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h1>Welcome back, {user?.username}!</h1>
          <p className="text-muted">
            Here's an overview of your eTus Media Solutions store
          </p>
        </div>
        <Link href="/admin/products/create" className="btn btn-primary">
          <i className="fas fa-plus me-2"></i>
          Add New Product
        </Link>
      </div>

      {/* Stats Cards */}
      <div className="row mb-4">
        <div className="col-md-3">
          <div className="card bg-primary text-white">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <div>
                  <h5 className="card-title">Total Products</h5>
                  <h2 className="mb-0">{totalProducts}</h2>
                </div>
                <div className="align-self-center">
                  <i className="fas fa-box fa-2x"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card bg-success text-white">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <div>
                  <h5 className="card-title">Featured Products</h5>
                  <h2 className="mb-0">{featuredProducts}</h2>
                </div>
                <div className="align-self-center">
                  <i className="fas fa-star fa-2x"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card bg-warning text-white">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <div>
                  <h5 className="card-title">Low Stock</h5>
                  <h2 className="mb-0">{lowStockProducts}</h2>
                </div>
                <div className="align-self-center">
                  <i className="fas fa-exclamation-triangle fa-2x"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card bg-danger text-white">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <div>
                  <h5 className="card-title">Out of Stock</h5>
                  <h2 className="mb-0">{outOfStockProducts}</h2>
                </div>
                <div className="align-self-center">
                  <i className="fas fa-times-circle fa-2x"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        {/* Recent Products */}
        <div className="col-lg-8">
          <div className="card">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h5 className="mb-0">Recent Products</h5>
              <Link
                href="/admin/products"
                className="btn btn-sm btn-outline-primary"
              >
                View All
              </Link>
            </div>
            <div className="card-body">
              {products?.length === 0 ? (
                <div className="text-center py-4">
                  <p className="text-muted">No products yet.</p>
                  <Link
                    href="/admin/products/create"
                    className="btn btn-primary"
                  >
                    Create your first product
                  </Link>
                </div>
              ) : (
                <div className="table-responsive">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {products?.map((product) => (
                        <tr key={product.id}>
                          <td>
                            <div className="d-flex align-items-center">
                              <img
                                src={product.image}
                                alt={product.name}
                                style={{
                                  width: "40px",
                                  height: "40px",
                                  objectFit: "cover",
                                  borderRadius: "4px",
                                  marginRight: "10px",
                                }}
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement;
                                  target.src =
                                    "/assets/img/resourse/404-Inage.png";
                                }}
                              />
                              <div>
                                <strong>{product.name}</strong>
                                <div className="text-muted small">Updated </div>
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="badge bg-secondary">
                              {product.categories}
                            </span>
                          </td>
                          <td>${product.price.toFixed(2)}</td>
                          <td>{product.stock}</td>
                          <td>
                            <span className="badge bg-primary">
                              <i className="fas fa-star me-1"></i>
                              Featured
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="col-lg-4">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0">Quick Actions</h5>
            </div>
            <div className="card-body">
              <div className="d-grid gap-2">
                <Link
                  href="/admin/products"
                  className="btn btn-outline-primary"
                >
                  <i className="fas fa-list me-2"></i>
                  View All Products
                </Link>
                <Link
                  href="/admin/products/create"
                  className="btn btn-outline-success"
                >
                  <i className="fas fa-plus me-2"></i>
                  Add New Product
                </Link>
              </div>
            </div>
          </div>

          {/* Stock Alerts */}
          <div className="card mt-3">
            <div className="card-header">
              <h5 className="mb-0">Stock Alerts</h5>
            </div>
            <div className="card-body">
              {outOfStockProducts > 0 && (
                <div className="alert alert-danger py-2">
                  <i className="fas fa-exclamation-triangle me-2"></i>
                  {outOfStockProducts} products are out of stock
                </div>
              )}
              {lowStockProducts > 0 && (
                <div className="alert alert-warning py-2">
                  <i className="fas fa-exclamation-triangle me-2"></i>
                  {lowStockProducts} products have low stock (≤10)
                </div>
              )}
              {outOfStockProducts === 0 && lowStockProducts === 0 && (
                <div className="alert alert-success py-2">
                  <i className="fas fa-check-circle me-2"></i>
                  All products are well stocked!
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
