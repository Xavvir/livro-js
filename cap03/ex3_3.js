const prompt = require("prompt-sync")();
const salario = Number(prompt("Digite seu salário: "));
const tempo = Number(prompt("Digite seus anos de casa: "));

const quadrienios = Math.floor(tempo / 4);
const aumento = (salario * quadrienios) / 100

console.log(`Quadriênios: ${quadrienios}`)
console.log(`Salário atual R$: ${salario + aumento}`)