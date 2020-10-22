let numbers = [0, 8, 3, 18, 70, 8, 100, 2, 36, 27];

let oddNumbersQuantity = 0;

for (let index = 0; index < numbers.length; index += 1){
    if(numbers[index] % 2 !== 0){
        oddNumbersQuantity += 1
    }
}

console.log(oddNumbersQuantity)