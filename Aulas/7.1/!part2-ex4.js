const fixedString = "Tryber x aqui!";

let substituteX = (string) => {
    const fixedStringArray = fixedString.split(" ");
    let returnedString = "";
    for (index in fixedStringArray){
        if (fixedStringArray[index] == "x") {
            fixedStringArray[index] = string;
        }
        returnedString += `${fixedStringArray[index]} `
    }
    return returnedString
}

console.log(substituteX("teste"));

// tem um " " no final do meu returned string