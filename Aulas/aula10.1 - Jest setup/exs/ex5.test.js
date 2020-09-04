const containsA = require('./ex5');

describe('check number of A on the given array', () => {
  it('should the count of 20 letters A', () => {
    expect(containsA()).toBe(20)
  })
}) 

// assert.deepEqual(containsA(), 20);