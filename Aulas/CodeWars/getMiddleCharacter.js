inputStr = "test";

let evenMiddleRight = 0;
let evenMiddleLeft = 0;
let oddMiddle = 0;
let strLength = inputStr.length;

let outputStr = "";


if(strLength % 2 === 0){
    evenMiddleRight = (strLength / 2) + 1;
    evenMiddleLeft = strLength / 2;

    outputStr += inputStr[evenMiddleLeft - 1] + inputStr[evenMiddleRight - 1];

    console.log(outputStr);
}