let inputString = "aba";

let lcString = inputString.toLowerCase();

let isIsogram = false;

if (lcString == ""){
    isIsogram = true;
    console.log(isIsogram);
} else {
    for (index in lcString){
        for (innerIndex = parseInt(index) + 1; innerIndex <= lcString.length; innerIndex += 1){
           if (lcString[index] !== lcString[innerIndex]){
               isIsogram = true;
               console.log(isIsogram);
           } else {
               isIsogram = false;
               console.log(isIsogram);
               break
           }
        }
    }
}