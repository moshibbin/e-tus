"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Product, useAddProduct } from "@/app/hooks/useProducts";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import ImageUpload from "@/app/components/ImageUpload";

const CreateProduct: React.FC = () => {
  const router = useRouter();
  const createProduct = useAddProduct();
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    control,
    formState: { errors },
  } = useForm<Product>();

  const onSubmit: SubmitHandler<Product> = (data) => {
    // Ensure images and thumbs arrays are populated with the main image
    const productData = {
      ...data,
      images: data.images && data.images.length > 0 ? data.images : [data.image],
      thumbs: data.thumbs && data.thumbs.length > 0 ? data.thumbs : [data.image],
    };
    createProduct.mutate(productData);
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

  return (
    <div className="create-product">
      <div className="d-flex mx-auto justify-content-between align-items-center mb-4">
        <h1>Create New eTus Product</h1>
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

                <ImageUpload
                  onImageUpload={(imageUrl) => setValue('image', imageUrl)}
                  currentImage={watch('image')}
                  label="Product Image"
                  required={true}
                />
                {errors.image && (
                  <div className="text-danger mt-1">
                    <small>{errors.image.message}</small>
                  </div>
                )}

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

export default CreateProduct;
