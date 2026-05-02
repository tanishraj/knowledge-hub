// General Example
expect.extend({
  toBeWithinRange(received, floor, ceiling) {
    const pass = received >= floor && received <= ceiling;
    if (pass) {
      return {
        message: `expected ${received} not to be within range ${floor} - ${ceiling}`,
        pass: true,
      };
    } else {
      return {
        message: `expected ${received} to be within range ${floor} - ${ceiling}`,
        pass: false,
      };
    }
  },
});

// General Example
expect.extend({
  toBeGreaterThan(expectedValue, fixedValue) {
    const result = expectedValue > fixedValue;
    if (result) {
      return {
        message: "Expected value is greater.",
        pass: true,
      };
    } else {
      return {
        message: "Expected value is lesser.",
        pass: false,
      };
    }
  },
});

// Async matcher
const getExternalValueFromRemoteSource = () => {
  return "5";
};

expect.extend({
  async tobeDivisibeByExternalValue(received) {
    const externalValue = await getExternalValueFromRemoteSource();
    const pass = received % externalValue == 0;
    if (pass) {
      return {
        message: () =>
          `expected ${received} not to be divisible by ${externalValue}`,
        pass: true,
      };
    } else {
      return {
        message: () =>
          `expected ${received} to be divisible by ${externalValue}`,
        pass: false,
      };
    }
  },
});

test("numeric ranges", () => {
  expect(100).toBeWithinRange(90, 110);
  expect(101).not.toBeWithinRange(0, 100);
  expect({ apples: 6, bananas: 3 }).toEqual({
    apples: expect.toBeWithinRange(1, 10),
    bananas: expect.not.toBeWithinRange(11, 20),
  });
});

it("checking greater value", () => {
  expect(100).toBeGreaterThan(50);
});

it("is divisble by external value", async () => {
  await expect(100).tobeDivisibeByExternalValue();
  await expect(105).tobeDivisibeByExternalValue();
});

// Custom matcher
expect.extend({
  yourMatcher(x, y, z) {
    // console.log(this.utils);
    return {
      pass: true,
      message: () => {
        return `Some message. ${this.utils.printWithType(x)}`;
      },
    };
  },
});

describe("Some Custom Matcher", () => {
  test("Testing Custom Matcher", () => {
    expect(10).yourMatcher(20, 30);
  });
});

const diff = require("jest-diff");
expect.extend({
  toBe(received, expected) {
    const options = {
      comment: "Object.is equality",
      isNot: this.isNot,
      promise: this.promise,
    };

    const pass = Object.is(received, expected);

    const message = pass
      ? () =>
          this.utils.matcherHint("toBe", undefined, undefined, options) +
          "\n\n" +
          `Expected: not ${this.utils.printExpected(expected)}\n` +
          `Received: ${this.utils.printReceived(received)}`
      : () => {
          const diffString = diff(expected, received, {
            expand: this.expand,
          });
          return (
            this.utils.matcherHint("toBe", undefined, undefined, options) +
            "\n\n" +
            (diffString && diffString.includes("- Expect")
              ? `Difference:\n\n${diffString}`
              : `Expected: ${this.utils.printExpected(expected)}\n` +
                `Received: ${this.utils.printReceived(received)}`)
          );
        };

    return { actual: received, message, pass };
  },
});

describe("toBe matcher extension", () => {
  test("I am testing something", () => {
    expect(100).toBe(100);
  });
});
