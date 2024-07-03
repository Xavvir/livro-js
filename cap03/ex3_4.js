const prompt = require("prompt-sync")();
const pesoKg = Number(prompt("Kg de ração: "))
const consumoDiario = Number(prompt("Consumo diário (gr): "))
const pesoGr = pesoKg * 1000
const duracao = Math.floor(pesoGr / consumoDiario)
const sobra = pesoGr % consumoDiario

console.log(`Duração da ração: ${duracao.toFixed(0)} dias`)
console.log(`Sobra: ${sobra}gr`)