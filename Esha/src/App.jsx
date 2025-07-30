import React from 'react';
import { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Products from './components/Products';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Simulate loading time (3-4 seconds)
    const timer = setTimeout(() => {
      setFadeOut(true);
      // Remove loading screen after fade out animation
      setTimeout(() => {
        setIsLoading(false);
      }, 800);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className={fadeOut ? 'fade-out' : ''}>
        <LoadingScreen />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white animate-fadeInUp">
      <Header />
      <Hero />
      <About />
      <Services />
      <Products />
      <Testimonials />
      <Contact />
      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;