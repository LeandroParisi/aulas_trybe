let a = [1, 2, 4, 4, 2, 3, 9, 0, 1];
let b = [3, 1, 6, 4, 3];
let outputArray = [];
let counter = 0;

for (indexA in a){
    counter = 0;
    for (indexB in b){
        if (a[indexA] === b[indexB]){
            counter -+ 1;
        } else if ( a[indexA] !== b[indexB]){
            counter += 1;
        }
    }
    if (counter === b.length){
        outputArray.push(a[indexA])
    }
}

console.log(outputArray);