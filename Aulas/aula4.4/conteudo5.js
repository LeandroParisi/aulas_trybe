function compareNumbers (numberOne, numberTwo){
    if (numberOne > numberTwo){
        console.log("O maior ńumero é: " + numberOne);
    } else if (numberOne < numberTwo){
        console.log("O maior ńumero é: " + numberTwo);
    } else{
        console.log("Os números são iguais")
    }
}

console.log(compareNumbers(1, 5))