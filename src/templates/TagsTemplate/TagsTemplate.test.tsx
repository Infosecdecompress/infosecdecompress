import { render as reactTestingLibraryRender } from "@testing-library/react";
import { useStaticQuery } from "gatsby";

import * as mocks from "@/mocks";
import * as testUtils from "@/utils/test-utils";

import TagsTemplate, { Head as GatsbyHead } from "./TagsTemplate";

const mockedUseStaticQuery = useStaticQuery as jest.Mock;

describe("TagsTemplate", () => {
  beforeEach(() => {
    const props = {
      ...mocks.siteMetadata,
      allMarkdownRemark: mocks.allMarkdownRemark,
    };

    mockedUseStaticQuery.mockReturnValue(props);
  });

  test("renders correctly", () => {
    const tree = testUtils.createSnapshotsRenderer(<TagsTemplate />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("head renders correctly", () => {
    reactTestingLibraryRender(<GatsbyHead />);

    expect(testUtils.getMeta("twitter:card")).toEqual("summary_large_image");
    expect(testUtils.getMeta("twitter:title")).toEqual("Tags - 資安解壓縮");
    expect(testUtils.getMeta("og:title")).toEqual("Tags - 資安解壓縮");
    expect(testUtils.getMeta("description")).toEqual("InfosecDecompress.");
    expect(testUtils.getMeta("twitter:description")).toEqual(
      "InfosecDecompress.",
    );
    expect(testUtils.getMeta("og:description")).toEqual("InfosecDecompress.");
  });
});
