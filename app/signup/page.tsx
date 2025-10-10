"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, Lock, User, Eye, EyeOff, Loader2} from 'lucide-react';
import AnimatedButton from '../../components/customs/AnimatedButton';
import { authService } from '@/hooks/services/auth';
import { useRouter } from 'next/navigation';
import { SignupFormData } from '@/lib/auth/types';

export default function Signup() {
  const router = useRouter();
  const [formData, setFormData] = useState<SignupFormData>({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>('');
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [passwordErrors, setPasswordErrors] = useState<string[]>([]);

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
    if (value.length > 0) {
      const validation = validatePassword(value);
      setPasswordErrors(validation.errors);
    } else {
      setPasswordErrors([]);
    }
    
    if (error) setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    // Validate password match
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Validate password strength
    const passwordValidation = validatePassword(formData.password);
    if (!passwordValidation.isValid) {
      setError('Please fix the password requirements below');
      return;
    }

    if (!agreeToTerms) {
      setError('Please agree to the beta terms and privacy policy');
      return;
    }

    setIsLoading(true);

    try {
      const userData = {
        email: formData.email,
        password: formData.password,
        first_name: formData.first_name || undefined,
        last_name: formData.last_name || undefined,
      };

      console.log('tes attmpt registration:', userData);
      const response = await authService.register(userData);
      console.log('Registration res:', response);
      router.push(`/verify-email?email=${encodeURIComponent(formData.email)}`);
      
    } catch (err) {
      console.error('regist error:', err);
      setError(err instanceof Error ? err.message : 'Registration failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (field: keyof SignupFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (error) setError('');
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background with planet horizon effect */}
      <div className="absolute inset-0 "></div>

      {/* Company Logo/Name */}
      <div className="absolute top-10 left-15 z-20">
        <div className="flex items-center space-x-3">
          <img src="/favicon.png" alt="Logo" className="w-8 h-8" />
          {/* <span className="text-2xl font-bold text-white">Pulse</span> */}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="w-[80%] max-w-md mx-auto">
          {/* Glass morphism container */}
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 shadow-2xl">
            <div className="text-center mb-6">
              <h1 className="text-2xl font-bold text-white mb-1">Create Account</h1>
              <p className="text-slate-400 text-sm">Join us today</p>
            </div>

            {error && (
              <div className="mb-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                <p className="text-red-300 text-sm text-center">{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name field */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-4 w-4 text-slate-400" />
                </div>
                <input
                  type="text"
                  placeholder="First name"
                  value={formData.first_name}
                  onChange={(e) => handleInputChange('first_name', e.target.value)}
                  className="w-full pl-10 pr-3 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-200 text-sm"
                  required
                />
              </div>

              {/* Last Name field */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-4 w-4 text-slate-400" />
                </div>
                <input
                  type="text"
                  placeholder="Last name"
                  value={formData.last_name}
                  onChange={(e) => handleInputChange('last_name', e.target.value)}
                  className="w-full pl-10 pr-3 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-200 text-sm"
                />
              </div>

              {/* Email field */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-4 w-4 text-slate-400" />
                </div>
                <input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full pl-10 pr-3 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-200 text-sm"
                  required
                />
              </div>

              {/* Password field */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-4 w-4 text-slate-400" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  value={formData.password}
                  onChange={(e) => handlePasswordChange(e.target.value)}
                  className="w-full pl-10 pr-10 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-200 text-sm"
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
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="Confirm password"
                  value={formData.confirmPassword}
                  onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                  className="w-full pl-10 pr-10 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-200 text-sm"
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

              {/* Signup button */}
              <AnimatedButton type="submit" variant="primary" className="w-full mt-6" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin mr-2" />
                    Creating Account...
                  </>
                ) : (
                  'Create Account'
                )}
              </AnimatedButton>

              {/* Terms and Privacy Policy Checkbox */}
              <div className="flex items-center justify-center space-x-2">
                <input
                  type="checkbox"
                  id="agreeToTerms"
                  checked={agreeToTerms}
                  onChange={(e) => setAgreeToTerms(e.target.checked)}
                  className="mt-1 w-4 h-4 text-blue-600 bg-white/5 border-white/10 rounded focus:ring-blue-500 focus:ring-2"
                  disabled={isLoading}
                />
                <label htmlFor="agreeToTerms" className="text-slate-300 text-sm">
                  I agree to the{' '}
                  <Link href="/beta-terms" className="text-blue-300 hover:text-blue-200 underline">
                    beta terms
                  </Link>{' '}
                  and{' '}
                  <Link href="/privacy-policy" className="text-blue-300 hover:text-blue-200 underline">
                    privacy policy
                  </Link>
                </label>
              </div>

              {/* Divider */}
              <div className="relative my-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/10"></div>
                </div>
              </div>
            </form>

            {/* Login link */}
            <div className="mt-6 text-center">
              <p className="text-slate-400 text-sm">
                Already have an account?{' '}
                <Link href="/login" className="text-blue-300 hover:text-blue-200 font-medium transition-colors">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};