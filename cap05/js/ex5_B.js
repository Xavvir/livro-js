const form = document.querySelector("form")
const resp = document.querySelector("#outResp1")

let resposta = ""
let numeroChinchila = 0 

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const chinchilas = form.inQuantidade.value
    const anos = form.inAnos.value

    for (let i = 1; i <= anos; i++) {
        let numeroChinchila = chinchilas * 3
        if (chinchilas < 2) {
            resp.innerText = `Ops.. quantidade insuficiente`
        } 
        
        if (anos == 1) {
            resposta = resposta + `${i}º ano: ${chinchilas} \n`
        } else {
            resposta = resposta + `${i}º ano: ${calculoChinchila} Chinchilas \n   `
        }
    
    resp.innerText = resposta
    }
})