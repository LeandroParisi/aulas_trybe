const fixedString = "Tryber x aqui!";
let returnedString = "";
const skillsArray = ["JS", "HTML", "CSS"];

const substituteX = (string) => {
    const fixedStringArray = fixedString.split(" ");
    for (index in fixedStringArray){
        if (fixedStringArray[index] == "x") {
            fixedStringArray[index] = string;
        }
        returnedString += `${fixedStringArray[index]}`
    }
    return returnedString
}

const concatenateStringAndArray = (string) => {
    const organizedArray = skillsArray.sort();

    let organizedArrayToString = ``;
    for (index in organizedArray){
        organizedArrayToString += `${organizedArray[index]}
    `
    }

    const concatenatedString = `${returnedString}
    Minhas cinco principais habilidades são:
    ${organizedArrayToString}`

    return concatenatedString;
}

console.log(substituteX("teste"));

console.log(concatenateStringAndArray(returnedString))

// tem um " " no final do meu returned string

// problemas com a identação