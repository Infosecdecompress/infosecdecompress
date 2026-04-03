import React from "react";

import { StaticQuery } from "gatsby";

import { Image } from "@/components/Image";
import { createSnapshotsRenderer } from "@/utils/test-utils";

const mockImageData = {
  images: {
    edges: [
      {
        node: {
          absolutePath: "/images/photo.jpg",
          childImageSharp: {
            gatsbyImageData: {
              layout: "constrained" as const,
              width: 800,
              height: 600,
              images: {
                fallback: {
                  src: "/static/photo.jpg",
                  srcSet: "/static/photo.jpg 800w",
                  sizes: "(min-width: 800px) 800px, 100vw",
                },
                sources: [],
              },
              placeholder: undefined,
            },
          },
        },
      },
      {
        node: {
          absolutePath: "/images/avatar.png",
          childImageSharp: {
            gatsbyImageData: {
              layout: "constrained" as const,
              width: 200,
              height: 200,
              images: {
                fallback: {
                  src: "/static/avatar.png",
                  srcSet: "/static/avatar.png 200w",
                  sizes: "(min-width: 200px) 200px, 100vw",
                },
                sources: [],
              },
              placeholder: undefined,
            },
          },
        },
      },
    ],
  },
};

describe("Image", () => {
  beforeEach(() => {
    (StaticQuery as jest.Mock).mockImplementation(({ render }) =>
      render(mockImageData),
    );
  });

  test("renders correctly when image is found", () => {
    const tree = createSnapshotsRenderer(
      <Image path="photo.jpg" alt="A photo" />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("renders null when image is not found", () => {
    const tree = createSnapshotsRenderer(
      <Image path="nonexistent.jpg" alt="Missing" />,
    ).toJSON();
    expect(tree).toBeNull();
  });

  test("matches correct image by path substring", () => {
    const tree = createSnapshotsRenderer(
      <Image path="avatar.png" alt="Avatar" />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
