const form = document.querySelector('form')
const resp = document.querySelector('#outResp1')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const numero = Number(form.inNumero.value)
  const raiz = Math.sqrt(numero)
  
  if (Number.isInteger(raiz)){
    resp.innerText = `Raiz: ${raiz}`
  } else {
    resp.innerText = `Não há raiz exata para o número ${numero}.`
  }

})