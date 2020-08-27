

let wholeNumbers = [2, 15, 5, 3, 60, 10];
let majorNumber = 0;
let majorNumberIndex = 0;

for (index in wholeNumbers){
    for (internIndex in wholeNumbers){
        if (wholeNumbers[index] > wholeNumbers[internIndex] && wholeNumbers[index] > majorNumber){
            majorNumber = wholeNumbers[index]
            majorNumberIndex = index;
        }
    }
}

console.log(majorNumber)
console.log(majorNumberIndex)