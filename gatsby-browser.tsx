import * as React from "react"
import "./src/assets/scss/main.scss";
import type { GatsbyBrowser } from "gatsby"
import ErrorBoundary from "./src/components/ErrorBoundary";

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({
  element,
}) => {
  return (
    <ErrorBoundary>
    {element}
  </ErrorBoundary>
  )
}