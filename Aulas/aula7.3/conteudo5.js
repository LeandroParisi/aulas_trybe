const assert = require('assert');

const sum = (num1, num2) => num1 + num2;

const sub = (num1, num2) => num1 - num2;

const div = (num1, num2) => num1 / num2;

const mult = (num1, num2) => num1 * num2;

const summing = sum (2, 5);
const subtracting = sub (5, 2);
const dividing = div (10, 5);
const multipling = mult (5, 10);

assert(summing === 7, '2 + 5 = 7');
assert.equal(subtracting, 3, '5 - 2 = 3');
assert.notEqual(dividing, 3, '10 / 5 != 3');
assert.ok(multipling === 50, '5 * 10 = 50');
