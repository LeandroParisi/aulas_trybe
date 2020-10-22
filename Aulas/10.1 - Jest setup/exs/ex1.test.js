const flatten = require('./ex1');


test('should concatenate arrays', () => {
  expect(flatten([1,2])).toEqual([1,2]);
})
