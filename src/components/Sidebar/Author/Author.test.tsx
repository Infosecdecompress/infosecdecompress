import React from "react";
import renderer from "react-test-renderer";

import { Author } from "@/components/Sidebar/Author";
import * as mocks from "@/mocks";

describe("Author", () => {
  it("renders correctly", () => {
    const props = { isIndex: false, author: mocks.author };
    const tree = renderer.create(<Author {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
