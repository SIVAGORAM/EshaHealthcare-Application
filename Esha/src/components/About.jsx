import React from 'react';
import { Target, Eye, Users, Award, ArrowRight, Heart, Sparkles, Activity } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Medical Pattern Background */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute top-10 right-10 w-20 lg:w-32 h-20 lg:h-32">
          <Activity className="w-full h-full text-blue-600 animate-float" />
        </div>
        <div className="absolute bottom-20 left-10 w-16 lg:w-24 h-16 lg:h-24">
          <Heart className="w-full h-full text-red-500 animate-float" style={{animationDelay: '1s'}} />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16 animate-fadeInUp">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Sparkles className="h-4 w-4 animate-spin" />
            <span>About Our Mission</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Empowering Healthcare Through
            <span className="block text-blue-600 mt-2">
              Innovation
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            At Easha, we believe in making outpatient care accessible and efficient for everyone. 
            Our commitment to innovation ensures that healthcare is not just a service, but a seamless experience.
          </p>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12 lg:mb-16">
          <div className="bg-white rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fadeInUp">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-gradient-to-r from-blue-100 to-blue-200 p-3 lg:p-4 rounded-xl">
                <Eye className="h-6 w-6 lg:h-8 lg:w-8 text-blue-600 animate-pulse" />
              </div>
              <div>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900">Our Vision</h3>
                <p className="text-gray-600 text-sm lg:text-base">Where we're heading</p>
              </div>
            </div>
            <p className="text-gray-700 text-base lg:text-lg mb-6 leading-relaxed">
              Outpatient care, simplified for everyone, everywhere. We envision a world where quality healthcare 
              is accessible to all, regardless of geographical barriers or time constraints.
            </p>
            <button className="text-blue-600 font-semibold flex items-center space-x-2 hover:text-blue-700 transition-colors group">
              <span>Learn More</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="bg-white rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fadeInUp" style={{animationDelay: '0.2s'}}>
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-gradient-to-r from-cyan-100 to-cyan-200 p-3 lg:p-4 rounded-xl">
                <Target className="h-6 w-6 lg:h-8 lg:w-8 text-cyan-600 animate-pulse" style={{animationDelay: '0.5s'}} />
              </div>
              <div>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900">Our Mission</h3>
                <p className="text-gray-600 text-sm lg:text-base">What drives us</p>
              </div>
            </div>
            <p className="text-gray-700 text-base lg:text-lg mb-6 leading-relaxed">
              Smart, secure, and accessible healthcare—powered by innovation. We're committed to transforming 
              the healthcare landscape through cutting-edge technology and patient-centered care.
            </p>
            <button className="text-cyan-600 font-semibold flex items-center space-x-2 hover:text-cyan-700 transition-colors group">
              <span>Join Us</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Company Overview */}
        <div className="bg-white rounded-2xl lg:rounded-3xl p-6 lg:p-12 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fadeInUp mb-12 lg:mb-16" style={{animationDelay: '0.4s'}}>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  Easha24x7 Healthcare Private Limited
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  <strong>Empowering Health Access, 24x7 – Your Digital Gateway to Care.</strong>
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We are a digital health solutions company committed to transforming the way people access 
                  outpatient care. Through our innovative platform, we enable seamless doctor and hospital 
                  appointment bookings with just a few clicks — no hidden charges, no payment gateway fees, 
                  and a one-time free registration for patients.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 lg:gap-6">
                <div className="text-center p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl transform hover:scale-105 transition-transform">
                  <div className="text-2xl lg:text-3xl font-bold text-blue-600 animate-pulse">2024</div>
                  <div className="text-sm text-gray-600">Founded</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-r from-cyan-50 to-cyan-100 rounded-xl transform hover:scale-105 transition-transform">
                  <div className="text-2xl lg:text-3xl font-bold text-cyan-600 animate-pulse" style={{animationDelay: '0.5s'}}>24/7</div>
                  <div className="text-sm text-gray-600">Available</div>
                </div>
              </div>
            </div>

            <div className="relative group order-1 lg:order-2">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-2xl lg:rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Healthcare Innovation Team"
                  className="w-full h-64 lg:h-80 object-cover rounded-2xl lg:rounded-3xl shadow-xl hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl lg:rounded-3xl"></div>
                <div className="absolute bottom-4 lg:bottom-6 left-4 lg:left-6 bg-white/90 backdrop-blur-sm p-3 lg:p-4 rounded-xl shadow-lg">
                  <div className="flex items-center space-x-2 lg:space-x-3">
                    <Heart className="h-5 w-5 lg:h-6 lg:w-6 text-red-500 animate-pulse" />
                    <span className="text-sm font-medium text-gray-800">Healthcare Innovation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <div className="text-center group animate-fadeInUp" style={{animationDelay: '0.6s'}}>
            <div className="bg-white p-6 lg:p-8 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2">
              <div className="bg-gradient-to-r from-blue-100 to-blue-200 p-4 lg:p-6 rounded-xl inline-block mb-4 group-hover:scale-110 transition-transform">
                <Users className="h-6 w-6 lg:h-8 lg:w-8 text-blue-600 animate-pulse" />
              </div>
              <h4 className="text-lg lg:text-xl font-semibold text-gray-900 mb-2">Patient-Centered</h4>
              <p className="text-gray-600 text-sm lg:text-base">Putting patients first in everything we do</p>
            </div>
          </div>
          
          <div className="text-center group animate-fadeInUp" style={{animationDelay: '0.8s'}}>
            <div className="bg-white p-6 lg:p-8 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2">
              <div className="bg-gradient-to-r from-cyan-100 to-cyan-200 p-4 lg:p-6 rounded-xl inline-block mb-4 group-hover:scale-110 transition-transform">
                <Award className="h-6 w-6 lg:h-8 lg:w-8 text-cyan-600 animate-pulse" style={{animationDelay: '0.5s'}} />
              </div>
              <h4 className="text-lg lg:text-xl font-semibold text-gray-900 mb-2">Quality Assured</h4>
              <p className="text-gray-600 text-sm lg:text-base">Maintaining the highest standards of care</p>
            </div>
          </div>
          
          <div className="text-center group animate-fadeInUp sm:col-span-2 lg:col-span-1" style={{animationDelay: '1s'}}>
            <div className="bg-white p-6 lg:p-8 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2">
              <div className="bg-gradient-to-r from-green-100 to-green-200 p-4 lg:p-6 rounded-xl inline-block mb-4 group-hover:scale-110 transition-transform">
                <Target className="h-6 w-6 lg:h-8 lg:w-8 text-green-600 animate-pulse" style={{animationDelay: '1s'}} />
              </div>
              <h4 className="text-lg lg:text-xl font-semibold text-gray-900 mb-2">Innovation Driven</h4>
              <p className="text-gray-600 text-sm lg:text-base">Leveraging technology for better healthcare</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;