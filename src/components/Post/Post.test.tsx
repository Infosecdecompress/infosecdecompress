import React from "react";
import renderer from "react-test-renderer";

import { StaticQuery, useStaticQuery } from "gatsby";

import { Post } from "@/components/Post";
import * as mocks from "@/mocks";

const mockedStaticQuery = StaticQuery as jest.Mock;
const mockedUseStaticQuery = useStaticQuery as jest.Mock;

describe("Post", () => {
  beforeEach(() => {
    mockedStaticQuery.mockImplementationOnce(({ render }) =>
      render(mocks.siteMetadata),
    );
    mockedUseStaticQuery.mockReturnValue(mocks.siteMetadata);
  });

  const props = {
    post: {
      id: "test-123",
      html: "<p>test</p>",
      fields: {
        slug: "/test",
        categorySlug: "/test-category",
        tagSlugs: ["/test_0", "/test_1"],
      },
      frontmatter: {
        date: "2016-09-01",
        tags: ["test_0", "test_1"],
        title: "test",
      },
    },
  };

  it("renders correctly", () => {
    const tree = renderer.create(<Post {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
