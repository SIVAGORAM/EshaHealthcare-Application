import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, MessageCircle, Heart, Activity } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-16 lg:py-20 bg-gray-50 relative overflow-hidden">
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
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Get in 
            <span className="text-blue-600"> Touch</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            We'd love to hear from you! Reach out with any questions or feedback. 
            Our team is here to help you 24/7.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="space-y-6 lg:space-y-8">
            <div className="bg-white rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-lg">
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 lg:p-4 rounded-xl">
                    <Mail className="h-5 w-5 lg:h-6 lg:w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm lg:text-base">Email</h4>
                    <p className="text-gray-600 text-sm lg:text-base">contact@easha.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-cyan-100 p-3 lg:p-4 rounded-xl">
                    <Phone className="h-5 w-5 lg:h-6 lg:w-6 text-cyan-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm lg:text-base">Phone</h4>
                    <p className="text-gray-600 text-sm lg:text-base">+916301680400</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 lg:p-4 rounded-xl">
                    <MapPin className="h-5 w-5 lg:h-6 lg:w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm lg:text-base">Office</h4>
                    <p className="text-gray-600 text-sm lg:text-base">
                      Level 2, 1-8-653(251), STREET 7, LANE 1,<br />
                      PRAKASH NAGAR, HYDERABAD,<br />
                      TELANGANA-500016
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 lg:p-4 rounded-xl">
                    <Clock className="h-5 w-5 lg:h-6 lg:w-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm lg:text-base">Hours</h4>
                    <p className="text-gray-600 text-sm lg:text-base">24/7 Support Available</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-lg">
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-6">Quick Actions</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <button className="bg-blue-50 text-blue-600 p-4 rounded-xl hover:bg-blue-100 transition-colors text-left group">
                  <MessageCircle className="h-5 w-5 lg:h-6 lg:w-6 mb-2 group-hover:scale-110 transition-transform" />
                  <div className="text-sm font-semibold">Live Chat</div>
                </button>
                
                <button className="bg-cyan-50 text-cyan-600 p-4 rounded-xl hover:bg-cyan-100 transition-colors text-left group">
                  <Phone className="h-5 w-5 lg:h-6 lg:w-6 mb-2 group-hover:scale-110 transition-transform" />
                  <div className="text-sm font-semibold">Call Now</div>
                </button>
                
                <button className="bg-green-50 text-green-600 p-4 rounded-xl hover:bg-green-100 transition-colors text-left group">
                  <Mail className="h-5 w-5 lg:h-6 lg:w-6 mb-2 group-hover:scale-110 transition-transform" />
                  <div className="text-sm font-semibold">Email Us</div>
                </button>
                
                <button className="bg-purple-50 text-purple-600 p-4 rounded-xl hover:bg-purple-100 transition-colors text-left group">
                  <MapPin className="h-5 w-5 lg:h-6 lg:w-6 mb-2 group-hover:scale-110 transition-transform" />
                  <div className="text-sm font-semibold">Visit Us</div>
                </button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-lg">
            <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Enter your email address"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Enter your phone number"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Tell us how we can help you..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Send className="h-5 w-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;