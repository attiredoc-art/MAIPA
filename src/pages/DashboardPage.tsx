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
  Video
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
  const { user } = useAuth();
  const navigate = useNavigate();

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
    </div>
  );
};

export default DashboardPage;
