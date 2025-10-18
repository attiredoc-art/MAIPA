import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Mail, Shield, FileText, Scale, Home, User } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-2 rounded-xl">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <div className="ml-3">
                <h3 className="text-xl font-bold">MAIPA</h3>
                <p className="text-xs text-gray-400">My AI Personal Assistant</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Your intelligent companion for seamless calendar management and productivity optimization. 
              Powered by advanced AI to help you make the most of every day.
            </p>
            <div className="flex items-center text-gray-300">
              <Mail className="h-4 w-4 mr-2" />
              <span>support@maipa.com</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              <Link
                to="/"
                className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center"
              >
                <Home className="h-4 w-4 mr-1" />
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center"
              >
                <User className="h-4 w-4 mr-1" />
                About
              </Link>
              <Link
                to="/contact"
                className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center"
              >
                <Mail className="h-4 w-4 mr-1" />
                Contact
              </Link>
              <Link
                to="/privacy"
                className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center"
              >
                <Shield className="h-4 w-4 mr-1" />
                Privacy
              </Link>
              <Link
                to="/terms"
                className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center"
              >
                <FileText className="h-4 w-4 mr-1" />
                Terms
              </Link>
              <Link
                to="/legal"
                className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center"
              >
                <Scale className="h-4 w-4 mr-1" />
                Legal
              </Link>
            </div>
          </div>

          {/* Features */}
          <div className='md:block hidden'>
            <h4 className="text-lg font-semibold mb-4">Features</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Built-in Calendar System</li>
              <li>AI-Powered Scheduling</li>
              <li>Smart Task Management</li>
              <li>Productivity Analytics</li>
              <li>Optional External Sync</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} MAIPA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;