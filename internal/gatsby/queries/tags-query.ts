import { CreatePagesArgs } from "gatsby";

import * as types from "../types";

interface TagsQueryResult {
  allMarkdownRemark: {
    group?: Array<types.Group>;
  };
}

const tagsQuery = async (graphql: CreatePagesArgs["graphql"]) => {
  const result = await graphql<TagsQueryResult>(`
    {
      allMarkdownRemark(
        filter: {
          frontmatter: { template: { eq: "post" }, draft: { ne: true } }
        }
      ) {
        group(field: { frontmatter: { tags: SELECT } }) {
          fieldValue
          totalCount
        }
      }
    }
  `);

  return result?.data?.allMarkdownRemark?.group ?? [];
};

export default tagsQuery;
