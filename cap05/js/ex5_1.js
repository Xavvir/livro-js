const form = document.querySelector('form')
const resp = document.querySelector('pre')

form.addEventListener("submit", (e) => {
  e.preventDefault()

  const numero = Number(form.inNumero.value)
  let resposta = "" // transforma em string

  for (let i = 1; i <= 10; i++) {
    // resposta = resposta + numero + " X " + i + " = " + (numero * i) + "/n"
    resposta = `${resposta}${numero} x ${i} = ${numero * i} \n`
  }

  resp.innerText = resposta
})
