import { graphql, PageProps } from "gatsby";

import { Layout } from "@/components/Layout";
import { Meta } from "@/components/Meta";
import { Page } from "@/components/Page";
import { Sidebar } from "@/components/Sidebar";
import { useSiteMetadata } from "@/hooks";
import type { MarkdownRemark } from "@/types";

interface Data {
  markdownRemark: MarkdownRemark;
}

type Props = Pick<PageProps<Data>, "data">;

const PageTemplate = ({ data }: Props) => {
  const { html, frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <Sidebar />
      <Page title={frontmatter.title}>
        {/* Markdown rendered at build time by gatsby-transformer-remark. */}
        {/* eslint-disable-next-line react/no-danger */}
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </Page>
    </Layout>
  );
};

export const query = graphql`
  query PageTemplate($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date
        description
        socialImage
      }
    }
  }
`;

export const Head = ({ data }: Props) => {
  const { title, subtitle, url } = useSiteMetadata();
  const {
    frontmatter: { title: pageTitle, description, socialImage },
  } = data.markdownRemark;
  const image = socialImage?.publicURL && url.concat(socialImage.publicURL);

  return (
    <Meta
      title={`${pageTitle} - ${title}`}
      description={description || subtitle}
      image={image}
    />
  );
};

export default PageTemplate;
