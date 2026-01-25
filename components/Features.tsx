import React from 'react';
import { Users, BookOpen, Calendar, Heart, Briefcase, Globe } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      Icon: Users,
      title: 'Saudi Community',
      description: 'Connect with fellow Saudi students and celebrate our culture through campus events and shared experiences.'
    },
    {
      Icon: BookOpen,
      title: 'Student Resources',
      description: 'Access student-led resources, guides, and practical information to help you navigate UC San Diego.'
    },
    {
      Icon: Calendar,
      title: 'Events & Presence',
      description: 'Participate in cultural, social, and professional events that strengthen SSA\'s presence across campus.'
    },
    {
      Icon: Heart,
      title: 'Support Network',
      description: 'Join a supportive community that understands the Saudi student experience and helps you feel at home.'
    },
    {
      Icon: Briefcase,
      title: 'Career Development',
      description: 'Build leadership experience, explore career paths, and connect with alumni and professionals.'
    },
    {
      Icon: Globe,
      title: 'Cultural Exchange',
      description: 'Represent Saudi culture on campus and engage with the wider UC San Diego community.'
    }
  ];

  return (
    <section className="py-20 bg-ssa-black relative" id="about">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-ssa-beige mb-4">Why Join SSA?</h2>
          <p className="text-ssa-beige/70 max-w-2xl mx-auto text-lg">
            A community built to support Saudi students academically, socially, and professionally.
          </p>
        </div>

        {/* Updated: Smaller gap, simpler cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-ssa-darkgreen/40 border border-ssa-sage/20 hover:border-ssa-gold/50 hover:bg-ssa-darkgreen/60 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-ssa-darkgreen border border-ssa-gold/30 text-ssa-gold flex items-center justify-center mb-4 group-hover:bg-ssa-gold group-hover:text-ssa-black transition-colors duration-300">
                <feature.Icon size={20} />
              </div>
              <h3 className="text-lg font-bold text-ssa-beige mb-2">{feature.title}</h3>
              <p className="text-ssa-beige/60 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-ssa-black to-transparent pointer-events-none"></div>
    </section >
  );
};

export default Features;