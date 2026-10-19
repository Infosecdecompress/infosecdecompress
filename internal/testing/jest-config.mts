// Node (>= 22.18) loads this config natively as an ES module, so relative
// imports need explicit extensions and the JSON import needs an attribute.
import type { Config } from "@jest/types";

import tsconfig from "../../tsconfig.json" with { type: "json" };
import swc from "./swc-config.mts";

/**
 * Derive Jest's module aliases from `tsconfig.json#paths` so there is a single
 * source of truth for the `@/…` imports (TypeScript, webpack via
 * `internal/gatsby/on-create-webpack-config.ts`, and Jest all read the same map).
 */
const pathAliases = Object.entries(tsconfig.compilerOptions.paths).reduce<
  Record<string, string>
>((aliases, [alias, [target]]) => {
  const pattern = `^${alias.replace("/*", "/(.*)")}$`;
  const destination = `<rootDir>/${target
    .replace(/^\.\//, "")
    .replace("/*", "/$1")}`;

  return { ...aliases, [pattern]: destination };
}, {});

const jestConfig: Config.InitialOptions = {
  testEnvironment: "jsdom",
  rootDir: "../../",
  moduleNameMapper: {
    ...pathAliases,
    ".+\\.(css|sass|scss)$": "identity-obj-proxy",
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "identity-obj-proxy",
    "^gatsby-core-utils/(.*)$": "gatsby-core-utils/dist/$1",
    "^gatsby-plugin-utils/(.*)$": [
      "gatsby-plugin-utils/dist/$1",
      "gatsby-plugin-utils/$1",
    ],
  },
  transform: { "^.+\\.[jt]sx?$": ["@swc/jest", swc] },
  setupFiles: ["<rootDir>/internal/testing/jest-setup.ts"],
  setupFilesAfterEnv: ["<rootDir>/internal/testing/jest-after-env.ts"],
  testPathIgnorePatterns: [
    "/node_modules/",
    "<rootDir>/.cache/",
    "<rootDir>/.claude/",
    "<rootDir>/public/",
  ],
  modulePathIgnorePatterns: ["<rootDir>/.claude/", "<rootDir>/public/"],
  transformIgnorePatterns: ["node_modules/(?!(gatsby|gatsby-script)/)"],
};

export default jestConfig;
