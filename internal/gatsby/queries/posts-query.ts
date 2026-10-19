import { CreatePagesArgs } from "gatsby";

import * as types from "../types";

interface PostsQueryResult {
  allMarkdownRemark: {
    edges?: Array<types.Edge>;
  };
}

const postsQuery = async (graphql: CreatePagesArgs["graphql"]) => {
  const result = await graphql<PostsQueryResult>(`
    {
      allMarkdownRemark(
        filter: {
          frontmatter: { draft: { ne: true }, template: { eq: "post" } }
        }
      ) {
        edges {
          node {
            frontmatter {
              template
              slug
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  return result?.data?.allMarkdownRemark?.edges ?? [];
};

export default postsQuery;
