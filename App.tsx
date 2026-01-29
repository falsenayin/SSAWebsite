import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Features from './components/Features';
import GetInvolved from './components/GetInvolved';
import UpcomingEvents from './components/UpcomingEvents';
import EventsPage from './components/EventsPage';
import ResourcesPage from './components/ResourcesPage';
import BotWidget from './components/BotWidget';

const App: React.FC = () => {
  // Simple hash-based routing
  // Defaulting to home (empty hash) or #home
  const getRoute = () => window.location.hash || '#home';
  const [route, setRoute] = useState(getRoute());

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(getRoute());
      window.scrollTo(0, 0); // Scroll to top on route change
    };

    // Set initial route and listener
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderView = () => {
    switch (route) {
      case '#about':
        return <div key="about" className="animate-fade-in"><About /></div>;
      case '#events':
        return <div key="events" className="animate-fade-in"><EventsPage /></div>;
      case '#resources':
        return <div key="resources" className="animate-fade-in"><ResourcesPage /></div>;
      default:
        // Home page view
        return (
          <div key="home" className="animate-fade-in">
            <Hero />
            <Features />
            <UpcomingEvents />
            <GetInvolved />
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-ssa-black text-ssa-beige selection:bg-ssa-gold selection:text-ssa-black flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {renderView()}
        {/* Contact section appears on all pages */}
        <Contact />
      </main>
      <Footer />
  
      {/* Saqr AI Widget */}
      <BotWidget />
    </div>
  );

export default App;
