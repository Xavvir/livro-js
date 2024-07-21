//programa verifica impar ou par

const prompt = require("prompt-sync")();
const numero = Number(prompt("Número: ")); 

numero % 2 == 0 ? console.log(`${numero} é par.`) : console.log(`${numero} é ímpar.`) //ternário

// if (numero % 2 == 0) {
//     console.log(`${numero} é par.`)
// } else {
//     console.log(`${numero} é ímpar.`)
// }
