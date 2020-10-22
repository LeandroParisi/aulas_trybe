const { expected_result, longestNamedBook } = require('./ex4');

test('should be an object of the book with longest name', () => {
  expect(longestNamedBook()).toEqual(expected_result);
})


// assert.deepEqual(longestNamedBook(), expected_result);