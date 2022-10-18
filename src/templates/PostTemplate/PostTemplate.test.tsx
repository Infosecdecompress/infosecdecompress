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
  const props = {
    data: {
      markdownRemark: mocks.markdownRemark,
    },
  };

  beforeEach(() => {
    mockedStaticQuery.mockImplementationOnce(({ render }) =>
      render(mocks.siteMetadata),
    );
    mockedUseStaticQuery.mockReturnValue(mocks.siteMetadata);
  });

  test("renders correctly", () => {
    const tree = renderer.create(<PostTemplate {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("head renders correctly", () => {
    reactTestingLibraryRender(<GatsbyHead {...props} />);

    expect(getMeta("twitter:card")).toEqual("summary_large_image");
    expect(getMeta("twitter:title")).toEqual(
      "Perfecting the Art of Perfection - Blog by John Doe",
    );
    expect(getMeta("og:title")).toEqual(
      "Perfecting the Art of Perfection - Blog by John Doe",
    );
    expect(getMeta("description")).toEqual(
      "An Essay on Typography by Eric Gill takes the reader back to the year 1930. The year when a conflict between two worlds came to its term. The machines of the industrial world finally took over the handicrafts.",
    );
    expect(getMeta("twitter:description")).toEqual(
      "An Essay on Typography by Eric Gill takes the reader back to the year 1930. The year when a conflict between two worlds came to its term. The machines of the industrial world finally took over the handicrafts.",
    );
    expect(getMeta("og:description")).toEqual(
      "An Essay on Typography by Eric Gill takes the reader back to the year 1930. The year when a conflict between two worlds came to its term. The machines of the industrial world finally took over the handicrafts.",
    );
  });
});
