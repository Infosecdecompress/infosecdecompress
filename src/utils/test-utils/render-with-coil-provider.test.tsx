import React from "react";

import { createSnapshotsRenderer } from "./render-with-coil-provider";

describe("createSnapshotsRenderer", () => {
  test("renders correctly", () => {
    const tree = createSnapshotsRenderer(<div />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
