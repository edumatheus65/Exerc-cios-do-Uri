var input = require("fs").readFileSync("stdin", "utf8")

var linhas = input.split("\n")

var [idItem1, qtdItem1, valorUnitarioItem1] = linhas.shift().split(" ")
var [idItem2, qtdItem2, valorUnitarioItem2] = linhas.shift().split(" ")




var valorTotalItem1 = valorUnitarioItem1 * qtdItem1 
var valorTotalItem2 = valorUnitarioItem2 * qtdItem2

var totalPagar = valorTotalItem1 + valorTotalItem2


console.log("VALOR A PAGAR: R$ " + totalPagar.toFixed(2))   