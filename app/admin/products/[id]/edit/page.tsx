"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { Controller, SubmitHandler, useForm, useWatch } from "react-hook-form";
import {
  Product,
  useProducts,
  useUpdateProduct,
} from "@/app/hooks/useProducts";

const EditProduct: React.FC = () => {
  const router = useRouter();
  const params = useParams<{ id: string }>();
  const { data: Products } = useProducts();
  const updateProduct = useUpdateProduct();
  const product = Products?.find((p) => p.id === parseInt(params.id));

  const [isInitialLoading, setIsInitialLoading] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
    watch,
  } = useForm<Product>();

  // Watch form values for preview
  const watchedValues = useWatch({ control });

  useEffect(() => {
    if (product) {
      setIsInitialLoading(false);
      reset({
        name: product.name,
        description: product.description,
        price: product.price,
        // categories: product.categories,
        image: product.image,
        stock: product.stock,
      });
    }
  }, [product, reset]);

  const onSubmit: SubmitHandler<Product> = (data) => {
    updateProduct.mutate({
      id: product?.id.toString()!,
      data: {
        ...data,
        // Remove id from data if not required, or ensure it's a number if required
        id: product?.id!, // Ensure id is a number
        categories: [],
        images: product?.images ?? [],
        thumbs: product?.thumbs ?? [],
        tags: product?.tags ?? [],
      },
    });
    router.push("/admin/products");
  };

  const categories = [
    "Cameras",
    "Audio",
    "Lighting",
    "Accessories",
    "Lenses",
    "Tripods",
    "Batteries",
    "Storage",
    "Other",
  ];

  if (isInitialLoading) {
    return (
      <div className="text-center py-4">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="edit-product">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Edit eTus Product</h1>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => router.back()}
        >
          <i className="fas fa-arrow-left me-2"></i>
          Back to Products
        </button>
      </div>

      <div className="row">
        <div className="col-lg-8 mx-auto ">
          <div className="card">
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="name" className="form-label">
                      Product Name *
                    </label>
                    <input
                      type="text"
                      className={`form-control ${
                        errors.name ? "is-invalid" : ""
                      }`}
                      id="name"
                      {...register("name", {
                        required: "Product name is required",
                      })}
                      placeholder="Enter product name"
                    />
                    {errors.name && (
                      <div className="invalid-feedback">
                        {errors.name.message}
                      </div>
                    )}
                  </div>

                  <div className="col-md-6 mb-3">
                    <label htmlFor="category" className="form-label">
                      Category *
                    </label>
                    <select
                      className={`form-select ${
                        errors.categories ? "is-invalid" : ""
                      }`}
                      id="categories"
                      {...register("categories", {
                        required: "Category is required",
                      })}
                    >
                      <option value="">Select a category</option>
                      {categories.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                    {errors.categories && (
                      <div className="invalid-feedback">
                        {errors.categories.message}
                      </div>
                    )}
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Description *
                  </label>
                  <textarea
                    className={`form-control ${
                      errors.description ? "is-invalid" : ""
                    }`}
                    id="description"
                    {...register("description", {
                      required: "Description is required",
                    })}
                    rows={4}
                    placeholder="Enter product description"
                  />
                  {errors.description && (
                    <div className="invalid-feedback">
                      {errors.description.message}
                    </div>
                  )}
                </div>

                <div className="row">
                  <div className="col-md-4 mb-3">
                    <label htmlFor="price" className="form-label">
                      Price *
                    </label>
                    <div className="input-group">
                      <span className="input-group-text">$</span>
                      <input
                        type="number"
                        step="0.01"
                        className={`form-control ${
                          errors.price ? "is-invalid" : ""
                        }`}
                        id="price"
                        {...register("price", {
                          required: "Price is required",
                          valueAsNumber: true,
                          min: {
                            value: 0,
                            message: "Price must be at least 0",
                          },
                        })}
                        placeholder="0.00"
                      />
                    </div>
                    {errors.price && (
                      <div className="invalid-feedback">
                        {errors.price.message}
                      </div>
                    )}
                  </div>

                  <div className="col-md-4 mb-3">
                    <label htmlFor="stock" className="form-label">
                      Stock Quantity
                    </label>
                    <input
                      type="number"
                      className={`form-control ${
                        errors.stock ? "is-invalid" : ""
                      }`}
                      id="stock"
                      {...register("stock", {
                        valueAsNumber: true,
                        min: { value: 0, message: "Stock cannot be negative" },
                      })}
                      placeholder="0"
                    />
                    {errors.stock && (
                      <div className="invalid-feedback">
                        {errors.stock.message}
                      </div>
                    )}
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="image" className="form-label">
                    Image URL *
                  </label>
                  <input
                    type="url"
                    className={`form-control ${
                      errors.image ? "is-invalid" : ""
                    }`}
                    id="image"
                    {...register("image", {
                      required: "Image URL is required",
                    })}
                    placeholder="https://example.com/image.jpg"
                  />
                  {errors.image && (
                    <div className="invalid-feedback">
                      {errors.image.message}
                    </div>
                  )}
                  {/* Preview image if URL is present */}
                  {/* <Controller
            control={control}
            name="image"
            render={({ field }) =>
              field.value ? (
            <div className="mt-2">
              <img
                src={field.value}
                alt="Preview"
                style={{ maxWidth: "200px", maxHeight: "200px" }}
                className="img-thumbnail"
                onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = "none";
                }}
              />
            </div>
              ) : null
            }
          /> */}
                </div>

                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                  <button
                    type="button"
                    className="btn btn-secondary me-md-2"
                    onClick={() => router.back()}
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary">
                    <i className="fas fa-save me-2"></i>
                    Create Product
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
