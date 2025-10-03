import { UserCreate, UserResponse, Token, EmailVerificationRequest } from '@/lib/auth/types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

async function handleResponse<T>(response: Response): Promise<T> {
   if (!response.ok) {
    const errorData = await response.json().catch(() => ({
      detail: 'Network error occurred'
    }));
    throw new Error(errorData.detail || `HTTP error! status: ${response.status}`);
  }
  
  const result = await response.json();
  return result;
  
}

export const authService = {
  async register(userData: UserCreate): Promise<UserResponse> {
    const response = await fetch(`${API_BASE_URL}/auth-ms/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
      // credentials: 'include'
    });

    return handleResponse<UserResponse>(response);
  },

  async verifyEmail(verificationData: EmailVerificationRequest): Promise<Token> {
    const response = await fetch(`${API_BASE_URL}/auth-ms/verify-email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(verificationData),
      // credentials: 'include'
    });

    return handleResponse<Token>(response);
  },

  async login(credentials: { email: string; password: string }): Promise<Token> {
    // const formData = new URLSearchParams();
    // formData.append('username', credentials.email);
    // formData.append('password', credentials.password);

    const response = await fetch(`${API_BASE_URL}/auth-ms/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
      // credentials: 'include',
    });

    return handleResponse<Token>(response);
  },
};