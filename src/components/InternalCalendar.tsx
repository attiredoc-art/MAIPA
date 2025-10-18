import { 
  Calendar, 
  Plus, 
  Clock, 
  Bell, 
  CheckSquare,
  Layers,
  Sparkles,
  ArrowRight
} from 'lucide-react';

const InternalCalendarSection = () => {
  const internalFeatures = [
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Built-in Calendar",
      description: "Create and manage events directly within the app without needing external calendar connections.",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: <CheckSquare className="h-6 w-6" />,
      title: "Smart Tasks",
      description: "Add tasks with priorities, due dates, and categories - all synchronized with your calendar view.",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: <Bell className="h-6 w-6" />,
      title: "Custom Reminders",
      description: "Set personalized reminders and notifications that work independently of any external service.",
      color: "from-orange-500 to-red-600"
    }
  ];

  return (
    <section className="py-16 sm:py-10 bg-white relative overflow-hidden">
      {/* Background Elements - matching existing theme */}
      <div className="absolute top-10 right-4 sm:right-10 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-indigo-200 to-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-10 left-4 sm:left-10 w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-br from-purple-200 to-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
      <div className="absolute top-1/2 right-1/3 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-blue-200 to-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-4000 hidden sm:block"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4 mr-2" />
            Works Independently
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Your Personal <span className="bg-gradient-to-r from-indigo-600 to-purple-700 bg-clip-text text-transparent">Digital Workspace</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            No Google Calendar? No problem! Our app comes with a powerful built-in calendar system. 
            Create events, manage tasks, and set reminders - all within your personal digital workspace.
          </p>
          <div className="mt-6 sm:mt-8 w-16 sm:w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Features */}
          <div className="space-y-8">
            {internalFeatures.map((feature, index) => (
              <div key={index} className="flex items-start group">
                <div className={`bg-gradient-to-br ${feature.color} text-white p-3 rounded-xl mr-4 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}

            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100 rounded-2xl p-6 mt-8 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-4">
                <Layers className="h-5 w-5 text-indigo-600 mr-2" />
                <span className="text-sm font-medium text-indigo-600">Unified Experience</span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                Whether you connect Google Calendar or use our built-in system, everything integrates seamlessly. 
                Mix and match external events with internal tasks and reminders for complete productivity control.
              </p>
            </div>
          </div>

          {/* Right Side - Visual Demo */}
          <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-2 rounded-lg">
                  <Calendar className="h-5 w-5 text-white" />
                </div>
                <span className="ml-3 font-semibold text-gray-900">My Calendar</span>
              </div>
              <button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-2 rounded-lg hover:scale-110 transition-transform duration-300 shadow-lg">
                <Plus className="h-4 w-4" />
              </button>
            </div>

            <div className="space-y-4">
              {/* Sample Events */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-4 hover:shadow-md transition-all duration-300">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-gray-900">Team Meeting</h4>
                  <span className="text-xs text-blue-700 bg-blue-100 px-2 py-1 rounded-full">Event</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Clock className="h-4 w-4 mr-1" />
                  10:00 AM - 11:00 AM
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-4 hover:shadow-md transition-all duration-300">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-gray-900">Complete Project Proposal</h4>
                  <span className="text-xs text-green-700 bg-green-100 px-2 py-1 rounded-full">Task</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckSquare className="h-4 w-4 mr-1" />
                  Due: Today 5:00 PM
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-xl p-4 hover:shadow-md transition-all duration-300">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-gray-900">Call Mom</h4>
                  <span className="text-xs text-orange-700 bg-orange-100 px-2 py-1 rounded-full">Reminder</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Bell className="h-4 w-4 mr-1" />
                  6:00 PM
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row justify-start items-center px-4">
              <a href="#action" className="w-auto bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center mx-auto group">
                Create Your First Event
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="bg-gradient-to-br from-gray-50 to-indigo-50 border border-gray-200 rounded-2xl p-8 inline-block shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
              Start Organizing Today
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl">
              Get started immediately with our built-in calendar, or connect your Google Calendar for enhanced integration. 
              The choice is yours!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternalCalendarSection;