const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// AGRUPAR TODAS AS FUNCCIONS DENTRO DE OUTRA FUNC PARA PASSAR O OBJETO SOMENTE UMA VEZ PARA TODAS!!

// 1) Crie uma função para adicionar o turno da manhã na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
const addClassPeriod = (objectToBeChanged, keyToAdd, valueToAdd) => {
  objectToBeChanged[keyToAdd] = valueToAdd;
}

addClassPeriod(lesson2, "turno", "manhã");
console.log(lesson2);

console.log("-------------");

// 2) Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
const listObjKeys = (objectToBeListed) => {
  const objectKeys = Object.keys(objectToBeListed);
  for (index in objectKeys) {
    console.log(objectKeys[index]);
  }
}
listObjKeys(lesson2);

console.log("-------------");

// 3) Crie uma função para mostrar o tamanho de um objeto.
const objectLength = (objectToBeProcessed) => {
  const objectKeys = Object.keys(objectToBeProcessed);
  console.log(`Object length: ${objectKeys.length}`);
}
objectLength(lesson2);

console.log("-------------");

// 4) Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
const objectValues = (objectToBeProcessed) => {
  const objectValuesArray = Object.values(objectToBeProcessed);
  for (index in objectValuesArray) {
    console.log(objectValuesArray[index]);
  }
}
objectValues(lesson2);

console.log("-------------");

// 5) Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3. Ao executar o comando console.log(allLessons), a saída deverá ser a seguinte:

const allLessons = {
  // `lesson[index]`
  // [index, index < Array.length]
  lesson1: Object.assign({}, lesson1),
  lesson2: Object.assign({}, lesson2),
  lesson3: Object.assign({}, lesson3)
};

console.log(allLessons);

console.log("-------------");

// 6) Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
function totalNumberOfStudents(objectToBeProcessed) {
  let studentsTotal = 0;
  const objectValues = Object.values(objectToBeProcessed);
  for (index in objectValues) {
    studentsTotal += objectValues[index].numeroEstudantes;
  }

  console.log(studentsTotal);
}

totalNumberOfStudents(allLessons);

console.log("-------------");

// 7) Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:
function getValueByNumber (lesson, position) {
  lessonValues = Object.values(allLessons[lesson]);
  console.log(lessonValues[position]);
}

getValueByNumber("lesson2", 0);

console.log("-------------");

// 8) Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave.
function verifyPair (lesson, key, value) {
  const lessonKeys = Object.keys(lesson);
  const lessonValues = Object.values(lesson);

  if (lessonKeys.includes(key) && lessonValues.includes(value)){
    console.log('true');
  } else {
    console.log('false');
  }
}

verifyPair (lesson1, "professor", "manhã");

console.log("-------------");

// BONUS
// 1) Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.
function mathAttendes () {
  const objectValues = Object.values(allLessons);
  let mathAttendes = 0;
  for (index in objectValues) {
    let objectValuesDeepLvl = Object.values(objectValues[index]);
    // console.log(objectValuesDeepLvl);
    if (objectValuesDeepLvl[0] === 'Matemática') {
      mathAttendes += objectValuesDeepLvl[1];
    }
  }
  console.log(`Total number of math students attendes: ${mathAttendes}`);
}
mathAttendes();

console.log("-------------");

// Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5:
function teacherRelatory (professorName) {
  const objectValues = Object.values(allLessons);
  let relatoryOutput = {
    professor: professorName,
    totalStudentsOnClasses: 0,
    classesTaught: [],
  };
  for (index in objectValues) {
    if (objectValues[index].professor == professorName){
      relatoryOutput.totalStudentsOnClasses += objectValues[index].numeroEstudantes;
      relatoryOutput.classesTaught.push(objectValues[index].materia);
    }
  }
  console.log(relatoryOutput);
}
teacherRelatory('Maria Clara');