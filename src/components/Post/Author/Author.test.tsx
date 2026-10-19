import { useStaticQuery } from "gatsby";

import { Author } from "@/components/Post/Author";
import * as mocks from "@/mocks";
import * as testUtils from "@/utils/test-utils";

const mockedUseStaticQuery = useStaticQuery as jest.Mock;

describe("Author", () => {
  beforeEach(() => {
    mockedUseStaticQuery.mockReturnValue(mocks.siteMetadata);
  });

  test("renders correctly", () => {
    const tree = testUtils.createSnapshotsRenderer(<Author />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
