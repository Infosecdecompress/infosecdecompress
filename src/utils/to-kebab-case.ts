/**
 * Converts a human readable label (category, tag, …) into the URL slug used
 * for its page. This is the single implementation shared by the Gatsby build
 * (`internal/gatsby`) and the browser bundle, so links and generated pages can
 * never disagree about a slug.
 *
 * Non-word characters are dropped and whitespace/underscores become dashes.
 * Casing is flattened, so "NewsUpdates" -> "newsupdates" and "iOS" -> "ios".
 */
const toKebabCase = (str = ""): string =>
  str
    .toLowerCase()
    .replace(/[^\w\s]/gi, "")
    .trim()
    .split(/[\s_]+/)
    .join("-");

export default toKebabCase;
