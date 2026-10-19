import { createHash } from "crypto";

import {
  hashInlineScripts,
  refreshScriptHashes,
  withScriptHashes,
} from "./on-post-build";

const sha256 = (body: string) =>
  `sha256-${createHash("sha256").update(body, "utf8").digest("base64")}`;

describe("hashInlineScripts", () => {
  test("hashes every non-empty inline script and ignores external ones", () => {
    const html = [
      '<script src="/app.js"></script>',
      "<script>window.a = 1</script>",
      '<script id="x" type="text/javascript">window.b = 2</script>',
      "<script></script>",
    ].join("");

    expect(hashInlineScripts(html)).toEqual([
      sha256("window.a = 1"),
      sha256("window.b = 2"),
    ]);
  });
});

describe("withScriptHashes", () => {
  test("replaces stale hashes and keeps every other source", () => {
    const policy =
      "default-src 'self'; script-src 'self' cdn.example 'sha256-old='; img-src data:";

    expect(withScriptHashes(policy, ["sha256-new="])).toBe(
      "default-src 'self'; script-src 'self' cdn.example 'sha256-new='; img-src data:",
    );
  });
});

describe("refreshScriptHashes", () => {
  test("rewrites the HTML-escaped meta policy with hashes of the final markup", () => {
    const html = [
      "<html><head>",
      '<meta http-equiv="Content-Security-Policy" content="default-src &#x27;self&#x27;; script-src &#x27;self&#x27; &#x27;sha256-stale=&#x27;; img-src &#x27;self&#x27;"/>',
      "</head><body><script>window.pagePath = &quot;/&quot;</script></body></html>",
    ].join("");

    const expected = sha256("window.pagePath = &quot;/&quot;");

    expect(refreshScriptHashes(html)).toContain(
      `content="default-src &#x27;self&#x27;; script-src &#x27;self&#x27; &#x27;${expected}&#x27;; img-src &#x27;self&#x27;"`,
    );
  });

  test("leaves pages without a policy untouched", () => {
    const html = "<html><head></head><body><script>1</script></body></html>";

    expect(refreshScriptHashes(html)).toBe(html);
  });
});
