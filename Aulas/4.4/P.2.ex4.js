let names = ['José', 'Virilinios', 'Nádia', 'Fernanda', 'Cairo', 'Eustaquioo'];
let majorNameIndex = 0;
let majorName = "";

for (let index in names){
    for (let internIndex in names){
        if (names[index].length > names[internIndex].length && names[index].length > majorName.length){
            majorName = names[index];
            majorNameIndex = names[index].length
        }
    }
}

console.log(majorName)
