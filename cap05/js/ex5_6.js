const form = document.querySelector("form")
const resp = document.querySelector("#outResp1")

form.addEventListener("submit", (e) =>{
    e.preventDefault()

    const num = +form.inNumero.value
    let numDivisores = 0

    for (let i = 1; i <= num; i++) {
        if (num % i == 0) {
            numDivisores++
        }        
    }
    if (numDivisores == 2) {
        resp.innerText = `${num} É primo`
    } else {
        resp.innerText = `${num} Não é primo`
    }
})