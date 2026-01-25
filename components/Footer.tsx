import React from 'react';
import { Instagram, Linkedin, Phone } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-ssa-black border-t border-ssa-sage/20 pt-16 pb-8">
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
              <SocialIcon
                href="https://www.instagram.com/ssa.sandiego/"
                icon={<Instagram size={18} />}
              />
              <SocialIcon
                href="https://www.linkedin.com/company/saudi-students-association-at-uc-san-diego/"
                icon={<Linkedin size={18} />}
              />
              <SocialIcon
                href="https://chat.whatsapp.com/LnaQUap7W8OB4XqdUZNEOU"
                icon={<Phone size={18} />}
              />
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
              {/* Removed Gallery link as it's a section in Events now, or could link to #events */}
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

          {/* Contact Info (Replaces Newsletter) */}
          <div>
            <h4 className="text-ssa-beige font-bold mb-6">Get in Touch</h4>
            <p className="text-sm text-ssa-beige/70 mb-4">
              Have questions or want to collaborate? Reach out to us via social media or email.
            </p>
            <a href="mailto:ssa.ucsd@gmail.com" className="text-ssa-gold hover:text-ssa-beige transition-colors text-sm font-semibold">
              ssa.ucsd@gmail.com
            </a>
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

const SocialIcon: React.FC<{ icon: React.ReactNode; href: string }> = ({ icon, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-9 h-9 rounded-full bg-ssa-darkgreen/50 flex items-center justify-center text-ssa-beige/70 hover:bg-ssa-gold hover:text-ssa-black transition-all duration-300 transform hover:scale-110"
  >
    {icon}
  </a>
);

export default Footer;