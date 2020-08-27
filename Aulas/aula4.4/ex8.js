let wholeNumbers = [2, 1 , 5, 3, -5, 10];
let minorNumber = 10000;
let minorNumberIndex = 0;

for (index in wholeNumbers){
    for (internIndex in wholeNumbers){
        if (wholeNumbers[index] < wholeNumbers[internIndex] && wholeNumbers[index] < minorNumber){
            minorNumber = wholeNumbers[index]
            minorNumberIndex = index;
        }
    }
}

console.log(minorNumber)
console.log(minorNumberIndex)