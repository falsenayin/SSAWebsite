import React from 'react';


const Logo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative flex items-center justify-center w-12 h-12 rounded-lg bg-ssa-darkgreen border border-ssa-gold/40 shadow-sm shadow-ssa-gold/10 overflow-hidden">
        <img
          src="/logo.png"
          alt="SSA Logo"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col justify-center">
        <span className="font-bold text-ssa-beige text-lg leading-none tracking-wide">SSA</span>
        <span className="text-[0.65rem] text-ssa-gold uppercase tracking-widest font-medium mt-0.5">UC San Diego</span>
      </div>
    </div>
  );
};

export default Logo;
