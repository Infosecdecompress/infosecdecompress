import React from "react";
import renderer from "react-test-renderer";

import Page from "./Page";

describe("Page", () => {
  const props = {
    children: "test",
    title: "test",
  };

  it("renders correctly", () => {
    const tree = renderer
      .create(<Page {...props}>{props.children}</Page>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
