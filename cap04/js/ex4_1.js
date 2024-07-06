const form = document.querySelector('form')
const resp1 = document.querySelector('#outResp1')
const resp2 = document.querySelector('#outResp2')

form.addEventListener("submit", (e) => {
  e.preventDefault()
  const nome = form.inNome.value
  const nota1 = +form.inNota1.value
  const nota2 = +form.inNota2.value

  let media = (nota1 + nota2) / 2
  resp1.innerText = `Nota: ${media}`

  if (media >= 7) {
    resp2.innerText = `Parabéns ${nome}!! Você foi aprovado(a).`
    resp2.style.color = 'Blue'
  } else if (media >=4) {
    resp2.innerText = `Atenção! Você está de recuperação!`
    resp2.style.color = 'yellow'
  } else {
    resp2.innerText = `Ops ${nome}..., você foi reprovado(a)`
    resp2.style.color = 'red'
  }

})
