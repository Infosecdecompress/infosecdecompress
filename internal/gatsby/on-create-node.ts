import { GatsbyNode } from "gatsby";
import { createFilePath } from "gatsby-source-filesystem";

import toKebabCase from "../../src/utils/to-kebab-case";
import * as constants from "./constants";
import * as types from "./types";

const onCreateNode: GatsbyNode["onCreateNode"] = ({
  node,
  actions,
  getNode,
}) => {
  const { createNodeField } = actions;

  if (node.internal.type !== "MarkdownRemark") {
    return;
  }

  const { frontmatter, parent }: types.Edge["node"] = node;
  const { tags, category, slug } = frontmatter ?? {};

  if (slug) {
    const dirname = parent ? getNode(parent)?.relativeDirectory : undefined;
    const value =
      typeof dirname === "string" ? `/${dirname}/${slug}` : `/${slug}`;

    createNodeField({ node, name: "slug", value });
  } else {
    createNodeField({
      node,
      name: "slug",
      value: createFilePath({ node, getNode }),
    });
  }

  if (tags) {
    createNodeField({
      node,
      name: "tagSlugs",
      value: tags.map(
        (tag) => `${constants.routes.tagRoute}/${toKebabCase(tag)}/`,
      ),
    });
  }

  if (category) {
    createNodeField({
      node,
      name: "categorySlug",
      value: `${constants.routes.categoryRoute}/${toKebabCase(category)}/`,
    });
  }
};

export { onCreateNode };
