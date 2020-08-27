let nomeDaPeca = "pEao"

let nomeConvertido = nomeDaPeca.toLowerCase()

switch (nomeConvertido) {
    case "peao":
        console.log("frontal 1 espaço");
    case "torre":
        console.log("frontal x espaços");
    case "cavalo":
        console.log("em formato de L");
    case "bispo":
        console.log("diagonal");
    default:
        console.log("Erro");
}