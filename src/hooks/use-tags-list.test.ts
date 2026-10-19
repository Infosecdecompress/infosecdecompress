import { renderHook } from "@testing-library/react";
import { useStaticQuery } from "gatsby";

import { useTagsList } from "@/hooks";
import * as mocks from "@/mocks";

const mockedUseStaticQuery = useStaticQuery as jest.Mock;

describe("useTagsList", () => {
  beforeEach(() => {
    const props = {
      ...mocks.siteMetadata,
      allMarkdownRemark: mocks.allMarkdownRemark,
    };

    mockedUseStaticQuery.mockReturnValue(props);
  });

  test("should return an array of tags", () => {
    const { result } = renderHook(() => useTagsList());
    expect(result.current).toEqual([
      { fieldValue: "typography", totalCount: 1 },
      { fieldValue: "design inspiration", totalCount: 1 },
    ]);
  });

  test("should return an empty array if no tags are found", () => {
    const props = {
      ...mocks.siteMetadata,
      allMarkdownRemark: {
        ...mocks.allMarkdownRemark,
        group: [],
      },
    };

    mockedUseStaticQuery.mockReturnValue(props);

    const { result } = renderHook(() => useTagsList());
    expect(result.current).toEqual([]);
  });
});
