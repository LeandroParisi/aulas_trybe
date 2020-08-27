let inputString = "3 1 7 5 10";

let split = inputString.split(" ");
let inputArray = split.map(Number);

let oddCounter = 0;
let evenCounter = 0;
let diffNumberPosition = 0;

for (index in inputArray){
    if (inputArray[index] % 2 === 0){
        evenCounter += 1;
    } else{
        oddCounter += 1;
    }
}

if (oddCounter < evenCounter){
    for (index in inputArray){
        if (inputArray[index] % 2 !== 0){
            diffNumberPosition = parseInt(index) + 1;
        }
    }
} else if (evenCounter < oddCounter){
    for (index in inputArray){
        if (inputArray[index] % 2 === 0){
            diffNumberPosition = parseInt(index) + 1;
        }
    }
}

console.log(diffNumberPosition);