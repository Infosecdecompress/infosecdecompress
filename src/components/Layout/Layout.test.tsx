import React from "react";
import renderer from "react-test-renderer";

import { Layout } from "@/components/Layout";

describe("Layout", () => {
  test("renders correctly", () => {
    const tree = renderer.create(<Layout>test</Layout>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
