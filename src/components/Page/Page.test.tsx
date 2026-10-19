import { Page } from "@/components/Page";
import * as mocks from "@/mocks";
import * as testUtils from "@/utils/test-utils";

describe("Page", () => {
  test("renders correctly", () => {
    const props = {
      children: mocks.markdownRemark.html,
      title: mocks.markdownRemark.frontmatter.title,
    };

    const tree = testUtils
      .createSnapshotsRenderer(<Page {...props}>{props.children}</Page>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
