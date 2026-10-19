import { graphql, PageProps } from "gatsby";

import { Feed } from "@/components/Feed";
import { Layout } from "@/components/Layout";
import { Meta } from "@/components/Meta";
import { Page } from "@/components/Page";
import { Pagination } from "@/components/Pagination";
import { Sidebar } from "@/components/Sidebar";
import { useSiteMetadata } from "@/hooks";
import type { AllMarkdownRemark, PageContext } from "@/types";

interface Data {
  allMarkdownRemark: AllMarkdownRemark;
}

type Props = Pick<PageProps<Data, PageContext>, "data" | "pageContext">;

const CategoryTemplate = ({ data, pageContext }: Props) => {
  const { group, pagination } = pageContext;
  const { edges } = data.allMarkdownRemark;

  return (
    <Layout>
      <Sidebar />
      <Page title={group}>
        <Feed edges={edges} />
        <Pagination {...pagination} />
      </Page>
    </Layout>
  );
};

export const query = graphql`
  query CategoryTemplate($group: String, $limit: Int!, $offset: Int!) {
    allMarkdownRemark(
      limit: $limit
      skip: $offset
      filter: {
        frontmatter: {
          category: { eq: $group }
          template: { eq: "post" }
          draft: { ne: true }
        }
      }
      sort: { frontmatter: { date: DESC } }
    ) {
      edges {
        node {
          fields {
            slug
            categorySlug
          }
          frontmatter {
            description
            category
            title
            date
            slug
          }
        }
      }
    }
  }
`;

export const Head = ({ pageContext }: Props) => {
  const { title, subtitle } = useSiteMetadata();
  const {
    group,
    pagination: { currentPage: page },
  } = pageContext;
  const pageTitle =
    page > 0 ? `${group} - Page ${page} - ${title}` : `${group} - ${title}`;

  return <Meta title={pageTitle} description={subtitle} />;
};

export default CategoryTemplate;
