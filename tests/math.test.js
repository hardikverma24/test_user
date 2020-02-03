const { calculateTip } = require("../src/math");

test("should calc total with tip", () => {
  const total = calculateTip(10);
  expect(total).toBe(13);
});

test("async test done", done => {
  setTimeout(() => {
    expect(1).toBe(1);
    done();
  }, 2000);
});
