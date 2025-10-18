import React from 'react';
import { Scale, AlertTriangle, Shield, FileText, Info, Gavel } from 'lucide-react';

const LegalPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
            <Scale className="h-8 w-8" />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Legal & Disclaimer</h1>
          <p className="text-lg sm:text-xl text-gray-600 px-4">
            Important legal information and disclaimers regarding the use of AI Personal Assistant.
          </p>
          <div className="text-xs sm:text-sm text-gray-500 mt-4">
            Last updated: {new Date().toLocaleDateString()}
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          {/* Important Notice */}
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 p-6 sm:p-8 rounded-2xl mb-6 sm:mb-8">
            <div className="flex items-start">
              <AlertTriangle className="h-8 w-8 text-yellow-600 mr-4 mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Important Legal Notice</h2>
                <p className="text-sm sm:text-base text-gray-700">
                  Please read this legal disclaimer carefully before using AI Personal Assistant. By downloading, installing, 
                  or using our application, you acknowledge that you have read, understood, and agree to be bound by these 
                  legal terms and disclaimers.
                </p>
              </div>
            </div>
          </div>

          {/* Software License */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center">
              <FileText className="h-8 w-8 mr-3 text-indigo-600" />
              Software License
            </h2>
            
            <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 shadow-sm">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">License Grant</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4">
                Subject to your compliance with these terms, we grant you a limited, non-exclusive, non-transferable, 
                revocable license to download, install, and use AI Personal Assistant on your compatible devices for 
                personal or internal business purposes.
              </p>
              
              <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">License Restrictions</h4>
              <ul className="list-disc list-inside text-sm sm:text-base text-gray-600 space-y-2 mb-6">
                <li>You may not modify, reverse engineer, or decompile the application</li>
                <li>You may not redistribute, sell, or sublicense the software</li>
                <li>You may not use the application for illegal or unauthorized purposes</li>
                <li>You may not remove or alter any proprietary notices or labels</li>
                <li>You may not use the application to compete with our services</li>
              </ul>
              
              <div className="bg-indigo-50 border border-indigo-200 p-4 rounded-lg">
                <p className="text-sm sm:text-base text-indigo-800">
                  <strong>Note:</strong> This license is automatically terminated if you violate any of these restrictions.
                </p>
              </div>
            </div>
          </section>

          {/* AI Disclaimer */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center">
              <Shield className="h-8 w-8 mr-3 text-indigo-600" />
              AI Technology Disclaimer
            </h2>
            
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 p-6 sm:p-8 rounded-2xl">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">AI-Generated Content</h3>
                <p className="text-sm sm:text-base text-gray-700 mb-4">
                  AI Personal Assistant uses artificial intelligence (DeepSeek AI) to provide scheduling recommendations, 
                  productivity insights, and responses to user queries. Please be aware of the following:
                </p>
                <ul className="list-disc list-inside text-sm sm:text-base text-gray-600 space-y-2">
                  <li>AI responses are generated based on algorithms and may not always be accurate or complete</li>
                  <li>AI recommendations should be reviewed and validated by users before implementation</li>
                  <li>The AI system continuously learns and improves, but may occasionally produce unexpected results</li>
                  <li>AI-generated scheduling suggestions are recommendations only and should not replace human judgment</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 shadow-sm">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Accuracy Limitations</h3>
                <p className="text-sm sm:text-base text-gray-600">
                  While we strive to provide accurate AI-powered features, we cannot guarantee that all AI-generated 
                  content, suggestions, or insights will be error-free, complete, or suitable for your specific needs. 
                  Users are responsible for verifying AI recommendations before acting on them.
                </p>
              </div>
            </div>
          </section>

          {/* Data Disclaimer */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Data & Integration Disclaimer</h2>
            
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 shadow-sm">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Google Calendar Integration</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4">
                  Our integration with Google Calendar is dependent on Google's API services. We disclaim liability for:
                </p>
                <ul className="list-disc list-inside text-sm sm:text-base text-gray-600 space-y-2">
                  <li>Service interruptions caused by Google API changes or downtime</li>
                  <li>Data synchronization delays or failures</li>
                  <li>Changes to Google's terms of service that may affect functionality</li>
                  <li>Loss of data due to Google service issues</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 shadow-sm">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Data Backup Responsibility</h3>
                <p className="text-sm sm:text-base text-gray-600">
                  While we implement robust data protection measures, users are responsible for maintaining their own 
                  backups of important calendar and task data. We recommend regularly exporting your data and maintaining 
                  copies in your Google Calendar or other backup systems.
                </p>
              </div>
            </div>
          </section>

          {/* Limitation of Liability */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center">
              <Gavel className="h-8 w-8 mr-3 text-indigo-600" />
              Limitation of Liability
            </h2>
            
            <div className="bg-red-50 border border-red-200 p-6 sm:p-8 rounded-2xl">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">Disclaimer of Warranties</h3>
              <p className="text-sm sm:text-base text-gray-700 mb-4">
                AI Personal Assistant is provided "AS IS" and "AS AVAILABLE" without any warranties of any kind, 
                either express or implied, including but not limited to:
              </p>
              <ul className="list-disc list-inside text-sm sm:text-base text-gray-600 space-y-2 mb-6">
                <li>Merchantability or fitness for a particular purpose</li>
                <li>Uninterrupted or error-free operation</li>
                <li>Accuracy or reliability of AI-generated content</li>
                <li>Security of data transmission or storage</li>
                <li>Compatibility with all devices or operating systems</li>
              </ul>
              
              <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">Liability Limitation</h4>
              <p className="text-sm sm:text-base text-gray-700">
                In no event shall AI Personal Assistant, its developers, or affiliates be liable for any direct, 
                indirect, incidental, special, consequential, or punitive damages arising out of or relating to your 
                use of the application, including but not limited to damages for lost profits, lost data, or business 
                interruption.
              </p>
            </div>
          </section>

          {/* Third-Party Services */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Third-Party Services</h2>
            
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 shadow-sm">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">External Dependencies</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4">
                  AI Personal Assistant integrates with third-party services including:
                </p>
                <ul className="list-disc list-inside text-sm sm:text-base text-gray-600 space-y-2 mb-4">
                  <li><strong>External Calendar APIs:</strong> For optional calendar synchronization (Google Calendar, etc.)</li>
                  <li><strong>DeepSeek AI:</strong> For artificial intelligence capabilities</li>
                  <li><strong>Cloud Storage Services:</strong> For data backup and synchronization</li>
                  <li><strong>Push Notification Services:</strong> For alerts and reminders</li>
                </ul>
                <p className="text-sm sm:text-base text-gray-600">
                  We are not responsible for the availability, functionality, or terms of service of these third-party providers.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 shadow-sm">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Third-Party Links</h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Our application may contain links to third-party websites or services. We are not responsible for 
                  the content, privacy policies, or practices of any third-party sites or services.
                </p>
              </div>
            </div>
          </section>

          {/* Governing Law */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Governing Law & Jurisdiction</h2>
            
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 sm:p-8 rounded-2xl">
              <p className="text-sm sm:text-base text-gray-700 mb-4">
                These legal terms and disclaimers shall be governed by and construed in accordance with the laws of 
                the jurisdiction where AI Personal Assistant is incorporated, without regard to conflict of law principles.
              </p>
              <p className="text-sm sm:text-base text-gray-700">
                Any disputes arising out of or relating to these terms shall be resolved through binding arbitration 
                or in the courts of competent jurisdiction in the applicable jurisdiction.
              </p>
            </div>
          </section>

          {/* Contact Information */}
          <section className="mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center">
              <Info className="h-8 w-8 mr-3 text-indigo-600" />
              Legal Contact Information
            </h2>
            
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 sm:p-8 rounded-2xl">
              <p className="text-sm sm:text-base text-gray-700 mb-4">
                For legal inquiries, questions about these disclaimers, or to report legal concerns, please contact:
              </p>
              <div className="space-y-2 text-sm sm:text-base text-gray-600">
                <p><strong>Legal Department:</strong> legal@aipersonalassistant.com</p>
                <p><strong>Address:</strong> AI Personal Assistant Legal Department</p>
                <p className="ml-16">123 Legal Avenue, Suite 100</p>
                <p className="ml-16">Tech City, TC 12345</p>
                <p><strong>Phone:</strong> +1 (555) 123-4567 ext. 101</p>
              </div>
            </div>
          </section>

          {/* Updates Notice */}
          <div className="bg-yellow-50 border border-yellow-200 p-4 sm:p-6 rounded-xl">
            <div className="flex items-start">
              <AlertTriangle className="h-6 w-6 text-yellow-600 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Updates to Legal Terms</h3>
                <p className="text-sm sm:text-base text-gray-700">
                  We may update these legal terms and disclaimers from time to time. Continued use of the application 
                  after such changes constitutes acceptance of the updated terms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalPage;