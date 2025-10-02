interface CloudinaryUploadResult {
  public_id: string;
  secure_url: string;
  width: number;
  height: number;
  format: string;
  bytes: number;
}

interface CloudinaryConfig {
  cloudName: string;
  uploadPreset: string;
  apiKey?: string;
  apiSecret?: string;
}

// You'll need to add these to your environment variables
const CLOUDINARY_CONFIG: CloudinaryConfig = {
  cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'your-cloud-name',
  uploadPreset: process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET || 'your-upload-preset',
};

export const uploadToCloudinary = async (
  file: File,
  folder: string = 'products'
): Promise<CloudinaryUploadResult> => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', CLOUDINARY_CONFIG.uploadPreset);
  formData.append('folder', folder);

  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUDINARY_CONFIG.cloudName}/image/upload`,
      {
        method: 'POST',
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error(`Upload failed: ${response.statusText}`);
    }

    const result: CloudinaryUploadResult = await response.json();
    return result;
  } catch (error) {
    console.error('Cloudinary upload error:', error);
    throw new Error('Failed to upload image to Cloudinary');
  }
};

export const deleteFromCloudinary = async (publicId: string): Promise<void> => {
  try {
    const timestamp = Math.round(new Date().getTime() / 1000);
    const signature = await generateSignature(publicId, timestamp);

    const formData = new FormData();
    formData.append('public_id', publicId);
    formData.append('signature', signature);
    formData.append('api_key', process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY || '');
    formData.append('timestamp', timestamp.toString());

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUDINARY_CONFIG.cloudName}/image/destroy`,
      {
        method: 'POST',
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error(`Delete failed: ${response.statusText}`);
    }
  } catch (error) {
    console.error('Cloudinary delete error:', error);
    throw new Error('Failed to delete image from Cloudinary');
  }
};

const generateSignature = async (publicId: string, timestamp: number): Promise<string> => {
  // For client-side uploads, you'll need to implement server-side signature generation
  // For now, we'll use unsigned uploads which work with upload presets
  return '';
};

export const getOptimizedImageUrl = (
  publicId: string,
  width?: number,
  height?: number,
  quality: number = 80
): string => {
  const transformations = [];

  if (width) transformations.push(`w_${width}`);
  if (height) transformations.push(`h_${height}`);
  if (quality !== 80) transformations.push(`q_${quality}`);

  const transformationString = transformations.join(',');

  return `https://res.cloudinary.com/${CLOUDINARY_CONFIG.cloudName}/image/upload/${transformationString}/${publicId}`;
};

export default CLOUDINARY_CONFIG;