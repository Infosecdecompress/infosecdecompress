import { graphql, useStaticQuery } from "gatsby";

import type { Group } from "@/types";

interface TagsQueryResult {
  allMarkdownRemark: {
    group?: Array<Group>;
  };
}

const useTagsList = (): Array<Group> => {
  const { allMarkdownRemark } = useStaticQuery<TagsQueryResult>(graphql`
    query TagsListQuery {
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

  return allMarkdownRemark.group ?? [];
};

export default useTagsList;
