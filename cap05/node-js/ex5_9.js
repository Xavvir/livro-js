const prompt = require("prompt-sync")()
const produto = prompt("Produto: ")
const etiquetas = +prompt("Etiquetas: ") 

for (let i = 1; i <= etiquetas / 2; i++) {
    console.log(`${produto.padEnd(30)} ${produto.padEnd(30)}`)    
} if (etiquetas % 2 == 1) {
    console.log(produto)
}