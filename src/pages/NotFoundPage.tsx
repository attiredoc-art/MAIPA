import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, Search, ArrowLeft, Compass, AlertCircle } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-64 w-64 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
          </div>

          <div className="relative">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-4 rounded-2xl shadow-lg animate-bounce">
                <Compass className="h-12 w-12 text-white" />
              </div>
              <div className="bg-gradient-to-br from-amber-500 to-orange-600 p-4 rounded-2xl shadow-lg animate-pulse">
                <AlertCircle className="h-12 w-12 text-white" />
              </div>
              <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-4 rounded-2xl shadow-lg animate-bounce" style={{ animationDelay: '150ms' }}>
                <Search className="h-12 w-12 text-white" />
              </div>
            </div>

            <h1 className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
              404
            </h1>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Page Not Found
            </h2>

            <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
              Oops! The page you're looking for seems to have wandered off into the digital void. Let's get you back on track.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => navigate(-1)}
            className="group flex items-center gap-2 px-6 py-3 bg-white text-gray-700 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-200"
          >
            <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform duration-300" />
            Go Back
          </button>

          <button
            onClick={() => navigate('/')}
            className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:-translate-y-1"
          >
            <Home className="h-5 w-5" />
            Back to Home
          </button>
        </div>

        <div className="mt-12 p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-gray-200">
          <h3 className="font-semibold text-gray-900 mb-3">Need Help?</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => navigate('/about')}
              className="text-sm px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
            >
              About Us
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="text-sm px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
            >
              Contact Support
            </button>
            <button
              onClick={() => navigate('/pricing')}
              className="text-sm px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
            >
              View Pricing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
