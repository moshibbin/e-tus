"use client";

import React, { useState, useRef } from 'react';
import { uploadToCloudinary, getOptimizedImageUrl } from '@/app/utils/cloudinary';

interface ImageUploadProps {
  onImageUpload: (imageUrl: string) => void;
  currentImage?: string;
  label?: string;
  required?: boolean;
  disabled?: boolean;
  maxSize?: number; // in MB
  acceptedTypes?: string[];
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  onImageUpload,
  currentImage,
  label = "Product Image",
  required = false,
  disabled = false,
  maxSize = 5,
  acceptedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp']
}) => {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(currentImage || null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!acceptedTypes.includes(file.type)) {
      setUploadError(`Please select a valid image file (${acceptedTypes.join(', ')})`);
      return;
    }

    // Validate file size
    const fileSizeMB = file.size / (1024 * 1024);
    if (fileSizeMB > maxSize) {
      setUploadError(`File size must be less than ${maxSize}MB`);
      return;
    }

    setUploadError(null);
    setIsUploading(true);

    try {
      // Create preview
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);

      // Upload to Cloudinary
      const result = await uploadToCloudinary(file, 'products');
      onImageUpload(result.secure_url);
      setPreviewImage(result.secure_url);
    } catch (error) {
      setUploadError(error instanceof Error ? error.message : 'Upload failed');
      setPreviewImage(currentImage || null);
    } finally {
      setIsUploading(false);
    }
  };

  const handleRemoveImage = () => {
    setPreviewImage(null);
    onImageUpload('');
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

      {/* Current/Preview Image */}
      {previewImage && (
        <div className="mb-3">
          <div className="position-relative d-inline-block">
            <img
              src={previewImage}
              alt="Preview"
              className="img-thumbnail"
              style={{ maxWidth: '200px', maxHeight: '200px' }}
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
                onClick={handleRemoveImage}
                title="Remove image"
              >
                <i className="fas fa-times"></i>
              </button>
            )}
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
          onChange={handleFileSelect}
          disabled={disabled || isUploading}
          style={{ display: 'none' }}
        />

        <button
          type="button"
          className={`btn ${previewImage ? 'btn-outline-primary' : 'btn-primary'}`}
          onClick={handleUploadClick}
          disabled={disabled || isUploading}
        >
          {isUploading ? (
            <>
              <span className="spinner-border spinner-border-sm me-2" role="status"></span>
              Uploading...
            </>
          ) : (
            <>
              <i className="fas fa-cloud-upload-alt me-2"></i>
              {previewImage ? 'Change Image' : 'Upload Image'}
            </>
          )}
        </button>

        {previewImage && (
          <small className="text-muted">
            Image uploaded successfully
          </small>
        )}
      </div>

      {/* File Requirements */}
      <div className="form-text">
        <small className="text-muted">
          Accepted formats: {acceptedTypes.map(type => type.split('/')[1].toUpperCase()).join(', ')}
          {' • '} Max size: {maxSize}MB
        </small>
      </div>
    </div>
  );
};

export default ImageUpload;