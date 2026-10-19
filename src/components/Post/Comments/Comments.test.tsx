import { useStaticQuery } from "gatsby";

import { Comments } from "@/components/Post/Comments";
import * as mocks from "@/mocks";
import * as testUtils from "@/utils/test-utils";

const mockedUseStaticQuery = useStaticQuery as jest.Mock;

describe("Comments", () => {
  beforeEach(() => {
    mockedUseStaticQuery.mockReturnValue(mocks.siteMetadata);
  });

  test("renders correctly", () => {
    const props = {
      postTitle: mocks.markdownRemark.frontmatter.title,
      postSlug: mocks.markdownRemark.fields.slug,
    };

    const tree = testUtils
      .createSnapshotsRenderer(<Comments {...props} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
