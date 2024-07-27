//programa parquimetro
const prompt = require("prompt-sync")();
const valor = Number(prompt("Valor: "));

if (valor < 1) {
    console.log("Valor insuficiente(Mínimo R$ 1.00)")
    return
}

let tempo
let troco

if (valor >= 3.00) {
    tempo = 120
    troco = valor - 3.00
} else if (valor >= 1.75) {
    tempo = 60
    troco = valor - 1.75
} else {
    tempo = 30
    troco = valor - 1.00
}

console.log(`Tempo ${tempo} minutos`)
console.log(`Troco R$: ${troco.toFixed(2 )}`)