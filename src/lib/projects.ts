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
  {
    id: 3,
    slug: 'employeeai',
    title: 'EmployeeAI',
    year: '2026',
    tagline: 'AI-Powered HR Performance Analytics Platform',
    tech: ['React (Vite)', 'Node.js', 'Express', 'MongoDB', 'OpenRouter API'],
    description:
      'A production-grade MERN HR analytics platform that helps organizations track employee performance and surface AI-driven insights. Anonymized performance data is sent to an LLM via OpenRouter to generate promotion, training, and ranking recommendations per employee, backed by JWT-based role access control for admins and managers.',
    myRole: [
      'Independently designed and built a production-grade MERN HR analytics platform for tracking employee performance and generating AI-driven insights.',
      'Implemented JWT-based authentication with role-based access control, where the first registered user becomes an admin and subsequent users default to managers with permissions restricted to viewing and updating performance scores.',
      'Integrated the OpenRouter API (GPT-4o-mini) to generate promotion, training, and ranking recommendations per employee, anonymizing names and emails before sending data to the LLM.',
      'Hardened the app against MongoDB regex injection via input escaping, added rate limiting on authentication endpoints, Helmet security headers, and fail-fast environment variable validation.',
      'Built a fully responsive dark/light-mode employee directory with search, department filtering, and pagination, covered by a Vitest/Supertest and React Testing Library test suite.',
    ],
    images: [],
    hoverImage: '',
    github: 'https://github.com/Mayan-git/employee-system',
    liveUrl: 'https://employee-system-wheat-delta.vercel.app',
  },
  {
    id: 4,
    slug: 'collabnote',
    title: 'CollabNote',
    year: '2026',
    tagline: 'Real-Time Collaborative Note-Taking Platform',
    tech: ['React', 'Node.js', 'Socket.IO', 'MongoDB', 'Redis', 'TipTap'],
    description:
      'A full-stack SaaS note-taking app with Google Docs-style live collaboration and Notion-style organization. Socket.IO with a Redis adapter powers real-time presence, cursor broadcasting, and typing indicators, while a TipTap-based rich editor supports markdown, tables, code blocks, and checklists, alongside pluggable AI writing tools.',
    myRole: [
      'Independently designed and built a full-stack collaborative note-taking SaaS app with live, multi-user editing.',
      'Implemented real-time collaboration using Socket.IO with a Redis adapter for presence, cursor broadcasting, and typing indicators across concurrent editors.',
      'Built a rich-text editing experience with TipTap supporting markdown, tables, syntax-highlighted code blocks, and checklists, plus automatic version snapshots with one-click restore.',
      'Designed an owner/editor/commenter/viewer permissions model with email invitations and expiring public share links, backed by JWT authentication and bcrypt password hashing.',
      'Integrated pluggable AI tools for summarization, grammar correction, rewriting, translation, and title/tag generation, and structured the backend with a layered clean-architecture (routes to controllers to services to repositories to models).',
    ],
    images: ['/Projects/CollabNote/01-notes.jpeg'],
    hoverImage: '/Projects/CollabNote/01-notes.jpeg',
    github: 'https://github.com/Mayan-git/CollabNote',
    liveUrl: 'https://collab-note-client-aern-indol.vercel.app',
  },
];
export function getAllProjects(): Project[] {
  return projects;
}
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
