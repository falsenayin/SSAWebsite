import React from 'react';
import { Palmtree } from 'lucide-react';

const Logo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-transparent border-none">
        <img src="/logo.png" alt="SSA Logo" className="w-full h-full object-contain" />
      </div>
      <div className="flex flex-col justify-center">
        <span className="font-bold text-ssa-beige text-lg leading-none tracking-wide">SSA</span>
        <span className="text-[0.65rem] text-ssa-gold uppercase tracking-widest font-medium mt-0.5">UC San Diego</span>
      </div>
    </div>
  );
};

export default Logo;