// ---------------------------
// Site Information
// ---------------------------
export interface Site {
  NAME: string
  EMAIL: string
  USERNAME: string
}

// ---------------------------
// Page Metadata
// ---------------------------
export interface Metadata {
  TITLE: string
  DESCRIPTION: string
}

// ---------------------------
// Social Links
// ---------------------------
export interface Social {
  LABEL: string
  HREF: string
}

export type Socials = Social[]
