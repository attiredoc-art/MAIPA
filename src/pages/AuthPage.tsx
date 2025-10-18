import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Mail, Lock, User, Eye, EyeOff, ArrowRight, Calendar, Brain, Shield, CheckCircle, Zap } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const AuthPage: React.FC = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');

  const navigate = useNavigate();
  const { signIn, signUp } = useAuth();

  const features = [
    { icon: <Calendar className="h-5 w-5" />, text: "Smart calendar management" },
    { icon: <Brain className="h-5 w-5" />, text: "AI-powered scheduling" },
    { icon: <Shield className="h-5 w-5" />, text: "Enterprise-grade security" },
    { icon: <Zap className="h-5 w-5" />, text: "Real-time sync across devices" }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const validateForm = () => {
    if (!formData.email || !formData.password) {
      setError('Please fill in all required fields');
      return false;
    }

    if (isSignUp) {
      if (!formData.name) {
        setError('Please enter your name');
        return false;
      }
      if (formData.password.length < 6) {
        setError('Password must be at least 6 characters');
        return false;
      }
      if (formData.password !== formData.confirmPassword) {
        setError('Passwords do not match');
        return false;
      }
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);
    setError('');

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));

      if (isSignUp) {
        await signUp(formData.email, formData.password, formData.name);
      } else {
        await signIn(formData.email, formData.password);
      }

      navigate('/dashboard');
    } catch (err) {
      setError('Authentication failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="hidden lg:block">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl blur-3xl opacity-20"></div>
            <div className="relative bg-white rounded-3xl shadow-2xl p-8 lg:p-12 border border-gray-100">
              <div className="flex items-center mb-8">
                <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-3 rounded-2xl shadow-lg">
                  <Sparkles className="h-8 w-8 text-white" />
                </div>
                <div className="ml-4">
                  <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    MAIPA
                  </h1>
                  <p className="text-sm text-gray-600">My AI Personal Assistant</p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Your AI-powered productivity companion
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                Join thousands of users who have transformed their daily workflow with intelligent calendar management and AI assistance.
              </p>

              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 group">
                    <div className="flex-shrink-0 bg-blue-50 text-blue-600 p-2.5 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                      {feature.icon}
                    </div>
                    <span className="text-gray-700 font-medium">{feature.text}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-8 border-t border-gray-200">
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">50K+</div>
                    <div className="text-sm text-gray-600 mt-1">Active Users</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">1M+</div>
                    <div className="text-sm text-gray-600 mt-1">Events Managed</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">4.9</div>
                    <div className="text-sm text-gray-600 mt-1">App Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-10 border border-gray-100">
            <div className="lg:hidden flex items-center justify-center mb-8">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-3 rounded-2xl shadow-lg">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <div className="ml-4">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  MAIPA
                </h1>
                <p className="text-xs text-gray-600">My AI Personal Assistant</p>
              </div>
            </div>

            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                {isSignUp ? 'Create your account' : 'Welcome back'}
              </h2>
              <p className="text-gray-600">
                {isSignUp
                  ? 'Start your journey to better productivity'
                  : 'Sign in to continue to your dashboard'}
              </p>
            </div>

            <div className="flex gap-2 mb-8 bg-gray-100 p-1.5 rounded-xl">
              <button
                onClick={() => {
                  setIsSignUp(false);
                  setError('');
                  setFormData({ name: '', email: '', password: '', confirmPassword: '' });
                }}
                className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all duration-300 ${
                  !isSignUp
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Sign In
              </button>
              <button
                onClick={() => {
                  setIsSignUp(true);
                  setError('');
                  setFormData({ name: '', email: '', password: '', confirmPassword: '' });
                }}
                className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all duration-300 ${
                  isSignUp
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Sign Up
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {isSignUp && (
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="block w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="John Doe"
                    />
                  </div>
                </div>
              )}

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="block w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={handleInputChange}
                    className="block w-full pl-12 pr-12 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                    )}
                  </button>
                </div>
              </div>

              {isSignUp && (
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type={showPassword ? 'text' : 'password'}
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className="block w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="••••••••"
                    />
                  </div>
                </div>
              )}

              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm">
                  {error}
                </div>
              )}

              {!isSignUp && (
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-gray-600">Remember me</span>
                  </label>
                  <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                    Forgot password?
                  </a>
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3.5 px-6 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>{isSignUp ? 'Creating account...' : 'Signing in...'}</span>
                  </>
                ) : (
                  <>
                    <span>{isSignUp ? 'Create Account' : 'Sign In'}</span>
                    <ArrowRight className="h-5 w-5" />
                  </>
                )}
              </button>

              {isSignUp && (
                <p className="text-xs text-gray-500 text-center">
                  By creating an account, you agree to our{' '}
                  <a href="/terms" className="text-blue-600 hover:text-blue-700">Terms of Service</a>
                  {' '}and{' '}
                  <a href="/privacy" className="text-blue-600 hover:text-blue-700">Privacy Policy</a>
                </p>
              )}
            </form>

            <div className="mt-6 pt-6 border-t border-gray-200 text-center">
              <p className="text-sm text-gray-600">
                {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
                <button
                  onClick={() => {
                    setIsSignUp(!isSignUp);
                    setError('');
                    setFormData({ name: '', email: '', password: '', confirmPassword: '' });
                  }}
                  className="text-blue-600 hover:text-blue-700 font-semibold"
                >
                  {isSignUp ? 'Sign in' : 'Sign up for free'}
                </button>
              </p>
            </div>
          </div>

          <div className="lg:hidden mt-6 text-center text-sm text-gray-600">
            <div className="flex items-center justify-center gap-2 mb-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>50K+ Active Users</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>4.9 Star Rating</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
