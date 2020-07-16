let teste = "1231"
let lastLetter = teste.length - 1;
let equalLetters = 0;

for (let currentLetter = 0; currentLetter <= lastLetter ;currentLetter += 1){
    if (teste[currentLetter] !== teste[lastLetter]){
        console.log("Não é palindromo");
        break;
    } else if (teste[currentLetter] === teste[lastLetter]){
        equalLetters += 1
    }
    lastLetter -= 1
}

if(teste.lenght % 2 !== 0 ){
    if (equalLetters === (teste.length+1)/2){
        console.log("É palindromo");
    }
}

if(teste.lenght % 2 === 0 ){
    if (equalLetters === teste.length/2){
        console.log("É palindromo");
    }
}
