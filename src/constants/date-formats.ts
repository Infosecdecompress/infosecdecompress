export interface DateFormat {
  locale: string;
  options: Intl.DateTimeFormatOptions;
}

/**
 * Every user-facing date on the site goes through one of these presets so the
 * locale and granularity of each surface are decided in a single place.
 */
const DATE_FORMATS = {
  /** Month and year shown above each entry in post lists, e.g. "May 2020". */
  feed: {
    locale: "en-US",
    options: { year: "numeric", month: "long" },
  },
  /** Full publication date shown under a post, e.g. "2020年5月13日". */
  post: {
    locale: "zh-TW",
    options: { year: "numeric", month: "long", day: "numeric" },
  },
} satisfies Record<string, DateFormat>;

export default DATE_FORMATS;
