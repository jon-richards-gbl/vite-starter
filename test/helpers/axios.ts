import axios from "axios";
import MockAdaptor from "axios-mock-adapter";

export function mockApiService() {
  return new MockAdaptor(axios, { onNoMatch: "throwException" });
}

// this is designed to trigger the 'onNoMatch' error in the API service,
// this means for every test we listen to (and throw an error) if an api is called without it being handled by the test
export function mockThrowUnhandledApiRequests() {
  mockApiService().onGet("FAKE_ENDPOINT").abortRequest();
}
