import { DATE_FORMATS } from "@/constants";

import formatDate from "./format-date";

describe("formatDate", () => {
  test("formats feed dates as month and year", () => {
    expect(formatDate("2020-05-13T02:15:50.025Z", DATE_FORMATS.feed)).toBe(
      "May 2020",
    );
  });

  test("formats post dates as a full zh-TW date", () => {
    expect(formatDate("2020-05-13T02:15:50.025Z", DATE_FORMATS.post)).toBe(
      "2020年5月13日",
    );
  });
});
