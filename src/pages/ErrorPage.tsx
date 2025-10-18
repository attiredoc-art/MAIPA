import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, RefreshCw, AlertTriangle, MessageCircle, Bug, Zap } from 'lucide-react';

interface ErrorPageProps {
  error?: Error;
  reset?: () => void;
}

const ErrorPage: React.FC<ErrorPageProps> = ({ error, reset }) => {
  const navigate = useNavigate();

  const handleRefresh = () => {
    if (reset) {
      reset();
    } else {
      window.location.reload();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-amber-50 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-64 w-64 bg-gradient-to-br from-red-200 to-orange-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
          </div>

          <div className="relative">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="bg-gradient-to-br from-red-500 to-orange-600 p-4 rounded-2xl shadow-lg animate-bounce">
                <AlertTriangle className="h-12 w-12 text-white" />
              </div>
              <div className="bg-gradient-to-br from-amber-500 to-yellow-600 p-4 rounded-2xl shadow-lg" style={{ animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}>
                <Zap className="h-12 w-12 text-white" />
              </div>
              <div className="bg-gradient-to-br from-orange-500 to-red-600 p-4 rounded-2xl shadow-lg animate-bounce" style={{ animationDelay: '150ms' }}>
                <Bug className="h-12 w-12 text-white" />
              </div>
            </div>

            <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-4">
              Oops!
            </h1>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Something Went Wrong
            </h2>

            <p className="text-lg text-gray-600 mb-4 max-w-md mx-auto">
              We encountered an unexpected error. Don't worry, our team has been notified and we're working on it.
            </p>

            {error && (
              <div className="mb-8 p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-red-200 max-w-lg mx-auto">
                <p className="text-sm font-mono text-red-700 text-left break-all">
                  {error.message || 'Unknown error occurred'}
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <button
            onClick={handleRefresh}
            className="group flex items-center gap-2 px-6 py-3 bg-white text-gray-700 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-200"
          >
            <RefreshCw className="h-5 w-5 group-hover:rotate-180 transition-transform duration-500" />
            Try Again
          </button>

          <button
            onClick={() => navigate('/')}
            className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-red-500/50 transition-all duration-300 transform hover:-translate-y-1"
          >
            <Home className="h-5 w-5" />
            Back to Home
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12">
          <div className="p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300">
            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-3 rounded-xl w-fit mx-auto mb-3">
              <MessageCircle className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Contact Support</h3>
            <p className="text-sm text-gray-600 mb-3">
              Get help from our support team
            </p>
            <button
              onClick={() => navigate('/contact')}
              className="text-sm px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200 font-medium"
            >
              Get Help
            </button>
          </div>

          <div className="p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300">
            <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-3 rounded-xl w-fit mx-auto mb-3">
              <Bug className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Report a Bug</h3>
            <p className="text-sm text-gray-600 mb-3">
              Help us improve by reporting issues
            </p>
            <button
              onClick={() => navigate('/contact')}
              className="text-sm px-4 py-2 text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors duration-200 font-medium"
            >
              Report Issue
            </button>
          </div>
        </div>

        <div className="mt-8 text-sm text-gray-500">
          Error ID: {Math.random().toString(36).substring(2, 15)}
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
