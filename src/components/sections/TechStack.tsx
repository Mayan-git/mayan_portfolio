'use client';

import { useRef } from 'react';
import { gsap, useGSAP } from '@/lib/gsap';
import AnimatedHeading from '@/components/ui/AnimateHeading';
import AnimateDescription from '@/components/ui/AnimateDescription';
import type { IconType } from 'react-icons';
import {
  SiJavascript,
  SiOpenjdk,
  SiReact,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiVite,
  SiShadcnui,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiGooglegemini,
  SiAmazonwebservices,
  SiGit,
  SiGithub,
  SiPostman,
  SiVercel,
} from 'react-icons/si';
import { HiCodeBracket } from 'react-icons/hi2';

const STACK_SECTIONS: {
  id: string;
  title: string;
  technologies: { name: string; icon: IconType }[];
}[] = [
  {
    id: 'languages',
    title: 'LANGUAGES',
    technologies: [
      { name: 'Java', icon: SiOpenjdk },
      { name: 'JavaScript', icon: SiJavascript },
    ],
  },
  {
    id: 'frontend',
    title: 'FRONTEND',
    technologies: [
      { name: 'React', icon: SiReact },
      { name: 'HTML5', icon: SiHtml5 },
      { name: 'CSS3', icon: SiCss3 },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'Vite', icon: SiVite },
      { name: 'Shadcn UI', icon: SiShadcnui },
    ],
  },
  {
    id: 'backend',
    title: 'BACKEND',
    technologies: [
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'Express.js', icon: SiExpress },
      { name: 'REST APIs', icon: HiCodeBracket },
    ],
  },
  {
    id: 'database',
    title: 'DATABASES',
    technologies: [
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'Firebase', icon: SiFirebase },
    ],
  },
  {
    id: 'aiml',
    title: 'AI / ML',
    technologies: [
      { name: 'TensorFlow', icon: SiTensorflow },
      { name: 'PyTorch', icon: SiPytorch },
      { name: 'scikit-learn', icon: SiScikitlearn },
      { name: 'Gemini API', icon: SiGooglegemini },
    ],
  },
  {
    id: 'tools',
    title: 'CLOUD & TOOLS',
    technologies: [
      { name: 'AWS', icon: SiAmazonwebservices },
      { name: 'Git', icon: SiGit },
      { name: 'GitHub', icon: SiGithub },
      { name: 'Postman', icon: SiPostman },
      { name: 'Vercel', icon: SiVercel },
    ],
  },
];

const TechStack = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const titleRefs = useRef<(HTMLHeadingElement | null)[]>([]);
  const headingText = 'My Tech Stack';
  const descriptionText =
    'A selection of technologies I use to design, build, and deploy full-stack, AI-powered web applications.';

  useGSAP(
    () => {
      sectionRefs.current.forEach((section, index) => {
        if (!section) return;
        const items = section.querySelectorAll('.tech-item');
        const title = titleRefs.current[index];

        gsap.fromTo(
          title,
          { opacity: 0, y: 50 },
          {
            opacity: 1, y: 0, ease: 'power2.out',
            scrollTrigger: { trigger: section, start: 'top 90%', end: 'top 70%', scrub: true },
          },
        );
        gsap.fromTo(
          items,
          { opacity: 0, y: 50 },
          {
            opacity: 1, y: 0, stagger: 0.2, ease: 'power2.out',
            scrollTrigger: { trigger: section, start: 'top 90%', end: 'top 70%', scrub: true },
          },
        );
      });
    },
    { scope: containerRef },
  );

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const icon = e.currentTarget.querySelector('.tech-icon');
    if (!icon) return;
    gsap.to(icon, { rotation: 360, scale: 1.1, duration: 0.6, ease: 'power2.out' });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const icon = e.currentTarget.querySelector('.tech-icon');
    if (!icon) return;
    gsap.to(icon, { rotation: 0, scale: 1, duration: 0.5, ease: 'power2.inOut' });
  };

  return (
    <section
      ref={containerRef}
      id="TechStack"
      className="bg-ink text-light py-24 md:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="mb-14 hidden md:block">
          <AnimatedHeading
            text={headingText}
            className="text-[clamp(2.5rem,7vw,6.5rem)] font-black tracking-tight leading-none uppercase mb-4"
          />
          <AnimateDescription
            text={descriptionText}
            className="text-base sm:text-lg md:text-xl text-muted font-sans leading-relaxed"
          />
        </div>

        <div className="mb-10 md:hidden">
          <AnimatedHeading
            text="My Stack"
            className="text-[clamp(2.5rem,7vw,6.5rem)] font-black tracking-tight leading-none uppercase mb-4"
          />
        </div>

        <div className="space-y-16 md:space-y-24">
          {STACK_SECTIONS.map((stack, index) => (
            <div
              key={stack.id}
              ref={(el) => { sectionRefs.current[index] = el; }}
              className="flex flex-col md:flex-row md:items-start md:justify-between gap-4"
            >
              <h3
                ref={(el) => { titleRefs.current[index] = el; }}
                className="md:w-1/3 text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#bfbdb8] tracking-tight font-display uppercase"
              >
                {stack.title}
              </h3>

              <div className="md:w-2/3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {stack.technologies.map((tech, i) => {
                  const Icon = tech.icon;
                  return (
                    <div
                      key={i}
                      className="tech-item flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all duration-300 border border-transparent hover:border-border-subtler hover:bg-elevated-dark/40"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="tech-icon w-9 h-9 flex items-center justify-center relative text-forest-light shrink-0">
                        <Icon className="w-full h-full" />
                      </div>
                      <p className="text-sm sm:text-base md:text-base lg:text-lg font-mono font-medium text-light">
                        {tech.name}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
