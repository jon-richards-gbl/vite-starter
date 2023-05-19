export function debugJSON(input: unknown): void {
  console.warn(JSON.stringify(input, null, 2));
}

const originalConsole = { ...console };

// Use this to clean up the jest output from error messages.
// Only use it to muffle _expected_ errors, since unexpected ones need investigating
export function muteConsole(...keys: (keyof Console)[]) {
  keys.forEach((key) => (console[key] = jest.fn()));
}

export function unmuteConsole() {
  // eslint-disable-next-line no-global-assign
  console = originalConsole;
}
