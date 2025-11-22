export interface Site {
  NAME: string;
  TITLE: string;
  EMAIL: string;
  USERNAME: string;
}

export interface Metadata {
  TITLE: string;
  DESCRIPTION: string;
}

export interface Social {
  LABEL: string;
  URL: string;
}

export type Socials = Social[];
