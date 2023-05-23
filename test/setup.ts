import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { cleanup } from "@testing-library/react";

import { mockThrowUnhandledApiRequests } from "./helpers/axios";
import { unmuteConsole } from "./helpers/debug";

beforeEach(() => {
  mockThrowUnhandledApiRequests();
});

// runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup();
  jest.resetAllMocks();
  unmuteConsole();
});
