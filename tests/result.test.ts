import { NONE, err, getErr, getOk, isErr, isOk, ok } from "../src";

describe("result", () => {
  describe("create", () => {
    it("should create Ok", () => {
      const result = ok(1);

      expect(result[0]).toBe(1);
      expect(result[1]).toBe(NONE);
    });

    it("should create Err", () => {
      const result = err(null);

      expect(result[0]).toBe(NONE);
      expect(result[1]).toBe(null);
    });
  });

  describe("is", () => {
    it("should return true if Result is Ok", () => {
      const result = ok(1);

      expect(isOk(result)).toBe(true);
      expect(isErr(result)).toBe(false);
    });

    it("should return true if Result is Err", () => {
      const result = err(null);

      expect(isOk(result)).toBe(false);
      expect(isErr(result)).toBe(true);
    });
  });

  describe("get", () => {
    it("should return Ok value", () => {
      const result = ok(1);

      expect(getOk(result)).toBe(1);
    });

    it("should return Ok value", () => {
      const result = err(null);

      expect(getErr(result)).toBe(null);
    });
  });
});
