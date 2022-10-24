import React from "react";

import { render } from "@testing-library/react";

import { Meta } from "@/components/Meta";
import { getMeta } from "@/utils";

describe("Meta", () => {
  test("should contain correct metadata", async () => {
    render(<Meta description="description" title="title" image="image" />);

    expect(getMeta("description")).toEqual("description");
    expect(getMeta("twitter:description")).toEqual("description");
    expect(getMeta("twitter:title")).toEqual("title");
    expect(getMeta("og:title")).toEqual("title");
    expect(getMeta("og:description")).toEqual("description");
    expect(getMeta("og:image")).toEqual("image");
  });
});
