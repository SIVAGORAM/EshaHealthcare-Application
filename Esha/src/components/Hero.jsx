import React from 'react';
import { ArrowRight, Play, Users, Shield, Clock, Star, Zap, Heart, Activity } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 pt-16 overflow-hidden">
      {/* Medical Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32">
          <Activity className="w-full h-full text-blue-600 animate-pulse" />
        </div>
        <div className="absolute bottom-40 right-20 w-24 h-24">
          <Heart className="w-full h-full text-red-500 animate-pulse" style={{animationDelay: '1s'}} />
        </div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16">
          <Shield className="w-full h-full text-green-500 animate-pulse" style={{animationDelay: '2s'}} />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left animate-fadeInUp">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
              <Star className="h-4 w-4 animate-spin text-yellow-500" />
              <span>Smart Care Starts Here</span>
              <Zap className="h-4 w-4 text-purple-500" />
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Where Health Meets
                <span className="block text-blue-600 mt-2">
                  Technology
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Revolutionizing outpatient care with AI-driven solutions, eAsha empowers patients and providers alike. 
                Experience the future of healthcare technology today.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 py-6 max-w-md mx-auto lg:mx-0">
              <div className="text-center transform hover:scale-110 transition-transform duration-300">
                <div className="text-2xl sm:text-3xl font-bold text-blue-600 animate-pulse">24/7</div>
                <div className="text-xs sm:text-sm text-gray-600">Available</div>
              </div>
              <div className="text-center transform hover:scale-110 transition-transform duration-300">
                <div className="text-2xl sm:text-3xl font-bold text-blue-600 animate-pulse" style={{animationDelay: '0.5s'}}>1000+</div>
                <div className="text-xs sm:text-sm text-gray-600">Patients</div>
              </div>
              <div className="text-center transform hover:scale-110 transition-transform duration-300">
                <div className="text-2xl sm:text-3xl font-bold text-blue-600 animate-pulse" style={{animationDelay: '1s'}}>50+</div>
                <div className="text-xs sm:text-sm text-gray-600">Doctors</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all transform hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-2 group">
                <span>Join Waitlist</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all transform hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2 group">
                <Play className="h-5 w-5 group-hover:scale-110 transition-transform" />
                <span>Watch Demo</span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-8 pt-6">
              <div className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
                <Users className="h-5 w-5 animate-pulse" />
                <span className="text-sm">Trusted by 1000+ patients</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600 hover:text-green-600 transition-colors">
                <Shield className="h-5 w-5 animate-pulse" style={{animationDelay: '0.5s'}} />
                <span className="text-sm">HIPAA Compliant</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600 hover:text-purple-600 transition-colors">
                <Clock className="h-5 w-5 animate-pulse" style={{animationDelay: '1s'}} />
                <span className="text-sm">24/7 Support</span>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative order-first lg:order-last animate-fadeInUp" style={{animationDelay: '0.3s'}}>
            {/* Main Card */}
            <div className="relative group max-w-lg mx-auto">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 scale-105"></div>
              
              {/* Main Card */}
              <div className="relative bg-white rounded-3xl p-6 sm:p-8 shadow-2xl transform hover:scale-105 transition-all duration-500 border border-gray-100">
                <img 
                  src="https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Advanced Healthcare Technology" 
                  className="w-full h-48 sm:h-64 object-cover rounded-2xl"
                />
                
                {/* Card Content */}
                <div className="mt-6 space-y-3">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">AI-Powered Healthcare</h3>
                  <p className="text-gray-600">Smart solutions for modern healthcare needs</p>
                  <div className="flex items-center space-x-2 text-sm text-blue-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span>System Online</span>
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 bg-white/95 backdrop-blur-sm p-3 sm:p-4 rounded-xl shadow-lg border border-blue-100 animate-float">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs sm:text-sm font-medium text-gray-800">Online Consultation</span>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-white/95 backdrop-blur-sm p-3 sm:p-4 rounded-xl shadow-lg border border-cyan-100 animate-float" style={{animationDelay: '1s'}}>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="text-xs sm:text-sm font-medium text-gray-800">Instant Booking</span>
              </div>
            </div>

            <div className="absolute top-1/2 -right-6 sm:-right-8 bg-gradient-to-r from-purple-500 to-pink-500 text-white p-3 rounded-xl shadow-lg animate-float" style={{animationDelay: '2s'}}>
              <div className="flex items-center space-x-2">
                <Zap className="h-4 w-4" />
                <span className="text-xs sm:text-sm font-medium">AI Powered</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;