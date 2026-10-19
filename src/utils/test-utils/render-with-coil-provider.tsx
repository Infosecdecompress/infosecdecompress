import React, { ReactElement } from "react";

import { CoilProvider } from "@alxshelepenok/diesel";
import { render, RenderOptions, RenderResult } from "@testing-library/react";

interface Props {
  children: React.ReactNode;
}

const WithCoilProvider: React.FC<Props> = ({ children }) => (
  <CoilProvider>{children}</CoilProvider>
);

const renderWithCoilProvider = (
  ui: React.ReactElement,
  options?: RenderOptions,
) => render(ui, { wrapper: WithCoilProvider, ...options });

export type SnapshotsRenderer = RenderResult & {
  /**
   * Returns the rendered DOM for snapshotting: the single root node when the
   * element renders exactly one, the list of nodes when it renders several,
   * and null when it renders nothing.
   */
  toJSON: () => ChildNode | ChildNode[] | null;
};

export const createSnapshotsRenderer = (
  nextElement: ReactElement,
  options?: RenderOptions,
): SnapshotsRenderer => {
  const result = renderWithCoilProvider(nextElement, options);

  const toJSON = () => {
    const nodes = Array.from(result.container.childNodes);

    if (nodes.length === 0) {
      return null;
    }

    return nodes.length === 1 ? nodes[0] : nodes;
  };

  return { ...result, toJSON };
};

export default renderWithCoilProvider;
