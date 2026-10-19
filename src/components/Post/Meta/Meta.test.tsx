import { Meta } from "@/components/Post/Meta";
import * as mocks from "@/mocks";
import * as testUtils from "@/utils/test-utils";

describe("Meta", () => {
  test("renders correctly", () => {
    const props = {
      date: mocks.markdownRemark.frontmatter.date,
    };

    const tree = testUtils
      .createSnapshotsRenderer(<Meta {...props} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
