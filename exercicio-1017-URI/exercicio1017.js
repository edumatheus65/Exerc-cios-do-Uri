var input = require("fs").readFileSync("stdin", "utf8")

var [horasViagem, velocidadeMedia] = input.split("\n").map(item => parseInt(item))

var distanciaPercorrida = velocidadeMedia * horasViagem

var qtdLitrosGastos = distanciaPercorrida / 12

console.log(qtdLitrosGastos.toFixed(3))

