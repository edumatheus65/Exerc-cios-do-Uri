var input = require("fs").readFileSync("stdin", "utf8")

var raio = parseFloat(input)
var pi = 3.14159

var volumeEsfera = ((4/3.0) * pi ) * Math.pow(raio, 3)

console.log("VOLUME = " + volumeEsfera.toFixed(3))