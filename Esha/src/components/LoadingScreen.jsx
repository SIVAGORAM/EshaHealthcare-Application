import React from 'react';
import { Heart, Activity, Zap, Shield } from 'lucide-react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50 flex items-center justify-center z-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
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

      <div className="relative z-10 text-center">
        {/* Main Loading Container */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-2xl border border-white/20 max-w-md mx-auto">
          
          {/* Logo Section */}
          <div className="flex items-center justify-center space-x-3 mb-8">
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-3 rounded-xl animate-pulse">
              <Heart className="h-8 w-8 text-white animate-heartbeat" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">eAsha24x7</h1>
              <p className="text-sm text-gray-600">Healthcare</p>
            </div>
          </div>

          {/* Medical Cross Animation */}
          <div className="relative mb-8">
            <div className="medical-cross-container">
              <div className="medical-cross">
                <div className="cross-horizontal"></div>
                <div className="cross-vertical"></div>
              </div>
            </div>
          </div>

          {/* Floating Medical Icons */}
          <div className="relative mb-8 h-20">
            <div className="floating-icon icon-1">
              <div className="bg-blue-100 p-3 rounded-full">
                <Activity className="h-6 w-6 text-blue-600" />
              </div>
            </div>
            <div className="floating-icon icon-2">
              <div className="bg-red-100 p-3 rounded-full">
                <Heart className="h-6 w-6 text-red-600" />
              </div>
            </div>
            <div className="floating-icon icon-3">
              <div className="bg-green-100 p-3 rounded-full">
                <Shield className="h-6 w-6 text-green-600" />
              </div>
            </div>
            <div className="floating-icon icon-4">
              <div className="bg-purple-100 p-3 rounded-full">
                <Zap className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-6">
            <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
              <div className="progress-bar h-full bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-full"></div>
            </div>
          </div>

          {/* Loading Text */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-gray-900 animate-pulse">
              Initializing Healthcare Platform
            </h3>
            <div className="loading-dots">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>

          {/* Status Messages */}
          <div className="mt-6 space-y-2 text-sm text-gray-600">
            <div className="status-message active">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
              Connecting to healthcare network...
            </div>
            <div className="status-message">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse mr-2"></div>
              Loading AI assistant...
            </div>
            <div className="status-message">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse mr-2"></div>
              Preparing your dashboard...
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <p className="mt-6 text-gray-500 text-sm">
          Empowering Health Access, 24x7 – Your Digital Gateway to Care
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;