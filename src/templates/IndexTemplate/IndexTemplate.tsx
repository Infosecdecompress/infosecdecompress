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

const IndexTemplate = ({ data, pageContext }: Props) => {
  const { pagination } = pageContext;
  const { edges } = data.allMarkdownRemark;

  return (
    <Layout>
      <Sidebar isIndex />
      <Page>
        <Feed edges={edges} />
        <Pagination {...pagination} />
      </Page>
    </Layout>
  );
};

export const query = graphql`
  query IndexTemplate($limit: Int!, $offset: Int!) {
    allMarkdownRemark(
      limit: $limit
      skip: $offset
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { template: { eq: "post" }, draft: { ne: true } } }
    ) {
      edges {
        node {
          fields {
            categorySlug
            slug
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
    pagination: { currentPage: page },
  } = pageContext;
  const pageTitle = page > 0 ? `Posts - Page ${page} - ${title}` : title;

  return <Meta title={pageTitle} description={subtitle} />;
};

export default IndexTemplate;
