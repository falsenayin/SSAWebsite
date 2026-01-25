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

const App: React.FC = () => {
  // Simple hash-based routing
  // Defaulting to #resources so the Resources page is visible immediately
  const getRoute = () => window.location.hash || '#resources';
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
        return <About />;
      case '#events':
        return <EventsPage />;
      case '#resources':
        return <ResourcesPage />;
      default:
        // Home page view
        return (
          <>
            <Hero />
            <Features />
            <UpcomingEvents />
            <GetInvolved />
          </>
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
    </div>
  );
};

export default App;