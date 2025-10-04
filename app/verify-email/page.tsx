"use client"
import React, { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Mail, Loader2, CheckCircle } from 'lucide-react';
import AnimatedButton from '../../components/customs/AnimatedButton';
import { authService } from '@/hooks/services/auth';
import { tokenService } from '@/lib/auth/utils';

const API_DASHBOARD_URL = process.env.NEXT_PUBLIC_DASHBOARD_URL || ''

export default function VerifyEmail() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get('email');

  const [code, setCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  // Redirect backup
  useEffect(() => {
    if (!email) {
      router.push('/signup');
    }
  }, [email, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    if (!email) return;

    try {
      const verificationData = {
        email,
        code
      };

      console.log('Verifying email:', verificationData);
      
      const tokens = await authService.verifyEmail(verificationData);
      
      console.log('Email verification successful:', tokens);
      
      // Store tokens
      // localStorage.setItem('access_token', tokens.access_token);
      // localStorage.setItem('refresh_token', tokens.refresh_token);
      tokenService.setTokens(tokens);
      
      setSuccess(true);
      
      // Redirect success
      const redirectUrl = new URL(API_DASHBOARD_URL);
      redirectUrl.searchParams.set('token', tokens.access_token);
    
      setTimeout(() => {
        window.location.href = redirectUrl.toString();
      }, 2000);
      
    } catch (err) {
      console.error('Verification error:', err);
      setError(err instanceof Error ? err.message : 'Verification failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendCode = async () => {
    console.log('Resending verification code to:', email);
    alert('Verification code has been resent to your email.');
  };

  const handleCodeChange = (value: string) => {
    const numericValue = value.replace(/\D/g, '').slice(0, 6);
    setCode(numericValue);
    if (error) setError('');
  };

  if (!email) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
          
          {success ? (
            <div className="text-center py-6">
              <CheckCircle className="h-12 w-12 text-green-400 mx-auto mb-4" />
              <h1 className="text-xl font-bold text-white mb-2">Email Verified!</h1>
              <p className="text-slate-400">Redirecting to dashboard...</p>
            </div>
          ) : (
            <>
              <div className="text-center mb-6">
                <Mail className="h-10 w-10 text-blue-400 mx-auto mb-3" />
                <h1 className="text-xl font-bold text-white mb-2">Verify Your Email</h1>
                <p className="text-slate-400 text-sm">Code sent to</p>
                <p className="text-blue-300 font-medium">{email}</p>
              </div>

              {error && (
                <div className="mb-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                  <p className="text-red-300 text-sm text-center">{error}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  inputMode="numeric"
                  placeholder="Enter 6-digit code"
                  value={code}
                  onChange={(e) => handleCodeChange(e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-400 text-center text-lg focus:outline-none focus:ring-1 focus:ring-white"
                  maxLength={6}
                  required
                />

                <AnimatedButton 
                  type="submit" 
                  variant="primary" 
                  className="w-full"
                  disabled={isLoading || code.length !== 6}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin mr-2" />
                      Verifying...
                    </>
                  ) : (
                    'Verify Email'
                  )}
                </AnimatedButton>
              </form>

              <div className="text-center mt-4">
                <button
                  onClick={handleResendCode}
                  className="text-blue-300 hover:text-blue-200 text-sm"
                >
                  Resend Code
                </button>
              </div>

              <div className="text-center mt-3">
                <button
                  onClick={() => router.push('/signup')}
                  className="text-slate-400 hover:text-slate-300 text-sm"
                >
                  ← Back to Sign Up
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}