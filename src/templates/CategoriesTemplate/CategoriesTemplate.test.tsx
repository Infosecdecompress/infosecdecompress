import React from "react";

import { StaticQuery, useStaticQuery } from "gatsby";

import * as mocks from "@/mocks";
import { testUtils } from "@/utils";

import CategoriesTemplate, { Head as GatsbyHead } from "./CategoriesTemplate";

const mockedStaticQuery = StaticQuery as jest.Mock;
const mockedUseStaticQuery = useStaticQuery as jest.Mock;

describe("CategoriesTemplate", () => {
  beforeEach(() => {
    const props = {
      ...mocks.siteMetadata,
      allMarkdownRemark: mocks.allMarkdownRemark,
    };

    mockedStaticQuery.mockImplementationOnce(({ render }) => render(props));
    mockedUseStaticQuery.mockReturnValue(props);
  });

  test("renders correctly", () => {
    const tree = testUtils
      .createSnapshotsRenderer(<CategoriesTemplate />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("head renders correctly", () => {
    testUtils.renderWithCoilProvider(<GatsbyHead />);

    expect(testUtils.getMeta("twitter:card")).toEqual("summary_large_image");
    expect(testUtils.getMeta("twitter:title")).toEqual(
      "Categories - 資安解壓縮",
    );
    expect(testUtils.getMeta("og:title")).toEqual(
      "Categories - 資安解壓縮",
    );
    expect(testUtils.getMeta("description")).toEqual(
      "InfosecDecompress.",
    );
    expect(testUtils.getMeta("og:description")).toEqual(
      "InfosecDecompress.",
    );
    expect(testUtils.getMeta("twitter:description")).toEqual(
      "InfosecDecompress.",
    );
  });
});
