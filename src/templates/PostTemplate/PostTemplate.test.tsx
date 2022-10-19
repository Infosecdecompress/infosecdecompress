import React from "react";
import renderer from "react-test-renderer";

import { render as reactTestingLibraryRender } from "@testing-library/react";
import { StaticQuery, useStaticQuery } from "gatsby";

import * as mocks from "@/mocks";
import { getMeta } from "@/utils";

import PostTemplate, { Head as GatsbyHead } from "./PostTemplate";

const mockedStaticQuery = StaticQuery as jest.Mock;
const mockedUseStaticQuery = useStaticQuery as jest.Mock;

describe("PostTemplate", () => {
  beforeEach(() => {
    mockedStaticQuery.mockImplementationOnce(({ render }) =>
      render(mocks.siteMetadata),
    );
    mockedUseStaticQuery.mockReturnValue(mocks.siteMetadata);
  });

  test("renders correctly", () => {
    const props = {
      data: {
        markdownRemark: mocks.markdownRemark,
      },
    };

    const tree = renderer.create(<PostTemplate {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("head renders correctly", () => {
    const props = {
      data: {
        markdownRemark: mocks.markdownRemarkWithoutDescription,
      },
    };

    reactTestingLibraryRender(<GatsbyHead {...props} />);

    expect(getMeta("twitter:card")).toEqual("summary_large_image");
    expect(getMeta("twitter:title")).toEqual(
      "Humane Typography in the Digital Age - Blog by John Doe",
    );
    expect(getMeta("og:title")).toEqual(
      "Humane Typography in the Digital Age - Blog by John Doe",
    );
    expect(getMeta("description")).toEqual(
      "Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu.",
    );
    expect(getMeta("twitter:description")).toEqual(
      "Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu.",
    );
    expect(getMeta("og:description")).toEqual(
      "Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu.",
    );
  });
});
