let number = 3;
let ast = "*";
let espaco = " ";
let posicaoAtual = number;
let linha = "";

for (let index = 0; index < number; index += 1){    
    for (let columnIndex = 1; columnIndex <= number; columnIndex +=1){
        if (columnIndex < posicaoAtual){
            linha = linha + espaco;
        } else{
            linha = linha + ast;
        }
    }
    console.log(linha);
    linha = "";
    posicaoAtual -= 1;
}
