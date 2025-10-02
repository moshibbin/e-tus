"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Product,
  useDeleteProduct,
  useProducts,
} from "@/app/hooks/useProducts";

const ProductsList: React.FC = () => {
  const { data: products, isLoading } = useProducts();
  const deleteProduct = useDeleteProduct();
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);

  const handleDelete = async (id: string) => {
    try {
      await deleteProduct.mutate(id);
      setDeleteConfirm(null);
    } catch (error) {
      console.error("Error deleting product:", error);
      alert("Error deleting product");
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);
  };

  return (
    <div className="products-list">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Products Management</h1>
        <Link href="/admin/products/create" className="btn btn-primary">
          <i className="fas fa-plus me-2"></i>
          Add New Product
        </Link>
      </div>

      <div className="card">
        <div className="card-body">
          {products?.length === 0 ? (
            <div className="text-center py-4">
              <p className="text-muted">No products found.</p>
              <Link href="/admin/products/create" className="btn btn-primary">
                Create your first product
              </Link>
            </div>
          ) : (
            <div className="table-responsive">
              <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>Featured</th>

                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products?.map((product: Product) => (
                    <tr key={product.id}>
                      <td>
                        <img
                          src={product.image}
                          alt={product.name}
                          style={{
                            width: "50px",
                            height: "50px",
                            objectFit: "cover",
                            borderRadius: "4px",
                          }}
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = "/assets/img/resourse/404-Inage.png";
                          }}
                        />
                      </td>
                      <td>
                        <div>
                          <strong>{product.name}</strong>
                          <div className="text-muted small">
                            {product.description.length > 50
                              ? `${product.description.substring(0, 50)}...`
                              : product.description}
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="badge bg-secondary">
                          {product.categories}
                        </span>
                      </td>
                      <td>{formatPrice(product.price)}</td>
                      <td>
                        <span
                          className={`badge ${
                            product.stock > 10
                              ? "bg-success"
                              : product.stock > 0
                              ? "bg-warning"
                              : "bg-danger"
                          }`}
                        >
                          {product.stock}
                        </span>
                      </td>
                      <td>
                        <span className="badge bg-primary">
                          <i className="fas fa-star me-1"></i>
                          Featured
                        </span>
                      </td>

                      <td>
                        <div className="btn-group" role="group">
                          <Link
                            href={`/admin/products/${product.id}/edit`}
                            className="btn btn-sm btn-outline-primary"
                            title="Edit"
                          >
                            <i className="fas fa-edit"></i>
                          </Link>
                          <button
                            className="btn btn-sm btn-outline-danger"
                            title="Delete"
                            onClick={() => setDeleteConfirm(String(product.id))}
                          >
                            <i className="fas fa-trash"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {deleteConfirm && (
        <div
          className="modal show d-block"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Confirm Delete</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setDeleteConfirm(null)}
                ></button>
              </div>
              <div className="modal-body">
                <p>
                  Are you sure you want to delete this product? This action
                  cannot be undone.
                </p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setDeleteConfirm(null)}
                  disabled={isLoading}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => handleDelete(deleteConfirm)}
                  disabled={isLoading}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsList;
