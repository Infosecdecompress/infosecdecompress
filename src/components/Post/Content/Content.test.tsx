import React from "react";
import renderer from "react-test-renderer";

import { Content } from "@/components/Post/Content";
import * as mocks from "@/mocks";

describe("Content", () => {
  test("renders correctly", () => {
    const props = {
      title: mocks.markdownRemark.frontmatter.title,
      body: mocks.markdownRemark.html,
    };

    const tree = renderer.create(<Content {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
