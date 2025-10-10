"use client";
import React, { useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { Lock, ArrowLeft, Loader2, CheckCircle, Eye, EyeOff, Mail } from "lucide-react";
import AnimatedButton from "@/components/customs/AnimatedButton";
import { authService } from "@/hooks/services/auth";

function ResetPasswordContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordErrors, setPasswordErrors] = useState<string[]>([]);
  const token = searchParams.get("token");

  const validatePassword = (password: string): { isValid: boolean; errors: string[] } => {
    const errors: string[] = [];

    // Check minimum length
    if (password.length < 8) {
      errors.push('Password must be at least 8 characters long');
    }

    // Check for uppercase letters
    if (!/(?=.*[A-Z])/.test(password)) {
      errors.push('Password must contain at least one uppercase letter');
    }

    // Check for lowercase letters
    if (!/(?=.*[a-z])/.test(password)) {
      errors.push('Password must contain at least one lowercase letter');
    }

    // Check for numbers
    if (!/(?=.*\d)/.test(password)) {
      errors.push('Password must contain at least one number');
    }

    // Check for special characters
    if (!/(?=.*[@$!%*?&])/.test(password)) {
      errors.push('Password must contain at least one special character (@$!%*?&)');
    }

    // Check for sequential patterns (like 123, abc, ABC)
    if (/(012|123|234|345|456|567|678|789|abc|bcd|cde|def|efg|fgh|ghi|hij|ijk|jkl|klm|lmn|mno|nop|opq|pqr|qrs|rst|stu|tuv|uvw|vwx|wxy|xyz|ABC|BCD|CDE|DEF|EFG|FGH|GHI|HIJ|IJK|JKL|KLM|LMN|MNO|NOP|OPQ|PQR|QRS|RST|STU|TUV|UVW|VWX|WXY|XYZ)/i.test(password)) {
      errors.push('Password contains sequential characters (like 123, abc, ABC)');
    }

    // Check for repetitive characters (like aaa, 111, AAA)
    if (/(.)\1\1/.test(password)) {
      errors.push('Password contains repetitive characters (like aaa, 111)');
    }

    // Check if characters are mixed properly (not in blocks)
    const hasMixedPattern = /[a-z].*[A-Z]|[A-Z].*[a-z]/.test(password) && 
                           /[a-zA-Z].*[0-9]|[0-9].*[a-zA-Z]/.test(password) &&
                           /[a-zA-Z0-9].*[@$!%*?&]|[@$!%*?&].*[a-zA-Z0-9]/.test(password);
    
    if (!hasMixedPattern) {
      errors.push('Password must have mixed character types (letters, numbers, symbols should be interleaved)');
    }

    // Check for common keyboard patterns (like qwerty, asdfgh)
    const commonPatterns = [/qwerty/i, /asdfgh/i, /zxcvbn/i, /password/i, /123456/i];
    for (const pattern of commonPatterns) {
      if (pattern.test(password)) {
        errors.push('Password contains common keyboard patterns');
        break;
      }
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  };

  const handlePasswordChange = (value: string) => {
    setFormData(prev => ({ ...prev, password: value }));
    
    // Real-time password validation feedback
    if (value.length > 0) {
      const validation = validatePassword(value);
      setPasswordErrors(validation.errors);
    } else {
      setPasswordErrors([]);
    }
    
    if (error) setError('');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    if (name === "password") {
      handlePasswordChange(value);
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
    
    if (error) setError("");
  };

  const validateForm = (): boolean => {
    if (!formData.email) {
      setError("Email is required");
      return false;
    }

    if (!formData.password) {
      setError("Password is required");
      return false;
    }

    // Use the enhanced password validation
    const passwordValidation = validatePassword(formData.password);
    if (!passwordValidation.isValid) {
      setError("Please fix the password requirements below");
      return false;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!token) {
      setError("Invalid or missing reset token");
      return;
    }

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      await authService.resetPassword({
        email: formData.email,
        token: token,
        password: formData.password
      });

      setSuccess(true);
      
      setTimeout(() => {
        router.push("/login");
      }, 3000);

    } catch (err) {
      console.error("Password reset error:", err);
      setError(
        err instanceof Error
          ? err.message
          : "Failed to reset password. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  {/* Validate Token */}
  if (!token) {
    return (
      <div className="min-h-screen relative overflow-hidden">
        <div className="absolute inset-0"></div>

        {/* Content */}
        <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
          <div className="w-[80%] max-w-md mx-auto">
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 shadow-2xl text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center">
                  <Lock className="h-8 w-8 text-red-400" />
                </div>
              </div>

              <h1 className="text-2xl font-bold text-white mb-4">
                Invalid Reset Link
              </h1>

              <p className="text-slate-300 mb-6">
                This password reset link is invalid or has expired. Please request a new reset link.
              </p>

              <div className="space-y-4">
                <Link href="/forgot-password">
                  <AnimatedButton variant="primary" className="w-full" disabled>
                    Request New Reset Link
                  </AnimatedButton>
                </Link>

                <Link
                  href="/login"
                  className="inline-flex items-center text-slate-400 hover:text-white transition-colors text-sm"
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

  if (success) {
    return (
      <div className="min-h-screen relative overflow-hidden">
        <div className="absolute inset-0"></div>

        {/* Content */}
        <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
          <div className="w-[80%] max-w-md mx-auto">
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 shadow-2xl text-center">
              <div className="flex justify-center mb-4">
                <CheckCircle className="h-16 w-16 text-green-400" />
              </div>

              <h1 className="text-2xl font-bold text-white mb-4">
                Password Reset Successful!
              </h1>

              <p className="text-slate-300 mb-6">
                Your password has been successfully reset. You will be redirected to the login page shortly.
              </p>

              <div className="animate-pulse text-slate-400 text-sm">
                Redirecting to login...
              </div>

              <div className="mt-6 pt-6 border-t border-white/10">
                <Link
                  href="/login"
                  className="inline-flex items-center text-blue-300 hover:text-blue-200 transition-colors"
                >
                  Go to Login Now
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

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="w-[80%] max-w-md mx-auto">
          {/* Glass morphism container */}
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 shadow-2xl">
            <div className="text-center mb-6">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <Lock className="h-6 w-6 text-blue-400" />
                </div>
              </div>
              <h1 className="text-2xl font-bold text-white mb-1">
                Set New Password
              </h1>
              <p className="text-slate-400 text-sm">
                Enter your email and new password to reset your account
              </p>
            </div>

            {/* Error Message */}
            {error && (
              <div className="mb-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                <p className="text-red-300 text-sm text-center">{error}</p>
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
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-10 pr-3 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm"
                  disabled={isLoading}
                  required
                />
              </div>

              {/* New Password field */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-4 w-4 text-slate-400" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="New password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full pl-10 pr-10 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm"
                  disabled={isLoading}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>

              {/* Password Requirements */}
              {formData.password.length > 0 && (
                <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                  <p className="text-slate-300 text-sm font-medium mb-2">Password Requirements:</p>
                  <ul className="text-xs space-y-1">
                    <li className={`flex items-center ${formData.password.length >= 8 ? 'text-green-400' : 'text-red-400'}`}>
                      <span className="w-2 h-2 rounded-full bg-current mr-2"></span>
                      At least 8 characters long
                    </li>
                    <li className={`flex items-center ${/(?=.*[A-Z])/.test(formData.password) ? 'text-green-400' : 'text-red-400'}`}>
                      <span className="w-2 h-2 rounded-full bg-current mr-2"></span>
                      One uppercase letter
                    </li>
                    <li className={`flex items-center ${/(?=.*[a-z])/.test(formData.password) ? 'text-green-400' : 'text-red-400'}`}>
                      <span className="w-2 h-2 rounded-full bg-current mr-2"></span>
                      One lowercase letter
                    </li>
                    <li className={`flex items-center ${/(?=.*\d)/.test(formData.password) ? 'text-green-400' : 'text-red-400'}`}>
                      <span className="w-2 h-2 rounded-full bg-current mr-2"></span>
                      One number
                    </li>
                    <li className={`flex items-center ${/(?=.*[@$!%*?&])/.test(formData.password) ? 'text-green-400' : 'text-red-400'}`}>
                      <span className="w-2 h-2 rounded-full bg-current mr-2"></span>
                      One special character (@$!%*?&)
                    </li>
                    <li className={`flex items-center ${!/(012|123|234|345|456|567|678|789|abc|bcd|cde|def|efg|fgh|ghi|hij|ijk|jkl|klm|lmn|mno|nop|opq|pqr|qrs|rst|stu|tuv|uvw|vwx|wxy|xyz|ABC|BCD|CDE|DEF|EFG|FGH|GHI|HIJ|IJK|JKL|KLM|LMN|MNO|NOP|OPQ|PQR|QRS|RST|STU|TUV|UVW|VWX|WXY|XYZ)/i.test(formData.password) ? 'text-green-400' : 'text-red-400'}`}>
                      <span className="w-2 h-2 rounded-full bg-current mr-2"></span>
                      No sequential patterns
                    </li>
                    <li className={`flex items-center ${!/(.)\1\1/.test(formData.password) ? 'text-green-400' : 'text-red-400'}`}>
                      <span className="w-2 h-2 rounded-full bg-current mr-2"></span>
                      No repetitive characters
                    </li>
                  </ul>
                  
                  {/* Specific error messages */}
                  {passwordErrors.length > 0 && (
                    <div className="mt-2 p-2 bg-red-500/10 border border-red-500/20 rounded">
                      <p className="text-red-300 text-xs font-medium mb-1">Current issues:</p>
                      <ul className="text-red-300 text-xs space-y-1">
                        {passwordErrors.map((error, index) => (
                          <li key={index} className="flex items-start">
                            <span className="mr-1">•</span>
                            {error}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}

              {/* Confirm Password field */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-4 w-4 text-slate-400" />
                </div>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Confirm new password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full pl-10 pr-10 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm"
                  disabled={isLoading}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-white transition-colors"
                >
                  {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>

              {/* Password match indicator */}
              {formData.confirmPassword.length > 0 && (
                <div className={`text-xs p-2 rounded ${
                  formData.password === formData.confirmPassword 
                    ? 'bg-green-500/10 text-green-400 border border-green-500/20' 
                    : 'bg-red-500/10 text-red-400 border border-red-500/20'
                }`}>
                  {formData.password === formData.confirmPassword 
                    ? '✓ Passwords match' 
                    : '✗ Passwords do not match'
                  }
                </div>
              )}

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
                    Resetting Password...
                  </>
                ) : (
                  "Reset Password"
                )}
              </AnimatedButton>
            </form>

            {/* Additional links */}
            <div className="mt-6 text-center space-y-2">
              <p className="text-slate-400 text-sm">
                Remember your password?{" "}
                <Link
                  href="/login"
                  className="text-blue-300 hover:text-blue-200 font-medium transition-colors"
                >
                  Back to Login
                </Link>
              </p>
              <p className="text-slate-400 text-sm">
                Need a new reset link?{" "}
                <Link
                  href="/forgot-password"
                  className="text-blue-300 hover:text-blue-200 font-medium transition-colors"
                >
                  Request Again
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Main component dengan Suspense boundary
export default function ResetPasswordPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="flex items-center space-x-2 text-slate-400">
            <Loader2 className="h-6 w-6 animate-spin" />
            <span>Loading...</span>
          </div>
        </div>
      }
    >
      <ResetPasswordContent />
    </Suspense>
  );
}