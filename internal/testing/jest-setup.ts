import { localStorageMock, matchMediaMock } from "@/mocks";

Object.defineProperty(window, "localStorage", {
  value: localStorageMock(),
});

Object.defineProperty(window, "matchMedia", {
  value: matchMediaMock(),
});

// jsdom does not implement scrollIntoView, which <Page> calls on mount.
Element.prototype.scrollIntoView = jest.fn();

jest.mock("gatsby", () => jest.requireActual("./__mocks__/gatsby").default);
