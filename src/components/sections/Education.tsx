'use client';

import { useRef } from 'react';
import { gsap, useGSAP } from '@/lib/gsap';
import AnimatedHeading from '@/components/ui/AnimateHeading';
import AnimateDescription from '@/components/ui/AnimateDescription';
import { HiOutlineAcademicCap } from 'react-icons/hi2';
import { SiAmazonwebservices, SiLeetcode } from 'react-icons/si';
import { FaCertificate } from 'react-icons/fa';

const education = [
  {
    school: 'KIET Group of Institutions',
    degree: 'B.Tech, Computer Science & Engineering (AI)',
    detail: 'CGPA: 8.31 / 10 (3rd Year)',
    period: '2024 - 2028',
  },
  {
    school: 'Darshan Academy',
    degree: 'Senior Secondary (12th), CBSE, Science',
    detail: 'Percentage: 90.2%',
    period: '2023 - 2024',
  },
  {
    school: 'Darshan Academy',
    degree: 'Secondary (10th), CBSE',
    detail: 'Percentage: 78.4%',
    period: '2021 - 2022',
  },
];

const certifications = [
  {
    title: 'AWS Certified Machine Learning Engineer - Associate',
    date: 'April 2026',
    icon: SiAmazonwebservices,
  },
  {
    title: 'AWS Certified Cloud Practitioner',
    date: 'December 2025',
    icon: SiAmazonwebservices,
  },
  {
    title: 'Generative AI (Microsoft & LinkedIn)',
    date: 'March 2025',
    icon: FaCertificate,
  },
  {
    title: 'AI For Everyone',
    date: 'March 2025',
    icon: FaCertificate,
  },
];

const Education = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingText = 'Education';
  const descriptionText =
    'My academic background and the certifications backing my AI/ML and cloud fundamentals.';

  useGSAP(
    () => {
      gsap.fromTo(
        '.edu-card',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.edu-card',
            start: 'top 88%',
            toggleActions: 'play none none reverse',
          },
        },
      );
      gsap.fromTo(
        '.cert-card',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.cert-card',
            start: 'top 88%',
            toggleActions: 'play none none reverse',
          },
        },
      );
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="education"
      className="bg-ink text-light py-24 md:py-32 rounded-b-4xl"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="mb-14 md:mb-20">
          <AnimatedHeading
            text={headingText}
            className="text-[clamp(2.5rem,7vw,6.5rem)] font-black tracking-tight leading-none uppercase mb-4"
          />
          <AnimateDescription
            text={descriptionText}
            className="text-base sm:text-lg md:text-xl text-muted font-sans leading-relaxed max-w-2xl"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <div>
            <h3 className="flex items-center gap-3 text-warm uppercase text-sm md:text-base font-medium tracking-[0.2em] mb-8">
              <HiOutlineAcademicCap className="w-5 h-5 text-forest-light" />
              Academic Background
            </h3>
            <div className="space-y-5">
              {education.map((edu, i) => (
                <div
                  key={i}
                  className="edu-card card-elevated p-6 rounded-2xl bg-surface-mid border border-border-subtler transition-colors duration-300 hover:border-forest/40"
                >
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h4 className="font-display font-bold text-lg md:text-xl text-light leading-snug">
                      {edu.school}
                    </h4>
                    <span className="font-mono text-xs text-warm whitespace-nowrap pt-1">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-muted text-sm md:text-base font-sans mb-1">{edu.degree}</p>
                  <p className="text-forest-light text-sm font-mono">{edu.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="flex items-center gap-3 text-warm uppercase text-sm md:text-base font-medium tracking-[0.2em] mb-8">
              <FaCertificate className="w-4 h-4 text-forest-light" />
              Certifications
            </h3>
            <div className="space-y-5">
              {certifications.map((cert, i) => {
                const Icon = cert.icon;
                return (
                  <div
                    key={i}
                    className="cert-card card-elevated flex items-start gap-4 p-6 rounded-2xl bg-surface-mid border border-border-subtler transition-colors duration-300 hover:border-forest/40"
                  >
                    <div className="w-10 h-10 rounded-full bg-elevated-dark flex items-center justify-center shrink-0 text-forest-light">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-base md:text-lg text-light leading-snug mb-1">
                        {cert.title}
                      </h4>
                      <p className="font-mono text-xs text-warm">{cert.date}</p>
                    </div>
                  </div>
                );
              })}

              <a
                href="https://leetcode.com/u/lg_mayan"
                target="_blank"
                rel="noopener noreferrer"
                className="cert-card card-elevated flex items-center gap-4 p-6 rounded-2xl bg-surface-mid border border-border-subtler transition-all duration-300 hover:border-forest/40 hover:bg-elevated-dark/40 group"
              >
                <div className="w-10 h-10 rounded-full bg-elevated-dark flex items-center justify-center shrink-0 text-forest-light">
                  <SiLeetcode className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h4 className="font-display font-semibold text-base md:text-lg text-light leading-snug">
                    LeetCode
                  </h4>
                  <p className="font-mono text-xs text-warm">leetcode.com/u/lg_mayan</p>
                </div>
                <span className="text-forest-light opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
