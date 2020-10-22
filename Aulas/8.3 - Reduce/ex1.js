    
const assert = require('assert');
const { access } = require('fs');

const arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];


function flatten() {
  return arrays.reduce((acumulator, currentValue) => acumulator.concat(currentValue), []);
}

console.log(flatten());


assert.deepEqual(flatten(), ["1", "2", "3", true, 4, 5, 6]);