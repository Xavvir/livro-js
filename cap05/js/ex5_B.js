const form = document.querySelector("form")
const resp = document.querySelector("#outResp1")



form.addEventListener("submit", (e) => {
    e.preventDefault()

    const anos = +form.inAnos.value
    const chinchilas = +form.inQuantidade.value

    let resposta = ""
    let numeroChinchila = chinchilas


    for (let i = 1; i <= anos; i++) {
        if (chinchilas >= 2) {
            resposta = resposta + i + "º ano: " + numeroChinchila + " Chinchilas \n"
            numeroChinchila = numeroChinchila * 3
        } else {
            resposta = "Quantidade insuficiente"
        }

    }

    resp.innerText = resposta
})