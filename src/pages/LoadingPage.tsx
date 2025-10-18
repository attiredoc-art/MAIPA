import React from 'react';
import { Loader2, Sparkles } from 'lucide-react';

const LoadingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center">
      <div className="text-center">
        <div className="relative inline-block mb-8">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
          <div className="relative bg-gradient-to-br from-blue-600 to-indigo-600 p-6 rounded-3xl shadow-2xl">
            <Sparkles className="h-16 w-16 text-white animate-pulse" />
          </div>
        </div>

        <div className="mb-6">
          <Loader2 className="h-12 w-12 text-blue-600 animate-spin mx-auto" />
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-2">Loading MAIPA</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Preparing your AI-powered personal assistant experience
        </p>

        <div className="flex items-center justify-center gap-2">
          <div className="h-2 w-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="h-2 w-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="h-2 w-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
