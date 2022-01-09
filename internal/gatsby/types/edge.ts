import { Node as GatsbyNode } from "gatsby";

interface Frontmatter {
  slug?: string;
  template?: string;
  category?: string;
  tags?: Array<string>;
}

interface Fields {
  slug?: string;
  categorySlug?: string;
  tagSlugs?: Array<string>;
}

interface Node extends GatsbyNode {
  fields?: Fields;
  frontmatter?: Frontmatter;
}

interface Edge {
  node: Node;
}

export default Edge;
