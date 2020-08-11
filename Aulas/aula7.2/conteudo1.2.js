// Agora, para praticar, crie uma função que receba três parâmetros, sendo eles: um objeto, o nome de uma chave e o seu valor. O retorno dessa função deve ser o objeto já com a nova chave adicionada nele.

const manipulatingObjects = (object, keyName, keyValue) => {
    object[keyName] = keyValue;
    console.log (object);
}

const objectInput = {
    name: 'Leandro',
    lastName: 'Parisi',
    age: 27,
}

manipulatingObjects(objectInput, 'alinhamento', 'CB');