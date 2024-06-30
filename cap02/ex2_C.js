const form = document.querySelector('form')
const resp1 = document.querySelector('#outResp1')
const resp2 = document.querySelector('#outResp2')


form.addEventListener("submit", (e) =>{
  const item = form.inProduto.value
  const precoUnitario = form.inPreco.value
  const terceiroItem = precoUnitario * 0.5
  const promocao = (precoUnitario * 2) + terceiroItem

  resp1.innerText = `${item} - Promoção: Leve 3 por R$: ${promocao.toFixed(2)}`
  resp2.innerText = `O 3º produto custa apenas R$: ${terceiroItem.toFixed(2)}`

  e.preventDefault()
})

