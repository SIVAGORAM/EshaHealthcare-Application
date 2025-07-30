import React from 'react';
import { Star, Quote, Sparkles, Heart, Activity } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Dr Minal Chandra",
      role: "Co-Founder and Chief Pain Consultant",
      quote: "eAsha's AI chatbot saved me time and stress!",
      avatar: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Dr Sneha Tiwari",
      role: "Sports & Celebrity Physio",
      quote: "An incredible tool that changed my daily routine.",
      avatar: "https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Ramya",
      role: "Managing Director",
      quote: "Efficient, smart, and super helpful!",
      avatar: "https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Teja Babu",
      role: "Software Engineer",
      quote: "Improved patient interaction dramatically.",
      avatar: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Harika Reddy",
      role: "Software Engineer",
      quote: "Easy to integrate with our hospital systems.",
      avatar: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Sai Ganesh Chikkala",
      role: "Data Analyst",
      quote: "Patients love the quick response times.",
      avatar: "https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=150"
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-white relative overflow-hidden">
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
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Sparkles className="h-4 w-4 animate-spin" />
            <span>Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Hear What Our
            <span className="block text-blue-600 mt-2">
              Users Are Saying
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how eAsha is transforming lives through technology. 
            Real experiences from our valued users.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl lg:rounded-3xl p-6 lg:p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group animate-fadeInUp" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="flex items-center mb-6">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 lg:h-5 lg:w-5 fill-current animate-pulse" style={{animationDelay: `${i * 0.1}s`}} />
                  ))}
                </div>
              </div>
              
              <div className="relative mb-6">
                <Quote className="absolute -top-2 -left-2 h-6 w-6 lg:h-8 lg:w-8 text-blue-200 group-hover:text-blue-300 transition-colors" />
                <p className="text-gray-700 text-base lg:text-lg leading-relaxed pl-6">
                  "{testimonial.quote}"
                </p>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-full blur-sm opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="relative w-10 h-10 lg:w-12 lg:h-12 rounded-full object-cover group-hover:scale-110 transition-transform duration-300 shadow-lg"
                  />
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 lg:w-4 lg:h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors text-sm lg:text-base">{testimonial.name}</h4>
                  <p className="text-xs lg:text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center animate-fadeInUp" style={{animationDelay: '0.6s'}}>
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-2xl lg:rounded-3xl p-6 lg:p-12 text-white relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-4 right-4 w-12 h-12 lg:w-16 lg:h-16 bg-white/10 rounded-full animate-float"></div>
              <div className="absolute bottom-4 left-4 w-8 h-8 lg:w-12 lg:h-12 bg-white/10 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">Join Our Community of Innovators</h3>
              <p className="text-lg lg:text-xl mb-8 opacity-90">
                Connect with us and share your innovative ideas. Together, we can create solutions that make a difference.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="bg-white text-blue-600 px-6 lg:px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105">
                  Learn More
                </button>
                <button className="border border-white text-white px-6 lg:px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all transform hover:scale-105">
                  Join Community
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Innovation Section */}
        <div className="mt-12 lg:mt-16 bg-gradient-to-br from-gray-50 to-cyan-50 rounded-2xl lg:rounded-3xl p-6 lg:p-12 animate-fadeInUp" style={{animationDelay: '0.8s'}}>
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Shape the Future of Healthcare Technology
            </h3>
            <p className="text-lg lg:text-xl text-gray-600">
              We believe in the power of innovation and collaboration. Share your ideas to help us enhance healthcare technology.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <h4 className="text-xl lg:text-2xl font-semibold text-gray-900">
                Your Voice Matters: Share Your Vision for Healthcare
              </h4>
              <p className="text-gray-600">
                Submit your ideas and be part of the change. Together, we can revolutionize healthcare delivery 
                and make quality care accessible to everyone.
              </p>
              <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 lg:px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all transform hover:scale-105">
                Submit Ideas
              </button>
            </div>
            
            <div className="relative group order-1 lg:order-2">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-2xl lg:rounded-3xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Healthcare Innovation"
                  className="w-full h-48 lg:h-64 object-cover rounded-2xl lg:rounded-3xl shadow-xl hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl lg:rounded-3xl"></div>
                <div className="absolute bottom-4 lg:bottom-6 left-4 lg:left-6 bg-white/90 backdrop-blur-sm p-3 lg:p-4 rounded-xl shadow-lg">
                  <div className="flex items-center space-x-2 lg:space-x-3">
                    <Sparkles className="h-5 w-5 lg:h-6 lg:w-6 text-purple-500 animate-spin" />
                    <span className="text-sm font-medium text-gray-800">Innovation Hub</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;