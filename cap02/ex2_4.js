const form = document.querySelector('form')
const resp1 = document.querySelector('#outResp1')


form.addEventListener("submit", (e) =>{
  const preco = Number(form.inPreco.value)
  const grama = Number(form.inGrama.value)

  const valor = (preco / 1000) * grama

  resp1.innerText = `Valor a pagar R$: ${valor.toFixed(2)}`

  e.preventDefault()
})

