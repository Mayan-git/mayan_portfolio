import React from 'react';
import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiFirebase,
  SiMongodb,
  SiGooglegemini,
  SiVite,
} from 'react-icons/si';
import type { IconType } from 'react-icons';

const TECH_ICON_MAP: Record<string, IconType> = {
  'React (Vite)': SiReact,
  React: SiReact,
  Vite: SiVite,
  'Node.js': SiNodedotjs,
  Express: SiExpress,
  Firebase: SiFirebase,
  MongoDB: SiMongodb,
  'Google Gemini API': SiGooglegemini,
};

interface ProjectVisualFallbackProps {
  title: string;
  tagline: string;
  tech: string[];
  className?: string;
}

export default function ProjectVisualFallback({
  title,
  tagline,
  tech,
  className = '',
}: ProjectVisualFallbackProps) {
  const icons = tech.map((t) => TECH_ICON_MAP[t]).filter(Boolean).slice(0, 4);

  return (
    <div
      className={`relative w-full h-full flex flex-col items-center justify-center gap-5 overflow-hidden px-8 text-center ${className}`}
      style={{ background: 'radial-gradient(120% 120% at 15% 15%, #123d2c 0%, #080807 65%)' }}
    >
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            'repeating-linear-gradient(135deg, #d1d1c7 0px, #d1d1c7 1px, transparent 1px, transparent 28px)',
        }}
      />
      <span className="relative font-display font-black uppercase leading-none text-white/10 text-[clamp(4rem,14vw,9rem)] select-none">
        {title.slice(0, 2)}
      </span>
      <div className="relative -mt-8 sm:-mt-10 md:-mt-14">
        <h3 className="font-display font-black uppercase text-xl sm:text-2xl md:text-3xl text-light leading-tight mb-2">
          {title}
        </h3>
        <p className="font-mono text-xs sm:text-sm text-warm uppercase tracking-widest mb-4">
          {tagline}
        </p>
        {icons.length > 0 && (
          <div className="flex items-center justify-center gap-3">
            {icons.map((Icon, i) => (
              <div
                key={i}
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-forest-light"
              >
                <Icon className="w-4 h-4" />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
