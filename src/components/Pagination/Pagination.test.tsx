import { Pagination } from "@/components/Pagination";
import * as mocks from "@/mocks";
import * as testUtils from "@/utils/test-utils";

describe("Pagination", () => {
  test("renders correctly", () => {
    const props = { ...mocks.pageContext.pagination };
    const tree = testUtils
      .createSnapshotsRenderer(<Pagination {...props} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
