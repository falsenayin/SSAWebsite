import React from 'react';
import { Sparkles, ArrowRight, Instagram } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center pt-20 overflow-hidden">
      {/* Background Image with Gradient Overlay and Fade to Black */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.jpg"
          alt="SSA Community Gathering"
          className="w-full h-full object-cover opacity-60"
        />
        {/* Main Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-ssa-darkgreen/80 via-ssa-darkgreen/60 to-ssa-black"></div>
        {/* Bottom Fade to seamless transition */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-ssa-black to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center flex flex-col items-center">

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-ssa-gold/30 bg-ssa-darkgreen/50 backdrop-blur-md mb-8 animate-fade-in-up shadow-lg shadow-ssa-black/20">
          <Sparkles className="w-4 h-4 text-ssa-gold" />
          <span className="text-sm font-medium text-ssa-beige tracking-wide">Welcome to SSA</span>
        </div>

        {/* Updated: Removed whitespace-nowrap to prevent cropping on mobile */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-ssa-beige mb-2 leading-tight max-w-6xl animate-fade-in-up delay-100 drop-shadow-lg">
          Saudi Students Association
        </h1>

        {/* Updated: Made larger as requested */}
        <p className="text-2xl md:text-3xl text-ssa-gold font-bold mb-8 animate-fade-in-up delay-150 uppercase tracking-widest">
          at UC San Diego
        </p>

        {/* Updated: Slightly smaller than subtitle for hierarchy */}
        <p className="text-base md:text-xl text-ssa-beige/90 max-w-2xl mb-10 animate-fade-in-up delay-200 leading-relaxed drop-shadow-md px-4">
          Building community, celebrating culture, and supporting students.
          Your home away from home in San Diego.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-fade-in-up delay-300">
          {/* Join Us Button - WhatsApp */}
          <a
            href="https://chat.whatsapp.com/LnaQUap7W8OB4XqdUZNEOU"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-ssa-gold hover:bg-ssa-gold/90 text-ssa-black font-semibold py-4 px-10 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 shadow-lg shadow-ssa-gold/20"
          >
            {/* WhatsApp Icon */}
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Join Us
          </a>

          {/* Explore Button */}
          <a
            href="#community-events"
            className="bg-transparent hover:bg-ssa-beige/5 border border-ssa-beige/30 text-ssa-beige font-semibold py-4 px-10 rounded-xl transition-all duration-300 hover:border-ssa-beige/50 flex items-center justify-center"
          >
            Explore
          </a>
        </div>
      </div>

      {/* Stats Section Overlay */}
      <div className="relative z-10 w-full container mx-auto px-6 mt-24 mb-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 bg-ssa-black/40 backdrop-blur-xl rounded-2xl p-8 border border-ssa-sage/20 shadow-2xl">
          <StatCard number="80+" label="Active Members" sub="Saudi students at UCSD" />
          <StatCard number="15+" label="Annual Events" sub="Cultural and social gatherings" />
          <StatCard number="3+" label="Years Strong" sub="Building community since 2023" />
          <StatCard number="100%" label="Commitment" sub="Dedicated to student success" />
        </div>
      </div>
    </section>
  );
};

interface StatCardProps {
  number: string;
  label: string;
  sub: string;
}

const StatCard: React.FC<StatCardProps> = ({ number, label, sub }) => (
  <div className="text-center flex flex-col items-center group">
    <h3 className="text-3xl md:text-5xl font-bold text-ssa-gold mb-2 group-hover:scale-110 transition-transform duration-300 drop-shadow-sm">{number}</h3>
    <p className="text-lg font-semibold text-ssa-beige mb-1">{label}</p>
    <p className="text-xs text-ssa-beige/60">{sub}</p>
  </div>
);

export default Hero;