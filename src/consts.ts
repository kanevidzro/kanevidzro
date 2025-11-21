import type { Site, Metadata, Socials, Technologies } from './types'

// ---------------------------
// Site Information
// ---------------------------
export const SITE: Site = {
  NAME: 'Kane Vidzro',
  EMAIL: 'kanevidzro@gmail.com',
  USERNAME: 'kanevidzro',
}

// ---------------------------
// Page Metadata
// ---------------------------
export const HOME: Metadata = {
  TITLE: 'Home',
  DESCRIPTION: 'Hi, I\'m Kane Vidzro, a software developer focused on architecting and building robust SaaS solutions, particularly for empowering African businesses.',
}

export const WRITINGS: Metadata = {
  TITLE: 'Writings',
  DESCRIPTION: 'A collection of articles on topics I am passionatet.',
}

export const ABOUT: Metadata = {
  TITLE: 'About me',
  DESCRIPTION: 'I don\'t just write code; I build solutions. Know who I am and my mission to empower African businesses through scalable SaaS development.',
}

export const PROJECTS: Metadata = {
  TITLE: 'Projects',
  DESCRIPTION:
    'Real-world solutions I\'ve engineered. Browse the SaaS products and tools I\'ve built to solve challenges, complete with demos and links.',
}

// ---------------------------
// Social Links
// ---------------------------
export const SOCIALS: Socials = [
  {
    LABEL: 'twitter-x',
    HREF: 'https://twitter.com/kanevidzro',
  },
  {
    LABEL: 'github',
    HREF: 'https://github.com/kanevidzro',
  },
  {
    LABEL: 'linkedin',
    HREF: 'https://www.linkedin.com/in/kanevidzro',
  },
]

export const TECHNOLOGIES: Technologies = [
  {
    name: 'TypeScript',
    url: 'https://www.typescriptlang.org',
    icon: '/icons/typescript.png',
  },
  {
    name: 'Next.js',
    url: 'https://nextjs.org',
    icon: '/icons/nextjs.png',
  },
  {
    name: 'Bun',
    url: 'https://bun.com',
    icon: '/icons/bun.png',
  },
  {
    name: 'Hono',
    url: 'https://hono.dev',
    icon: '/icons/hono.png',
  },
  {
    name: 'React',
    url: 'https://react.dev',
    icon: '/icons/react.png',
  },
  {
    name: 'Tailwind CSS',
    url: 'https://tailwindcss.com',
    icon: '/icons/tailwind.png',
  },
]
