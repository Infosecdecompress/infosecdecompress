import Dictionary from "./dictionary";

export interface MenuItem {
  label: string;
  path: string;
}

export interface Author {
  name: string;
  bio: string;
  photo: string;
  contacts: Dictionary<string>;
}

interface SiteMetadata {
  url: string;
  title: string;
  subtitle: string;
  copyright: string;
  disqusShortname?: string;
  author: Author;
  menu: Array<MenuItem>;
}

export default SiteMetadata;
