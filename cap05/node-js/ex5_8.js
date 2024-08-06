const prompt = require("prompt-sync")()
console.log("Programa anos de copa do mundo. Digite 0 para sair.")
console.log("---------------------------------------------------")

do { //faça
    const ano = +prompt("Ano: ")

    if (ano == 0) {
        break
    } else if (ano == 1942 || ano == 1946) {
        console.log(`Não houve copa do mundo em ${ano} (Segunda Guerra Mundial)`)
    } else if (ano % 4 == 2){
        console.log(`Sim! ${ano} é ano de copa`)
    } else {
        console.log(`Não houve copa do mundo em ${ano}`)
    }

} while (true) //enquanto