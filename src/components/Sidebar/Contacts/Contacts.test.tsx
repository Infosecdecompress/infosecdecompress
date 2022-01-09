import React from "react";
import renderer from "react-test-renderer";

import { Contacts } from "@/components/Sidebar/Contacts";
import * as mocks from "@/mocks";

describe("Contacts", () => {
  const props = { contacts: mocks.contacts };

  it("renders correctly", () => {
    const tree = renderer.create(<Contacts {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
