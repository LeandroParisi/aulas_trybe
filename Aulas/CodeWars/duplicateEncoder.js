function duplicateEncode(word){
    let inputString = word.toLowerCase();
    let outputString = "";
    let counter = 0

    for (index in inputString){
        counter = 0;
        for (internIndex = 0; internIndex <= inputString.length; internIndex += 1){
            if (inputString[index] == inputString[internIndex]){
                counter += 1;
            }
        }
        if (counter > 1){
            outputString += ")";
        } else if (counter = 1){
            outputString += "(";
        }
    }
    console.log(outputString);
  }

duplicateEncode("WooofeedRD");