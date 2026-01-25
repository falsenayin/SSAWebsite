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
              <path d="M.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" opacity="0" />
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
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