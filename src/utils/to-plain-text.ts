/**
 * Strips the most common Markdown syntax from a raw post body so it can be
 * indexed for search. Used by both the client-side search and the JSON feed
 * generated at build time.
 */
const toPlainText = (markdown = ""): string =>
  markdown
    .replace(/(\((.*?)\))|(#)|(\*)|(\[)|(\])/g, " ")
    .replace(/(?:\\[rn]|[\r\n]+)|(\\)+/g, " ")
    .replace(/\s\s+/g, " ");

export default toPlainText;
