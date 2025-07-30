import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Bot, User, Sparkles, Heart } from 'lucide-react';
import emailjs from 'emailjs-com';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [currentStep, setCurrentStep] = useState(0);
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: ''
  });
  const [isTyping, setIsTyping] = useState(false);
  const [isBotBlinking, setIsBotBlinking] = useState(false);
  const [showInitialBlink, setShowInitialBlink] = useState(true);
  
  const messagesEndRef = useRef(null);

  const chatSteps = [
    {
      question: "Hi! This is Easha24x7 Healthcare Bot! 👋 How can I help you today?",
      field: 'greeting',
      placeholder: 'Type your response...'
    },
    {
      question: "Thank you for reaching out! Please enter your name:",
      field: 'name',
      placeholder: 'Enter your full name'
    },
    {
      question: "Nice to meet you! Please enter your email ID:",
      field: 'email',
      placeholder: 'Enter your email address'
    },
    {
      question: "Great! Please enter your contact number:",
      field: 'mobile',
      placeholder: 'Enter your phone number'
    },
    {
      question: "Finally, please enter your message or how can we help you:",
      field: 'message',
      placeholder: 'Enter your message'
    }
  ];

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS public key
  }, []);

  useEffect(() => {
    // Bot blinking effect
    const blinkInterval = setInterval(() => {
      setIsBotBlinking(true);
      setTimeout(() => setIsBotBlinking(false), 300);
    }, 3000);

    // Auto-open chatbot after 3 seconds with blinking
    const autoOpenTimer = setTimeout(() => {
      setShowInitialBlink(true);
      setTimeout(() => {
        setIsOpen(true);
        setShowInitialBlink(false);
      }, 2000);
    }, 3000);

    return () => {
      clearInterval(blinkInterval);
      clearTimeout(autoOpenTimer);
    };
  }, []);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Start conversation when chat opens
      setTimeout(() => {
        addBotMessage(chatSteps[0].question);
      }, 500);
    }
  }, [isOpen]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const addBotMessage = (text) => {
    setIsTyping(true);
    setTimeout(() => {
      const newMessage = {
        id: Date.now().toString(),
        text: text,
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, newMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const addUserMessage = (text) => {
    const newMessage = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const sendEmail = async (userData) => {
    try {
      const templateParams = {
        to_email: 'ramkigoram@gmail.com',
        from_name: userData.name,
        from_email: userData.email,
        phone: userData.mobile,
        message: userData.message,
        subject: 'New Contact from Easha24x7 Healthcare Website'
      };

      const result = await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        templateParams
      );

      console.log('Email sent successfully:', result);
      return true;
    } catch (error) {
      console.error('Error sending email:', error);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    addUserMessage(inputValue);
    
    // Handle different steps
    if (currentStep === 0) {
      // Greeting step
      setTimeout(() => {
        addBotMessage(chatSteps[1].question);
        setCurrentStep(1);
      }, 1000);
    } else if (currentStep >= 1 && currentStep <= 4) {
      // Data collection steps
      const currentField = chatSteps[currentStep].field;
      
      // Update user data
      const updatedUserData = {
        ...userData,
        [currentField]: inputValue
      };
      setUserData(updatedUserData);

      if (currentStep < 4) {
        // Move to next step
        setTimeout(() => {
          addBotMessage(chatSteps[currentStep + 1].question);
          setCurrentStep(currentStep + 1);
        }, 1000);
      } else {
        // All information collected, send email
        const emailSent = await sendEmail(updatedUserData);
        
        setTimeout(() => {
          if (emailSent) {
            addBotMessage(
              `Thank you ${updatedUserData.name}! 🙏\n\n` +
              `I have received all your information:\n` +
              `📧 Email: ${updatedUserData.email}\n` +
              `📱 Contact: ${updatedUserData.mobile}\n` +
              `💬 Message: ${updatedUserData.message}\n\n` +
              `Your details have been sent to our team. We will reach out to you soon! 🚀\n\n` +
              `Is there anything else I can help you with?`
            );
          } else {
            addBotMessage(
              `Thank you ${updatedUserData.name}! I've collected your information, but there was an issue sending the email. Please try again or contact us directly at ramkigoram@gmail.com`
            );
          }
        }, 1000);

        // Reset for new conversation
        setCurrentStep(0);
        setUserData({ name: '', email: '', mobile: '', message: '' });
      }
    }

    setInputValue('');
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setShowInitialBlink(false);
  };

  const resetChat = () => {
    setMessages([]);
    setCurrentStep(0);
    setUserData({ name: '', email: '', mobile: '', message: '' });
    setInputValue('');
    setTimeout(() => {
      addBotMessage(chatSteps[0].question);
    }, 500);
  };

  const getCurrentPlaceholder = () => {
    if (currentStep < chatSteps.length) {
      return chatSteps[currentStep].placeholder;
    }
    return 'Type your message...';
  };

  return (
    <>
      {/* Enhanced Chat Button */}
      <button
        onClick={toggleChat}
        className={`fixed bottom-6 right-6 z-50 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-white p-4 lg:p-5 rounded-full shadow-2xl hover:shadow-3xl transition-all transform hover:scale-110 ${
          isBotBlinking || showInitialBlink ? 'animate-pulse scale-110' : ''
        } ${showInitialBlink ? 'animate-bounce' : ''}`}
      >
        {isOpen ? <X className="h-6 w-6 lg:h-7 lg:w-7" /> : <MessageCircle className="h-6 w-6 lg:h-7 lg:w-7" />}
        {!isOpen && (
          <>
            <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center animate-bounce">
              1
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-full animate-ping opacity-75"></div>
          </>
        )}
        <Heart className="absolute -top-1 -left-1 h-4 w-4 text-red-300 animate-pulse" />
      </button>

      {/* Enhanced Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 lg:bottom-24 right-4 lg:right-6 z-50 w-80 sm:w-96 bg-white rounded-2xl lg:rounded-3xl shadow-2xl border border-gray-200 overflow-hidden animate-fadeInUp">
          {/* Enhanced Header */}
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-white p-4 lg:p-6 flex items-center justify-between relative overflow-hidden">
            <div className="absolute inset-0 bg-white/10 animate-pulse"></div>
            <div className="flex items-center space-x-3 relative z-10">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-white/20 rounded-full flex items-center justify-center animate-pulse">
                <Bot className="h-5 w-5 lg:h-6 lg:w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-sm lg:text-base">Easha24x7 Healthcare Bot</h3>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <p className="text-xs lg:text-sm opacity-90">Online now</p>
                </div>
              </div>
            </div>
            <button
              onClick={resetChat}
              className="text-white/80 hover:text-white text-xs lg:text-sm bg-white/10 px-3 py-1 rounded-lg hover:bg-white/20 transition-all relative z-10"
            >
              Reset
            </button>
          </div>

          {/* Enhanced Messages */}
          <div className="h-72 lg:h-80 overflow-y-auto p-4 lg:p-6 space-y-4 bg-gradient-to-b from-gray-50 to-white">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} animate-fadeInUp`}
              >
                <div
                  className={`max-w-xs px-3 lg:px-4 py-2 lg:py-3 rounded-xl ${
                    message.sender === 'user'
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                      : 'bg-white text-gray-900 shadow-md border'
                  }`}
                >
                  <div className="flex items-center space-x-2 mb-1">
                    {message.sender === 'bot' ? (
                      <Bot className="h-3 w-3 lg:h-4 lg:w-4 text-blue-600 animate-pulse" />
                    ) : (
                      <User className="h-3 w-3 lg:h-4 lg:w-4" />
                    )}
                    <span className="text-xs opacity-70">
                      {message.timestamp.toLocaleTimeString()}
                    </span>
                  </div>
                  <p className="text-xs lg:text-sm whitespace-pre-line">{message.text}</p>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start animate-fadeInUp">
                <div className="bg-white text-gray-900 px-3 lg:px-4 py-2 lg:py-3 rounded-xl shadow-md border">
                  <div className="flex items-center space-x-2">
                    <Bot className="h-3 w-3 lg:h-4 lg:w-4 text-blue-600 animate-pulse" />
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Enhanced Input */}
          <div className="border-t border-gray-200 p-4 lg:p-6 bg-gradient-to-r from-gray-50 to-blue-50">
            <form onSubmit={handleSubmit} className="flex space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={getCurrentPlaceholder()}
                className="flex-1 px-3 lg:px-4 py-2 lg:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm lg:text-base"
                disabled={isTyping}
              />
              <button
                type="submit"
                disabled={!inputValue.trim() || isTyping}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-2 lg:p-3 rounded-xl hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-105"
              >
                <Send className="h-4 w-4 lg:h-5 lg:w-5" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;