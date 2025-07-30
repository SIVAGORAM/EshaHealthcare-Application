import React from 'react';
import { Video, Pill, Calendar, MessageCircle, Shield, Clock, ArrowRight, Zap, Heart, Activity } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Video,
      title: "Telemedicine Services",
      description: "Connect with healthcare professionals from the comfort of your home.",
      features: ["Video Consultations", "Secure Messaging", "Prescription Management"],
      color: "blue",
      image: "https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      icon: Pill,
      title: "Online Pharmacy",
      description: "Order medications easily and have them delivered to your doorstep.",
      features: ["Medicine Delivery", "Prescription Tracking", "Automated Refills"],
      color: "cyan",
      image: "https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      icon: Calendar,
      title: "Appointment Booking",
      description: "Book appointments with doctors and hospitals with just a few clicks.",
      features: ["Instant Booking", "Calendar Integration", "Reminder Notifications"],
      color: "green",
      image: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      icon: MessageCircle,
      title: "AI Health Assistant",
      description: "Get instant health advice and support from our AI-powered chatbot.",
      features: ["24/7 Availability", "Symptom Checker", "Health Recommendations"],
      color: "purple",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: "from-blue-600 to-blue-700 bg-blue-100 text-blue-600",
      cyan: "from-cyan-600 to-cyan-700 bg-cyan-100 text-cyan-600",
      green: "from-green-600 to-green-700 bg-green-100 text-green-600",
      purple: "from-purple-600 to-purple-700 bg-purple-100 text-purple-600"
    };
    return colors[color] || colors.blue;
  };

  return (
    <section id="services" className="py-16 lg:py-20 bg-white relative overflow-hidden">
      {/* Medical Pattern Background */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute top-20 left-20 w-16 lg:w-20 h-16 lg:h-20">
          <Activity className="w-full h-full text-blue-600 animate-float" />
        </div>
        <div className="absolute bottom-40 right-20 w-12 lg:w-16 h-12 lg:h-16">
          <Heart className="w-full h-full text-red-500 animate-float" style={{animationDelay: '1s'}} />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16 animate-fadeInUp">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Heart className="h-4 w-4 animate-pulse text-red-500" />
            <span>Our Services</span>
            <Zap className="h-4 w-4 text-yellow-500" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Your All-in-One Healthcare
            <span className="block text-blue-600 mt-2">
              Companion
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            eAsha is designed to streamline your healthcare experiences. From telemedicine to medication reminders, 
            we have you covered.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 mb-12 lg:mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            const colorClasses = getColorClasses(service.color);
            
            return (
              <div key={index} className="bg-white rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fadeInUp" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
                  <div className="flex-shrink-0 mx-auto sm:mx-0">
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-xl blur-md opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                      <div className="relative">
                        <img 
                          src={service.image} 
                          alt={service.title}
                          className="w-20 h-20 lg:w-24 lg:h-24 object-cover rounded-xl shadow-lg"
                        />
                        <div className={`absolute -bottom-2 -right-2 p-2 lg:p-3 rounded-lg ${colorClasses.split(' ')[2]} ${colorClasses.split(' ')[3]} shadow-md`}>
                          <Icon className="h-4 w-4 lg:h-5 lg:w-5 animate-pulse" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm lg:text-base">{service.description}</p>
                    
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center justify-center sm:justify-start space-x-2 text-sm text-gray-700">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{animationDelay: `${featureIndex * 0.2}s`}}></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4">
                      <button className={`bg-gradient-to-r ${colorClasses.split(' ')[0]} ${colorClasses.split(' ')[1]} text-white px-6 py-2 rounded-lg hover:opacity-90 transition-all transform hover:scale-105 text-sm lg:text-base`}>
                        Learn More
                      </button>
                      <button className="text-gray-600 hover:text-gray-800 transition-colors flex items-center space-x-1 group text-sm lg:text-base">
                        <span>Book Now</span>
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust Indicators */}
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl lg:rounded-3xl p-6 lg:p-12 animate-fadeInUp" style={{animationDelay: '0.8s'}}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 text-center">
            <div className="space-y-4 group">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-blue-100 p-4 lg:p-6 rounded-full group-hover:scale-110 transition-transform">
                  <Shield className="h-6 w-6 lg:h-8 lg:w-8 text-blue-600 animate-pulse" />
                </div>
              </div>
              <h4 className="text-lg lg:text-xl font-semibold text-gray-900">Secure & Private</h4>
              <p className="text-gray-600 text-sm lg:text-base">HIPAA compliant platform ensuring your data is always protected</p>
            </div>
            
            <div className="space-y-4 group">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-cyan-100 p-4 lg:p-6 rounded-full group-hover:scale-110 transition-transform">
                  <Clock className="h-6 w-6 lg:h-8 lg:w-8 text-cyan-600 animate-pulse" style={{animationDelay: '0.5s'}} />
                </div>
              </div>
              <h4 className="text-lg lg:text-xl font-semibold text-gray-900">Available 24/7</h4>
              <p className="text-gray-600 text-sm lg:text-base">Round-the-clock support and emergency consultation services</p>
            </div>
            
            <div className="space-y-4 group sm:col-span-2 lg:col-span-1">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-green-100 p-4 lg:p-6 rounded-full group-hover:scale-110 transition-transform">
                  <Calendar className="h-6 w-6 lg:h-8 lg:w-8 text-green-600 animate-pulse" style={{animationDelay: '1s'}} />
                </div>
              </div>
              <h4 className="text-lg lg:text-xl font-semibold text-gray-900">Easy Booking</h4>
              <p className="text-gray-600 text-sm lg:text-base">Simple, one-click appointment booking with no hidden fees</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;