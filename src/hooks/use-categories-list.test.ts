import { renderHook } from "@testing-library/react";
import { useStaticQuery } from "gatsby";

import { useCategoriesList } from "@/hooks";
import * as mocks from "@/mocks";

const mockedUseStaticQuery = useStaticQuery as jest.Mock;

describe("useCategories", () => {
  beforeEach(() => {
    const props = {
      ...mocks.siteMetadata,
      allMarkdownRemark: mocks.allMarkdownRemark,
    };

    mockedUseStaticQuery.mockReturnValue(props);
  });

  test("should return an array of categories", () => {
    const { result } = renderHook(() => useCategoriesList());
    expect(result.current).toEqual([
      { fieldValue: "typography", totalCount: 1 },
      { fieldValue: "design inspiration", totalCount: 1 },
    ]);
  });

  test("should return an empty array if no categories are found", () => {
    const props = {
      ...mocks.siteMetadata,
      allMarkdownRemark: {
        ...mocks.allMarkdownRemark,
        group: [],
      },
    };

    mockedUseStaticQuery.mockReturnValue(props);

    const { result } = renderHook(() => useCategoriesList());
    expect(result.current).toEqual([]);
  });
});
