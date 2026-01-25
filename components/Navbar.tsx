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
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" className="flex-shrink-0">
              <path d="M17.472 14.382C17.119 14.205 15.396 13.36 15.078 13.251C14.76 13.144 14.526 13.088 14.296 13.441C14.062 13.793 13.396 14.573 13.189 14.814C12.981 15.049 12.775 15.084 12.421 14.907C12.067 14.73 10.932 14.357 9.58503 13.156C8.52003 12.206 7.80303 11.034 7.59303 10.675C7.38203 10.323 7.56803 10.128 7.74703 9.95C7.90603 9.792 8.10003 9.541 8.27703 9.336C8.45203 9.129 8.51303 8.983 8.62903 8.749C8.74303 8.513 8.68603 8.309 8.60103 8.136C8.51303 7.962 7.79603 6.195 7.49803 5.483C7.20203 4.792 6.90303 4.888 6.68503 4.877C6.47803 4.869 6.24203 4.86 6.00603 4.86C5.76903 4.86 5.37803 4.95 5.05303 5.303C4.72903 5.656 3.80403 6.522 3.80403 8.281C3.80403 10.04 5.08303 11.745 5.26003 11.979C5.43703 12.216 7.77603 15.823 11.488 17.426C12.372 17.808 13.061 18.035 13.597 18.204C14.536 18.502 15.396 18.455 16.079 18.355C16.839 18.242 18.418 17.399 18.746 16.48C19.068 15.56 19.068 14.778 18.966 14.598C18.86 14.417 18.583 14.305 18.225 14.127" />
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