import React from 'react';
import { BookOpen, Rocket, GraduationCap, FileCheck, Home, Briefcase, Instagram, ArrowUpRight, Download, ExternalLink } from 'lucide-react';

const ResourcesPage: React.FC = () => {
  return (
    <div className="bg-ssa-black min-h-screen pt-24 pb-20">
      
      {/* Header Section */}
      <section className="container mx-auto px-6 mb-16 text-center">
        <span className="inline-block py-1 px-3 rounded-full bg-ssa-gold/10 border border-ssa-gold/20 text-ssa-gold text-xs font-bold tracking-widest uppercase mb-6">
            Tools & Guides
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-ssa-beige mb-6">Resources</h1>
        <p className="text-ssa-beige/60 max-w-2xl mx-auto text-lg leading-relaxed">
            Access tools, guides, and support to help you thrive at UC San Diego. 
            Detailed walkthroughs are available in our Handbook.
        </p>
      </section>

      {/* 1. Student Handbook (Featured Section) */}
      <section className="container mx-auto px-6 mb-24">
        <div className="bg-ssa-darkgreen rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden border border-ssa-sage/20 group hover:border-ssa-gold/30 transition-all duration-500">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-ssa-gold/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
                <div className="flex-1 text-center md:text-left">
                    <div className="inline-flex items-center gap-2 text-ssa-gold font-bold uppercase tracking-wider text-xs mb-4">
                        <BookOpen size={16} />
                        <span>Essential Read</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-ssa-beige mb-6">The Student Handbook</h2>
                    <p className="text-ssa-beige/80 text-lg leading-relaxed mb-8 max-w-xl">
                        Your comprehensive guide to navigating UCSD. This document contains detailed checklists, step-by-step walkthroughs for enrollment, and specific guidance tailored for Saudi students.
                    </p>
                    <button className="bg-ssa-gold text-ssa-black px-8 py-4 rounded-xl font-bold hover:bg-white transition-all duration-300 flex items-center gap-3 mx-auto md:mx-0 shadow-lg shadow-ssa-gold/10 group-hover:scale-105">
                        <Download size={20} />
                        Download Handbook (PDF)
                    </button>
                </div>
                
                {/* Visual Mockup of Handbook */}
                <div className="w-full md:w-1/3 flex justify-center">
                    <div className="relative w-48 h-64 bg-ssa-beige rounded-r-2xl rounded-l-md shadow-2xl transform rotate-3 group-hover:rotate-0 transition-transform duration-500 flex flex-col items-center justify-center border-l-4 border-ssa-black/20">
                        <div className="absolute top-0 right-0 p-4">
                            <div className="w-8 h-8 rounded-full bg-ssa-black/10"></div>
                        </div>
                        <span className="text-ssa-black font-bold text-2xl tracking-widest mb-1">SSA</span>
                        <span className="text-ssa-darkgreen font-semibold text-xs uppercase tracking-wide">Handbook 2026</span>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Main Grid for Sections 2-6 */}
      <section className="container mx-auto px-6 mb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* 2. Quick Start */}
            <ResourceCard 
                icon={<Rocket size={24} />}
                title="New Student Quick Start"
                description="A brief orientation overview for incoming students. Use this to get your bearings before diving into the details."
                tag="Orientation"
                linkText="Open Quick Guide"
                footerText="For detailed steps, see Handbook"
            />

            {/* 3. UCSD Essentials */}
            <ResourceCard 
                icon={<GraduationCap size={24} />}
                title="UC San Diego Essentials"
                description="High-level overview of enrollment, General Education (GE) requirements, placement exams, and health insurance."
                tag="Academics"
                linkText="Visit UCSD.edu"
                isExternal
            />

            {/* 4. Scholarships */}
            <ResourceCard 
                icon={<FileCheck size={24} />}
                title="Scholarships & Sponsorships"
                description="Information regarding SACM, Safeer, and other sponsored programs. Understand the basics of your status."
                tag="Administrative"
                linkText="Sponsorship Info"
                footerText="Consult specific portal for docs"
            />

            {/* 5. Life in San Diego */}
            <ResourceCard 
                icon={<Home size={24} />}
                title="Life in San Diego"
                description="Explore popular housing areas, transportation options, and where to find the best Halal food in the city."
                tag="Lifestyle"
                linkText="View Area Map"
                footerText="Housing checklist in Handbook"
            />

            {/* 6. Professional Development */}
            <ResourceCard 
                icon={<Briefcase size={24} />}
                title="Professional Development"
                description="Grow your career with SSA initiatives. Connect with alumni, attend workshops, and build your resume."
                tag="Career"
                linkText="Visit LinkedIn"
                isExternal
            />
            
             {/* 7. Stay Updated (Card Style) */}
             <div className="bg-gradient-to-br from-ssa-gold to-ssa-beige rounded-[2rem] p-8 flex flex-col justify-between group hover:shadow-2xl hover:shadow-ssa-gold/20 transition-all duration-300">
                <div>
                    <div className="flex justify-between items-start mb-6">
                        <div className="w-12 h-12 rounded-xl bg-ssa-black/10 flex items-center justify-center text-ssa-darkgreen">
                            <Instagram size={24} strokeWidth={2} />
                        </div>
                        <span className="bg-ssa-black/10 px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wide text-ssa-darkgreen">
                            Updates
                        </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-ssa-black mb-3">Stay Updated</h3>
                    <p className="text-ssa-darkgreen/80 text-sm leading-relaxed mb-6 font-medium">
                        For time-sensitive updates, reminders, and daily tips, follow our social channels. We don't repeat flash updates here.
                    </p>
                </div>
                
                <a href="#" className="inline-flex items-center gap-2 text-ssa-black font-bold text-sm hover:translate-x-1 transition-transform">
                    Follow @ssaucsd
                    <ExternalLink size={16} />
                </a>
            </div>

        </div>
      </section>

      {/* Additional Support Banner */}
      <section className="container mx-auto px-6">
        <div className="bg-ssa-black border border-ssa-sage/20 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
             <div className="absolute inset-0 bg-ssa-darkgreen/10"></div>
             <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-ssa-beige mb-6">Need Additional Support?</h2>
                <p className="text-ssa-beige/60 max-w-2xl mx-auto mb-8 text-lg">
                    Our team is here to help you navigate university life. Reach out if you need assistance with anything not covered in the Handbook.
                </p>
                <a href="#contact" className="inline-block bg-ssa-gold text-ssa-black px-8 py-3.5 rounded-xl font-bold hover:bg-ssa-beige transition-colors shadow-lg shadow-ssa-gold/10">
                    Contact Us
                </a>
             </div>
        </div>
      </section>

    </div>
  );
};

// Helper Component for Grid Cards
interface ResourceCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    tag: string;
    linkText: string;
    footerText?: string;
    isExternal?: boolean;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ icon, title, description, tag, linkText, footerText, isExternal }) => {
    return (
        <div className="bg-ssa-beige rounded-[2rem] p-8 flex flex-col group hover:translate-y-[-4px] hover:shadow-xl transition-all duration-300">
            <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-xl bg-ssa-gold/20 flex items-center justify-center text-ssa-darkgreen group-hover:bg-ssa-gold group-hover:text-ssa-black transition-colors duration-300">
                    {icon}
                </div>
                <span className="bg-ssa-black/5 px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wide text-ssa-black/60 border border-ssa-black/5">
                    {tag}
                </span>
            </div>
            
            <h3 className="text-2xl font-bold text-ssa-black mb-3 group-hover:text-ssa-darkgreen transition-colors">
                {title}
            </h3>
            
            <p className="text-ssa-black/70 text-sm leading-relaxed mb-8 font-medium">
                {description}
            </p>
            
            <div className="mt-auto">
                <button className="flex items-center gap-2 text-ssa-black font-bold text-sm group/btn hover:text-ssa-gold transition-colors">
                    {linkText}
                    {isExternal ? (
                         <ExternalLink size={16} className="transition-transform group-hover/btn:translate-x-1" />
                    ) : (
                         <ArrowUpRight size={16} className="transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                    )}
                </button>
                {footerText && (
                    <p className="mt-4 pt-4 border-t border-ssa-black/10 text-xs font-semibold text-ssa-black/40 uppercase tracking-wide">
                        {footerText}
                    </p>
                )}
            </div>
        </div>
    );
};

export default ResourcesPage;