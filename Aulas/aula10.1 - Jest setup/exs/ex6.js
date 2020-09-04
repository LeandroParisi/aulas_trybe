    
const assert = require('assert');

const alunos = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const notas = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];


const studentAverage = alunos.map((current, index) => { 
  return {name: current, average: calculateStudentAverage(index)};
});

function calculateStudentAverage (index) {
  return notas[index].reduce((acc, current, innerIndex, array) => {
    if (innerIndex < array.length - 1) {
      return acc + current
    } else {
      return (acc + current) / array.length;
    }
  });
}

console.log(studentAverage);


const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

const toExport = { studentAverage, expected }

module.exports = toExport;


// module.exports = studentAverage;
// module.exports = expected;

// module.exports = calculateStudentAverage;
