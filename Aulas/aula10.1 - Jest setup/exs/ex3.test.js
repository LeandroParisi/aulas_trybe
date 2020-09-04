const averageAge = require('./ex3');
const { TestScheduler } = require('jest');

const expected_result = 43;

describe('Test averageAge function', () => {
  it('should be a function', () => {
    expect(averageAge()).toBe(expected_result)
  })
})
