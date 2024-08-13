const form = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const numero = +form.inNumero.value

    let divisores = "Divisores do " + numero + ": 1"
    let soma = 1

    for (let i = 2; i <= numero / 2; i++) {
        if (numero % i == 0) {
            divisores = divisores + ", " + i 
            soma = soma + i
        }
    }
    divisores = divisores + ` (Soma: ${soma})`

    resp1.innerText = divisores

    if (numero == soma) {
        resp2.innerText = `${numero} é um número perfeito`
    } else {
        resp2.innerText = `${numero} não é um número perfeito`
    }
})