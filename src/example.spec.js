const test = require("tape");

import { Example } from "./example";

let o;

function setup() {
  o = new Example();
}

function teardown() {
  o = null;
}

test("sync", (t) => {
  setup();
  t.plan(1);
  t.equal(o.sync(), "sync");
  teardown();
});

test("asyncCallback", (t) => {
  setup();
  t.plan(1);
  o.asyncCallback((value) => {
    t.equal(value, "asyncCallback");
    teardown();
  });
});

test("asyncPromise", async (t) => {
  setup();
  t.plan(1);
  const value = await o.asyncPromise();
  t.equal(value, "asyncPromise");
  teardown();
});
