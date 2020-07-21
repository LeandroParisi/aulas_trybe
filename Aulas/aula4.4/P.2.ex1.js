function palindromVerifier (word){
    let lastLetter = word.length - 1;
    let equalLetters = 0;
    
    if(word.length % 2 !== 0 ){
        for (let currentLetter = 0; currentLetter <= lastLetter ;currentLetter += 1){
            if (word[currentLetter] !== word[lastLetter]){
                console.log("Não é palindromo");
                break;
            } else if (word[currentLetter] === word[lastLetter]){
                equalLetters += 1
            }
            lastLetter -= 1
    }
        if (equalLetters === (word.length+1)/2){
            console.log("É palindromo");
        }
    } else {
        for (let currentLetter = 0; currentLetter < lastLetter ;currentLetter += 1){
            if (word[currentLetter] !== word[lastLetter]){
                console.log("Não é palindromo");
                break;
            } else if (word[currentLetter] === word[lastLetter]){
                equalLetters += 1
            }
            lastLetter -= 1
    }
        if (equalLetters === word.length/2){
            console.log("É palindromo");
     
    }
    }   
}


palindromVerifier ("123321")
