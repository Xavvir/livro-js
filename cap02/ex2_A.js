const form = document.querySelector('form')
const resp1 = document.querySelector('#outResp1')
const resp2 = document.querySelector('#outResp2')


form.addEventListener("submit", (e) => {
  const medicamento = form.inMedicamento.value
  const preco = form.inPreco.value

  const arredondamento = Math.floor(preco) //arredonda para baixo
  const promocao = arredondamento * 2

  resp1.innerText = `Promoção de ${medicamento}`
  resp2.innerText = `Leve 2 por R$: ${promocao}`

  e.preventDefault();
});


