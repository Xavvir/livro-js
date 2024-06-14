const form = document.querySelector('form')
const novoTitulo = document.querySelector("h3")
const novaDuracao = document.querySelector("h4")

form.addEventListener("submit", (e) =>{
  const titulo = form.inTitulo.value
  const duracao = +form.inDuracao.value

  const horas = Math.floor(duracao / 60) //arredonda para baixo
  const minutos = duracao % 60 // obtem o resto da divisão
  
  novoTitulo.innerText = `Titulo: ${titulo}`
  novaDuracao.innerText = `${horas} hora(s) e ${minutos} minutos`

  e.preventDefault()
})

