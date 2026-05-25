import React from 'react';
import { motion } from 'motion/react';

interface TrustStripProps {
  items: string[];
  reverse?: boolean;
}

export default function TrustStrip({ items, reverse = false }: TrustStripProps) {
  return (
    <div className="w-full bg-slate-900 overflow-hidden py-4 border-y border-white/5 select-none font-mono">
      <div className={`flex whitespace-nowrap ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}>
        {[...items, ...items, ...items].map((item, index) => (
          <div key={index} className="flex items-center px-8">
            <span className="text-white/40 text-[10px] font-bold tracking-[0.3em] uppercase transition-colors hover:text-blue-400">
              {item}
            </span>
            <div className="mx-8 h-1 w-1 rounded-full bg-blue-500/50" />
          </div>
        ))}
      </div>
    </div>
  );
}
