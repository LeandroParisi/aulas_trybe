let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (index = 1; index < numbers.length; index += 1){
    for (indexInterno = 0; indexInterno < index; indexInterno += 1){
        if(numbers[indexInterno] < numbers[index]){
            let position = numbers[indexInterno];

            numbers[indexInterno] = numbers[index];
            numbers[index] = position
        }
    }
}

console.log(numbers)