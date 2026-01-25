import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram } from 'lucide-react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Events', href: '#events' },
    { name: 'Resources', href: '#resources' },
  ];

  return (
    <nav
      className={`fixed z-50 left-1/2 -translate-x-1/2 transition-all duration-1000 ease-in-out ${isScrolled
        ? 'top-4 w-[95%] md:w-[85%] max-w-6xl rounded-full bg-ssa-black/60 backdrop-blur-xl border border-ssa-beige/10 shadow-lg py-3 px-6'
        : 'top-0 w-full bg-transparent py-6 px-6 md:px-0 border-b border-transparent'
        }`}
    >
      <div className={`flex justify-between items-center h-full mx-auto ${isScrolled ? 'w-full' : 'container'}`}>
        {/* Logo */}
        <a href="#home" className="flex items-center hover:opacity-90 transition-opacity">
          <Logo />
        </a>

        {/* Desktop Links - Centered */}
        <div className="hidden md:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-ssa-beige hover:text-ssa-gold transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right side - Social Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://chat.whatsapp.com/LnaQUap7W8OB4XqdUZNEOU"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-ssa-gold hover:bg-white text-ssa-black hover:text-ssa-darkgreen font-semibold py-1.5 px-4 rounded-lg text-sm transition-all duration-300 transform hover:scale-105 shadow-lg shadow-ssa-gold/20 inline-flex items-center gap-2"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="stroke-[2.5px]">
              <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
              <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0 .5-.5a1.4 1.4 0 0 1 1.4-1.4c.6 0 1.5.5 2 1.5l.3.6a.7.7 0 0 0 1.2 0l.3-.6c.5-1 1.4-1.5 2-1.5a1.4 1.4 0 0 1 1.4 1.4a.5.5 0 0 0 .5.5v1a.5.5 0 0 0 1 0" opacity="0" />
              <path d="M9 10a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-1a2 2 0 0 0 -2 -2h-2a2 2 0 0 0 -2 2v1z" stroke="none" fill="currentColor" opacity="0.1" />
            </svg>
            Join
          </a>
          <a
            href="https://www.instagram.com/ssa.sandiego/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-ssa-gold hover:bg-white text-ssa-black hover:text-ssa-darkgreen font-semibold py-1.5 px-4 rounded-lg text-sm transition-all duration-300 transform hover:scale-105 shadow-lg shadow-ssa-gold/20 inline-flex items-center gap-2"
          >
            <Instagram size={16} />
            Follow Us
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-ssa-beige focus:outline-none"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className={`md:hidden absolute top-full left-0 w-full bg-ssa-darkgreen/95 backdrop-blur-xl border border-ssa-sage/30 py-6 px-6 flex flex-col gap-4 shadow-xl mt-2 rounded-2xl`}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-ssa-beige hover:text-ssa-gold text-lg font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-ssa-gold text-ssa-black font-semibold py-3 rounded-lg w-full mt-2 text-center block"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Join Us
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;