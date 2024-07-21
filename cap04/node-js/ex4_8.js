const prompt = require("prompt-sync")();
const compra = Number(prompt("Digite o valor da compra: ")); 
const aux = Math.floor(compra / 20) // número de parcelas
const parcelas = aux == 0 ? 1 : aux > 6 ? 6 : aux
const valorParcelas = compra / parcelas

console.log(`Você pode pagar em até ${parcelas}x de ${valorParcelas.toFixed(2)}`)
