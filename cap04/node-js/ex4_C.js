//programa parquimetro
const prompt = require("prompt-sync")();
const valor = Number(prompt("Valor: "));

if (valor < 1) {
    console.log("Valor insuficiente")
    return
} else if (valor > 1 || valor < 1.74) {
    base = 1
    tempo = 30
    troco = valor - base
    console.log(`Tempo: ${tempo} minutos`)
    console.log(`Troco: R$ ${troco.toFixed(2)}`)
} else if (valor > 1.75 || valor < 3) {
    base1 = 1.75
    tempo1 = 60
    troco1 = valor - base1
    console.log(`Tempo: ${tempo1} minutos`)
    console.log(`Troco: R$ ${troco1.toFixed(2)}`)
}


