import { render as reactTestingLibraryRender } from "@testing-library/react";
import { useStaticQuery } from "gatsby";

import * as mocks from "@/mocks";
import * as testUtils from "@/utils/test-utils";

import CategoryTemplate, { Head as GatsbyHead } from "./CategoryTemplate";

const mockedUseStaticQuery = useStaticQuery as jest.Mock;

describe("CategoryTemplate", () => {
  const props = {
    data: {
      allMarkdownRemark: mocks.allMarkdownRemark,
    },
    pageContext: mocks.pageContext,
  };

  beforeEach(() => {
    mockedUseStaticQuery.mockReturnValue(mocks.siteMetadata);
  });

  test("renders correctly", () => {
    const tree = testUtils
      .createSnapshotsRenderer(<CategoryTemplate {...props} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("head renders correctly", () => {
    reactTestingLibraryRender(<GatsbyHead {...props} />);

    expect(testUtils.getMeta("twitter:card")).toEqual("summary_large_image");
    expect(testUtils.getMeta("og:title")).toEqual(
      "Typography - Page 2 - 資安解壓縮",
    );
    expect(testUtils.getMeta("twitter:title")).toEqual(
      "Typography - Page 2 - 資安解壓縮",
    );
    expect(testUtils.getMeta("twitter:description")).toEqual(
      "InfosecDecompress.",
    );
    expect(testUtils.getMeta("description")).toEqual("InfosecDecompress.");
    expect(testUtils.getMeta("og:description")).toEqual("InfosecDecompress.");
  });
});
