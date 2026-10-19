import { Feed } from "@/components/Feed";
import * as mocks from "@/mocks";
import * as testUtils from "@/utils/test-utils";

describe("Feed", () => {
  test("renders correctly", () => {
    const props = { edges: mocks.edges };
    const tree = testUtils
      .createSnapshotsRenderer(<Feed {...props} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
