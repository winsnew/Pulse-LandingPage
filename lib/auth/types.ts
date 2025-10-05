export interface UserCreate {
  email: string;
  password: string;
  first_name?: string;
  last_name?: string;
}

export interface SignupFormData {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface UserResponse {
  id: number;
  email: string;
  first_name: string | null;
  last_name: string | null;
  is_active: boolean;
  is_verified: boolean;
  created_at: string;
  updated_at: string;
}

export interface Token {
  access_token: string;
  refresh_token: string;
  token_type: string;
}

export interface EmailVerificationRequest {
  email: string;
  code: string;
}

export interface PasswordResetRequest {
  email: string;
  reset_url: string;
}

export interface PasswordResetConfirm {
  email: string;
  token: string;
  password: string;
}

export interface PasswordChange {
  current_password: string;
  password: string;  
}

export interface ApiResponse {
  message: string;
  success?: boolean;
}

export interface ApiError {
  detail: string;
  status_code?: number;
}