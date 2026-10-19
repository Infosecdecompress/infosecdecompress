import { CreatePagesArgs } from "gatsby";

import * as types from "../types";

interface CategoriesQueryResult {
  allMarkdownRemark: {
    group?: Array<types.Group>;
  };
}

const categoriesQuery = async (graphql: CreatePagesArgs["graphql"]) => {
  const result = await graphql<CategoriesQueryResult>(`
    {
      allMarkdownRemark(
        filter: {
          frontmatter: { template: { eq: "post" }, draft: { ne: true } }
        }
      ) {
        group(field: { frontmatter: { category: SELECT } }) {
          fieldValue
          totalCount
        }
      }
    }
  `);

  return result?.data?.allMarkdownRemark?.group ?? [];
};

export default categoriesQuery;
