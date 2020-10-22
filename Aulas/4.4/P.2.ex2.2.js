function arrayMajorNumberIndex (wholeNumbersArray){
    let majorNumber = 0;
    let majorNumberIndex = 0;

    for (index in wholeNumbersArray){
        for (internIndex in wholeNumbersArray){
            if (wholeNumbersArray[index] > wholeNumbersArray[internIndex] && wholeNumbersArray[index] > majorNumber){
                majorNumber = wholeNumbersArray[index]
                majorNumberIndex = index;
            }
        }
    }
    console.log(majorNumber)
    console.log(majorNumberIndex)
}

arrayMajorNumberIndex ([2, 4, 6, 10, 28, 30]);