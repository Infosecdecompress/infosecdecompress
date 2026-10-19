import type { ReactNode } from "react";

import { ErrorBoundary as SentryErrorBoundary } from "@sentry/react";
import { Link } from "gatsby";

interface FallbackProps {
  error: unknown;
  resetError: () => void;
}

interface Props {
  children: ReactNode;
}

const Fallback = ({ error, resetError }: FallbackProps) => (
  <div role="alert">
    <p>Something went wrong</p>
    <pre>{error instanceof Error ? error.message : String(error)}</pre>
    <Link to="/" onClick={resetError}>
      Try again
    </Link>
  </div>
);

const ErrorBoundary = ({ children }: Props) => (
  <SentryErrorBoundary fallback={Fallback}>{children}</SentryErrorBoundary>
);

export default ErrorBoundary;
