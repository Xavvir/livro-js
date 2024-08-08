const prompt = require("prompt-sync")();

const valor = +prompt("Valor da compra: ");
const parcelas = +prompt("Número de parcelas: ");

const valorParcela = Math.floor(valor / parcelas);
const valorUltimaParcela = valorParcela + (valor % parcelas);

let controle = 1;

for (let i = controle; i < parcelas; i++) {
  console.log(`${i}º parcela ${valorParcela.toFixed(2)}`);
}
if ((i = parcelas)) {
  console.log(`${i}º parcela ${valorUltimaParcela.toFixed(2)}`);
}
