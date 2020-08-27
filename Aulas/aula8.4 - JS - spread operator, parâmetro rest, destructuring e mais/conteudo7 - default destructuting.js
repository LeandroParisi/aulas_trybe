const nationality = ({ firstName, nationality }) => {
  if (!nationality) {
    return `${firstName} is ${nationality = "Brazilian"}`
  } else {
    return `${firstName} is ${nationality}`
  }
}

const person = {
    firstName: "João",
    lastName: "Jr II"
}

const otherPerson = {
    firstName: "Ivan",
    lastName: "Ivanovich",
    nationality: "Russian"
}

console.log(nationality(otherPerson)) // Ivan is Russian
console.log(nationality(person))


// Do jeito que está, a chamada nationality(person) retorna João is undefined. 😭
// Ajuste a arrow function nationality para que a chamada de nationality(person) retorne João is Brazilian.