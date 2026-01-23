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
               <a href="#" className="text-ssa-beige/60 hover:text-ssa-gold transition-colors" aria-label="Instagram">
                  <Instagram size={18} />
               </a>
               <a href="#" className="text-ssa-beige/60 hover:text-ssa-gold transition-colors" aria-label="LinkedIn">
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