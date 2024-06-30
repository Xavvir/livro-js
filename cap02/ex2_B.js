const form = document.querySelector('form')
const resp1 = document.querySelector('#outResp1')


form;addEventListener("submit", (e) =>{
  const valor15Minutos = form.inPreco.value
  const tempoUso = form.inTempo.value

  const tempoTotal = Math.ceil(tempoUso / 15)
  const valorTotal = tempoTotal * valor15Minutos  
  
  resp1.innerText = `Valor a pagar R$: ${valorTotal}`
  
  e.preventDefault()
})

