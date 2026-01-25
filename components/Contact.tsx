import React from 'react';
import { MapPin, Mail, Instagram, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    // Updated: Changed bg-ssa-darkgreen to bg-ssa-black to match footer
    <section className="py-6 bg-ssa-black border-t border-ssa-sage/20" id="contact">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16 max-w-6xl mx-auto">

          {/* Header */}
          <div className="flex items-center gap-4">
            <span className="text-lg font-bold text-ssa-beige">Get In Touch</span>
            <div className="hidden md:block w-px h-6 bg-ssa-sage/40"></div>
          </div>

          {/* Contact Details Row */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">

            {/* Location */}
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-ssa-gold" />
              <span className="text-ssa-beige/80 text-sm">UC San Diego</span>
            </div>

            {/* Email */}
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-ssa-gold" />
              <a href="mailto:saudistudents@ucsd.edu" className="text-ssa-beige/80 hover:text-ssa-gold text-sm transition-colors">
                saudistudents@ucsd.edu
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pl-2 md:border-l md:border-ssa-sage/40 md:pl-6">
              <a href="https://chat.whatsapp.com/LnaQUap7W8OB4XqdUZNEOU" target="_blank" rel="noopener noreferrer" className="text-ssa-beige/60 hover:text-ssa-gold transition-colors" aria-label="WhatsApp">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M17.472 14.382C17.119 14.205 15.396 13.36 15.078 13.251C14.76 13.144 14.526 13.088 14.296 13.441C14.062 13.793 13.396 14.573 13.189 14.814C12.981 15.049 12.775 15.084 12.421 14.907C12.067 14.73 10.932 14.357 9.58503 13.156C8.52003 12.206 7.80303 11.034 7.59303 10.675C7.38203 10.323 7.56803 10.128 7.74703 9.95C7.90603 9.792 8.10003 9.541 8.27703 9.336C8.45203 9.129 8.51303 8.983 8.62903 8.749C8.74303 8.513 8.68603 8.309 8.60103 8.136C8.51303 7.962 7.79603 6.195 7.49803 5.483C7.20203 4.792 6.90303 4.888 6.68503 4.877C6.47803 4.869 6.24203 4.86 6.00603 4.86C5.76903 4.86 5.37803 4.95 5.05303 5.303C4.72903 5.656 3.80403 6.522 3.80403 8.281C3.80403 10.04 5.08303 11.745 5.26003 11.979C5.43703 12.216 7.77603 15.823 11.488 17.426C12.372 17.808 13.061 18.035 13.597 18.204C14.536 18.502 15.396 18.455 16.079 18.355C16.839 18.242 18.418 17.399 18.746 16.48C19.068 15.56 19.068 14.778 18.966 14.598C18.86 14.417 18.583 14.305 18.225 14.127" />
                </svg>
              </a>
              <a href="https://www.instagram.com/ssa.sandiego/" target="_blank" rel="noopener noreferrer" className="text-ssa-beige/60 hover:text-ssa-gold transition-colors" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="https://www.linkedin.com/company/saudi-students-association-at-uc-san-diego/" target="_blank" rel="noopener noreferrer" className="text-ssa-beige/60 hover:text-ssa-gold transition-colors" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;