import { getDefaultColorMode } from "@/utils";

describe("getDefaultColorMode", () => {
  test("successful return color mode", () => {
    expect(getDefaultColorMode()).toBe("light");

    (window.matchMedia as jest.Mock).mockReturnValue({
      matches: true,
    });

    expect(getDefaultColorMode()).toBe("dark");

    (window.matchMedia as jest.Mock).mockReturnValue({});
    expect(getDefaultColorMode()).toBe("light");
  });

  test("successful return default color mode when matchMedia has no preference", () => {
    (window.matchMedia as jest.Mock).mockReturnValue({});
    expect(getDefaultColorMode()).toBe("light");
  });
});
