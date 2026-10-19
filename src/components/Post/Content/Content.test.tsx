import { Content } from "@/components/Post/Content";
import * as mocks from "@/mocks";
import * as testUtils from "@/utils/test-utils";

describe("Content", () => {
  test("renders correctly", () => {
    const props = {
      title: mocks.markdownRemark.frontmatter.title,
      body: mocks.markdownRemark.html,
    };

    const tree = testUtils
      .createSnapshotsRenderer(<Content {...props} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
