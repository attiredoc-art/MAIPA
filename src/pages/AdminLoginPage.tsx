import React, { useState } from 'react';
import { Shield, Smartphone, AlertCircle, Key, RefreshCw, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AdminLoginPage: React.FC = () => {
  const [loginStep, setLoginStep] = useState<'credentials' | 'mfa'>('credentials');
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [mfaCode, setMfaCode] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleCredentialsSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    setTimeout(() => {
      setIsLoading(false);
      if (credentials.username === 'admin' && credentials.password === 'secure123') {
        setLoginStep('mfa');
      } else {
        setError('Invalid credentials. Use admin/secure123');
      }
    }, 1500);
  };

  const handleMfaSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      if (mfaCode === '123456') {
        navigate('/admin/dashboard');
      } else {
        setError('Invalid MFA code. Use 123456');
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-4 sm:left-10 w-24 h-24 sm:w-32 sm:h-32 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-4 sm:right-20 w-32 h-32 sm:w-40 sm:h-40 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-4 sm:left-20 w-28 h-28 sm:w-36 sm:h-36 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
        <div className="absolute bottom-40 right-4 sm:right-10 w-20 h-20 sm:w-28 sm:h-28 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-1000"></div>
      </div>

      <div className="max-w-md w-full relative z-10">
        <div className="bg-white/10 backdrop-blur-lg p-6 sm:p-8 rounded-3xl shadow-2xl border border-white/20">
          {/* Header */}
          <div className="text-center mb-6 sm:mb-8">
            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white p-3 sm:p-4 rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg">
              <Shield className="h-6 w-6 sm:h-8 sm:w-8" />
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-white mb-2">Secure Admin Access</h1>
            <p className="text-sm sm:text-base text-gray-300">
              {loginStep === 'mfa' ? 'Multi-Factor Authentication Required' : 'High-Security Administrative Portal'}
            </p>
          </div>

          {/* Security Indicators */}
          <div className="mb-4 sm:mb-6 flex flex-wrap justify-center gap-2 sm:gap-4 text-xs text-gray-300">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              256-bit Encryption
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              MFA Protected
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              Zero Trust
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-4 sm:mb-6 bg-red-500/20 border border-red-500/30 p-3 sm:p-4 rounded-xl flex items-center backdrop-blur-sm">
              <AlertCircle className="h-4 w-4 sm:h-5 sm:w-5 text-red-400 mr-2 sm:mr-3 flex-shrink-0" />
              <p className="text-xs sm:text-sm text-red-200">{error}</p>
            </div>
          )}

          {/* Demo Credentials */}
          <div className="mb-4 sm:mb-6 bg-blue-500/20 border border-blue-500/30 p-3 sm:p-4 rounded-xl backdrop-blur-sm">
            <h3 className="text-xs sm:text-sm font-semibold text-blue-200 mb-2">Demo Access:</h3>
            <div className="text-xs text-blue-100 space-y-1">
              <p><strong>Username:</strong> admin | <strong>Password:</strong> secure123</p>
              <p><strong>MFA Code:</strong> 123456</p>
            </div>
          </div>

          {loginStep === 'credentials' ? (
            <form onSubmit={handleCredentialsSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-200 mb-2">
                  Administrator Username
                </label>
                <input
                  type="text"
                  id="username"
                  value={credentials.username}
                  onChange={(e) => setCredentials(prev => ({ ...prev, username: e.target.value }))}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 text-white placeholder-gray-400 backdrop-blur-sm text-sm sm:text-base"
                  placeholder="Enter admin username"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-200 mb-2">
                  Secure Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    value={credentials.password}
                    onChange={(e) => setCredentials(prev => ({ ...prev, password: e.target.value }))}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 text-white placeholder-gray-400 backdrop-blur-sm pr-10 sm:pr-12 text-sm sm:text-base"
                    placeholder="Enter secure password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4 sm:h-5 sm:w-5" /> : <Eye className="h-4 w-4 sm:h-5 sm:w-5" />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center group backdrop-blur-sm text-sm sm:text-base"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-b-2 border-white mr-2"></div>
                    Authenticating...
                  </>
                ) : (
                  <>
                    Proceed to MFA
                    <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </>
                )}
              </button>
            </form>
          ) : (
            <form onSubmit={handleMfaSubmit} className="space-y-4 sm:space-y-6">
              <div className="text-center mb-4 sm:mb-6">
                <div className="bg-gradient-to-br from-orange-500 to-red-600 text-white p-2 sm:p-3 rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg">
                  <Smartphone className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <p className="text-xs sm:text-sm text-gray-300">
                  Enter the 6-digit verification code from your authenticator app
                </p>
              </div>

              <div>
                <label htmlFor="mfaCode" className="block text-sm font-medium text-gray-200 mb-2">
                  Authentication Code
                </label>
                <input
                  type="text"
                  id="mfaCode"
                  value={mfaCode}
                  onChange={(e) => setMfaCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
                  required
                  maxLength={6}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 text-white placeholder-gray-400 text-center text-lg sm:text-2xl font-mono tracking-widest backdrop-blur-sm"
                  placeholder="000000"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading || mfaCode.length !== 6}
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center group backdrop-blur-sm text-sm sm:text-base"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-b-2 border-white mr-2"></div>
                    Verifying...
                  </>
                ) : (
                  <>
                    Access Admin Dashboard
                    <Shield className="h-3 w-3 sm:h-4 sm:w-4 ml-2 group-hover:scale-110 transition-transform duration-200" />
                  </>
                )}
              </button>

              <div className="text-center">
                <button
                  type="button"
                  onClick={() => setLoginStep('credentials')}
                  className="text-xs sm:text-sm text-gray-300 hover:text-white transition-colors duration-200"
                >
                  ← Back to Credentials
                </button>
              </div>
            </form>
          )}

          {/* Security Footer */}
          <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-white/20">
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-gray-400">
              <div className="flex items-center">
                <Lock className="h-3 w-3 mr-1" />
                End-to-End Encrypted
              </div>
              <div className="flex items-center">
                <Key className="h-3 w-3 mr-1" />
                Hardware Security
              </div>
              <div className="flex items-center">
                <RefreshCw className="h-3 w-3 mr-1" />
                Session Timeout
              </div>
            </div>
          </div>
        </div>

        {/* Additional Security Notice */}
        <div className="my-4 sm:mt-6 bg-yellow-500/20 border border-yellow-500/30 p-3 sm:p-4 rounded-xl backdrop-blur-sm">
          <div className="flex items-start">
            <AlertCircle className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="text-xs sm:text-sm font-semibold text-yellow-200 mb-1">High Security Zone</h3>
              <p className="text-xs text-yellow-100">
                All access attempts are monitored and logged. Unauthorized access will trigger security protocols.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLoginPage;