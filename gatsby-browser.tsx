import type { GatsbyBrowser } from "gatsby";

import { ErrorBoundary } from "./src/components/ErrorBoundary";

import "./src/assets/scss/main.scss";

export { wrapRootElement } from "./internal/gatsby/wrap-root-element";

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({
  element,
}) => <ErrorBoundary>{element}</ErrorBoundary>;
