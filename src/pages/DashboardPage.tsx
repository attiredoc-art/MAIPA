import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Calendar,
  Plus,
  Brain,
  CheckCircle,
  Clock,
  TrendingUp,
  Zap,
  Star,
  Bell,
  Settings,
  BarChart3,
  MessageSquare,
  ChevronRight,
  Download,
  Package,
  Hotel,
  Mail,
  Video,
  Menu,
  X,
  User,
  LogOut
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface Event {
  id: number;
  title: string;
  time: string;
  type: 'meeting' | 'task' | 'delivery' | 'hotel' | 'zoom';
  color: string;
}

interface Task {
  id: number;
  title: string;
  completed: boolean;
  priority: 'high' | 'medium' | 'low';
}

const DashboardPage: React.FC = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'overview' | 'calendar' | 'tasks' | 'stats'>('overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const [todayEvents] = useState<Event[]>([
    { id: 1, title: 'Team Standup', time: '9:00 AM', type: 'zoom', color: 'from-blue-500 to-indigo-600' },
    { id: 2, title: 'Package Delivery', time: '11:30 AM', type: 'delivery', color: 'from-amber-500 to-orange-600' },
    { id: 3, title: 'Client Meeting', time: '2:00 PM', type: 'meeting', color: 'from-blue-500 to-indigo-600' },
    { id: 4, title: 'Hotel Check-in', time: '6:00 PM', type: 'hotel', color: 'from-emerald-500 to-teal-600' },
  ]);

  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: 'Review project proposal', completed: false, priority: 'high' },
    { id: 2, title: 'Update team documentation', completed: true, priority: 'medium' },
    { id: 3, title: 'Schedule client follow-up', completed: false, priority: 'high' },
    { id: 4, title: 'Prepare presentation slides', completed: false, priority: 'medium' },
  ]);

  const stats = [
    { label: 'Events Today', value: '4', icon: <Calendar className="h-5 w-5" />, color: 'from-blue-500 to-indigo-600' },
    { label: 'Tasks Pending', value: '3', icon: <CheckCircle className="h-5 w-5" />, color: 'from-emerald-500 to-teal-600' },
    { label: 'Productivity', value: '87%', icon: <TrendingUp className="h-5 w-5" />, color: 'from-amber-500 to-orange-600' },
    { label: 'AI Insights', value: '12', icon: <Brain className="h-5 w-5" />, color: 'from-purple-500 to-pink-600' },
  ];

  const upcomingIntegrations = [
    { icon: <Video className="h-5 w-5" />, name: 'Zoom Meeting', time: '9:00 AM', bgColor: 'bg-blue-50', iconColor: 'text-blue-600' },
    { icon: <Package className="h-5 w-5" />, name: 'Package Delivery', time: '11:30 AM', bgColor: 'bg-amber-50', iconColor: 'text-amber-600' },
    { icon: <Hotel className="h-5 w-5" />, name: 'Hotel Check-in', time: '6:00 PM', bgColor: 'bg-emerald-50', iconColor: 'text-emerald-600' },
  ];

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const getEventIcon = (type: Event['type']) => {
    switch (type) {
      case 'zoom': return <Video className="h-5 w-5" />;
      case 'delivery': return <Package className="h-5 w-5" />;
      case 'hotel': return <Hotel className="h-5 w-5" />;
      case 'meeting': return <Mail className="h-5 w-5" />;
      default: return <Calendar className="h-5 w-5" />;
    }
  };

  const handleSignOut = () => {
    signOut();
    setIsProfileOpen(false);
    navigate('/');
  };

  const sidebarItems = [
    { id: 'overview', label: 'Overview', icon: <BarChart3 className="h-5 w-5" /> },
    { id: 'calendar', label: 'Calendar', icon: <Calendar className="h-5 w-5" /> },
    { id: 'tasks', label: 'Tasks', icon: <CheckCircle className="h-5 w-5" /> },
    { id: 'stats', label: 'Statistics', icon: <TrendingUp className="h-5 w-5" /> },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16">
            <div className="flex items-center">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100 mr-2"
              >
                {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-1.5 sm:p-2 rounded-xl">
                <Brain className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
              </div>
              <h1 className="ml-2 sm:ml-3 text-lg sm:text-xl font-bold text-gray-900">My Dashboard</h1>
            </div>
            <div className="relative">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-gray-50 transition-all duration-200 group"
              >
                <div className="relative">
                  {user?.avatar ? (
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
                <span className="text-sm font-medium text-gray-700 max-w-24 truncate hidden sm:block">
                  {user?.name}
                </span>
              </button>

              {isProfileOpen && (
                <>
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setIsProfileOpen(false)}
                  ></div>
                  <div className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-20 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="px-4 py-3 border-b border-gray-100">
                      <p className="text-sm font-semibold text-gray-900">{user?.name}</p>
                      <p className="text-xs text-gray-500 truncate">{user?.email}</p>
                    </div>
                    <div className="py-1">
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
          </div>
        </div>
      </header>

      <div className="flex">
        <div className="hidden lg:flex lg:flex-shrink-0">
          <div className="flex flex-col w-64">
            <div className="flex flex-col flex-grow bg-white border-r border-gray-200 pt-1 pb-4 overflow-y-auto">
              <nav className="mt-2 flex-1 px-2 space-y-1">
                {sidebarItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id as any)}
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
                    <Brain className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="ml-3 text-lg font-semibold text-gray-900">Dashboard</h2>
                </div>
                <nav className="mt-5 px-2 space-y-1">
                  {sidebarItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        setActiveTab(item.id as any);
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

        <div className="flex flex-col flex-1 overflow-hidden">
          <main className="flex-1 relative overflow-y-auto focus:outline-none">
            <div className="py-6">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {activeTab === 'overview' && (
                  <div className="space-y-6 sm:space-y-8">
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Welcome back, {user?.name || 'User'}!
              </h1>
              <p className="text-gray-600">
                {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
            <div className="flex gap-3">
              <button className="px-4 py-2.5 bg-white text-gray-700 rounded-xl font-medium hover:shadow-md transition-all duration-300 flex items-center gap-2 border border-gray-200">
                <Bell className="h-5 w-5" />
                <span className="hidden sm:inline">Notifications</span>
              </button>
              <button className="px-4 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center gap-2">
                <Plus className="h-5 w-5" />
                <span className="hidden sm:inline">New Event</span>
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className={`bg-gradient-to-r ${stat.color} text-white p-3 rounded-xl`}>
                  {stat.icon}
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <Calendar className="h-6 w-6 text-blue-600" />
                Today's Schedule
              </h2>
              <button className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center gap-1">
                View All
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>

            <div className="space-y-3">
              {todayEvents.map((event) => (
                <div key={event.id} className="group flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-200 border border-gray-100">
                  <div className={`bg-gradient-to-r ${event.color} text-white p-3 rounded-xl group-hover:scale-110 transition-transform duration-200`}>
                    {getEventIcon(event.type)}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{event.title}</h3>
                    <p className="text-sm text-gray-600 flex items-center gap-1 mt-1">
                      <Clock className="h-4 w-4" />
                      {event.time}
                    </p>
                  </div>
                  <button className="opacity-0 group-hover:opacity-100 text-blue-600 hover:text-blue-700 transition-all duration-200">
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              ))}
            </div>

            {todayEvents.length === 0 && (
              <div className="text-center py-12">
                <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-gray-400" />
                </div>
                <p className="text-gray-600">No events scheduled for today</p>
              </div>
            )}
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <CheckCircle className="h-6 w-6 text-emerald-600" />
                Tasks
              </h2>
              <button className="text-blue-600 hover:text-blue-700">
                <Plus className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-2">
              {tasks.map((task) => (
                <div key={task.id} className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-all duration-200">
                  <button
                    onClick={() => toggleTask(task.id)}
                    className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all duration-200 ${
                      task.completed
                        ? 'bg-emerald-500 border-emerald-500'
                        : 'border-gray-300 hover:border-emerald-500'
                    }`}
                  >
                    {task.completed && <CheckCircle className="h-4 w-4 text-white" />}
                  </button>
                  <div className="flex-1 min-w-0">
                    <p className={`text-sm font-medium ${task.completed ? 'line-through text-gray-400' : 'text-gray-900'}`}>
                      {task.title}
                    </p>
                    <span className={`inline-block mt-1 px-2 py-0.5 text-xs font-medium rounded-full ${
                      task.priority === 'high'
                        ? 'bg-red-100 text-red-700'
                        : task.priority === 'medium'
                        ? 'bg-amber-100 text-amber-700'
                        : 'bg-gray-100 text-gray-700'
                    }`}>
                      {task.priority}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl p-6 shadow-lg text-white">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <Brain className="h-6 w-6" />
                AI Assistant
              </h2>
              <button className="bg-white/20 hover:bg-white/30 p-2 rounded-lg transition-all duration-200">
                <MessageSquare className="h-5 w-5" />
              </button>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-4">
              <p className="text-white/90 mb-3">
                "You have a lighter schedule this afternoon. Perfect time for focused work on your high-priority tasks!"
              </p>
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <Zap className="h-4 w-4" />
                <span>AI Suggestion</span>
              </div>
            </div>

            <button className="w-full bg-white text-blue-600 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5">
              Chat with AI Assistant
            </button>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <BarChart3 className="h-6 w-6 text-blue-600" />
                Quick Stats
              </h2>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-600 text-white p-2 rounded-lg">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">This Week</p>
                    <p className="text-lg font-bold text-gray-900">24 Events</p>
                  </div>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </div>

              <div className="flex items-center justify-between p-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="bg-emerald-600 text-white p-2 rounded-lg">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Completed</p>
                    <p className="text-lg font-bold text-gray-900">18 Tasks</p>
                  </div>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </div>

              <div className="flex items-center justify-between p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="bg-amber-600 text-white p-2 rounded-lg">
                    <Star className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Streak</p>
                    <p className="text-lg font-bold text-gray-900">7 Days</p>
                  </div>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-6 shadow-lg text-white">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="bg-white/20 p-3 rounded-xl">
                <Download className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Download MAIPA Mobile App</h3>
                <p className="text-white/80 text-sm">Access your schedule anywhere, anytime</p>
              </div>
            </div>
            <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 whitespace-nowrap">
              Download Now
            </button>
          </div>
        </div>
                  </div>
                )}

                {activeTab === 'calendar' && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-gray-900">Calendar View</h2>
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                      <p className="text-gray-600">Calendar integration coming soon...</p>
                    </div>
                  </div>
                )}

                {activeTab === 'tasks' && (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h2 className="text-2xl font-bold text-gray-900">All Tasks</h2>
                      <button className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all duration-200 flex items-center gap-2">
                        <Plus className="h-5 w-5" />
                        Add Task
                      </button>
                    </div>
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                      <div className="space-y-2">
                        {tasks.map((task) => (
                          <div key={task.id} className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-all duration-200">
                            <button
                              onClick={() => toggleTask(task.id)}
                              className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all duration-200 ${
                                task.completed
                                  ? 'bg-emerald-500 border-emerald-500'
                                  : 'border-gray-300 hover:border-emerald-500'
                              }`}
                            >
                              {task.completed && <CheckCircle className="h-4 w-4 text-white" />}
                            </button>
                            <div className="flex-1 min-w-0">
                              <p className={`text-sm font-medium ${task.completed ? 'line-through text-gray-400' : 'text-gray-900'}`}>
                                {task.title}
                              </p>
                              <span className={`inline-block mt-1 px-2 py-0.5 text-xs font-medium rounded-full ${
                                task.priority === 'high'
                                  ? 'bg-red-100 text-red-700'
                                  : task.priority === 'medium'
                                  ? 'bg-amber-100 text-amber-700'
                                  : 'bg-gray-100 text-gray-700'
                              }`}>
                                {task.priority}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'stats' && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-gray-900">Statistics & Analytics</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                      {stats.map((stat, index) => (
                        <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                          <div className="flex items-center justify-between mb-4">
                            <div className={`bg-gradient-to-r ${stat.color} text-white p-3 rounded-xl`}>
                              {stat.icon}
                            </div>
                          </div>
                          <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                          <div className="text-sm text-gray-600">{stat.label}</div>
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

export default DashboardPage;
