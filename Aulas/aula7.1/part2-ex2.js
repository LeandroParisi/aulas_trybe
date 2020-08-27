let longestWord = (string) => {
    const array = string.split(" ");
    let majorStringLength = -1;
    let majorString = 0;
    let currentStringLength = 0;
    for (index in array){
        currentStringLength = array[index].length;
        if (currentStringLength > majorStringLength){
            majorStringLength = currentStringLength;
            majorString = array[index];
        }
    }
    return majorString;
}

console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"));

