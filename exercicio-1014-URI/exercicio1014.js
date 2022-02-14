var input = require("fs").readFileSync("stdin", "utf8")

var [distanciaTotal, litrosCombustivel] = input.split("\n")

var consumoMedio = distanciaTotal / litrosCombustivel

console.log(consumoMedio.toFixed(3) + " km/l")