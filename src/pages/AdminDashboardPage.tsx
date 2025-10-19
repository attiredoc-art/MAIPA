import React, { useState } from 'react';
import { Shield, LogOut, BarChart3, Users, Bell, MessageSquare, TrendingUp, UserCheck, AlertTriangle, Star, Search, Filter, Download, CreditCard as Edit, Trash2, Plus, Send, CheckCircle, Menu, X, User, ChevronDown, Settings, Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface UserData {
  id: string;
  name: string;
  email: string;
  status: 'active' | 'inactive' | 'suspended';
  plan: 'free' | 'premium' | 'enterprise';
  lastActive: string;
  joinDate: string;
}

interface Announcement {
  id: string;
  title: string;
  content: string;
  type: 'info' | 'warning' | 'success' | 'error';
  status: 'draft' | 'published';
  publishDate: string;
  targetAudience: 'all' | 'premium' | 'enterprise';
}

interface Feedback {
  id: string;
  user: string;
  email: string;
  rating: number;
  subject: string;
  message: string;
  category: 'bug' | 'feature' | 'general' | 'billing';
  status: 'new' | 'in-progress' | 'resolved';
  date: string;
}

const AdminDashboardPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'users' | 'announcements' | 'feedback'>('overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const navigate = useNavigate();

  const [users] = useState<UserData[]>([
    { id: '1', name: 'John Doe', email: 'john@example.com', status: 'active', plan: 'premium', lastActive: '2 hours ago', joinDate: '2024-01-15' },
    { id: '2', name: 'Jane Smith', email: 'jane@example.com', status: 'active', plan: 'enterprise', lastActive: '1 day ago', joinDate: '2024-02-20' },
    { id: '3', name: 'Bob Johnson', email: 'bob@example.com', status: 'inactive', plan: 'free', lastActive: '1 week ago', joinDate: '2024-03-10' },
    { id: '4', name: 'Alice Brown', email: 'alice@example.com', status: 'suspended', plan: 'premium', lastActive: '3 days ago', joinDate: '2024-01-05' },
  ]);

  const [announcements, setAnnouncements] = useState<Announcement[]>([
    { id: '1', title: 'New AI Features Released', content: 'We\'ve added new AI capabilities...', type: 'success', status: 'published', publishDate: '2024-12-01', targetAudience: 'all' },
    { id: '2', title: 'Scheduled Maintenance', content: 'System maintenance on Dec 15...', type: 'warning', status: 'draft', publishDate: '2024-12-15', targetAudience: 'all' },
  ]);

  const [feedback] = useState<Feedback[]>([
    { id: '1', user: 'John Doe', email: 'john@example.com', rating: 5, subject: 'Love the new features!', message: 'The AI assistant is amazing...', category: 'feature', status: 'resolved', date: '2024-12-01' },
    { id: '2', user: 'Jane Smith', email: 'jane@example.com', rating: 3, subject: 'Calendar sync issue', message: 'Having trouble with Google Calendar...', category: 'bug', status: 'in-progress', date: '2024-12-02' },
    { id: '3', user: 'Bob Johnson', email: 'bob@example.com', rating: 4, subject: 'Feature request', message: 'Would love to see dark mode...', category: 'feature', status: 'new', date: '2024-12-03' },
  ]);

  const logout = () => {
    navigate('/admin');
  };

  const sidebarItems = [
    { id: 'home', label: 'Home', icon: <Home className="h-5 w-5" />, action: () => navigate('/') },
    { id: 'overview', label: 'Overview', icon: <BarChart3 className="h-5 w-5" /> },
    { id: 'users', label: 'Users', icon: <Users className="h-5 w-5" /> },
    { id: 'announcements', label: 'Announcements', icon: <Bell className="h-5 w-5" /> },
    { id: 'feedback', label: 'Feedback', icon: <MessageSquare className="h-5 w-5" /> },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16">
            <div className="flex items-center">
              {/* Mobile menu button */}
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-2 rounded-md text-gray-600 hover:text-indigo-600 hover:bg-gray-100 mr-2"
              >
                {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-1.5 sm:p-2 rounded-xl">
                <Shield className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
              </div>
              <h1 className="ml-2 sm:ml-3 text-lg sm:text-xl font-bold text-gray-900">Admin Dashboard</h1>
            </div>
            <div className="relative">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-gray-50 transition-all duration-200 group"
              >
                <div className="relative">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center ring-2 ring-blue-100 group-hover:ring-blue-200 transition-all duration-200">
                    <User className="h-4 w-4 text-white" />
                  </div>
                  <div className="absolute -bottom-0.5 -right-0.5 h-3 w-3 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
                <span className="text-sm font-medium text-gray-700 hidden sm:block">
                  Admin
                </span>
                <ChevronDown className={`h-4 w-4 text-gray-500 transition-transform duration-200 hidden sm:block ${isProfileOpen ? 'rotate-180' : ''}`} />
              </button>

              {isProfileOpen && (
                <>
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setIsProfileOpen(false)}
                  ></div>
                  <div className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-20 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="px-4 py-3 border-b border-gray-100">
                      <p className="text-sm font-semibold text-gray-900">Administrator</p>
                      <p className="text-xs text-gray-500">admin@maipa.com</p>
                    </div>
                    <div className="border-t border-gray-100 py-1">
                      <button
                        onClick={() => {
                          setIsProfileOpen(false);
                          logout();
                        }}
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
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Desktop Sidebar */}
        <div className="hidden lg:flex lg:flex-shrink-0">
          <div className="flex flex-col w-64">
            <div className="flex flex-col flex-grow bg-white border-r border-gray-200 pt-1 pb-4 overflow-y-auto">
              <nav className="mt-2 flex-1 px-2 space-y-1">
                {sidebarItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => item.action ? item.action() : setActiveTab(item.id as any)}
                    className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md w-full text-left transition-all duration-200 ${
                      activeTab === item.id
                        ? 'bg-blue-100 text-blue-700 border-r-2 border-blue-500'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    <div className={`mr-3 flex-shrink-0 ${
                      activeTab === item.id ? 'text-blue-500' : 'text-gray-400 group-hover:text-gray-500'
                    }`}>
                      {item.icon}
                    </div>
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* Mobile Sidebar Overlay */}
        {sidebarOpen && (
          <div className="lg:hidden fixed inset-0 flex z-40">
            <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setSidebarOpen(false)}></div>
            <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white">
              <div className="absolute top-0 right-0 -mr-12 pt-2">
                <button
                  onClick={() => setSidebarOpen(false)}
                  className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                >
                  <X className="h-6 w-6 text-white" />
                </button>
              </div>
              <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                <div className="flex-shrink-0 flex items-center px-4 mb-8">
                  <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-2 rounded-xl">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="ml-3 text-lg font-semibold text-gray-900">Admin Panel</h2>
                </div>
                <nav className="mt-5 px-2 space-y-1">
                  {sidebarItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        if (item.action) {
                          item.action();
                        } else {
                          setActiveTab(item.id as any);
                        }
                        setSidebarOpen(false);
                      }}
                      className={`group flex items-center px-2 py-2 text-base font-medium rounded-md w-full text-left transition-all duration-200 ${
                        activeTab === item.id
                          ? 'bg-blue-100 text-blue-700'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                      }`}
                    >
                      <div className={`mr-4 flex-shrink-0 ${
                        activeTab === item.id ? 'text-blue-500' : 'text-gray-400 group-hover:text-gray-500'
                      }`}>
                        {item.icon}
                      </div>
                      {item.label}
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className="flex flex-col flex-1 overflow-hidden">
          <main className="flex-1 relative overflow-y-auto focus:outline-none">
            <div className="py-6">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Mobile Navigation Tabs (shown only on mobile) */}
                <div className="lg:hidden mb-6">
                  <nav className="flex space-x-2 overflow-x-auto pb-2">
                    {sidebarItems.map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id as any)}
                        className={`flex items-center px-3 py-2 rounded-lg font-medium transition-all duration-200 whitespace-nowrap text-xs ${
                          activeTab === tab.id
                            ? 'bg-indigo-100 text-indigo-700 shadow-sm'
                            : 'text-gray-600 hover:text-indigo-600 hover:bg-gray-100'
                        }`}
                      >
                        <div className="mr-2">
                          {React.cloneElement(tab.icon, { className: 'h-4 w-4' })}
                        </div>
                        <span>{tab.label}</span>
                      </button>
                    ))}
                  </nav>
                </div>

        {/* Dashboard Content */}
        {activeTab === 'overview' && (
          <div className="space-y-6 sm:space-y-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
              <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs sm:text-sm text-gray-600">Total Users</p>
                    <p className="text-lg sm:text-2xl font-bold text-gray-900">12,543</p>
                    <p className="text-xs text-green-600 flex items-center mt-1">
                      <TrendingUp className="h-2 w-2 sm:h-3 sm:w-3 mr-1" />
                      +12%
                    </p>
                  </div>
                  <div className="bg-blue-100 p-2 sm:p-3 rounded-xl">
                    <Users className="h-4 w-4 sm:h-6 sm:w-6 text-blue-600" />
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs sm:text-sm text-gray-600">Active Sessions</p>
                    <p className="text-lg sm:text-2xl font-bold text-gray-900">8,921</p>
                    <p className="text-xs text-green-600 flex items-center mt-1">
                      <TrendingUp className="h-2 w-2 sm:h-3 sm:w-3 mr-1" />
                      +8%
                    </p>
                  </div>
                  <div className="bg-green-100 p-2 sm:p-3 rounded-xl">
                    <UserCheck className="h-4 w-4 sm:h-6 sm:w-6 text-green-600" />
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs sm:text-sm text-gray-600">Premium Users</p>
                    <p className="text-lg sm:text-2xl font-bold text-gray-900">3,847</p>
                    <p className="text-xs text-green-600 flex items-center mt-1">
                      <TrendingUp className="h-2 w-2 sm:h-3 sm:w-3 mr-1" />
                      +15%
                    </p>
                  </div>
                  <div className="bg-purple-100 p-2 sm:p-3 rounded-xl">
                    <Star className="h-4 w-4 sm:h-6 sm:w-6 text-purple-600" />
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs sm:text-sm text-gray-600">Support Tickets</p>
                    <p className="text-lg sm:text-2xl font-bold text-gray-900">23</p>
                    <p className="text-xs text-red-600 flex items-center mt-1">
                      <AlertTriangle className="h-2 w-2 sm:h-3 sm:w-3 mr-1" />
                      5 urgent
                    </p>
                  </div>
                  <div className="bg-red-100 p-2 sm:p-3 rounded-xl">
                    <AlertTriangle className="h-4 w-4 sm:h-6 sm:w-6 text-red-600" />
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Recent Activity</h3>
              <div className="space-y-3 sm:space-y-4">
                {[
                  { action: 'New user registration', user: 'john.doe@example.com', time: '2 minutes ago', type: 'success' },
                  { action: 'Premium subscription activated', user: 'jane.smith@example.com', time: '15 minutes ago', type: 'success' },
                  { action: 'Support ticket created', user: 'bob.johnson@example.com', time: '1 hour ago', type: 'warning' },
                  { action: 'User account suspended', user: 'spam.user@example.com', time: '2 hours ago', type: 'error' },
                ].map((activity, index) => (
                  <div key={index} className="flex items-center justify-between py-2 sm:py-3 border-b border-gray-100 last:border-b-0">
                    <div className="flex items-center">
                      <div className={`w-2 h-2 rounded-full mr-2 sm:mr-3 ${
                        activity.type === 'success' ? 'bg-green-500' :
                        activity.type === 'warning' ? 'bg-yellow-500' : 'bg-red-500'
                      }`}></div>
                      <div>
                        <p className="text-xs sm:text-sm font-medium text-gray-900">{activity.action}</p>
                        <p className="text-xs text-gray-600">{activity.user}</p>
                      </div>
                    </div>
                    <span className="text-xs text-gray-500">{activity.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'users' && (
          <div className="space-y-4 sm:space-y-6">
            {/* User Management Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">User Management</h2>
              <div className="flex items-center space-x-2 sm:space-x-3 w-full sm:w-auto">
                <div className="relative flex-1 sm:flex-none">
                  <Search className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 h-3 w-3 sm:h-4 sm:w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search users..."
                    className="pl-8 sm:pl-10 pr-3 sm:pr-4 py-1.5 sm:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-xs sm:text-sm w-full sm:w-auto"
                  />
                </div>
                <button className="flex items-center px-2 sm:px-4 py-1.5 sm:py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200 text-xs sm:text-sm">
                  <Filter className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                  Filter
                </button>
                <button className="flex items-center px-2 sm:px-4 py-1.5 sm:py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200 text-xs sm:text-sm">
                  <Download className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                  Export
                </button>
              </div>
            </div>

            {/* Users Table */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-3 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                      <th className="px-3 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-3 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Plan</th>
                      <th className="px-3 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell">Last Active</th>
                      <th className="px-3 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {users.map((user) => (
                      <tr key={user.id} className="hover:bg-gray-50">
                        <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap">
                          <div>
                            <div className="text-xs sm:text-sm font-medium text-gray-900">{user.name}</div>
                            <div className="text-xs text-gray-500">{user.email}</div>
                          </div>
                        </td>
                        <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                            user.status === 'active' ? 'bg-green-100 text-green-800' :
                            user.status === 'inactive' ? 'bg-gray-100 text-gray-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {user.status}
                          </span>
                        </td>
                        <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                            user.plan === 'enterprise' ? 'bg-purple-100 text-purple-800' :
                            user.plan === 'premium' ? 'bg-blue-100 text-blue-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {user.plan}
                          </span>
                        </td>
                        <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-500 hidden sm:table-cell">
                          {user.lastActive}
                        </td>
                        <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm font-medium">
                          <div className="flex items-center space-x-1 sm:space-x-2">
                            <button className="text-indigo-600 hover:text-indigo-900">
                              <Edit className="h-3 w-3 sm:h-4 sm:w-4" />
                            </button>
                            <button className="text-red-600 hover:text-red-900">
                              <Trash2 className="h-3 w-3 sm:h-4 sm:w-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'announcements' && (
          <div className="space-y-4 sm:space-y-6">
            {/* Announcements Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Announcements & Updates</h2>
              <button className="flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200 text-xs sm:text-sm">
                <Plus className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                New Announcement
              </button>
            </div>

            {/* Announcements List */}
            <div className="space-y-3 sm:space-y-4">
              {announcements.map((announcement) => (
                <div key={announcement.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
                        <h3 className="text-sm sm:text-lg font-semibold text-gray-900">{announcement.title}</h3>
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          announcement.type === 'success' ? 'bg-green-100 text-green-800' :
                          announcement.type === 'warning' ? 'bg-yellow-100 text-yellow-800' :
                          announcement.type === 'error' ? 'bg-red-100 text-red-800' :
                          'bg-blue-100 text-blue-800'
                        }`}>
                          {announcement.type}
                        </span>
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          announcement.status === 'published' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                        }`}>
                          {announcement.status}
                        </span>
                      </div>
                      <p className="text-xs sm:text-base text-gray-600 mb-2 sm:mb-3">{announcement.content}</p>
                      <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs text-gray-500">
                        <span>Target: {announcement.targetAudience}</span>
                        <span>Publish: {announcement.publishDate}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1 sm:space-x-2 ml-2 sm:ml-4">
                      <button className="text-indigo-600 hover:text-indigo-900">
                        <Edit className="h-3 w-3 sm:h-4 sm:w-4" />
                      </button>
                      <button className="text-green-600 hover:text-green-900">
                        <Send className="h-3 w-3 sm:h-4 sm:w-4" />
                      </button>
                      <button className="text-red-600 hover:text-red-900">
                        <Trash2 className="h-3 w-3 sm:h-4 sm:w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'feedback' && (
          <div className="space-y-4 sm:space-y-6">
            {/* Feedback Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">User Feedback</h2>
              <div className="flex items-center space-x-2 sm:space-x-3 w-full sm:w-auto">
                <select className="px-2 sm:px-4 py-1.5 sm:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-xs sm:text-sm flex-1 sm:flex-none">
                  <option>All Categories</option>
                  <option>Bug Reports</option>
                  <option>Feature Requests</option>
                  <option>General</option>
                  <option>Billing</option>
                </select>
                <select className="px-2 sm:px-4 py-1.5 sm:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-xs sm:text-sm flex-1 sm:flex-none">
                  <option>All Status</option>
                  <option>New</option>
                  <option>In Progress</option>
                  <option>Resolved</option>
                </select>
              </div>
            </div>

            {/* Feedback List */}
            <div className="space-y-3 sm:space-y-4">
              {feedback.map((item) => (
                <div key={item.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
                        <h3 className="text-sm sm:text-lg font-semibold text-gray-900">{item.subject}</h3>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-3 w-3 sm:h-4 sm:w-4 ${
                                i < item.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          item.category === 'bug' ? 'bg-red-100 text-red-800' :
                          item.category === 'feature' ? 'bg-blue-100 text-blue-800' :
                          item.category === 'billing' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {item.category}
                        </span>
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          item.status === 'new' ? 'bg-blue-100 text-blue-800' :
                          item.status === 'in-progress' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-green-100 text-green-800'
                        }`}>
                          {item.status}
                        </span>
                      </div>
                      <p className="text-xs sm:text-base text-gray-600 mb-2 sm:mb-3">{item.message}</p>
                      <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs text-gray-500">
                        <span>From: {item.user}</span>
                        <span className="hidden sm:inline">({item.email})</span>
                        <span>Date: {item.date}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1 sm:space-x-2 ml-2 sm:ml-4">
                      <button className="text-indigo-600 hover:text-indigo-900">
                        <MessageSquare className="h-3 w-3 sm:h-4 sm:w-4" />
                      </button>
                      <button className="text-green-600 hover:text-green-900">
                        <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;