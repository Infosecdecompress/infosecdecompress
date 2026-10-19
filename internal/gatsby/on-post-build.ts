import path from "path";

import { createHash } from "crypto";
import { promises as fs } from "fs";
import { GatsbyNode } from "gatsby";

/**
 * `gatsby-plugin-csp` computes sha256 hashes for inline scripts while the HTML
 * is being rendered, but Gatsby rewrites its inline bootstrap scripts (chunk
 * mapping, compilation hash, …) afterwards, so those hashes never match the
 * shipped markup. This hook recomputes the hashes from the final HTML of every
 * page and swaps them into the `script-src` directive, which lets the policy
 * drop `'unsafe-inline'` entirely.
 */

const INLINE_SCRIPT = /<script(?![^>]*\ssrc=)[^>]*>([\s\S]*?)<\/script>/gi;
const CSP_META =
  /(<meta\s+http-equiv="Content-Security-Policy"\s+content=")([^"]*)(")/i;

// The meta `content` attribute is HTML-escaped the way React escapes
// attributes, so the policy is decoded before editing and re-encoded after.
const decodeAttribute = (value: string): string =>
  value
    .replace(/&#x27;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&gt;/g, ">")
    .replace(/&lt;/g, "<")
    .replace(/&amp;/g, "&");

const encodeAttribute = (value: string): string =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");

export const hashInlineScripts = (html: string): Array<string> =>
  Array.from(html.matchAll(INLINE_SCRIPT), ([, body]) => body)
    .filter((body) => body.trim() !== "")
    .map(
      (body) =>
        `sha256-${createHash("sha256").update(body, "utf8").digest("base64")}`,
    );

export const withScriptHashes = (
  policy: string,
  hashes: Array<string>,
): string =>
  policy.replace(/script-src([^;]*)/i, (_, sources: string) => {
    const kept = sources
      .split(/\s+/)
      .filter((source) => source && !source.includes("sha256-"));
    const added = Array.from(new Set(hashes), (hash) => `'${hash}'`);

    return ["script-src", ...kept, ...added].join(" ");
  });

/** Returns the page HTML with its CSP `script-src` hashes recomputed. */
export const refreshScriptHashes = (html: string): string =>
  html.replace(
    CSP_META,
    (_, open: string, policy: string, close: string) =>
      `${open}${encodeAttribute(
        withScriptHashes(decodeAttribute(policy), hashInlineScripts(html)),
      )}${close}`,
  );

const onPostBuild: GatsbyNode["onPostBuild"] = async ({ reporter }) => {
  const publicDir = path.resolve("public");
  const entries = await fs.readdir(publicDir, {
    recursive: true,
    withFileTypes: true,
  });
  const pages = entries
    .filter((entry) => entry.isFile() && entry.name.endsWith(".html"))
    .map((entry) => path.join(entry.parentPath, entry.name));

  await Promise.all(
    pages.map(async (file) => {
      const html = await fs.readFile(file, "utf8");
      const updated = refreshScriptHashes(html);

      if (updated !== html) {
        await fs.writeFile(file, updated);
      }
    }),
  );

  reporter.info(`CSP script hashes refreshed for ${pages.length} pages`);
};

export { onPostBuild };
