let primeNumber = 6;
let isPrime = false;

for (index = 2; index <= primeNumber; index += 1){
    if (index == primeNumber && primeNumber % index == 0){
        isPrime = true;
    } else if (primeNumber % index !== 0){
        isPrime = true; 
    } else if (primeNumber % index === 0){
        isPrime = false;
        break;  
    }
}

console.log(isPrime);