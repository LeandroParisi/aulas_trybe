// Escreva uma função filterPeople que, dada uma lista de pessoas, retorna todas as pessoas australianas que nasceram no século 20:
// Dica: use object destructuring.

const assert = require('assert')

const people = [
    {
        name: "Nicole",
        bornIn: 1992,
        nationality: "Australian"
    },
    {
        name: "Harry",
        bornIn: 2008,
        nationality: "Australian"
    },
    {
        name: "Toby",
        bornIn: 1901,
        nationality: "Australian"
    },
    {
        name: "Frida",
        bornIn: 1960,
        nationality: "Dannish"
    },
    {
        name: "Fernando",
        bornIn: 2001,
        nationality: "Brazilian"
    }
]

// escreva filterPeople abaixo

const filterPeople = (peopleArray) => {
  function bornDate (person) {
    let {bornIn} = person;
    return bornIn;
  }
  function bornState (person) {
    let {nationality} = person;
    return nationality
  }

  return peopleArray.filter((people, index, array) => bornState(people) == 'Australian' && bornDate(people) < 2000);
};

console.log(filterPeople(people));

const filteredPeople = filterPeople(people)

assert.deepEqual(filteredPeople[0], { name: "Nicole", bornIn: 1992, nationality: "Australian" })
assert.deepEqual(filteredPeople[1], { name: "Toby", bornIn: 1901, nationality: "Australian" })