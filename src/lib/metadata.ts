import { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const siteMetadata: Metadata = {
  title: {
    default: 'Mayan Prajapati - Full Stack Developer & AI/ML Enthusiast',
    template: '%s | Mayan Prajapati',
  },
  description:
    'Full Stack Developer who has independently built and shipped production AI-powered web apps using React, Node.js, Firebase, and LLM APIs. AWS certified in Machine Learning and Cloud.',
  keywords: [
    'Mayan Prajapati',
    'Full Stack Developer',
    'AI/ML Enthusiast',
    'React Developer',
    'Node.js Developer',
    'RAG',
    'Google Gemini API',
    'AWS Certified',
    'Portfolio',
  ],
  authors: [
    {
      name: 'Mayan Prajapati',
    },
  ],
  creator: 'Mayan Prajapati',
  metadataBase: new URL(siteUrl),
  icons: {
    icon: '/logo.svg',
  },
  openGraph: {
    title: 'Mayan Prajapati - Full Stack Developer & AI/ML Enthusiast',
    description:
      'Portfolio of Mayan Prajapati, Full Stack Developer specializing in React, Node.js, Firebase, and AI-powered web applications.',
    url: siteUrl,
    siteName: 'Mayan Prajapati Portfolio',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Mayan Prajapati - Full Stack Developer',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mayan Prajapati - Full Stack Developer & AI/ML Enthusiast',
    description:
      'Portfolio of Mayan Prajapati, Full Stack Developer specializing in React, Node.js, Firebase, and AI-powered web applications.',
    images: ['/og-image.svg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};
