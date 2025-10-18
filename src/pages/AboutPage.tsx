import React from 'react';
import { 
  Users, 
  Target, 
  Award, 
  Heart, 
  Lightbulb, 
  Rocket, 
  Globe, 
  Shield,
  Brain,
  Calendar,
  Zap,
  Star,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const AboutPage: React.FC = () => {
  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-Founder",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Former Google PM with 10+ years in productivity software. Passionate about helping people achieve more."
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO & Co-Founder",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "AI researcher and full-stack developer. Expert in machine learning and calendar optimization algorithms."
    },
    {
      name: "Emily Johnson",
      role: "Head of Design",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Award-winning UX designer focused on creating intuitive, beautiful interfaces that users love."
    },
    {
      name: "David Kim",
      role: "Lead AI Engineer",
      image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "PhD in Computer Science. Specializes in natural language processing and intelligent scheduling systems."
    }
  ];

  const values = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "User-Centric",
      description: "Every feature we build starts with understanding our users' real needs and pain points.",
      color: "from-red-500 to-pink-600"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Privacy First",
      description: "Your data belongs to you. We implement the highest security standards to protect your information.",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Innovation",
      description: "We constantly push boundaries to create smarter, more intuitive productivity solutions.",
      color: "from-yellow-500 to-orange-600"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Accessibility",
      description: "Productivity tools should be available to everyone, regardless of their technical background.",
      color: "from-blue-500 to-indigo-600"
    }
  ];

  const milestones = [
    { year: "2022", event: "Company Founded", description: "Started with a vision to revolutionize personal productivity" },
    { year: "2023", event: "AI Integration", description: "Launched our first AI-powered scheduling assistant" },
    { year: "2024", event: "50K Users", description: "Reached 50,000 active users across 30 countries" },
    { year: "2025", event: "Enterprise Launch", description: "Expanding to serve teams and organizations" }
  ];

  const stats = [
    { number: "50K+", label: "Happy Users", icon: <Users className="h-6 w-6" /> },
    { number: "1M+", label: "Events Managed", icon: <Calendar className="h-6 w-6" /> },
    { number: "99.9%", label: "Uptime", icon: <Zap className="h-6 w-6" /> },
    { number: "4.9", label: "App Rating", icon: <Star className="h-6 w-6" /> }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-50 via-white to-purple-50 pt-16 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center relative z-10">
            <div className="inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-6">
              <Rocket className="h-4 w-4 mr-2" />
              Our Story
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">
              Building the Future of <span className="bg-gradient-to-r from-indigo-600 to-purple-700 bg-clip-text text-transparent">Personal Productivity</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto px-4 leading-relaxed">
              We're a passionate team of engineers, designers, and productivity enthusiasts on a mission to help 
              people make the most of their time through intelligent, intuitive technology.
            </p>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute top-20 left-4 sm:left-10 opacity-10">
          <Brain className="h-12 w-12 sm:h-20 sm:w-20 text-indigo-600 animate-pulse" />
        </div>
        <div className="absolute top-40 right-4 sm:right-20 opacity-10">
          <Target className="h-16 w-16 sm:h-24 sm:w-24 text-purple-600 animate-bounce" />
        </div>
        <div className="absolute bottom-20 left-1/4 opacity-10 hidden sm:block">
          <Award className="h-12 w-12 sm:h-16 sm:w-16 text-green-500 animate-pulse" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white p-3 rounded-xl w-fit mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-indigo-600 mb-1 sm:mb-2">{stat.number}</div>
                <div className="text-sm sm:text-base text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-6">
                <Target className="h-4 w-4 mr-2" />
                Our Mission
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Empowering People to <span className="text-indigo-600">Achieve More</span>
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-6 leading-relaxed">
                We believe that everyone deserves tools that help them organize their time effectively and achieve their goals. 
                Our AI Personal Assistant combines the power of artificial intelligence with intuitive design to create a 
                productivity experience that adapts to you.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-gray-900">Intelligent by Design</h4>
                    <p className="text-xs sm:text-sm lg:text-base text-gray-600">Our AI learns from your patterns to provide personalized recommendations.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-gray-900">Privacy Protected</h4>
                    <p className="text-xs sm:text-sm lg:text-base text-gray-600">Your data stays secure with enterprise-grade encryption and privacy controls.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-gray-900">Continuously Evolving</h4>
                    <p className="text-xs sm:text-sm lg:text-base text-gray-600">We regularly update our features based on user feedback and technological advances.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-2xl border border-gray-100">
              <div className="text-center mb-6">
                <div className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Rocket className="h-8 w-8" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-sm sm:text-base text-gray-600 text-center leading-relaxed">
                "To create a world where technology seamlessly enhances human productivity, allowing people to focus on what matters most to them."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Our Core <span className="text-indigo-600">Values</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              These principles guide everything we do, from product development to customer support.
            </p>
            <div className="mt-6 sm:mt-8 w-16 sm:w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 group">
                <div className={`bg-gradient-to-br ${value.color} text-white p-3 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {value.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors duration-300">{value.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Our <span className="text-indigo-600">Journey</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 px-4">Key milestones in our mission to revolutionize productivity</p>
            <div className="mt-6 sm:mt-8 w-16 sm:w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Desktop Timeline Line */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 rounded-full shadow-lg"></div>
            
            {/* Mobile Timeline Line */}
            <div className="lg:hidden absolute left-6 top-0 w-0.5 h-full bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 rounded-full"></div>
            
            <div className="space-y-8 lg:space-y-16">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-6 lg:left-1/2 transform lg:-translate-x-1/2 w-4 h-4 lg:w-6 lg:h-6 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full border-4 border-white shadow-xl z-10"></div>
                  
                  {/* Content Card */}
                  <div className={`flex-1 ml-12 lg:ml-0 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                    <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 group">
                      {/* Year Badge */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm sm:text-base font-bold shadow-lg">
                          {milestone.year}
                        </div>
                        <div className="w-8 h-8 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <div className="w-3 h-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full"></div>
                        </div>
                      </div>
                      
                      {/* Event Title */}
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors duration-300">
                        {milestone.event}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
                        {milestone.description}
                      </p>
                      
                      {/* Decorative Element */}
                      <div className="mt-6 w-0 group-hover:w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full transition-all duration-500"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Bottom Glow Effect */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-gradient-to-t from-indigo-200 to-transparent rounded-full blur-3xl opacity-50"></div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Meet Our <span className="text-indigo-600">Team</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 px-4">The passionate people behind AI Personal Assistant</p>
            <div className="mt-6 sm:mt-8 w-16 sm:w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden border border-gray-100 group">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 group-hover:text-indigo-600 transition-colors duration-300">{member.name}</h3>
                  <p className="text-sm sm:text-base text-indigo-600 font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-indigo-600 via-purple-700 to-pink-600 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Ready to Join Our Mission?
          </h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90 max-w-2xl mx-auto">
            Experience the future of personal productivity with AI Personal Assistant.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a href="/" className="w-full sm:w-auto bg-white text-indigo-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 flex items-center justify-center group">
              Get Started Today
              <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-4 sm:left-20 w-24 h-24 sm:w-32 sm:h-32 bg-white bg-opacity-10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-4 sm:right-20 w-32 h-32 sm:w-40 sm:h-40 bg-white bg-opacity-10 rounded-full animate-pulse animation-delay-2000"></div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;