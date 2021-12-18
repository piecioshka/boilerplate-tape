test.Test.prototype.anArrayOfSize = function (a, b, msg, extra) {
  const aStringify = JSON.stringify(a, null, 2);
  this._assert(Array.isArray(a) && a.length === b, {
    message:
      msg ||
      `received ${aStringify} which should be an array contains ${b} elements`,
    operator: "anArrayOfSize",
    actual: a,
    expected: b,
    extra: extra,
  });
};

/* Usage:

test("Custom matcher", (t) => {
  t.plan(1);
  t.anArrayOfSize(["a"], 1);
});

*/
