
function flatten(array) {
  return array.reduce((acumulator, currentValue) => acumulator.concat(currentValue), []);
}

console.log(flatten([1,2]))

module.exports = flatten;
