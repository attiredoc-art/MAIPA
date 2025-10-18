import React from 'react';
import { Shield, Lock, Eye, Database, Users, AlertCircle } from 'lucide-react';

const PrivacyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
            <Shield className="h-8 w-8" />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-lg sm:text-xl text-gray-600 px-4">
            Your privacy is our top priority. Learn how we protect and handle your data.
          </p>
          <div className="text-xs sm:text-sm text-gray-500 mt-4">
            Last updated: {new Date().toLocaleDateString()}
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          {/* Introduction */}
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 sm:p-8 rounded-2xl mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Eye className="h-6 w-6 mr-2 text-indigo-600" />
              Our Privacy Commitment
            </h2>
            <p className="text-sm sm:text-base text-gray-700">
              AI Personal Assistant is committed to protecting your privacy and ensuring the security of your personal information. 
              This Privacy Policy explains how we collect, use, store, and protect your data when you use our mobile application and services.
            </p>
          </div>

          {/* Information We Collect */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center">
              <Database className="h-8 w-8 mr-3 text-indigo-600" />
              Information We Collect
            </h2>
            
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 shadow-sm">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Calendar & Event Data</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4">
                  We collect and store calendar data from multiple sources:
                </p>
                <ul className="list-disc list-inside text-sm sm:text-base text-gray-600 space-y-2">
                  <li>Events created in our built-in calendar system</li>
                  <li>Tasks, reminders, and notes you create within the app</li>
                  <li>Google Calendar data (when you choose to connect)</li>
                  <li>Event titles, descriptions, locations, and timing information</li>
                  <li>Calendar preferences and notification settings</li>
                  <li>Recurring event patterns and scheduling preferences</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 shadow-sm">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Personal Information</h3>
                <ul className="list-disc list-inside text-sm sm:text-base text-gray-600 space-y-2">
                  <li>Email address (for account creation and authentication)</li>
                  <li>Display name and profile information</li>
                  <li>Time zone and location preferences</li>
                  <li>Communication preferences</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 shadow-sm">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Usage Data</h3>
                <ul className="list-disc list-inside text-sm sm:text-base text-gray-600 space-y-2">
                  <li>App usage patterns and feature interactions</li>
                  <li>AI chat conversations and queries</li>
                  <li>Performance metrics and error reports</li>
                  <li>Device information and operating system version</li>
                </ul>
              </div>
            </div>
          </section>

          {/* How We Use Your Information */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">How We Use Your Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-4 sm:p-6 rounded-xl">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">Core Functionality</h3>
                <ul className="text-sm sm:text-base text-gray-600 space-y-2">
                  <li>• Display and manage events in our built-in calendar</li>
                  <li>• Sync with Google Calendar (optional integration)</li>
                  <li>• Provide AI-powered scheduling assistance</li>
                  <li>• Send notifications and reminders</li>
                  <li>• Sync data across your devices</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-teal-50 to-green-50 p-4 sm:p-6 rounded-xl">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">AI Enhancement</h3>
                <ul className="text-sm sm:text-base text-gray-600 space-y-2">
                  <li>• Analyze patterns for productivity insights</li>
                  <li>• Provide personalized recommendations</li>
                  <li>• Improve scheduling suggestions</li>
                  <li>• Enhance natural language processing</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Data Security */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center">
              <Lock className="h-8 w-8 mr-3 text-indigo-600" />
              Data Security & Protection
            </h2>
            
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 p-6 sm:p-8 rounded-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">Encryption</h3>
                  <ul className="text-sm sm:text-base text-gray-600 space-y-2">
                    <li>• End-to-end encryption for data transmission</li>
                    <li>• AES-256 encryption for stored data</li>
                    <li>• Encrypted database storage</li>
                    <li>• Secure API communications</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">Access Controls</h3>
                  <ul className="text-sm sm:text-base text-gray-600 space-y-2">
                    <li>• Multi-factor authentication</li>
                    <li>• Role-based access permissions</li>
                    <li>• Regular security audits</li>
                    <li>• Automated threat detection</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Data Sharing */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center">
              <Users className="h-8 w-8 mr-3 text-indigo-600" />
              Data Sharing & Third Parties
            </h2>
            
            <div className="bg-yellow-50 border border-yellow-200 p-4 sm:p-6 rounded-xl mb-4 sm:mb-6">
              <div className="flex items-start">
                <AlertCircle className="h-6 w-6 text-yellow-600 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Important: We Do Not Sell Your Data</h3>
                  <p className="text-sm sm:text-base text-gray-700">
                    We never sell, rent, or trade your personal information to third parties for marketing purposes.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Limited Sharing</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4">We only share your information in these specific circumstances:</p>
                <ul className="list-disc list-inside text-sm sm:text-base text-gray-600 space-y-2">
                  <li>With your explicit consent</li>
                  <li>To comply with legal obligations</li>
                  <li>To protect our rights and prevent fraud</li>
                  <li>With trusted service providers who help us operate our service</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Service Providers</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4">We work with the following types of service providers:</p>
                <ul className="list-disc list-inside text-sm sm:text-base text-gray-600 space-y-2">
                  <li>Cloud hosting services (with strict data processing agreements)</li>
                  <li>AI processing services (DeepSeek) for assistant functionality</li>
                  <li>Calendar synchronization services (only when you choose external integration)</li>
                  <li>Analytics services for app performance monitoring</li>
                  <li>Customer support and communication tools</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Your Rights */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Your Privacy Rights</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 shadow-sm">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">Access & Control</h3>
                <ul className="text-sm sm:text-base text-gray-600 space-y-2">
                  <li>• View all data we have about you</li>
                  <li>• Update or correct your information</li>
                  <li>• Download your data</li>
                  <li>• Delete your account and data</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 shadow-sm">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">Privacy Controls</h3>
                <ul className="text-sm sm:text-base text-gray-600 space-y-2">
                  <li>• Opt out of data collection</li>
                  <li>• Control notification preferences</li>
                  <li>• Manage data sharing settings</li>
                  <li>• Request data portability</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section className="mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Contact Us</h2>
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 sm:p-8 rounded-2xl">
              <p className="text-sm sm:text-base text-gray-700 mb-4">
                If you have any questions about this Privacy Policy or how we handle your data, please contact us:
              </p>
              <div className="space-y-2 text-sm sm:text-base text-gray-600">
                <p><strong>Email:</strong> privacy@aipersonalassistant.com</p>
                <p><strong>Address:</strong> AI Personal Assistant, 123 Privacy Street, Tech City, TC 12345</p>
                <p><strong>Phone:</strong> +1 (555) 123-4567</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;