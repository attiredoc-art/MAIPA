import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, User, LogOut, Settings, ChevronDown, Sparkles } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, signOut } = useAuth();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const handleSignOut = () => {
    signOut();
    setIsProfileOpen(false);
    navigate('/');
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl blur-sm opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-br from-blue-600 to-indigo-600 p-2.5 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
            </div>
            <div className="ml-3">
              <div className="flex items-baseline">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent tracking-tight">
                  MAIPA
                </h1>
              </div>
              <p className="text-xs text-gray-500 -mt-0.5">My AI Personal Assistant</p>
            </div>
          </Link>

          <div className="flex items-center gap-4">
            <nav className="hidden md:flex space-x-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                    isActive(item.href)
                      ? 'text-blue-600 bg-blue-50 shadow-sm'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {user ? (
              <div className="hidden md:block relative">
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-gray-50 transition-all duration-200 group"
                >
                  <div className="relative">
                    {user.avatar ? (
                      <img
                        src={user.avatar}
                        alt={user.name}
                        className="h-8 w-8 rounded-full ring-2 ring-blue-100 group-hover:ring-blue-200 transition-all duration-200"
                      />
                    ) : (
                      <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center ring-2 ring-blue-100 group-hover:ring-blue-200 transition-all duration-200">
                        <User className="h-4 w-4 text-white" />
                      </div>
                    )}
                    <div className="absolute -bottom-0.5 -right-0.5 h-3 w-3 bg-green-500 rounded-full border-2 border-white"></div>
                  </div>
                  <span className="text-sm font-medium text-gray-700 max-w-24 truncate hidden lg:block">
                    {user.name}
                  </span>
                  <ChevronDown className={`h-4 w-4 text-gray-500 transition-transform duration-200 ${isProfileOpen ? 'rotate-180' : ''}`} />
                </button>

                {isProfileOpen && (
                  <>
                    <div
                      className="fixed inset-0 z-10"
                      onClick={() => setIsProfileOpen(false)}
                    ></div>
                    <div className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-20 animate-in fade-in slide-in-from-top-2 duration-200">
                      <div className="px-4 py-3 border-b border-gray-100">
                        <p className="text-sm font-semibold text-gray-900">{user.name}</p>
                        <p className="text-xs text-gray-500 truncate">{user.email}</p>
                      </div>
                      <div className="py-1">
                        <button
                          onClick={() => {
                            setIsProfileOpen(false);
                            navigate('/profile');
                          }}
                          className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-3 transition-colors duration-150"
                        >
                          <User className="h-4 w-4 text-gray-500" />
                          My Profile
                        </button>
                        <button
                          onClick={() => {
                            setIsProfileOpen(false);
                            navigate('/settings');
                          }}
                          className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-3 transition-colors duration-150"
                        >
                          <Settings className="h-4 w-4 text-gray-500" />
                          Settings
                        </button>
                      </div>
                      <div className="border-t border-gray-100 py-1">
                        <button
                          onClick={handleSignOut}
                          className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 flex items-center gap-3 transition-colors duration-150"
                        >
                          <LogOut className="h-4 w-4" />
                          Sign Out
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ) : (
              <div className="hidden md:flex items-center gap-3">
                <Link
                  to="/auth"
                  className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors duration-200"
                >
                  Sign In
                </Link>
                <Link
                  to="/auth"
                  className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  Get Started
                </Link>
              </div>
            )}

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-xl text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition-all duration-200"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium text-left transition-all duration-200 ${
                    isActive(item.href)
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              {user ? (
                <>
                  <div className="border-t border-gray-200 my-2"></div>
                  <div className="px-4 py-2">
                    <div className="flex items-center gap-3 mb-3">
                      {user.avatar ? (
                        <img
                          src={user.avatar}
                          alt={user.name}
                          className="h-10 w-10 rounded-full ring-2 ring-blue-100"
                        />
                      ) : (
                        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center ring-2 ring-blue-100">
                          <User className="h-5 w-5 text-white" />
                        </div>
                      )}
                      <div>
                        <p className="text-sm font-semibold text-gray-900">{user.name}</p>
                        <p className="text-xs text-gray-500 truncate">{user.email}</p>
                      </div>
                    </div>
                  </div>
                  <Link
                    to="/profile"
                    onClick={() => setIsMenuOpen(false)}
                    className="px-4 py-2 rounded-xl text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50 flex items-center gap-3"
                  >
                    <User className="h-4 w-4" />
                    My Profile
                  </Link>
                  <Link
                    to="/settings"
                    onClick={() => setIsMenuOpen(false)}
                    className="px-4 py-2 rounded-xl text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50 flex items-center gap-3"
                  >
                    <Settings className="h-4 w-4" />
                    Settings
                  </Link>
                  <button
                    onClick={() => {
                      handleSignOut();
                      setIsMenuOpen(false);
                    }}
                    className="w-full px-4 py-2 rounded-xl text-sm font-medium text-red-600 hover:bg-red-50 flex items-center gap-3 text-left"
                  >
                    <LogOut className="h-4 w-4" />
                    Sign Out
                  </button>
                </>
              ) : (
                <>
                  <div className="border-t border-gray-200 my-2"></div>
                  <Link
                    to="/auth"
                    onClick={() => setIsMenuOpen(false)}
                    className="px-4 py-2 rounded-xl text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50 text-left"
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/auth"
                    onClick={() => setIsMenuOpen(false)}
                    className="mx-4 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl text-center"
                  >
                    Get Started
                  </Link>
                </>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
