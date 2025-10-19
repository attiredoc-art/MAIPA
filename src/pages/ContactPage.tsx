import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Headphones as HeadphonesIcon, Globe, CheckCircle, AlertCircle, User, Building, HelpCircle } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
    category: 'general'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: '',
        category: 'general'
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Us",
      details: "support@aipersonalassistant.com",
      description: "Get in touch via email",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      description: "Monday - Friday, 9 AM - 6 PM EST",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Visit Us",
      details: "123 Innovation Drive, Suite 200",
      description: "Tech City, TC 12345",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Business Hours",
      details: "Monday - Friday: 9 AM - 6 PM EST",
      description: "Weekend: Emergency support only",
      color: "from-orange-500 to-red-600"
    }
  ];

  const supportCategories = [
    { value: 'general', label: 'General Inquiry', icon: <HelpCircle className="h-4 w-4" /> },
    { value: 'technical', label: 'Technical Support', icon: <HeadphonesIcon className="h-4 w-4" /> },
    { value: 'billing', label: 'Billing & Payments', icon: <Building className="h-4 w-4" /> },
    { value: 'feature', label: 'Feature Request', icon: <MessageSquare className="h-4 w-4" /> },
    { value: 'partnership', label: 'Partnership', icon: <Globe className="h-4 w-4" /> }
  ];

  const faqs = [
    {
      question: "How quickly do you respond to support requests?",
      answer: "We typically respond to all inquiries within 24 hours during business days. Premium users receive priority support with responses within 4 hours."
    },
    {
      question: "Do you offer phone support?",
      answer: "Yes! Phone support is available Monday through Friday, 9 AM to 6 PM EST. You can reach us at +1 (555) 123-4567."
    },
    {
      question: "Can I schedule a demo or consultation?",
      answer: "Absolutely! We offer personalized demos and consultations. Please select 'Partnership' or 'General Inquiry' in the contact form to schedule a meeting."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-50 via-white to-purple-50 pt-16 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center relative z-10">
            <div className="inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-6">
              <MessageSquare className="h-4 w-4 mr-2" />
              Get In Touch
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">
              We're Here to <span className="bg-gradient-to-r from-indigo-600 to-purple-700 bg-clip-text text-transparent">Help You</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto px-4 leading-relaxed">
              Have questions about AI Personal Assistant? Need technical support? Want to explore partnership opportunities? 
              Our team is ready to assist you every step of the way.
            </p>
            <div className="mt-6 sm:mt-8 w-16 sm:w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute top-20 left-4 sm:left-10 opacity-10">
          <Mail className="h-12 w-12 sm:h-20 sm:w-20 text-indigo-600 animate-pulse" />
        </div>
        <div className="absolute top-40 right-4 sm:right-20 opacity-10">
          <Phone className="h-16 w-16 sm:h-24 sm:w-24 text-purple-600 animate-bounce" />
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 group">
                <div className={`bg-gradient-to-br ${info.color} text-white p-3 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {info.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors duration-300">{info.title}</h3>
                <p className="text-sm sm:text-base font-medium text-gray-800 mb-1">{info.details}</p>
                <p className="text-sm text-gray-600">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & FAQ */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-2xl border border-gray-100">
              <div className="mb-6 sm:mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
                <p className="text-xs sm:text-sm lg:text-base text-gray-600">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>

              {submitStatus === 'success' && (
                <div className="mb-6 bg-green-50 border border-green-200 p-4 rounded-xl flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                  <p className="text-sm text-green-800">Thank you! Your message has been sent successfully. We'll get back to you soon.</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 bg-red-50 border border-red-200 p-4 rounded-xl flex items-center">
                  <AlertCircle className="h-5 w-5 text-red-600 mr-3 flex-shrink-0" />
                  <p className="text-sm text-red-800">Sorry, there was an error sending your message. Please try again.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                        placeholder="Your full name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company (Optional)
                  </label>
                  <div className="relative">
                    <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                    Category *
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                  >
                    {supportCategories.map((category) => (
                      <option key={category.value} value={category.value}>
                        {category.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                    placeholder="Brief description of your inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Please provide details about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-700 text-white px-6 py-4 rounded-xl font-semibold text-base hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center group"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* FAQ Section */}
            <div>
              <div className="mb-6 sm:mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                <p className="text-xs sm:text-sm lg:text-base text-gray-600">
                  Quick answers to common questions about our support and services.
                </p>
                <div className="mt-4 sm:mt-6 w-12 sm:w-16 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"></div>
              </div>

              <div className="space-y-4 sm:space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white p-4 sm:p-6 lg:p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                    <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors duration-300">{faq.question}</h3>
                    <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed">{faq.answer}</p>
                    <div className="mt-4 w-0 group-hover:w-12 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 transition-all duration-300"></div>
                  </div>
                ))}
              </div>

              {/* Support Categories */}
              <div className="mt-8 sm:mt-12">
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-4 sm:mb-6">Support Categories</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 lg:gap-4">
                  {supportCategories.map((category, index) => (
                    <div key={index} className="bg-white p-3 sm:p-4 rounded-xl border border-gray-200 hover:border-indigo-300 hover:shadow-md transition-all duration-300 flex items-center group">
                      <div className="bg-indigo-100 p-2 rounded-lg mr-3 group-hover:bg-indigo-200 transition-colors duration-300">
                        {category.icon}
                      </div>
                      <span className="text-xs sm:text-sm lg:text-base font-medium text-gray-700 group-hover:text-indigo-600 transition-colors duration-300">{category.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 sm:mt-12 bg-gradient-to-r from-blue-600 to-indigo-600 p-6 rounded-2xl text-white text-center">
                <h3 className="text-lg font-bold mb-2">See What Our Users Say</h3>
                <p className="text-blue-100 text-sm mb-4">Read reviews from thousands of satisfied users</p>
                <Link
                  to="/reviews"
                  className="inline-block bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                >
                  View Reviews
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 p-6 sm:p-8 rounded-2xl text-center">
            <div className="flex items-center justify-center mb-4">
              <AlertCircle className="h-8 w-8 text-red-600 mr-3" />
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900">Emergency Support</h3>
            </div>
            <p className="text-xs sm:text-sm lg:text-base text-gray-700 mb-4 px-4">
              For critical issues affecting your productivity or data security, contact our emergency support line.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a href="tel:+15551234567" className="bg-red-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold hover:bg-red-700 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center text-sm sm:text-base">
                <Phone className="h-4 w-4 mr-2" />
                Emergency: +1 (555) 123-4567
              </a>
              <span className="text-xs sm:text-sm text-gray-600 text-center">Available 24/7 for premium users</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;