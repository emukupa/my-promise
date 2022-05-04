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
  it("with multiple thens for same promise", () => {
    const checkFunc = (v) => expect(v).toBe(DEFAULT_VALUE);
    const mainPromise = promise();
    const promise1 = mainPromise.then(checkFunc);
    const promise2 = mainPromise.then(checkFunc);
    return Promise.allSettled([promise1, promise2]);
  });
  it("with then and catch", () => {
    const checkFunc = (v) => expect(v).toBe(DEFAULT_VALUE);
    const failFunc = (v) => expect(1).toEqual(2);
    const resolvePromise = promise().then(checkFunc, failFunc);
    const rejectPromise = promise({ fail: true }).then(failFunc, checkFunc);
    return Promise.allSettled([resolvePromise, rejectPromise]);
  });
  it("with chaining", () => {
    return promise({ value: 3 })
      .then((v) => v * 4)
      .then((v) => expect(v).toEqual(12));
  });
});

describe("catch", () => {
  it("with no chaining", () =>
    promise({ fail: true }).catch((v) => expect(v).toEqual(DEFAULT_VALUE)));
  it.skip("with multiple catches for same promise", () => {
    expect(true).toEqual(false);
  });
  it("with chaining", () =>
    promise({ value: 3 })
      .then((v) => {
        throw v * 4;
      })
      .catch((v) => expect(v).toEqual(12)));
});
describe.skip("finally", () => {});
describe.skip("all", () => {});
describe.skip("race", () => {});
describe.skip("any", () => {});
