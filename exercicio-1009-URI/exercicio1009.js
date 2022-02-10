var input = require("fs").readFileSync("stdin", "utf8")

var valores = input.split("\n")

var nomeFunc = valores.shift()
var salaryFixo = parseFloat(valores.shift())
var vendasMes = parseFloat(valores.shift())

var salary = (vendasMes * 15 / 100) + salaryFixo

console.log("TOTAL = R$ " + salary.toFixed(2))