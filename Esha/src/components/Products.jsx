import React from 'react';
import { Sparkles, BookOpen, Heart, Users, Cpu, MapPin, ArrowRight, Zap, Star, Activity } from 'lucide-react';

const Products = () => {
  const products = [
    {
      icon: Sparkles,
      title: "Latest Innovations",
      description: "Explore our latest advancement in healthcare technology",
      color: "blue",
      image: "https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      icon: BookOpen,
      title: "Healthy Insights",
      description: "Stay informed with our latest health insights and trends.",
      color: "cyan",
      image: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      icon: Heart,
      title: "Patient Care",
      description: "Discover how we enhance patient experiences every day.",
      color: "green",
      image: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      icon: Users,
      title: "Join Us",
      description: "Become part of our mission to improve healthcare.",
      color: "purple",
      image: "https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      icon: Cpu,
      title: "Tech Solutions",
      description: "Learn about our innovative tech solutions for healthcare",
      color: "orange",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      icon: MapPin,
      title: "Community Impact",
      description: "See how we are making a difference in communities",
      color: "pink",
      image: "https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: "from-blue-600 to-blue-700 bg-blue-100 text-blue-600 hover:from-blue-700 hover:to-blue-800",
      cyan: "from-cyan-600 to-cyan-700 bg-cyan-100 text-cyan-600 hover:from-cyan-700 hover:to-cyan-800",
      green: "from-green-600 to-green-700 bg-green-100 text-green-600 hover:from-green-700 hover:to-green-800",
      purple: "from-purple-600 to-purple-700 bg-purple-100 text-purple-600 hover:from-purple-700 hover:to-purple-800",
      orange: "from-orange-600 to-orange-700 bg-orange-100 text-orange-600 hover:from-orange-700 hover:to-orange-800",
      pink: "from-pink-600 to-pink-700 bg-pink-100 text-pink-600 hover:from-pink-700 hover:to-pink-800"
    };
    return colors[color] || colors.blue;
  };

  return (
    <section id="products" className="py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-cyan-50 relative overflow-hidden">
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
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Star className="h-4 w-4 animate-spin text-yellow-500" />
            <span>Our Products</span>
            <Zap className="h-4 w-4 text-purple-500" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Healthcare
            <span className="block text-blue-600 mt-2">
              Products
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive suite of healthcare solutions designed to transform 
            your healthcare experience and improve outcomes.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16">
          {products.map((product, index) => {
            const Icon = product.icon;
            const colorClasses = getColorClasses(product.color);
            
            return (
              <div key={index} className="bg-white rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group animate-fadeInUp" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-3 lg:bottom-4 left-3 lg:left-4">
                    <div className={`p-2 lg:p-3 rounded-lg ${colorClasses.split(' ')[2]} ${colorClasses.split(' ')[3]} backdrop-blur-sm bg-white/90 shadow-lg`}>
                      <Icon className="h-5 w-5 lg:h-6 lg:w-6 animate-pulse" />
                    </div>
                  </div>
                  <div className="absolute top-3 lg:top-4 right-3 lg:right-4">
                    <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full">
                      <Sparkles className="h-3 w-3 lg:h-4 lg:w-4 text-white animate-spin" />
                    </div>
                  </div>
                </div>
                
                <div className="p-4 lg:p-6">
                  <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{product.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm lg:text-base">{product.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <button className={`bg-gradient-to-r ${colorClasses.split(' ')[0]} ${colorClasses.split(' ')[1]} text-white px-3 lg:px-4 py-2 rounded-lg ${colorClasses.split(' ')[4]} ${colorClasses.split(' ')[5]} transition-all text-xs lg:text-sm font-semibold transform hover:scale-105 shadow-md`}>
                      {product.title === "Join Us" ? "Sign Up" : "Learn More"}
                    </button>
                    <button className="text-gray-400 hover:text-gray-600 transition-colors group-hover:translate-x-1 transform">
                      <ArrowRight className="h-4 w-4 lg:h-5 lg:w-5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Featured Product */}
        <div className="bg-white rounded-2xl lg:rounded-3xl p-6 lg:p-12 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fadeInUp" style={{animationDelay: '0.6s'}}>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                <Sparkles className="h-4 w-4 animate-spin" />
                <span>Featured Innovation</span>
              </div>
              
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                AI-Powered Health Assistant
              </h3>
              <p className="text-base lg:text-lg text-gray-600">
                Our revolutionary AI chatbot provides instant health advice, symptom checking, 
                and personalized recommendations 24/7. Experience the future of healthcare support.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-gray-700 text-sm lg:text-base">Instant symptom analysis</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  <span className="text-gray-700 text-sm lg:text-base">Personalized health recommendations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                  <span className="text-gray-700 text-sm lg:text-base">24/7 availability</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all transform hover:scale-105">
                  Try Now
                </button>
                <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all transform hover:scale-105">
                  Learn More
                </button>
              </div>
            </div>
            
            <div className="relative group order-1 lg:order-2">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-2xl lg:rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative bg-white rounded-2xl lg:rounded-3xl p-4 lg:p-6 shadow-xl transform hover:scale-105 transition-all duration-500">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
                      <Cpu className="h-4 w-4 lg:h-5 lg:w-5 text-blue-600 animate-pulse" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">AI Health Assistant</div>
                      <div className="text-xs text-gray-500 flex items-center space-x-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span>Online now</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-3 rounded-lg">
                      <p className="text-xs lg:text-sm text-gray-700">Hello! I'm your AI health assistant. How can I help you today?</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg ml-4">
                      <p className="text-xs lg:text-sm text-gray-700">I have a headache and fever</p>
                    </div>
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-3 rounded-lg">
                      <p className="text-xs lg:text-sm text-gray-700">I can help you with that. Based on your symptoms, I recommend...</p>
                    </div>
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

export default Products;