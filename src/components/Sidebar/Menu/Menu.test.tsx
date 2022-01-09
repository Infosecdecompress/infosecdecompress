import React from "react";
import renderer from "react-test-renderer";

import { Menu } from "@/components/Sidebar/Menu";
import * as mocks from "@/mocks";

describe("Menu", () => {
  const props = {
    menu: mocks.menu,
  };

  it("renders correctly", () => {
    const tree = renderer.create(<Menu {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
