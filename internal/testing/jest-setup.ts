import { localStorageMock } from "@/mocks";

Object.defineProperty(window, "localStorage", {
  value: localStorageMock(),
});

jest.mock("gatsby", () => jest.requireActual("./__mocks__/gatsby").default);
