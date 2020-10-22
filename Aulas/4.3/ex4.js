let cells = 5;
let space = " ";
let symbol = "*";
let lineInput = "";
let firstSymbol = 3;
let lastSymbol = 3;

console.log("     ");
for (let line = 1; line < cells - 1; line += 1){
    for (let column = 1; column <= cells; column += 1){
        if (column >= firstSymbol && column <= lastSymbol){
            lineInput += symbol;
        } else {
            lineInput += space;
        }
    }
    console.log(lineInput);
    lineInput = "";
    firstSymbol -= 1;
    lastSymbol += 1;
}
