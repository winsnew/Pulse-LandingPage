import { Token } from "./types";

export const tokenService = {
  setTokens(tokens: Token) {
    this.setCookie('access_token', tokens.access_token, 15 / (24 * 60)); 
    this.setCookie('refresh_token', tokens.refresh_token, 7); 
  },
  
  getAccessToken() {
    return this.getCookie('access_token');
  },
  
  getRefreshToken() {
    return this.getCookie('refresh_token');
  },
  
  clearTokens() {
    this.deleteCookie('access_token');
    this.deleteCookie('refresh_token');
  },

  setCookie(name: string, value: string, days: number) {
    if (typeof document === 'undefined') return;
    
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = `expires=${date.toUTCString()}`;
    const secure = process.env.NODE_ENV === 'production' ? '; secure' : '';
    document.cookie = `${name}=${value}; ${expires}; path=/; sameSite=lax${secure}`;
  },

  getCookie(name: string): string | null {
    if (typeof document === 'undefined') return null;
    
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
      return parts.pop()?.split(';').shift() || null;
    }
    return null;
  },

  deleteCookie(name: string) {
    if (typeof document === 'undefined') return;
    
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  }
};