import React from 'react';
import { Target, Eye, Globe, Calendar, BookOpen } from 'lucide-react';

const About: React.FC = () => {
  const teamMembers = [
    { name: "Fawaz Al-Senayin", role: "President" },
    { name: "Ahmed Turkistani", role: "VP External" },
    { name: "Nawar Kidwai", role: "VP Internal" },
    { name: "Almontaha Alsonbul", role: "Treasurer" },
    { name: "Abdulrahman Alghamdi", role: "Secretary" },
    { name: "Ranya Tashkandy", role: "Events Lead" },
    { name: "Ahmed Ageel", role: "Events" },
    { name: "Khalil Alshanqiti", role: "Events" },
    { name: "Nooran Basheer", role: "Events" },
    { name: "Mariya Alsaiari", role: "Media Lead" },
    { name: "Anas Almalki", role: "Content" },
    { name: "Faris Al Salem", role: "Media / Sports" },
    { name: "Akbar Alhashim", role: "Photographer" },
    { name: "Fatimah Alhumrani", role: "Photographer" },
    { name: "Faisal Al Dossary", role: "IT" },
    { name: "Fahad Aljehani", role: "Website" },
  ];

  return (
    <div className="pt-24 pb-20 bg-ssa-black min-h-screen">
      
      {/* 1. Who We Are */}
      <section className="container mx-auto px-6 mb-24">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="lg:w-1/2 relative">
                <div className="absolute -inset-4 bg-ssa-gold/20 rounded-2xl blur-xl"></div>
                <img 
                    src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                    alt="Students gathering" 
                    className="relative rounded-2xl shadow-2xl border border-ssa-sage/20 w-full object-cover h-[400px]"
                />
            </div>
            <div className="lg:w-1/2">
                <span className="text-ssa-gold font-semibold tracking-wider uppercase text-sm mb-2 block">Who We Are</span>
                <h1 className="text-3xl md:text-5xl font-bold text-ssa-beige mb-6 leading-tight">
                    Your Home Away From Home at UCSD.
                </h1>
                <p className="text-ssa-beige/70 text-lg leading-relaxed mb-6">
                    The Saudi Students Association (SSA) is a student-run organization dedicated to serving the Saudi community at UC San Diego. 
                </p>
                <p className="text-ssa-beige/70 text-lg leading-relaxed">
                    We exist to support Saudi students academically and socially, while welcoming anyone interested in exploring the richness of Saudi culture. We bridge the gap between home and university life, creating a vibrant space for connection and growth.
                </p>
            </div>
        </div>
      </section>

      {/* 2 & 3. Mission & Vision */}
      <section className="container mx-auto px-6 mb-24">
        <div className="grid md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <div className="bg-ssa-darkgreen/30 backdrop-blur-sm border border-ssa-sage/20 rounded-2xl p-8 md:p-12 hover:border-ssa-gold/30 transition-colors duration-300">
                <div className="w-12 h-12 bg-ssa-gold rounded-lg flex items-center justify-center mb-6 text-ssa-black shadow-lg shadow-ssa-gold/20">
                    <Target size={24} strokeWidth={2} />
                </div>
                <h2 className="text-2xl font-bold text-ssa-beige mb-4">Our Mission</h2>
                <p className="text-ssa-beige/70 leading-relaxed text-lg">
                    Our mission is to unite Saudi students and cultural enthusiasts by serving as a formal platform for social and intellectual interaction. We are dedicated to representing Saudi culture on campus while providing essential orientation and support to help incoming students successfully adjust to the university environment and their new community.
                </p>
            </div>

            {/* Vision Card */}
            <div className="bg-ssa-darkgreen/30 backdrop-blur-sm border border-ssa-sage/20 rounded-2xl p-8 md:p-12 hover:border-ssa-gold/30 transition-colors duration-300">
                <div className="w-12 h-12 bg-ssa-gold rounded-lg flex items-center justify-center mb-6 text-ssa-black shadow-lg shadow-ssa-gold/20">
                    <Eye size={24} strokeWidth={2} />
                </div>
                <h2 className="text-2xl font-bold text-ssa-beige mb-4">Our Vision</h2>
                <p className="text-ssa-beige/70 leading-relaxed mb-6">
                    We strive to build a strong, welcoming Saudi student community that stands as a pillar of support at UCSD.
                </p>
                <p className="text-ssa-beige/70 leading-relaxed">
                   Our vision is to be a trusted resource for students socially, academically, and professionally, maintaining a visible and positive presence on campus that empowers every member to succeed.
                </p>
            </div>
        </div>
      </section>

      {/* 4. What We Do */}
      <section className="bg-ssa-black/50 py-20 border-y border-ssa-sage/10 mb-24">
        <div className="container mx-auto px-6 text-center">
            <span className="text-ssa-gold font-semibold tracking-wider uppercase text-sm mb-3 block">Activities</span>
            <h2 className="text-3xl md:text-4xl font-bold text-ssa-beige mb-12">What We Do</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-ssa-sage/10 flex items-center justify-center text-ssa-gold mb-6 border border-ssa-sage/20">
                        <Calendar size={32} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xl font-bold text-ssa-beige mb-3">Events & Gatherings</h3>
                    <p className="text-ssa-beige/60 max-w-sm mx-auto">
                        Hosting cultural celebrations, social hangouts, and professional networking events.
                    </p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-ssa-sage/10 flex items-center justify-center text-ssa-gold mb-6 border border-ssa-sage/20">
                        <BookOpen size={32} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xl font-bold text-ssa-beige mb-3">Student Guides</h3>
                    <p className="text-ssa-beige/60 max-w-sm mx-auto">
                        Providing resources for life at UCSD, housing tips, and academic support guides.
                    </p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-ssa-sage/10 flex items-center justify-center text-ssa-gold mb-6 border border-ssa-sage/20">
                        <Globe size={32} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xl font-bold text-ssa-beige mb-3">Community Support</h3>
                    <p className="text-ssa-beige/60 max-w-sm mx-auto">
                        Collaborating with other orgs and promoting Saudi culture across campus.
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* 5. Our Team */}
      <section className="container mx-auto px-6 mb-12">
        <div className="text-center mb-16">
            <span className="text-ssa-gold font-semibold tracking-wider uppercase text-sm mb-3 block">Leadership 2025 - 2026</span>
            <h2 className="text-3xl md:text-5xl font-bold text-ssa-beige mb-6">Meet Our Team</h2>
            <p className="text-ssa-beige/60 max-w-2xl mx-auto text-lg">
                SSA is run by a dedicated student board committed to serving our community with passion and excellence.
            </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
            {teamMembers.map((member, index) => (
                <div key={index} className="flex flex-col items-center text-center group">
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-ssa-sage/20 border-2 border-ssa-gold/20 mb-4 flex items-center justify-center overflow-hidden group-hover:border-ssa-gold transition-colors duration-300">
                        {/* Placeholder for real images - using initials */}
                        <span className="text-2xl md:text-3xl font-bold text-ssa-gold/80">
                            {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                    </div>
                    <h3 className="text-lg font-bold text-ssa-beige mb-1">{member.name}</h3>
                    <p className="text-ssa-gold text-sm font-medium">{member.role}</p>
                </div>
            ))}
        </div>
      </section>
    </div>
  );
};

export default About;