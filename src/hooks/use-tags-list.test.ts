import { renderHook } from "@testing-library/react";
import { StaticQuery, useStaticQuery } from "gatsby";

import * as mocks from "@/mocks";

import useTagsList from "./use-tags-list";

const mockedStaticQuery = StaticQuery as jest.Mock;
const mockedUseStaticQuery = useStaticQuery as jest.Mock;

describe("useTagsList", () => {
  beforeEach(() => {
    const props = {
      ...mocks.siteMetadata,
      allMarkdownRemark: mocks.allMarkdownRemark,
    };

    mockedStaticQuery.mockImplementationOnce(({ render }) => render(props));
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

    mockedStaticQuery.mockImplementationOnce(({ render }) => render(props));
    mockedUseStaticQuery.mockReturnValue(props);

    const { result } = renderHook(() => useTagsList());
    expect(result.current).toEqual([]);
  });
});
