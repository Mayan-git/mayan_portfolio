'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { gsap, useGSAP } from '@/lib/gsap';
import AnimateDescription from '@/components/ui/AnimateDescription';
import AnimatedHeading from '@/components/ui/AnimateHeading';

const About = () => {
  const headingText = 'Who Am I';
  const descriptionText =
    "I'm a Full Stack Developer and AI/ML enthusiast who has independently built and shipped production AI-powered web apps.";
  const aboutMeText = `I'm a B.Tech Computer Science (AI) student at KIET Group of Institutions, and a Full Stack Developer who has independently designed, built, and shipped two production AI-powered web apps end to end — DocuChatAI and HireWise-AI — using React, Node.js, Firebase, and LLM APIs.

I enjoy bridging the gap between clean, responsive front-end interfaces and the backend systems that power them: REST APIs, authentication, database schemas, and increasingly, retrieval-augmented generation pipelines built on Google Gemini embeddings. That curiosity for how software and ML systems work under the hood is backed by AWS certifications in Machine Learning and Cloud, alongside a strong foundation in DSA and algorithms.

I'm currently seeking a Full Stack Developer Intern or AI/ML Intern role where I can keep building impactful, scalable applications and learn from an experienced engineering team.`;
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        '.about-image-wrapper',
        { x: -60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.about-image-wrapper',
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        },
      );
      gsap.fromTo(
        '.about-bio-para',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.about-bio-para',
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        },
      );
      gsap.fromTo(
        '.about-label',
        { opacity: 0, letterSpacing: '0.5em' },
        {
          opacity: 1,
          letterSpacing: '0.3em',
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.about-label',
            start: 'top 88%',
            toggleActions: 'play none none reverse',
          },
        },
      );
    },
    { scope: sectionRef },
  );

  return (
    <div className="bg-cream">
      <section
        ref={sectionRef}
        id="about"
        className="min-h-screen bg-ink text-light py-24 md:py-32 rounded-t-4xl"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="mb-10 md:mb-20">
            <AnimatedHeading
              text={headingText}
              className="text-[clamp(2.5rem,7vw,6.5rem)] font-black tracking-tight leading-none uppercase mb-4"
            />
            <AnimateDescription
              text={descriptionText}
              className="text-base sm:text-lg text-muted font-sans"
            />
          </div>

          <div className="grid grid-cols-12 gap-6 md:gap-8 pb-20 items-center">
            <div className="col-span-12 md:col-span-5 lg:col-span-5 flex items-center justify-center">
              <div className="about-image-wrapper relative w-full max-w-[350px] md:max-w-[380px] h-[360px] md:h-[450px] bg-elevated-dark rounded-2xl overflow-hidden border border-border-subtler">
                <Image
                  src="/profile-avatar2.jpeg"
                  alt="Mayan Prajapati"
                  fill
                  sizes="(max-width: 768px) 350px, 380px"
                  priority
                  className="object-cover object-top"
                />
              </div>
            </div>

            <div className="col-span-12 md:col-span-7 lg:col-span-6 md:col-start-6 lg:col-start-7 flex flex-col justify-center space-y-8">
              <span className="about-label text-sm sm:text-base md:text-base text-warm uppercase tracking-[0.3em] font-medium text-center md:text-left inline-block">
                (About Me)
              </span>
              <div className="space-y-6">
                {aboutMeText.split('\n\n').map((p, i) => (
                  <p
                    key={i}
                    className="about-bio-para text-muted text-base sm:text-lg md:text-lg leading-relaxed font-sans"
                  >
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
