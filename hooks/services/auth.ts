import { UserCreate, UserResponse, Token, EmailVerificationRequest, ApiError, ApiResponse, PasswordResetRequest, PasswordResetConfirm } from '@/lib/auth/types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

async function handleResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    const error: ApiError = await response.json().catch(() => ({
      detail: 'Network error occurred'
    }));
    throw new Error(error.detail || `HTTP error! status: ${response.status}`);
  }
  
  return await response.json();
  
  // if (result.success !== undefined && result.data !== undefined) {
  //   return result.data; 
  // }
  
  // return result;
}

export const authService = {
  async register(userData: UserCreate): Promise<UserResponse> {
    const response = await fetch(`${API_BASE_URL}/auth-ms/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
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
    const formData = new URLSearchParams();
    formData.append('username', credentials.email);
    formData.append('password', credentials.password);

    const response = await fetch(`${API_BASE_URL}/auth-ms/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      // body: JSON.stringify({
      //   email: credentials.email,
      //   password: credentials.password
      // }),
      body: formData
    });

    return handleResponse<Token>(response);
  },

  async requestPasswordReset(email: string, resetUrl: string): Promise<ApiResponse> {
    const response = await fetch(`${API_BASE_URL}/auth-ms/request-password-reset`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        reset_url: resetUrl
      }),
    });

    return handleResponse<ApiResponse>(response);
  },

  async resetPassword(resetData: PasswordResetConfirm): Promise<ApiResponse> {
  const response = await fetch(`${API_BASE_URL}/auth-ms/reset-password`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: resetData.email,
      token: resetData.token,
      password: resetData.password  
    }),
  });
  return handleResponse<ApiResponse>(response);
  },

  async checkAuthStatus() {
    const { tokenService } = await import('@/lib/auth/utils');
    const accessToken = tokenService.getAccessToken();
    
    if (!accessToken) {
      throw new Error('No access token found');
    }

    const response = await fetch(`${API_BASE_URL}/auth-ms/me`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Authentication failed');
    }

    return handleResponse<UserResponse>(response);
  }
};