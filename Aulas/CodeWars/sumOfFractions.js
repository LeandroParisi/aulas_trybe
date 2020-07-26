n = 5;
let sum = 1;
let divisor = 4;

if (n === 0){
    sum = 0;
    console.log(0.00)
}

for (index = 1; index < n; index += 1){
    sum += 1/divisor; 
    divisor += 3;
}

console.    log(Math.round(sum * 100) / 100);