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
                icon={
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                    <path d="M17.472 14.382C17.119 14.205 15.396 13.36 15.078 13.251C14.76 13.144 14.526 13.088 14.296 13.441C14.062 13.793 13.396 14.573 13.189 14.814C12.981 15.049 12.775 15.084 12.421 14.907C12.067 14.73 10.932 14.357 9.58503 13.156C8.52003 12.206 7.80303 11.034 7.59303 10.675C7.38203 10.323 7.56803 10.128 7.74703 9.95C7.90603 9.792 8.10003 9.541 8.27703 9.336C8.45203 9.129 8.51303 8.983 8.62903 8.749C8.74303 8.513 8.68603 8.309 8.60103 8.136C8.51303 7.962 7.79603 6.195 7.49803 5.483C7.20203 4.792 6.90303 4.888 6.68503 4.877C6.47803 4.869 6.24203 4.86 6.00603 4.86C5.76903 4.86 5.37803 4.95 5.05303 5.303C4.72903 5.656 3.80403 6.522 3.80403 8.281C3.80403 10.04 5.08303 11.745 5.26003 11.979C5.43703 12.216 7.77603 15.823 11.488 17.426C12.372 17.808 13.061 18.035 13.597 18.204C14.536 18.502 15.396 18.455 16.079 18.355C16.839 18.242 18.418 17.399 18.746 16.48C19.068 15.56 19.068 14.778 18.966 14.598C18.86 14.417 18.583 14.305 18.225 14.127" />
                  </svg>
                }
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