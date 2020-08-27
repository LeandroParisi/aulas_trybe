let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbersMultiplied = [];

let index = 1;

for (; index < numbers.length; index += 1){
    for (let indexInterno = 0; indexInterno < index; indexInterno += 1){
        
        let storage = numbers[indexInterno] * numbers[index];
        numbersMultiplied.push(storage)
    }
}

let storage2 = numbers[index] * 2;
numbersMultiplied.push(storage2);

console.log(numbers);
console.log(numbersMultiplied);