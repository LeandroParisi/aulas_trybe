const assert = require('assert');
const { error } = require('console');
const { throws } = require('assert');
const { errorMonitor } = require('events');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

assert.equal(sum(4, 5), 9, "4 + 5 = 9");

assert.equal(sum(0, 0), 0, "4 + 5 = 9");

assert.throws(() => {
  sum(4, '5');
});
assert.throws(() => {
  sum(4, '5')
});
