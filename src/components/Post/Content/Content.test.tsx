import React from "react";
import renderer from "react-test-renderer";

import { Content } from "@/components/Post/Content";

describe("Content", () => {
  it("renders correctly", () => {
    const props = { title: "test", body: "<p>test</p>" };
    const tree = renderer.create(<Content {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
