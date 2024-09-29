const prompt = require("prompt-sync")();
console.log("Informe o valor a ser sacado. Após, digite '0' no valor para sair \n");
const saques = [];
const saquesInvalidos = []

do {
  const saque = Number(prompt("Valor a ser sacado: "))
  if (saque == 0 || saque == 0) {
    break
  } else if (saque % 10 != 0) {
    console.log("Saque inválido. Notas disponpiveis: R$ 10 \n")
    saquesInvalidos.push(saque)
  } else {
    console.log("Saque realizado com sucesso! \n")
    saques.push(saque)
  }
} while (true)

const saqueTotal = saques.reduce((total, valor) => total + valor, 0)

console.log("-".repeat(40))
console.log(`\nSaques válidos: ${saques}`)
console.log(`Saques inválidos:  ${saquesInvalidos}\n`)
console.log("-".repeat(40))
console.log(`Valor total sacado: ${saqueTotal}`)