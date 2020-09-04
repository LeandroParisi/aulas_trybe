// const { studentAverage, expected } = require('./ex6');

// const studentAverage = require('./ex6');
// const expected = require('./ex6');

// const expected = require('./ex6');
// calculateStudentAverage;

const toExport = require('./ex6');

test('should return an array of objects with the name of the student and his average age', () => {
  expect(studentAverage()).toEqual(expected);
})

// assert.deepEqual(studentAverage(), expected);
