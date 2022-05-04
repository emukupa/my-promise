// const MyPromise = require("../src/my-promise");
const MyPromise = Promise;

const DEFAULT_VALUE = "default";

const promise = ({ value = DEFAULT_VALUE, fail = false } = {}) =>
  new MyPromise((resolve, reject) => {
    fail ? reject(value) : resolve(value);
  });

describe("Promise Class", () => {
  it("Exist", () => {
    expect(typeof MyPromise).toEqual("function");
  });
});

describe("then", () => {
  it("with no chaining", () =>
    promise().then((v) => expect(v).toEqual(DEFAULT_VALUE)));
  it.skip("with multiple thens for same promise", () =>
    expect(true).toBe(false));
  it.skip("with then and catch", () => expect(true).toBe(false));
  it.skip("with chaining", () => expect(true).toBe(false));
});
describe.skip("catch", () => {});
describe.skip("finally", () => {});
describe.skip("all", () => {});
describe.skip("race", () => {});
describe.skip("any", () => {});
