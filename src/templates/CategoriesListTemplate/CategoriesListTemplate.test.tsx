import React from "react";
import renderer from "react-test-renderer";

import { StaticQuery, useStaticQuery } from "gatsby";

import * as mocks from "@/mocks";

import CategoriesListTemplate from "./CategoriesListTemplate";

const mockedStaticQuery = StaticQuery as jest.Mock;
const mockedUseStaticQuery = useStaticQuery as jest.Mock;

describe("CategoriesListTemplate", () => {
  const props = {
    ...mocks.siteMetadata,
    ...mocks.allMarkdownRemark,
  };

  beforeEach(() => {
    mockedStaticQuery.mockImplementationOnce(({ render }) => render(props));
    mockedUseStaticQuery.mockReturnValue(props);
  });

  it("renders correctly", () => {
    const tree = renderer.create(<CategoriesListTemplate />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
