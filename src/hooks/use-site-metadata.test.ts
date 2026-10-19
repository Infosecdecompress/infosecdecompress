import { renderHook } from "@testing-library/react";
import { useStaticQuery } from "gatsby";

import { useSiteMetadata } from "@/hooks";
import * as mocks from "@/mocks";

const mockedUseStaticQuery = useStaticQuery as jest.Mock;

describe("useSiteMetadata", () => {
  beforeEach(() => {
    mockedUseStaticQuery.mockReturnValue(mocks.siteMetadata);
  });

  test("should return site metadata", () => {
    const { result } = renderHook(() => useSiteMetadata());
    expect(result.current).toEqual({
      ...mocks.siteMetadata.site.siteMetadata,
    });
  });

  test("should return an empty object if no site metadata is found", () => {
    const props = {
      ...mocks.siteMetadata,
      site: {
        ...mocks.siteMetadata.site,
        siteMetadata: {},
      },
    };

    mockedUseStaticQuery.mockReturnValue(props);

    const { result } = renderHook(() => useSiteMetadata());
    expect(result.current).toEqual({});
  });
});
