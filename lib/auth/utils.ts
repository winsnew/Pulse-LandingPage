import { Token } from "./types";

export const tokenService = {
  setTokens(tokens: Token) {
    localStorage.setItem('access_token', tokens.access_token);
    // localStorage.setItem('refresh_token', tokens.refresh_token);
    localStorage.setItem('token_type', tokens.token_type);
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