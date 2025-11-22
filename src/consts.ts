import type { Site, Metadata, Socials } from './types'

// ---------------------------
// Site Information
// ---------------------------
export const SITE: Site = {
  NAME: 'Kane Vidzro',
  TITLE: 'Software Developer & Entrepreneur',
  EMAIL: 'kanevidzro@gmail.com',
  USERNAME: 'kanevidzro',
}

// ---------------------------
// Page Metadata
// ---------------------------
export const HOME: Metadata = {
  TITLE: 'Home',
  DESCRIPTION:
    "Hi, I'm Kane Vidzro, a software developer focused on architecting and building robust SaaS solutions, particularly for empowering African businesses.",
}

export const WRITINGS: Metadata = {
  TITLE: 'Writings',
  DESCRIPTION:
    'Where I document my discoveries. Read my collection of articles covering engineering best practice, insights, and reflections on my life in tech.',
}

export const ABOUT: Metadata = {
  TITLE: 'About me',
  DESCRIPTION:
    "I don't just write code; I build solutions. Know who I am and my mission to empower African businesses through scalable SaaS development.",
}

export const PROJECTS: Metadata = {
  TITLE: 'Projects',
  DESCRIPTION:
    "Real-world solutions I've engineered. Browse the SaaS products and tools I've built to solve challenges, complete with demos and links.",
}

// ---------------------------
// Social Links
// ---------------------------
export const SOCIALS: Socials = [
  {
    LABEL: 'twitter-x',
    LINK: 'https://twitter.com/kanevidzro',
  },
  {
    LABEL: 'github',
    LINK: 'https://github.com/kanevidzro',
  },
  {
    LABEL: 'linkedin',
    LINK: 'https://www.linkedin.com/in/kanevidzro',
  },
]
