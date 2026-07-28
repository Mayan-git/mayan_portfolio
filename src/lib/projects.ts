export interface Project {
  id: number;
  slug: string;
  title: string;
  year: string;
  tagline: string;
  tech: string[];
  description: string;
  myRole: string[];
  images: string[];
  hoverImage: string;
  github: string;
  liveUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    slug: 'docuchatai',
    title: 'DocuChatAI',
    year: '2026',
    tagline: 'RAG-Based Document Q&A Platform',
    tech: ['React (Vite)', 'Node.js', 'Express', 'Firebase', 'Google Gemini API', 'RAG'],
    description:
      'A full-stack RAG document Q&A app that lets users upload PDFs and receive AI-generated, source-cited answers instead of manually searching through documents. A custom text-chunking and embedding pipeline uses Gemini embeddings to power in-memory cosine-similarity retrieval, surfacing the most relevant passages for every query.',
    myRole: [
      'Architected and independently built a full-stack RAG document Q&A app, enabling users to upload PDFs and receive AI-generated, source-cited answers instead of manually searching documents.',
      'Engineered a custom text-chunking and embedding pipeline using Gemini embeddings (~500-token chunks, 50-token overlap) with in-memory cosine-similarity retrieval, surfacing the top 4-5 relevant passages per query.',
      'Implemented secure Firebase Authentication (Email/Password and Google SSO) with per-user Firestore security rules, ensuring users could access only their own documents and chat history.',
      'Designed a responsive chat interface with streaming AI responses, cited sources, and persistent per-document conversation history; deployed to production on Vercel.',
    ],
    images: ['/Projects/DocuChatAI/01-signin.jpeg'],
    hoverImage: '/Projects/DocuChatAI/01-signin.jpeg',
    github: 'https://github.com/Mayan-git/DocuChatAI',
    liveUrl: 'https://docu-chat-ai-nu.vercel.app',
  },
  {
    id: 2,
    slug: 'hirewise-ai',
    title: 'HireWise-AI',
    year: '2025',
    tagline: 'AI Interview Prep & Resume Analysis Platform',
    tech: ['React', 'Node.js', 'AI/ML APIs'],
    description:
      'An AI-powered career platform offering resume scoring, job matching, and simulated mock interviews to help candidates prepare for job applications. A resume-scoring engine analyzes uploaded resumes against role requirements to generate personalized, actionable career recommendations.',
    myRole: [
      'Independently designed and developed an AI-powered career platform offering resume scoring, job matching, and simulated mock interviews to help candidates prepare for job applications.',
      'Built a resume-scoring engine that analyzes uploaded resumes against role requirements and generates personalized, actionable career recommendations.',
      'Developed an interactive mock-interview module simulating realistic Q&A sessions to help users practice and improve interview performance.',
    ],
    images: ['/Projects/HireWiseAI/01-landing.jpeg'],
    hoverImage: '/Projects/HireWiseAI/01-landing.jpeg',
    github: 'https://github.com/Mayan-git/HireWise-AI',
    liveUrl: 'https://hire-wise-ai-gamma.vercel.app',
  },
];
export function getAllProjects(): Project[] {
  return projects;
}
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
