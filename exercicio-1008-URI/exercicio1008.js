var input = require('fs').readFileSync("stdin", "utf8")

var valores = input.split("\n")

var NumFunc = parseInt(valores.shift())
var qtdHoras = parseInt(valores.shift())
var valorHora = parseFloat(valores.shift())

var salario = qtdHoras * valorHora

console.log("NUMBER = " + NumFunc)
console.log("Salary = " + salario.toFixed(2))