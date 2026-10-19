import { screen } from "@testing-library/react";
import { useStaticQuery } from "gatsby";

import { Post } from "@/components/Post";
import * as mocks from "@/mocks";
import * as testUtils from "@/utils/test-utils";
import { renderWithCoilProvider } from "@/utils/test-utils";

const mockedUseStaticQuery = useStaticQuery as jest.Mock;

describe("Post", () => {
  beforeEach(() => {
    mockedUseStaticQuery.mockReturnValue(mocks.siteMetadata);
  });

  test("renders correctly", () => {
    const props = { post: mocks.markdownRemark };
    const tree = testUtils
      .createSnapshotsRenderer(<Post {...props} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("buttons is rendered correctly and exists", () => {
    const props = { post: mocks.markdownRemark };
    renderWithCoilProvider(<Post {...props} />);
    expect(screen.getByText("文章列表")).toBeInTheDocument();
  });
});
