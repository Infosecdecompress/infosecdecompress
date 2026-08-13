const { FlatCompat } = require("@eslint/eslintrc");
const js = require("@eslint/js");
const tsPlugin = require("@typescript-eslint/eslint-plugin");

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

// `@typescript-eslint` v8 dropped its formatting rules (quotes, comma-dangle,
// lines-between-class-members, …) that the older `airbnb-typescript` preset — and
// our own config — still reference. ESLint 10 hard-errors on any rule a plugin no
// longer defines, so strip those dead `@typescript-eslint/*` references. Prettier
// (via plugin:prettier/recommended) already owns everything that was removed.
const availableTsRules = new Set(Object.keys(tsPlugin.rules));
const stripRemovedTsRules = (config) => {
  if (!config.rules) return config;
  const rules = {};
  for (const [name, value] of Object.entries(config.rules)) {
    if (
      name.startsWith("@typescript-eslint/") &&
      !availableTsRules.has(name.slice("@typescript-eslint/".length))
    ) {
      continue;
    }
    rules[name] = value;
  }
  return { ...config, rules };
};

module.exports = [
  // Global ignores (migrated from .eslintignore). The `*.*` / `!*.ts` / `!*.tsx`
  // rules from the old ignore file are now expressed by scoping every config
  // below to `**/*.{ts,tsx}`, so only these explicit paths need ignoring.
  {
    ignores: ["public/**", "src/components/SearchContainer.tsx"],
  },
  // Bring the legacy eslintrc-style config forward via FlatCompat, then scope it
  // to TypeScript sources so JS/config files aren't linted (matching the old
  // `eslint "src" --ext .tsx,.ts` behaviour).
  ...compat
    .config({
      env: {
        node: true,
        browser: true,
        jasmine: true,
        "jest/globals": true,
      },
      extends: [
        "plugin:import/typescript",
        "plugin:import/errors",
        "airbnb-typescript",
        "plugin:prettier/recommended",
      ],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: "./tsconfig.json",
      },
      plugins: [
        "import",
        "react",
        "jest",
        "@typescript-eslint",
        "simple-import-sort",
      ],
      rules: {
        "import/no-extraneous-dependencies": [
          "error",
          {
            devDependencies: [
              "**/*.test.ts",
              "**/*.test.tsx",
              "**/internal/**/*.ts",
              "**/src/utils/test-utils/*.ts",
              "**/src/utils/test-utils/*.tsx",
            ],
          },
        ],
        "import/order": ["off"],
        "import/no-internal-modules": ["off"],
        "import/no-named-as-default": ["off"],
        "import/prefer-default-export": ["off"],
        "sort-keys": ["off"],
        camelcase: ["off"],
        "arrow-body-style": ["error", "as-needed"],
        "comma-dangle": ["error", "always-multiline"],
        "sort-imports": ["off"],
        "no-restricted-globals": ["off"],
        "no-shadow": "off",
        "@typescript-eslint/no-shadow": ["error"],
        "@typescript-eslint/no-unused-vars": ["off"],
        "@typescript-eslint/no-use-before-define": ["off"],
        "@typescript-eslint/quotes": ["error", "double"],
        "@typescript-eslint/naming-convention": [
          "error",
          {
            format: ["camelCase", "UPPER_CASE", "snake_case", "PascalCase"],
            leadingUnderscore: "allow",
            selector: "parameter",
          },
        ],
        "react/static-property-placement": ["off"],
        "react/prop-types": ["off"],
        "simple-import-sort/imports": [
          "error",
          {
            groups: [
              ["^(react|path)"],
              ["^\\u0000"],
              ["^@?\\w"],
              ["^[^. ]"],
              ["^\\."],
              ["^(images|!!raw-loader)"],
              ["w*(w*.*css)"],
            ],
          },
        ],
      },
      settings: {
        "import/resolver": {
          typescript: {},
        },
      },
    })
    .map(stripRemovedTsRules)
    .map((config) => ({
      ...config,
      files: ["**/*.ts", "**/*.tsx"],
    })),
];
