import { useStaticQuery } from "gatsby";

import { Sidebar } from "@/components/Sidebar";
import * as mocks from "@/mocks";
import * as testUtils from "@/utils/test-utils";

const mockedUseStaticQuery = useStaticQuery as jest.Mock;

describe("Sidebar", () => {
  beforeEach(() => {
    mockedUseStaticQuery.mockReturnValue(mocks.siteMetadata);
  });

  test("renders correctly", () => {
    const props = { isIndex: true };
    const tree = testUtils
      .createSnapshotsRenderer(<Sidebar {...props} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
