"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Mail, ArrowLeft, Loader2, CheckCircle } from "lucide-react";
import AnimatedButton from "../../components/customs/AnimatedButton";
import { authService } from "@/hooks/services/auth";
import { isValidEmail } from "@/lib/auth/utils";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!isValidEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }
    
    try {
      setIsLoading(true);
      const resetUrl = `${window.location.origin}/reset-password`;

      await authService.requestPasswordReset(email, resetUrl);

      setEmailSent(true);
      setSuccess(true);
    } catch (err) {
      setError("Failed to send reset email. Please try again.");
      setSuccess(false);
    } finally {
      setIsLoading(false);
    }
  };

  if (emailSent) {
    return (
      <div className="min-h-screen relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0"></div>

        {/* Company Logo */}
        <div className="absolute top-10 left-15 z-20">
          <div className="flex items-center space-x-3">
            <img src="/favicon.png" alt="Logo" className="w-8 h-8" />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
          <div className="w-[80%] max-w-md mx-auto">
            {/* Success Card */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 shadow-2xl text-center">
              <div className="flex justify-center mb-4">
                <CheckCircle className="h-16 w-16 text-green-400" />
              </div>

              <h1 className="text-2xl font-bold text-white mb-4">
                Check Your Email
              </h1>

              <p className="text-slate-300 mb-6">
                We've sent a password reset link to{" "}
                <strong className="text-white">{email}</strong>. Please check
                your inbox and follow the instructions to reset your password.
              </p>

              <div className="space-y-3">
                <p className="text-slate-400 text-sm">
                  Didn't receive the email? Check your spam folder or
                </p>

                <button
                  onClick={() => setEmailSent(false)}
                  className="text-blue-300 hover:text-blue-200 font-medium transition-colors"
                >
                  Try again with a different email
                </button>
              </div>

              <div className="mt-6 pt-6 border-t border-white/10">
                <Link
                  href="/login"
                  className="inline-flex items-center text-slate-400 hover:text-white transition-colors"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0"></div>

      {/* Company Logo/Name */}
      <div className="absolute top-10 left-15 z-20">
        {/* <div className="flex items-center space-x-3">
          <img src="/favicon.png" alt="Logo" className="w-8 h-8" />
        </div> */}
        <Link
          href="/login"
          className="inline-flex items-center text-slate-400 hover:text-white transition-colors mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Login
        </Link>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="w-[80%] max-w-md mx-auto">
          {/* Glass morphism container */}
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 shadow-2xl">
            <div className="text-center mb-6">
              <h1 className="text-2xl font-bold text-white mb-1">
                Reset Your Password
              </h1>
              <p className="text-slate-400 text-sm">
                Enter your email address and we'll send you a link to reset your password
              </p>
            </div>

            {/* Error Message */}
            {error && (
              <div className="mb-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                <p className="text-red-300 text-sm text-center">{error}</p>
              </div>
            )}

            {/* Success Message */}
            {success && (
              <div className="mb-4 p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                <p className="text-green-300 text-sm text-center">
                  Reset email sent successfully!
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Email field */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-4 w-4 text-slate-400" />
                </div>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-3 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-200 text-sm"
                  disabled={isLoading}
                  required
                />
              </div>

              {/* Submit button */}
              <AnimatedButton
                type="submit"
                variant="primary"
                className="w-full"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin mr-2" />
                    Sending Reset Link...
                  </>
                ) : (
                  "Send Reset Link"
                )}
              </AnimatedButton>
            </form>

            {/* Sign up link */}
            <div className="mt-6 text-center">
              <p className="text-slate-400 text-sm">
                Don't have an account?{" "}
                <Link
                  href="/signup"
                  className="text-blue-300 hover:text-blue-200 font-medium transition-colors"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}