export interface Site {
  NAME: string;
  EMAIL: string;
  USERNAME: string;
}

export interface Metadata {
  TITLE: string;
  DESCRIPTION: string;
}

export interface Social {
  LABEL: string;
  HREF: string;
}

export type Socials = Social[];

export interface Technology {
  name: string;
  url: string;
  icon: string;
}

export type Technologies = Technology[];
