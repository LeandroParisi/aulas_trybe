const fatorialCalc = (number) => {
    let result = number;
    for (let multiplier = number - 1; multiplier > 0; multiplier -= 1){
        result *= multiplier;
    }
    return result;
}

console.log(fatorialCalc(5));