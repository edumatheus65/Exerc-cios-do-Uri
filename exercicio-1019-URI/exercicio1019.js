const input = require("fs").readFileSync("stdin", "utf8")

let qtdSegundos = parseInt(input);

const valores = [3600, 60, 1];
const resultado = [];

for (let valor of valores) {
    resultado.push(parseInt(qtdSegundos / valor) );
    qtdSegundos = qtdSegundos % valor;
}

console.log(resultado.join(":"))

// Conceito : Ele vai pegar o 3600 vai armazenar dentro de valor,
// e executar essa instrução
// o push é um método para adicionar um elemento no fim do array
// nesse caso como ele está vazio ele vai ser preenchido 3 vezes.

// const qtdHoras = parseInt(qtdSegundos / 3600)
// qtdSegundos = qtdSegundos % 3600

// const qtdMinutos = parseInt(qtdSegundos / 60)
// qtdSegundos = qtdSegundos % 60

// console.log(`${qtdHoras}:${qtdMinutos}:${qtdSegundos}`)