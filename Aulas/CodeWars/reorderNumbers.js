let numToSeparate = 123459128312903282;

let inputArray = Array.from(String(numToSeparate), Number);

for (index in inputArray){
    for (innerIndex = 1; innerIndex <= inputArray.length; innerIndex += 1){
        let firstNumber = inputArray [innerIndex - 1];
        let secondNumber = inputArray [innerIndex];
        if (secondNumber > firstNumber){
            let storedNumber = secondNumber;
            secondNumber = firstNumber;
            firstNumber = storedNumber;
            inputArray[innerIndex - 1] = firstNumber;
            inputArray[innerIndex] = secondNumber;
        }
    }
}

let outputString = "";
for (index in inputArray){
    outputString += inputArray[index];
}

let outputNumber = Number(outputString);

















