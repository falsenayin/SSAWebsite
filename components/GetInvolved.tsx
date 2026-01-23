import React from 'react';
import { UserPlus, CalendarDays, BookOpen } from 'lucide-react';

const GetInvolved: React.FC = () => {
  return (
    <section className="py-20 bg-ssa-darkgreen relative border-t border-ssa-sage/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-ssa-beige mb-4">Get Involved</h2>
          <p className="text-ssa-beige/70 max-w-2xl mx-auto text-lg">
            Start with these simple steps to feel at home, stay informed, and grow your community at UCSD.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
            {/* Card 1 */}
            <div className="bg-ssa-black/20 border border-ssa-sage/20 rounded-xl p-6 hover:border-ssa-gold/40 hover:bg-ssa-black/30 transition-all duration-300 flex flex-col items-start shadow-sm">
                <div className="w-10 h-10 rounded-lg border border-ssa-gold/20 text-ssa-gold mb-4 bg-ssa-black/40 flex items-center justify-center">
                    <UserPlus size={20} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-ssa-beige mb-2">Become a Member</h3>
                <p className="text-ssa-beige/60 text-sm mb-6 flex-grow leading-relaxed">
                    Sign up to get updates, connect with student leaders, and access member-only opportunities.
                </p>
                <button className="w-full py-2.5 px-4 rounded-lg border border-ssa-sage/30 text-ssa-beige hover:bg-ssa-gold hover:text-ssa-black hover:border-ssa-gold transition-all duration-300 text-sm font-semibold tracking-wide">
                    Join SSA
                </button>
            </div>

             {/* Card 2 */}
             <div className="bg-ssa-black/20 border border-ssa-sage/20 rounded-xl p-6 hover:border-ssa-gold/40 hover:bg-ssa-black/30 transition-all duration-300 flex flex-col items-start shadow-sm">
                <div className="w-10 h-10 rounded-lg border border-ssa-gold/20 text-ssa-gold mb-4 bg-ssa-black/40 flex items-center justify-center">
                    <CalendarDays size={20} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-ssa-beige mb-2">Plan Your Semester</h3>
                <p className="text-ssa-beige/60 text-sm mb-6 flex-grow leading-relaxed">
                    See upcoming cultural nights, study sessions, and networking events in one place.
                </p>
                <button className="w-full py-2.5 px-4 rounded-lg border border-ssa-sage/30 text-ssa-beige hover:bg-ssa-gold hover:text-ssa-black hover:border-ssa-gold transition-all duration-300 text-sm font-semibold tracking-wide">
                    View Events
                </button>
            </div>

             {/* Card 3 */}
             <div className="bg-ssa-black/20 border border-ssa-sage/20 rounded-xl p-6 hover:border-ssa-gold/40 hover:bg-ssa-black/30 transition-all duration-300 flex flex-col items-start shadow-sm">
                <div className="w-10 h-10 rounded-lg border border-ssa-gold/20 text-ssa-gold mb-4 bg-ssa-black/40 flex items-center justify-center">
                    <BookOpen size={20} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-ssa-beige mb-2">Use Student Resources</h3>
                <p className="text-ssa-beige/60 text-sm mb-6 flex-grow leading-relaxed">
                    Find scholarship guidance, housing tips, and academic support built for Saudi students.
                </p>
                <button className="w-full py-2.5 px-4 rounded-lg border border-ssa-sage/30 text-ssa-beige hover:bg-ssa-gold hover:text-ssa-black hover:border-ssa-gold transition-all duration-300 text-sm font-semibold tracking-wide">
                    Explore Resources
                </button>
            </div>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;