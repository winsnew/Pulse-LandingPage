import { PasswordValid, Token } from "./types";

export const tokenService = {
  setTokens(tokens: Token) {
    localStorage.setItem('access_token', tokens.access_token);
    localStorage.setItem('refresh_token', tokens.refresh_token);
  },
  
  getAccessToken() {
    return localStorage.getItem('access_token');
  },
  
  getRefreshToken() {
    return localStorage.getItem('refresh_token');
  },
  
  clearTokens() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
  }

  
};

export const isValidEmail = (email: string): boolean => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

export const isValidPassword = (ctx: PasswordValid): boolean => {
  return (
    !ctx.subceed &&
    !ctx.exceed &&
    ctx.hasUpper && ctx.hasLower &&
    ctx.hasNumber &&
    ctx.hasSpecial
  );
};

export const getPasswordErrors = (ctx: PasswordValid): string[] => {
  const errors: string[] = [];

  if (ctx.subceed) {
    errors.push('Password must be at least 8 characters long');
  }

  if (ctx.exceed) {
    errors.push('Password must not exceed the maximum allowed length');
  }

  if (!ctx.hasUpper) {
    errors.push('Password must contain at least one uppercase letter');
  }

  if (!ctx.hasLower) {
    errors.push('Password must contain at least one lowercase letter');
  }

  if (!ctx.hasNumber) {
    errors.push('Password must contain at least one number');
  }

  if (!ctx.hasSpecial) {
    errors.push('Password must contain at least one special character');
  }

  return errors;
}

export const validatePassword = (password: string): PasswordValid => {
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  const numbers = '0123456789';
  const specials = '@!#$%&()*+-?^`~'

  const hasLower = password.split('').some(c => letters.includes(c));
  const hasUpper = password.split('').some(c => letters.toUpperCase().includes(c));
  const hasNumber = password.split('').some(c => numbers.includes(c));
  const hasSpecial = password.split('').some(c => specials.includes(c));

  const valid = {
    subceed: password.length < 8,
    exceed: password.length > 100,
    hasLower,
    hasUpper,
    hasNumber,
    hasSpecial,
  } as PasswordValid;

  return valid;
};
