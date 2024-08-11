const form = document.querySelector("form")
const resp = document.querySelector("#outResp1")

let resposta = ""

form.addEventListener("submit", (e) => {
  e.preventDefault()

  const fruta = form.inFruta.value
  const quantidade = form.inQuantidade.value

  for (let i = 1; i < quantidade; i++) {
    resposta = resposta + fruta + " * "
  }

  resp.innerText = resposta + fruta
})

