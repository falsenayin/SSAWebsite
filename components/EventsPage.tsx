import React from 'react';
import { Calendar, Clock, MapPin, ArrowUpRight, Camera } from 'lucide-react';

const EventsPage: React.FC = () => {
  const events = [
    {
      tag: "Cultural",
      title: "Saudi Founding Day",
      description: "Join us for a grand celebration of our history with traditional food, music, and performances.",
      image: "https://images.unsplash.com/photo-1576487248805-cf45f6bcc67f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "Feb 22",
      time: "6:00 PM",
      location: "Price Center Ballroom"
    },
    {
      tag: "Social",
      title: "Ramadan Iftar",
      description: "Break your fast with the community. Delicious catering, spiritual vibes, and good company guaranteed.",
      image: "https://images.unsplash.com/photo-1584553256038-f99a38f4d962?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "Mar 15",
      time: "7:00 PM",
      location: "The Village"
    },
    {
      tag: "Professional",
      title: "Career Workshop",
      description: "Resume reviews and networking tips from alumni working in top tech and engineering firms.",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "Apr 05",
      time: "5:00 PM",
      location: "Career Center"
    },
    {
      tag: "Recreational",
      title: "Beach Bonfire",
      description: "Relax after midterms with s'mores, games, and a sunset at La Jolla Shores.",
      image: "https://images.unsplash.com/photo-1525996686008-8e62d472658a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "May 20",
      time: "6:30 PM",
      location: "La Jolla Shores"
    },
    {
      tag: "Academic",
      title: "Finals Study Jam",
      description: "24-hour study space with free coffee, snacks, and tutors available for engineering and science courses.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "Jun 10",
      time: "8:00 PM",
      location: "Geisel Library"
    },
    {
      tag: "Social",
      title: "Welcome Back BBQ",
      description: "Kick off the new academic year with burgers, games, and a chance to meet the new board.",
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "Sep 25",
      time: "12:00 PM",
      location: "Muir Field"
    }
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1525921429624-479b6a26d84d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  ];

  return (
    <div className="bg-ssa-black min-h-screen pt-24">
      
      {/* 1. Header Section */}
      <section className="container mx-auto px-6 mb-20 text-center">
        <span className="inline-block py-1 px-3 rounded-full bg-ssa-gold/10 border border-ssa-gold/20 text-ssa-gold text-xs font-bold tracking-widest uppercase mb-6">
            Community & Culture
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-ssa-beige mb-6">Events & Gatherings</h1>
        <p className="text-ssa-beige/60 max-w-2xl mx-auto text-lg leading-relaxed">
            Stay connected with our upcoming activities and take a look back at our favorite memories. From cultural nights to career workshops, there's something for everyone.
        </p>
      </section>

      {/* 2. Upcoming & All Events Grid */}
      <section className="container mx-auto px-6 mb-32">
        <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl font-bold text-ssa-beige flex items-center gap-3">
                <span className="w-1.5 h-8 bg-ssa-gold rounded-full"></span>
                Upcoming Events
            </h2>
            {/* Filter/Sort could go here */}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
                <div key={index} className="flex flex-col bg-ssa-beige rounded-[2rem] overflow-hidden group hover:shadow-2xl hover:shadow-ssa-gold/10 transition-all duration-500 transform hover:-translate-y-1">
                    {/* Image */}
                    <div className="h-60 overflow-hidden relative">
                         <img 
                            src={event.image} 
                            alt={event.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 saturate-[0.8] group-hover:saturate-100" 
                         />
                         <div className="absolute top-4 left-4 flex gap-2">
                             <span className="bg-ssa-black/80 backdrop-blur-md text-ssa-gold px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wide border border-ssa-gold/20">
                                {event.tag}
                             </span>
                         </div>
                    </div>
                    {/* Content */}
                    <div className="p-8 flex flex-col flex-grow">
                        <div className="flex flex-col gap-2 mb-4">
                            <h3 className="text-2xl font-bold text-ssa-black leading-tight group-hover:text-ssa-darkgreen transition-colors">
                                {event.title}
                            </h3>
                            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-bold text-ssa-black/50 uppercase tracking-wider mt-1">
                                <div className="flex items-center gap-1.5">
                                    <Calendar size={14} className="text-ssa-gold" />
                                    {event.date}
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <Clock size={14} className="text-ssa-gold" />
                                    {event.time}
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <MapPin size={14} className="text-ssa-gold" />
                                    {event.location}
                                </div>
                            </div>
                        </div>
                        
                        <p className="text-ssa-black/70 text-sm mb-8 leading-relaxed font-medium line-clamp-3">
                            {event.description}
                        </p>
                        
                        <div className="mt-auto">
                            <button className="w-full py-3.5 px-6 rounded-xl bg-ssa-black text-ssa-beige font-semibold text-sm hover:bg-ssa-darkgreen transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-lg">
                                Register Now
                                <ArrowUpRight size={16} className="text-ssa-gold transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </section>

      {/* 3. Gallery Section - "Moments Together" */}
      <section className="bg-ssa-darkgreen py-24 rounded-t-[3rem] relative overflow-hidden">
         {/* Decorative elements */}
         <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ssa-gold/30 to-transparent"></div>
         
         <div className="container mx-auto px-6 relative z-10">
             <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                <div>
                    <span className="text-ssa-gold font-bold tracking-widest uppercase text-sm mb-3 block">Gallery</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-ssa-beige">Moments Together</h2>
                </div>
                <p className="text-ssa-beige/60 max-w-sm text-right md:text-left text-lg">
                    Snapshots from our gatherings, celebrations, and everyday moments throughout the year.
                </p>
             </div>
             
             {/* Masonry Grid */}
             <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                {galleryImages.map((img, i) => (
                    <div key={i} className="break-inside-avoid rounded-3xl overflow-hidden relative group">
                        <img 
                            src={img} 
                            alt={`Gallery ${i}`}
                            className="w-full object-cover transition-transform duration-700 group-hover:scale-105" 
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-ssa-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <div className="w-12 h-12 rounded-full bg-ssa-beige/20 backdrop-blur-md flex items-center justify-center text-ssa-beige border border-ssa-beige/30 transform scale-50 group-hover:scale-100 transition-transform duration-300">
                                <Camera size={20} />
                            </div>
                        </div>
                    </div>
                ))}
             </div>
        </div>
      </section>

    </div>
  );
};

export default EventsPage;