// RenoLens API integration utilities

const RENOLENS_API_BASE = 'https://www.renolens.com/api';
const CLIENT_ID = 'RL-J4T94WXH';

/**
 * Upload a file to RenoLens
 * @param file - The file to upload
 * @returns Promise resolving to the uploaded file URL
 */
export const uploadFileToRenoLens = async (file: File): Promise<string> => {
  const formData = new FormData();
  formData.append('file', file);

  const response = await fetch(`${RENOLENS_API_BASE}/contact-form/upload`, {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`File upload failed: ${errorText || response.statusText}`);
  }

  const data = await response.json();
  
  // Handle different possible response formats
  if (data.url) {
    return data.url;
  } else if (data.imageUrl) {
    return data.imageUrl;
  } else if (typeof data === 'string') {
    return data;
  } else {
    throw new Error('Unexpected response format from upload endpoint');
  }
};

/**
 * Upload multiple files to RenoLens
 * @param files - Array of files to upload
 * @returns Promise resolving to array of uploaded file URLs
 */
export const uploadFilesToRenoLens = async (files: File[]): Promise<string[]> => {
  const uploadPromises = files.map(file => uploadFileToRenoLens(file));
  return Promise.all(uploadPromises);
};

/**
 * Submit contact form data to RenoLens
 * @param formData - Object containing form fields
 * @param imageUrls - Optional array of uploaded image URLs
 * @returns Promise resolving to the API response
 */
export const submitContactFormToRenoLens = async (
  formData: Record<string, unknown>,
  imageUrls?: string[]
): Promise<unknown> => {
  const payload: Record<string, unknown> = {
    clientId: CLIENT_ID,
    name: formData.name,
    email: formData.email,
  };

  // Add optional fields if they exist
  if (formData.phone) payload.phone = formData.phone;
  if (formData.message) payload.message = formData.message;
  if (formData.address) payload.address = formData.address;
  if (formData.budget) payload.budget = formData.budget;
  if (formData.service) payload.service = formData.service;
  if (formData.projectType) payload.projectType = formData.projectType;
  
  // Add any other form fields that might exist
  Object.keys(formData).forEach(key => {
    if (!['name', 'email', 'phone', 'message', 'address', 'budget', 'service', 'projectType'].includes(key)) {
      const value = formData[key];
      if (value !== undefined && value !== null && value !== '') {
        payload[key] = value;
      }
    }
  });

  // Add image URLs if provided
  if (imageUrls && imageUrls.length > 0) {
    payload.images = imageUrls;
  }

  const response = await fetch(`${RENOLENS_API_BASE}/contact-form`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Form submission failed: ${errorText || response.statusText}`);
  }

  return response.json();
};

