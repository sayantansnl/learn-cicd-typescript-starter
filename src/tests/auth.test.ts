import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth.js";

describe("getAPIKey", () => {
  test("should return null when there are no auth headers", () => {
    const headers = {};
    const apiKey = getAPIKey(headers);
    expect(apiKey).toBeNull();
  });

  test("should return null when Authorization doesn't start with ApiKey", () => {
    const headers = { authorization: "my-bearer-token" };
    const apiKey = getAPIKey(headers);
    expect(apiKey).toBeNull();
  });

  test("should return the key", () => {
    const headers = { authorization: "ApiKey my-api-key" };
    const apiKey = getAPIKey(headers);
    expect(apiKey).toBe("my-api-key");
  });
});
