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
  cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'dheunnnct',
  uploadPreset: process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET || 'e-tus-app',
};

export const uploadToCloudinary = async (
  file: File,
  folder: string = 'products'
): Promise<CloudinaryUploadResult> => {
  // Validate configuration
  if (CLOUDINARY_CONFIG.cloudName === 'your-cloud-name' || !CLOUDINARY_CONFIG.cloudName) {
    throw new Error('Cloudinary cloud name is not configured. Please check your environment variables.');
  }

  if (CLOUDINARY_CONFIG.uploadPreset === 'your-upload-preset' || !CLOUDINARY_CONFIG.uploadPreset) {
    throw new Error('Cloudinary upload preset is not configured. Please check your environment variables.');
  }

  console.log('Cloudinary Config:', {
    cloudName: CLOUDINARY_CONFIG.cloudName,
    uploadPreset: CLOUDINARY_CONFIG.uploadPreset
  });

  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', CLOUDINARY_CONFIG.uploadPreset);
  formData.append('folder', folder);

  try {
    const uploadUrl = `https://api.cloudinary.com/v1_1/${CLOUDINARY_CONFIG.cloudName}/image/upload`;
    console.log('Upload URL:', uploadUrl);

    const response = await fetch(uploadUrl, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Cloudinary error response:', errorText);

      if (response.status === 400) {
        throw new Error(`Upload failed: Invalid upload preset or configuration. Please check your Cloudinary settings. Error: ${errorText}`);
      } else if (response.status === 401) {
        throw new Error(`Upload failed: Authentication error. Please check your Cloudinary credentials.`);
      } else {
        throw new Error(`Upload failed: ${response.statusText} - ${errorText}`);
      }
    }

    const result: CloudinaryUploadResult = await response.json();
    console.log('Upload successful:', result.secure_url);
    return result;
  } catch (error) {
    console.error('Cloudinary upload error:', error);
    throw error;
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