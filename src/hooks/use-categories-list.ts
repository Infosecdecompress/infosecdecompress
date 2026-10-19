import { graphql, useStaticQuery } from "gatsby";

import type { Group } from "@/types";

interface CategoriesQueryResult {
  allMarkdownRemark: {
    group?: Array<Group>;
  };
}

const useCategoriesList = (): Array<Group> => {
  const { allMarkdownRemark } = useStaticQuery<CategoriesQueryResult>(graphql`
    query CategoriesListQuery {
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

  return allMarkdownRemark.group ?? [];
};

export default useCategoriesList;
