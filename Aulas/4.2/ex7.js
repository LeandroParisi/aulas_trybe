let numbers = [5, 9, 3, 19, -100, -1, 100, 2, 35, 27];

let minorNumber = 200;

for (let index = 0; index < numbers.length; index += 1){
    if (numbers[index] < minorNumber){
        minorNumber = numbers[index]
    }
}

console.log (minorNumber)