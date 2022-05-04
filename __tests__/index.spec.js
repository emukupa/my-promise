const MyPromise = require("../src/my-promise");
// const MyPromise = Promise;

console.log(MyPromise);
describe("Promise Class", () => {
  it("Exist", () => {
    expect(typeof MyPromise).toEqual("function");
  });
});
