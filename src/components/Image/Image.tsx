import { graphql, useStaticQuery } from "gatsby";
import {
  GatsbyImage,
  GatsbyImageProps,
  IGatsbyImageData,
} from "gatsby-plugin-image";
import type { FileSystemNode } from "gatsby-source-filesystem";

interface Props extends Omit<GatsbyImageProps, "image"> {
  path: string;
}

interface ImagesQueryResult {
  images: {
    edges: Array<{
      node: FileSystemNode & {
        childImageSharp: {
          gatsbyImageData: IGatsbyImageData;
        };
      };
    }>;
  };
}

const Image = ({ path, ...rest }: Props) => {
  const data = useStaticQuery<ImagesQueryResult>(graphql`
    query ImagesQuery {
      images: allFile(
        filter: { ext: { regex: "/png|jpg|jpeg|webp|tif|tiff/" } }
      ) {
        edges {
          node {
            absolutePath
            childImageSharp {
              gatsbyImageData(formats: [AUTO, WEBP, AVIF])
            }
          }
        }
      }
    }
  `);

  const image = data?.images?.edges?.find(({ node }) =>
    node.absolutePath.includes(path),
  );

  if (!image) {
    return null;
  }

  return (
    <GatsbyImage {...rest} image={image.node.childImageSharp.gatsbyImageData} />
  );
};

export default Image;
