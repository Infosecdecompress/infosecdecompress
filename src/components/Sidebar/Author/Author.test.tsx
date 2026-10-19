import { useStaticQuery } from "gatsby";

import { Author } from "@/components/Sidebar/Author";
import * as mocks from "@/mocks";
import * as testUtils from "@/utils/test-utils";

const mockedUseStaticQuery = useStaticQuery as jest.Mock;

describe("Author", () => {
  beforeEach(() => {
    // No image data: the avatar renders nothing, which keeps the snapshot
    // focused on this component's own markup.
    mockedUseStaticQuery.mockReturnValue({});
  });

  test("renders correctly", () => {
    const props = { isIndex: false, author: mocks.author };
    const tree = testUtils
      .createSnapshotsRenderer(<Author {...props} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
