const form = document.querySelector('form')
const resp = document.querySelector('#outResp1')

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const num = +form.inNumero.value
    let resposta = ""

    for (let i = 1; i <= num; i++) {
        if (i % 2 == 1){
            resposta = resposta + "*"
        } else {
            resposta = resposta + "-"
        }
    }

    resp.innerText = resposta
})