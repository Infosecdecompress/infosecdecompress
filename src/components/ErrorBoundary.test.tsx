import React from "react";

import { act, render, screen } from "@testing-library/react";

import ErrorBoundaryContainer from "@/components/ErrorBoundary";

// Mock @sentry/react ErrorBoundary to test the fallback rendering
jest.mock("@sentry/react", () => ({
  ErrorBoundary: ({
    fallback: Fallback,
    children,
  }: {
    fallback: React.ComponentType<{
      error: Error;
      resetError: () => void;
    }>;
    children: React.ReactNode;
  }) => {
    const [hasError, setHasError] = React.useState(false);

    if (hasError) {
      return (
        <Fallback
          error={new Error("Test error message")}
          resetError={() => setHasError(false)}
        />
      );
    }

    return (
      <div>
        <button data-testid="trigger-error" onClick={() => setHasError(true)} />
        {children}
      </div>
    );
  },
}));

describe("ErrorBoundary", () => {
  test("renders children when there is no error", () => {
    render(
      <ErrorBoundaryContainer>
        <p>Child content</p>
      </ErrorBoundaryContainer>,
    );

    expect(screen.getByText("Child content")).toBeInTheDocument();
  });

  test("renders fallback UI when an error occurs", () => {
    render(
      <ErrorBoundaryContainer>
        <p>Child content</p>
      </ErrorBoundaryContainer>,
    );

    act(() => {
      screen.getByTestId("trigger-error").click();
    });

    expect(screen.getByText("Something went wrong")).toBeInTheDocument();
    expect(screen.getByText("Test error message")).toBeInTheDocument();
    expect(screen.getByText("Try again")).toBeInTheDocument();
  });

  test("fallback contains a link back to home page", () => {
    render(
      <ErrorBoundaryContainer>
        <p>Child content</p>
      </ErrorBoundaryContainer>,
    );

    act(() => {
      screen.getByTestId("trigger-error").click();
    });

    const links = screen.getAllByRole("link");
    const homeLink = links.find((link) => link.getAttribute("href") === "/");
    expect(homeLink).toBeDefined();
  });
});
