var input = require("fs").readFileSync("stdin", "utf8")

var linhas = input.split("\n")

var = linhas.shift().split(" ")
var infoItem2 = linhas.shift().split(" ")

var idItem1 = parseInt(infoItem1.shift())
var qtdItem1 = parseInt(infoItem1.shift())
var valorUnitarioItem1 = parseFloat(infoItem1.shift())
var valorTotalItem1 = valorUnitarioItem1 * qtdItem1


var idItem2= parseInt(infoItem2.shift())
var qtdItem2 = parseInt(infoItem2.shift())
var valorUnitarioItem2 = parseFloat(infoItem2.shift())
var valorTotalItem2 = valorUnitarioItem2 * qtdItem2

var totalPagar = valorTotalItem1 + valorTotalItem2


console.log("VALOR A PAGAR: R$ " + totalPagar.toFixed(2))   