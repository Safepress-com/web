const API_BASE_URL = 'https://api.safepress.com';

export interface ContactFormData {
  fullName: string;
  company: string;
  email: string;
  telegram: string;
  howCanWeHelp: string;
  message: string;
}

export interface ApiResponse<T = any> {
  success: boolean;
  message?: string;
  data?: T;
  error?: string;
  details?: string[];
  missingFields?: string[];
  retryAfter?: number;
}

export interface ContactSubmissionResponse {
  id: string;
  fullName: string;
  company: string;
  email: string;
  telegram: string;
  howCanWeHelp: string;
  message: string;
  createdAt: string;
}

export class ApiError extends Error {
  public status?: number;
  public details?: string[];
  public retryAfter?: number;

  constructor(
    message: string,
    status?: number,
    details?: string[],
    retryAfter?: number
  ) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.details = details;
    this.retryAfter = retryAfter;
  }
}

export async function submitContactForm(formData: ContactFormData): Promise<ContactSubmissionResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result: ApiResponse<ContactSubmissionResponse> = await response.json();

    if (!response.ok) {
      // Handle specific error cases
      if (response.status === 429) {
        throw new ApiError(
          result.message || 'Too many requests. Please try again later.',
          429,
          undefined,
          result.retryAfter
        );
      }

      if (response.status === 400) {
        if (result.missingFields?.length) {
          throw new ApiError(
            `Missing required fields: ${result.missingFields.join(', ')}`,
            400,
            result.missingFields
          );
        }

        if (result.details?.length) {
          throw new ApiError(
            'Validation failed',
            400,
            result.details
          );
        }
      }

      throw new ApiError(
        result.error || 'Failed to submit form',
        response.status
      );
    }

    if (!result.success || !result.data) {
      throw new ApiError('Unexpected response format');
    }

    return result.data;
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }

    // Network or other errors
    if (error instanceof TypeError && error.message.includes('fetch')) {
      throw new ApiError('Network error. Please check your connection and try again.');
    }

    throw new ApiError('An unexpected error occurred. Please try again.');
  }
}

export async function checkApiHealth(): Promise<boolean> {
  try {
    const response = await fetch(`${API_BASE_URL}/health`);
    const result = await response.json();
    return result.status === 'OK';
  } catch {
    return false;
  }
}