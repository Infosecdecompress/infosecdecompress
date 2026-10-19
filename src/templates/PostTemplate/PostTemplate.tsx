import { graphql, PageProps } from "gatsby";

import { Layout } from "@/components/Layout";
import { Meta } from "@/components/Meta";
import { Post } from "@/components/Post";
import { useSiteMetadata } from "@/hooks";
import type { MarkdownRemark } from "@/types";

interface Data {
  markdownRemark: MarkdownRemark;
}

type Props = Pick<PageProps<Data>, "data">;

const PostTemplate = ({ data: { markdownRemark } }: Props) => (
  <Layout>
    <Post post={markdownRemark} />
  </Layout>
);

export const query = graphql`
  query PostTemplate($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      fields {
        slug
        tagSlugs
      }
      frontmatter {
        date
        description
        tags
        title
        socialImage
      }
    }
  }
`;

export const Head = ({ data }: Props) => {
  const { title, subtitle, url } = useSiteMetadata();
  const {
    frontmatter: { title: postTitle, description, socialImage },
  } = data.markdownRemark;
  const image = socialImage?.publicURL && url.concat(socialImage.publicURL);

  return (
    <Meta
      title={`${postTitle} - ${title}`}
      description={description || subtitle}
      image={image}
    />
  );
};

export default PostTemplate;
