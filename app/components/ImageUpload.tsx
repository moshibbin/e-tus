"use client";

import React, { useState, useRef } from 'react';
import { uploadToCloudinary, getOptimizedImageUrl } from '@/app/utils/cloudinary';

interface ImageUploadProps {
  onImageUpload: (imageUrls: string[]) => void;
  currentImages?: string[];
  label?: string;
  required?: boolean;
  disabled?: boolean;
  maxSize?: number; // in MB
  acceptedTypes?: string[];
  maxImages?: number; // Maximum number of images allowed
  multiple?: boolean; // Enable multiple file selection
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  onImageUpload,
  currentImages = [],
  label = "Product Images",
  required = false,
  disabled = false,
  maxSize = 5,
  acceptedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'],
  maxImages = 5,
  multiple = true
}) => {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [previewImages, setPreviewImages] = useState<string[]>(currentImages);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    if (files.length === 0) return;

    // Check if adding these files would exceed maxImages limit
    if (previewImages.length + files.length > maxImages) {
      setUploadError(`Maximum ${maxImages} images allowed`);
      return;
    }

    // Validate file types
    const invalidFiles = files.filter(file => !acceptedTypes.includes(file.type));
    if (invalidFiles.length > 0) {
      setUploadError(`Please select valid image files (${acceptedTypes.join(', ')})`);
      return;
    }

    // Validate file sizes
    const oversizedFiles = files.filter(file => {
      const fileSizeMB = file.size / (1024 * 1024);
      return fileSizeMB > maxSize;
    });
    if (oversizedFiles.length > 0) {
      setUploadError(`File size must be less than ${maxSize}MB`);
      return;
    }

    setUploadError(null);
    setIsUploading(true);

    try {
      const newPreviewImages = [...previewImages];
      const newUploadedUrls: string[] = [];

      // Process each file
      for (const file of files) {
        // Create preview
        const reader = new FileReader();
        reader.onload = (e) => {
          const previewUrl = e.target?.result as string;
          newPreviewImages.push(previewUrl);
          setPreviewImages([...newPreviewImages]);
        };
        reader.readAsDataURL(file);

        // Upload to Cloudinary
        const result = await uploadToCloudinary(file, 'products');
        newUploadedUrls.push(result.secure_url);
      }

      // Update state with uploaded URLs
      const updatedImages = [...previewImages, ...newUploadedUrls];
      setPreviewImages(updatedImages);
      onImageUpload(updatedImages);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Upload failed';
      console.error('Image upload error:', errorMessage);
      setUploadError(errorMessage);
    } finally {
      setIsUploading(false);
    }
  };

  const handleRemoveImage = (indexToRemove: number) => {
    const updatedImages = previewImages.filter((_, index) => index !== indexToRemove);
    setPreviewImages(updatedImages);
    onImageUpload(updatedImages);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="image-upload mb-3">
      <label className="form-label">
        {label} {required && <span className="text-danger">*</span>}
      </label>

      {/* Current/Preview Images */}
      {previewImages.length > 0 && (
        <div className="mb-3">
          <div className="row g-2">
            {previewImages.map((imageUrl, index) => (
              <div key={index} className="col-md-4 col-sm-6">
                <div className="position-relative">
                  <img
                    src={imageUrl}
                    alt={`Preview ${index + 1}`}
                    className="img-thumbnail w-100"
                    style={{ height: '150px', objectFit: 'cover' }}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                  {!disabled && (
                    <button
                      type="button"
                      className="btn btn-sm btn-danger position-absolute"
                      style={{ top: '5px', right: '5px' }}
                      onClick={() => handleRemoveImage(index)}
                      title="Remove image"
                    >
                      <i className="fas fa-times"></i>
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Upload Error */}
      {uploadError && (
        <div className="alert alert-danger py-2" role="alert">
          <small>{uploadError}</small>
        </div>
      )}

      {/* Upload Button */}
      <div className="d-flex gap-2 align-items-center">
        <input
          ref={fileInputRef}
          type="file"
          accept={acceptedTypes.join(',')}
          multiple={multiple}
          onChange={handleFileSelect}
          disabled={disabled || isUploading || previewImages.length >= maxImages}
          style={{ display: 'none' }}
        />

        <button
          type="button"
          className={`btn ${previewImages.length > 0 ? 'btn-outline-primary' : 'btn-primary'}`}
          onClick={handleUploadClick}
          disabled={disabled || isUploading || previewImages.length >= maxImages}
        >
          {isUploading ? (
            <>
              <span className="spinner-border spinner-border-sm me-2" role="status"></span>
              Uploading...
            </>
          ) : (
            <>
              <i className="fas fa-cloud-upload-alt me-2"></i>
              {previewImages.length > 0 ? 'Add More Images' : 'Upload Images'}
            </>
          )}
        </button>

        {previewImages.length > 0 && (
          <small className="text-muted">
            {previewImages.length} of {maxImages} images uploaded
          </small>
        )}
      </div>

      {/* File Requirements */}
      <div className="form-text">
        <small className="text-muted">
          Accepted formats: {acceptedTypes.map(type => type.split('/')[1].toUpperCase()).join(', ')}
          {' • '} Max size: {maxSize}MB per image
          {' • '} Max images: {maxImages}
          {multiple ? ' • Multiple files supported' : ' • Single file only'}
        </small>
      </div>
    </div>
  );
};

export default ImageUpload;