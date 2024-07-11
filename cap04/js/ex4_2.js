const form = document.querySelector('form')
const resp1 = document.querySelector('h3')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const nome = form.inNome.value
  const sexo = form.inMasculino.checked
  const altura = Number(form.inAltura.value)

  let peso

  if (sexo == true) {
    peso = 22 * Math.pow(altura, 2)
  } else {
    peso = 21 * Math.pow(altura, 2)
  }

  resp1.innerText = `${nome}: Seu peso ideal é ${peso.toFixed(3)} kg`

})

form.addEventListener('reset',() => {
  form.reset(resp1)
})
