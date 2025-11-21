import type { Site, Metadata, Socials } from './types'

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
  DESCRIPTION: 'Sharing projects, experiments, and thoughts from my journey.',
}

export const WRITINGS: Metadata = {
  TITLE: 'Writings',
  DESCRIPTION: 'A collection of articles on topics I am passionate about.',
}

export const ABOUT: Metadata = {
  TITLE: 'ABOUT',
  DESCRIPTION: 'A glimpse into my work, passions, and technical contributions.',
}

export const PROJECTS: Metadata = {
  TITLE: 'Projects',
  DESCRIPTION:
    'A collection of my projects, with links to repositories and demos.',
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
