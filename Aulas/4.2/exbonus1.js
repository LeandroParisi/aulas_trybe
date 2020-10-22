let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (index = 1; index < numbers.length; index += 1){
    for (indexInterno = 0; indexInterno < index; indexInterno += 1){
        if (numbers[index] < numbers[indexInterno]){
        let position = numbers[index]

        numbers[index] = numbers[indexInterno]
        numbers[indexInterno] = position
        }
    }
}

console.log(numbers)