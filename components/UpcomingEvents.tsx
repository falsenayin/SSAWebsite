import React from 'react';
import { ArrowRight, ArrowLeft, ArrowUpRight, Calendar } from 'lucide-react';

const UpcomingEvents: React.FC = () => {
    const events = [
        {
            tag: "Cultural",
            title: "Saudi Founding Day",
            description: "Join us for a grand celebration of our history with traditional food, music, and performances.",
            image: "https://images.unsplash.com/photo-1576487248805-cf45f6bcc67f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            date: "Feb 22"
        },
         {
            tag: "Social",
            title: "Ramadan Iftar",
            description: "Break your fast with the community. Delicious catering, spiritual vibes, and good company guaranteed.",
            image: "https://images.unsplash.com/photo-1584553256038-f99a38f4d962?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            date: "Mar 15"
        },
         {
            tag: "Professional",
            title: "Career Workshop",
            description: "Resume reviews and networking tips from alumni working in top tech and engineering firms.",
            image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            date: "Apr 05"
        },
         {
            tag: "Recreational",
            title: "Beach Bonfire",
            description: "Relax after midterms with s'mores, games, and a sunset at La Jolla Shores.",
            image: "https://images.unsplash.com/photo-1525996686008-8e62d472658a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            date: "May 20"
        }
    ];

    return (
        <section className="py-24 bg-ssa-black relative" id="events">
            <div className="container mx-auto px-6">
                
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
                    <div className="max-w-2xl">
                         <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-ssa-beige/5 border border-ssa-gold/30 text-ssa-gold text-xs font-bold tracking-widest uppercase">
                            Connect
                        </div>
                        <h2 className="text-4xl md:text-6xl font-bold text-ssa-beige mb-6 leading-tight">
                            Community Events
                        </h2>
                        <p className="text-ssa-beige/60 text-lg leading-relaxed max-w-xl">
                            Join our global community for insightful workshops, cultural celebrations, and networking events designed to boost your connections.
                        </p>
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="hidden md:flex items-center justify-center w-14 h-14 rounded-full border border-ssa-sage/30 text-ssa-beige hover:bg-ssa-gold hover:text-ssa-black hover:border-ssa-gold transition-all duration-300">
                            <ArrowLeft size={24} strokeWidth={1.5} />
                        </button>
                         <button className="hidden md:flex items-center justify-center w-14 h-14 rounded-full bg-ssa-gold text-ssa-black hover:bg-ssa-beige transition-all duration-300 shadow-lg shadow-ssa-gold/10">
                            <ArrowRight size={24} strokeWidth={1.5} />
                        </button>
                    </div>
                </div>

                {/* Main Action Button */}
                 <div className="mb-16">
                    <button className="bg-ssa-gold text-ssa-black px-8 py-4 rounded-full font-bold hover:bg-ssa-beige hover:scale-105 transition-all duration-300 flex items-center gap-3 shadow-lg shadow-ssa-gold/20">
                        Explore all
                        <div className="bg-ssa-black/10 rounded-full p-1">
                            <ArrowRight size={16} />
                        </div>
                    </button>
                 </div>

                {/* Cards Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {events.map((event, index) => (
                        <div key={index} className="group relative flex flex-col bg-ssa-beige rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-ssa-gold/10 transition-all duration-500 transform hover:-translate-y-2 h-full">
                            {/* Image Container */}
                            <div className="h-56 overflow-hidden relative">
                                <img 
                                    src={event.image} 
                                    alt={event.title} 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 saturate-[0.8] group-hover:saturate-100"
                                />
                                <div className="absolute top-4 left-4 bg-ssa-black/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-ssa-gold/30 flex items-center gap-2">
                                    <Calendar size={12} className="text-ssa-gold" />
                                    <span className="text-ssa-gold text-xs font-bold uppercase tracking-wide">{event.date}</span>
                                </div>
                            </div>
                            
                            {/* Content */}
                            <div className="p-6 flex flex-col flex-grow">
                                <span className="text-xs font-bold text-ssa-darkgreen/80 uppercase tracking-widest mb-3">
                                    {event.tag}
                                </span>
                                <h3 className="text-2xl font-bold text-ssa-black mb-3 leading-tight group-hover:text-ssa-darkgreen transition-colors">
                                    {event.title}
                                </h3>
                                <p className="text-ssa-black/70 text-sm mb-8 line-clamp-3 leading-relaxed font-medium">
                                    {event.description}
                                </p>
                                
                                <div className="mt-auto">
                                    <button className="w-full py-3 px-6 rounded-2xl bg-ssa-black text-ssa-beige font-semibold text-sm hover:bg-ssa-darkgreen transition-all duration-300 flex items-center justify-between group/btn shadow-md">
                                        View details
                                        <div className="bg-ssa-gold/20 p-1 rounded-full group-hover/btn:bg-ssa-gold/30 transition-colors">
                                            <ArrowUpRight size={16} className="text-ssa-gold transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default UpcomingEvents;