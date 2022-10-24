import React from "react";
import renderer from "react-test-renderer";

import { Tags } from "@/components/Post/Tags";
import * as mocks from "@/mocks";

describe("Tags", () => {
  test("renders correctly", () => {
    const props = {
      tags: mocks.markdownRemark.frontmatter.tags,
      tagSlugs: mocks.markdownRemark.fields.tagsSlugs,
    };

    const tree = renderer.create(<Tags {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
