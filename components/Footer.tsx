import React from 'react';
import { ArrowRight, Instagram, Twitter, Facebook, Linkedin } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-ssa-black border-t border-ssa-sage/20 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-start">
              <Logo />
            </div>
            <div>
              <p className="text-sm text-ssa-beige/60 leading-relaxed mt-2">
                Building bridges between Saudi students and heritage at UCSD through cultural pride and academic excellence.
              </p>
            </div>
            <div className="flex gap-4">
              <SocialIcon icon={<Instagram size={18} />} />
              <SocialIcon icon={<Twitter size={18} />} />
              <SocialIcon icon={<Facebook size={18} />} />
              <SocialIcon icon={<Linkedin size={18} />} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-ssa-beige font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm text-ssa-beige/70">
              <li><a href="#home" className="hover:text-ssa-gold transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-ssa-gold transition-colors">About</a></li>
              <li><a href="#team" className="hover:text-ssa-gold transition-colors">Team</a></li>
              <li><a href="#events" className="hover:text-ssa-gold transition-colors">Events</a></li>
              <li><a href="#gallery" className="hover:text-ssa-gold transition-colors">Gallery</a></li>
              <li><a href="#resources" className="hover:text-ssa-gold transition-colors">Resources</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-ssa-beige font-bold mb-6">Resources</h4>
            <ul className="space-y-3 text-sm text-ssa-beige/70">
              <li><a href="#" className="hover:text-ssa-gold transition-colors">New Student Guide</a></li>
              <li><a href="#" className="hover:text-ssa-gold transition-colors">Academic Support</a></li>
              <li><a href="#" className="hover:text-ssa-gold transition-colors">Housing Resources</a></li>
              <li><a href="#" className="hover:text-ssa-gold transition-colors">Career Development</a></li>
              <li><a href="#" className="hover:text-ssa-gold transition-colors">Health & Wellness</a></li>
              <li><a href="#" className="hover:text-ssa-gold transition-colors">Cultural Events</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-ssa-beige font-bold mb-6">Stay Updated</h4>
            <p className="text-sm text-ssa-beige/70 mb-4">
              Subscribe to our newsletter for the latest news and events.
            </p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full bg-ssa-darkgreen/30 border border-ssa-sage/30 rounded-lg py-3 px-4 text-sm text-ssa-beige placeholder:text-ssa-sage focus:outline-none focus:border-ssa-gold transition-colors pr-12"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-ssa-gold rounded-md text-ssa-black hover:bg-ssa-beige transition-colors">
                <ArrowRight size={16} />
              </button>
            </div>
            <p className="text-xs text-ssa-beige/40 mt-3">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>

        <div className="border-t border-ssa-sage/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-ssa-beige/50">
          <p>&copy; 2026 Saudi Students Association at UC San Diego. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-ssa-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-ssa-gold transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-ssa-gold transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon: React.FC<{ icon: React.ReactNode }> = ({ icon }) => (
  <a 
    href="#" 
    className="w-9 h-9 rounded-full bg-ssa-darkgreen/50 flex items-center justify-center text-ssa-beige/70 hover:bg-ssa-gold hover:text-ssa-black transition-all duration-300"
  >
    {icon}
  </a>
);

export default Footer;