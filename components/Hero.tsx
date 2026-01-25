import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center pt-20 overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
          alt="University campus at night"
          className="w-full h-full object-cover opacity-50 mix-blend-overlay blur-[3px] scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ssa-darkgreen/90 via-ssa-darkgreen/80 to-ssa-black"></div>
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
          <button className="bg-ssa-gold hover:bg-white text-ssa-black hover:text-ssa-darkgreen font-semibold py-4 px-8 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-ssa-gold/30 transform hover:-translate-y-1">
            Join Our Community
            <ArrowRight size={20} />
          </button>
          <button className="bg-ssa-sage/10 hover:bg-ssa-sage/30 backdrop-blur-md border border-ssa-sage/40 text-ssa-beige font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:border-ssa-gold/50">
            Explore Events
          </button>
        </div>
      </div>

      {/* Stats Section Overlay */}
      <div className="relative z-10 w-full container mx-auto px-6 mt-24 mb-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 bg-ssa-black/40 backdrop-blur-xl rounded-2xl p-8 border border-ssa-sage/20 shadow-2xl">
          <StatCard number="30+" label="Active Members" sub="Saudi students at UCSD" />
          <StatCard number="20+" label="Annual Events" sub="Cultural and social gatherings" />
          <StatCard number="5+" label="Years Strong" sub="Building community since 2020" />
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