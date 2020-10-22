let cells = 7;
let totalLines = 5;
let space = " ";
let symbol = "*";
let lineInput = "";
let firstSymbol = 4;
let lastSymbol = 4;

console.log("       ");
for (let line = 1; line <= totalLines; line += 1){
    for (let column = 1; column <= cells; column += 1){
        if (firstSymbol === 1 && lastSymbol === cells){
            for (lastLine = 1; lastLine <= cells; lastLine += 1){
                lineInput += symbol;
                break;
            }
        }
        else if (column === firstSymbol || column === lastSymbol){
            lineInput += symbol;
        } else {
            lineInput += space;
        }
    }
    console.log(lineInput);
    firstSymbol -= 1;
    lastSymbol += 1;
    lineInput = "";
}