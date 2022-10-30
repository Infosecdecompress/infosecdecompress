import React from "react";

import { Layout } from "@/components/Layout";
import { testUtils } from "@/utils";

describe("Layout", () => {
  test("renders correctly", () => {
    const tree = testUtils
      .createSnapshotsRenderer(<Layout>test</Layout>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
