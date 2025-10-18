import React from 'react';
import {
  Calendar,
  Brain,
  Smartphone,
  Zap,
  Shield,
  CheckCircle,
  MessageSquare,
  BarChart3,
  Users,
  Star,
  ArrowRight,
  Download,
  Package,
  Hotel,
  Mail,
  CalendarCheck,
  TrendingUp,
  DollarSign
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import InternalCalendarSection from '../components/InternalCalendar';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const integrations = [
    {
      icon: <Calendar className="h-10 w-10" />,
      title: "Zoom Meetings",
      description: "Automatic sync of Zoom meeting invites directly to your calendar"
    },
    {
      icon: <Mail className="h-10 w-10" />,
      title: "Meeting Invites",
      description: "Email meeting invitations automatically added to your schedule"
    },
    {
      icon: <Hotel className="h-10 w-10" />,
      title: "Hotel Bookings",
      description: "Travel confirmations and hotel reservations synced instantly"
    },
    {
      icon: <CalendarCheck className="h-10 w-10" />,
      title: "Event Invitations",
      description: "All event invites from any source automatically organized"
    },
    {
      icon: <Package className="h-10 w-10" />,
      title: "Package Deliveries",
      description: "Track package delivery schedules without missing a beat"
    },
    {
      icon: <Calendar className="h-10 w-10" />,
      title: "Google Calendar",
      description: "Two-way sync with your existing Google Calendar"
    }
  ];

  const features = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "AI-Powered Assistant",
      description: "Chat with DeepSeek AI to get intelligent insights about your schedule and productivity."
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Task Management",
      description: "Create, organize, and track tasks with advanced categorization and priority systems."
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Smart Scheduling",
      description: "Ask your AI assistant to find optimal meeting times and suggest schedule improvements."
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Productivity Analytics",
      description: "Get detailed insights into your time usage and receive personalized optimization suggestions."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Privacy-First Design",
      description: "Your calendar data is encrypted and protected with enterprise-grade security."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Instant Sync",
      description: "Real-time synchronization across all your devices and platforms."
    }
  ];

  const pricingPlans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      features: [
        "Built-in calendar",
        "Basic task management",
        "50 events/month",
        "Email reminders",
        "Mobile access"
      ]
    },
    {
      name: "Premium",
      price: "$20",
      period: "per month",
      popular: true,
      features: [
        "Everything in Free",
        "Unlimited events",
        "Google Calendar sync",
        "Unlimited AI assistant",
        "Priority support",
        "Analytics dashboard"
      ]
    },
    {
      name: "Enterprise",
      price: "$50",
      period: "per month",
      features: [
        "Everything in Premium",
        "Team collaboration",
        "Admin controls",
        "Custom integrations",
        "Dedicated manager",
        "Phone support"
      ]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Executive",
      content: "This app has completely transformed how I manage my schedule. The AI suggestions are incredibly helpful!",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Software Engineer",
      content: "The Google Calendar integration is seamless, and the task management features are exactly what I needed.",
      rating: 5
    },
    {
      name: "Emma Rodriguez",
      role: "Project Manager",
      content: "I love being able to chat with my AI assistant about my schedule. It's like having a personal productivity coach.",
      rating: 5
    }
  ];

  const stats = [
    { number: "50K+", label: "Active Users" },
    { number: "1M+", label: "Events Managed" },
    { number: "99.9%", label: "Uptime" },
    { number: "4.9", label: "App Store Rating" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id='action' className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 pt-16 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center relative z-10">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">
              Your <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">AI-Powered</span><br />
              Personal Assistant
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
              Complete productivity solution with built-in calendar, tasks, and AI assistance. Create and manage your schedule 
              independently, or optionally sync with Google Calendar for enhanced integration. <br />Get personalized insights powered by DeepSeek AI.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 px-4">
              <a href="/app.apk" download className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold text-base sm:text-lg hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 flex items-center justify-center group">
                <Download className="h-5 w-5 mr-2 group-hover:animate-bounce" />
                Download App
                <ArrowRight className="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              <button onClick={() => navigate('/pricing')} className="w-full sm:w-auto bg-white text-blue-600 border-2 border-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold text-base sm:text-lg hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 flex items-center justify-center group">
                View Pricing
                <ArrowRight className="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>
            
            {/* Trust Indicators */}
            <div className="mt-8 sm:mt-12 flex flex-wrap justify-center items-center gap-4 sm:gap-8 opacity-60 px-4">
              <div className="flex items-center text-xs sm:text-sm text-gray-600 bg-white/50 backdrop-blur-sm px-3 py-2 rounded-full">
                <Shield className="h-4 w-4 mr-2" />
                Enterprise Security
              </div>
              <div className="flex items-center text-xs sm:text-sm text-gray-600 bg-white/50 backdrop-blur-sm px-3 py-2 rounded-full">
                <CheckCircle className="h-4 w-4 mr-2" />
                GDPR Compliant
              </div>
              <div className="flex items-center text-xs sm:text-sm text-gray-600 bg-white/50 backdrop-blur-sm px-3 py-2 rounded-full">
                <Users className="h-4 w-4 mr-2" />
                50K+ Users
              </div>
              <div className="flex items-center text-xs sm:text-sm text-gray-600 bg-white/50 backdrop-blur-sm px-3 py-2 rounded-full">
                <Star className="h-4 w-4 mr-2 fill-current text-yellow-400" />
                4.9 Rating
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Floating Elements */}
        <div className="absolute top-20 left-4 sm:left-10 opacity-10">
          <Calendar className="h-12 w-12 sm:h-20 sm:w-20 text-blue-600 animate-pulse" />
        </div>
        <div className="absolute top-40 right-4 sm:right-20 opacity-10">
          <Brain className="h-16 w-16 sm:h-24 sm:w-24 text-indigo-600 animate-bounce" />
        </div>
        <div className="absolute bottom-20 left-1/4 opacity-10 hidden sm:block">
          <CheckCircle className="h-12 w-12 sm:h-16 sm:w-16 text-emerald-500 animate-pulse" />
        </div>
        <div className="absolute top-60 right-1/4 opacity-10 hidden sm:block">
          <Zap className="h-14 w-14 sm:h-18 sm:w-18 text-amber-500 animate-bounce" />
        </div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-0 left-0 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-br from-blue-400 via-indigo-400 to-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-25 animate-pulse"></div>
        <div className="absolute top-0 right-0 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-br from-purple-400 via-pink-400 to-rose-500 rounded-full mix-blend-multiply filter blur-xl opacity-25 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-br from-cyan-400 via-blue-400 to-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-25 animate-pulse animation-delay-4000"></div>
      </section>

      {/* Calendar Integration Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
              <CalendarCheck className="h-4 w-4 mr-2" />
              All-in-One Integration
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">
              Everything in <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">One Calendar</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Automatically capture and organize all your commitments in one unified calendar. From Zoom meetings to package deliveries, never miss what matters.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {integrations.map((integration, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-blue-50/30 p-6 sm:p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 group border border-gray-100">
                <div className="flex items-center justify-center mx-auto bg-gradient-to-br from-blue-500 to-indigo-600 text-white p-4 rounded-2xl w-fit mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                  {integration.icon}
                </div>
                <h3 className="text-center text-lg sm:text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">{integration.title}</h3>
                <p className="text-center text-sm sm:text-base text-gray-600 leading-relaxed">{integration.description}</p>
                <div className="mt-4 w-0 group-hover:w-12 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-500 mx-auto"></div>
              </div>
            ))}
          </div>

          <div className="mt-12 sm:mt-16 text-center">
            <div className="inline-flex flex-wrap justify-center items-center gap-4 sm:gap-6 bg-gradient-to-r from-blue-50 to-indigo-50 px-6 sm:px-8 py-4 sm:py-6 rounded-2xl">
              <div className="flex items-center text-sm sm:text-base text-gray-700">
                <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                Auto-sync enabled
              </div>
              <div className="flex items-center text-sm sm:text-base text-gray-700">
                <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                Real-time updates
              </div>
              <div className="flex items-center text-sm sm:text-base text-gray-700">
                <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                Zero manual entry
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-slate-50 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">{stat.number}</div>
                <div className="text-sm sm:text-base text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">
              Everything you need for <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">productivity</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              A complete productivity suite with built-in calendar, intelligent AI assistance, and optional external integrations to optimize your daily schedule.
            </p>
            <div className="mt-6 sm:mt-8 w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 group border border-white/50">
                <div className="flex items-center justify-center mx-auto bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 text-white p-3 rounded-2xl w-fit mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                  {feature.icon}
                </div>
                <h3 className="text-center text-lg sm:text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">{feature.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{feature.description}</p>
                <div className="mt-4 w-0 group-hover:w-12 h-0.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 transition-all duration-500 mx-auto"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">
              How it works
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 px-4">Get started in three simple steps</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 text-white p-3 sm:p-4 rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg hover:scale-110 transition-transform duration-300">
                <span className="text-lg sm:text-2xl font-bold">1</span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 px-4">Set Up Your Workspace</h3>
              <p className="text-sm sm:text-base text-gray-600 px-4">Start with our built-in calendar system or optionally connect your Google Calendar for enhanced integration.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 text-white p-3 sm:p-4 rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg hover:scale-110 transition-transform duration-300">
                <span className="text-lg sm:text-2xl font-bold">2</span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 px-4">Start Organizing</h3>
              <p className="text-sm sm:text-base text-gray-600 px-4">Create events, tasks, and reminders using our powerful built-in tools with an intuitive, user-friendly interface.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 text-white p-3 sm:p-4 rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg hover:scale-110 transition-transform duration-300">
                <span className="text-lg sm:text-2xl font-bold">3</span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 px-4">Chat with AI</h3>
              <p className="text-sm sm:text-base text-gray-600 px-4">Interact with your AI assistant to analyze your schedule, get insights, and receive personalized productivity recommendations.</p>
            </div>
          </div>
        </div>
      </section>

      <InternalCalendarSection />

      {/* AI Features Highlight */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center relative z-10">
            <div>
              <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                <Brain className="h-4 w-4 mr-2" />
                Powered by Advanced AI
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Powered by <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">DeepSeek AI</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
                Our advanced AI assistant understands your schedule patterns and provides intelligent suggestions to optimize your productivity.
              </p>
              
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full mr-3 mt-0.5">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-semibold text-gray-900">Smart Schedule Analysis</h4>
                    <p className="text-sm sm:text-base text-gray-600">AI analyzes patterns from your built-in calendar and any connected external calendars to suggest optimal scheduling.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full mr-3 mt-0.5">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-semibold text-gray-900">Natural Language Queries</h4>
                    <p className="text-sm sm:text-base text-gray-600">Ask questions about your schedule, tasks, and availability using natural language - works with all your calendar data.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full mr-3 mt-0.5">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-semibold text-gray-900">Productivity Insights</h4>
                    <p className="text-sm sm:text-base text-gray-600">Receive personalized recommendations based on your complete schedule data to improve time management and productivity.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4 justify-start items-start">
                <a href="#action" className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-2xl font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center group">
                  Try AI Assistant
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </a>
                <button onClick={() => navigate('/pricing')} className="w-full sm:w-auto bg-white text-blue-600 border-2 border-blue-600 px-6 py-3 rounded-2xl font-medium hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center group">
                  See Pricing
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </div>
            
            <div className="bg-white/90 backdrop-blur-sm p-4 sm:p-8 rounded-3xl shadow-2xl border border-white/50 hover:shadow-3xl hover:shadow-blue-500/10 transition-all duration-500 transform hover:-translate-y-2 mt-8 lg:mt-0">
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <div className="flex items-center">
                  <div className="bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 p-2 rounded-lg shadow-lg">
                    <MessageSquare className="h-5 w-5 text-white" />
                  </div>
                  <span className="ml-3 text-sm sm:text-base font-semibold text-gray-900">AI Chat</span>
                </div>
                <div className="flex space-x-1 sm:hidden">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                </div>
                <div className="hidden sm:flex space-x-1">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
              </div>
              <div className="space-y-3 sm:space-y-4">
                <div className="bg-gray-50 p-3 sm:p-4 rounded-2xl border border-gray-200">
                  <p className="text-sm sm:text-base text-gray-800">"What do I have scheduled for tomorrow?"</p>
                </div>
                <div className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 text-white p-3 sm:p-4 rounded-2xl shadow-lg">
                  <p className="text-sm sm:text-base">Tomorrow you have 3 events: Team standup at 9 AM, Client call at 2 PM, and Project review at 4 PM. You have a 2-hour free block from 11 AM to 1 PM - perfect for focused work! 🚀</p>
                </div>
                <div className="bg-gray-50 p-3 sm:p-4 rounded-2xl border border-gray-200">
                  <p className="text-sm sm:text-base text-gray-800">"Help me find time for a 1-hour meeting this week"</p>
                </div>
                <div className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 text-white p-3 sm:p-4 rounded-2xl shadow-lg">
                  <p className="text-sm sm:text-base">I found several options: Wednesday 2-3 PM, Thursday 10-11 AM, or Friday 3-4 PM. All are free blocks in your schedule. Which works best? ✨</p>
                </div>
                <div className="flex items-center text-gray-400 text-sm">
                  <div className="flex space-x-1 mr-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  </div>
                  AI is typing...
                </div>
              </div>
            </div>
          </div>
          
          {/* Background Elements */}
          <div className="absolute top-10 right-4 sm:right-10 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-indigo-200 to-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
          <div className="absolute bottom-10 left-4 sm:left-10 w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-br from-purple-200 to-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">
              What our users say
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 px-4">Join thousands of satisfied users</p>
            <div className="mt-6 sm:mt-8 w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-blue-50/50 p-6 sm:p-8 rounded-3xl shadow-lg hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 transform hover:-translate-y-2 border border-white/50 group relative backdrop-blur-sm">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-amber-400 fill-current group-hover:scale-110 transition-transform duration-200" style={{transitionDelay: `${i * 50}ms`}} />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-gray-700 mb-6 italic leading-relaxed">"{testimonial.content}"</p>
                <div>
                  <div className="text-sm sm:text-base font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">{testimonial.name}</div>
                  <div className="text-xs sm:text-sm text-gray-600">{testimonial.role}</div>
                </div>
                <div className="absolute top-4 right-4 sm:top-6 sm:right-6 text-4xl sm:text-6xl text-blue-100 font-serif">"</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
              <DollarSign className="h-4 w-4 mr-2" />
              Simple Pricing
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">
              Choose Your <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Perfect Plan</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Start free and scale as you grow. All plans include core features with no hidden fees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 p-6 sm:p-8 ${
                  plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''
                } border border-gray-100`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 sm:px-6 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-4">
                    <span className="text-4xl sm:text-5xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-2">/{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm sm:text-base">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => navigate('/pricing')}
                  className={`w-full py-3 sm:py-4 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {plan.name === 'Free' ? 'Get Started Free' : `Choose ${plan.name}`}
                  <ArrowRight className="h-4 w-4 ml-2 inline" />
                </button>
              </div>
            ))}
          </div>

          <div className="mt-12 sm:mt-16 text-center">
            <button
              onClick={() => navigate('/pricing')}
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-base sm:text-lg group"
            >
              View detailed comparison
              <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative z-10">
            <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <Zap className="h-4 w-4 mr-2" />
              Start Your Productivity Journey
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 sm:mb-6 px-4">
            Ready to boost your productivity?
            </h2>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90 max-w-2xl mx-auto px-4">
            Join thousands of users who have transformed their productivity with MAIPA - your complete, AI-powered personal assistant.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 px-4">
              <a href='#action' className="w-full sm:w-auto bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold text-base sm:text-lg hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 flex items-center justify-center group">
              <Smartphone className="h-5 w-5 mr-2" />
              Get Started Now
              <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              <button onClick={() => navigate('/pricing')} className="w-full sm:w-auto bg-transparent border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold text-base sm:text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 flex items-center justify-center group">
              View Plans
              <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>
            
            {/* Additional CTA Elements */}
            <div className="mt-8 sm:mt-12 flex flex-wrap justify-center items-center gap-4 sm:gap-8 opacity-80 px-4">
              <div className="flex items-center text-xs sm:text-sm">
                <CheckCircle className="h-4 w-4 mr-2" />
                Free 14-day trial
              </div>
              <div className="flex items-center text-xs sm:text-sm">
                <CheckCircle className="h-4 w-4 mr-2" />
                No credit card required
              </div>
              <div className="flex items-center text-xs sm:text-sm">
                <CheckCircle className="h-4 w-4 mr-2" />
                Cancel anytime
              </div>
            </div>
          </div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute top-10 right-4 sm:right-10 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-blue-300 to-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-20 left-4 sm:left-20 w-24 h-24 sm:w-32 sm:h-32 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-4 sm:right-20 w-32 h-32 sm:w-40 sm:h-40 bg-white/10 rounded-full animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 sm:w-24 sm:h-24 bg-white/10 rounded-full animate-pulse animation-delay-4000 hidden sm:block"></div>
      </section>
    </div>
  );
};

export default HomePage;