import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
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
      className={`fixed z-50 left-1/2 -translate-x-1/2 transition-all duration-500 ease-in-out ${
        isScrolled
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

        {/* Right side - Join Us button */}
        <div className="hidden md:block">
           <button className="bg-ssa-gold hover:bg-white text-ssa-black hover:text-ssa-darkgreen font-semibold py-1.5 px-5 rounded-lg text-sm transition-all duration-300 transform hover:scale-105 shadow-lg shadow-ssa-gold/20">
            Join Us
          </button>
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
          <button className="bg-ssa-gold text-ssa-black font-semibold py-3 rounded-lg w-full mt-2">
            Join Us
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;