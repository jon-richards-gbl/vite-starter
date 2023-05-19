import { isAxiosError } from "axios";

export function serializeError(err: unknown): string {
  if (isAxiosError(err) || err instanceof Error) {
    return err.stack || err.message;
  }

  return JSON.stringify(err);
}
