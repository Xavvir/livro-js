const form = document.querySelector("form");
const resp = document.querySelector("pre");
const carros = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const modelo = form.inModelo.value;
  const preco = +form.inPreco.value;
  carros.push({ modelo, preco });
  form.inModelo.value = "";
  form.inPreco.value = "";
  inModelo.focus();

  form.btListar.dispatchEvent(new Event("click"));
});

form.btListar.addEventListener("click", () => {
  if (carros.length == 0) {
    alert("Não existem carros a serem exibidos");
    return;
  }

  const lista = carros.reduce(
    (acumulador, carro) => acumulador + carro.modelo + " - R$: " + carro.preco.toFixed(2) + "\n", "");
  resp.innerText = `Lista dos Carros Cadastrados \n${"-".repeat(40)} \n ${lista}`
});

form.btFiltrar.addEventListener("click", () => {
  const maximo = Number(prompt("Digite o valor máximo:"))
  const maximobr = maximo.toLocaleString('pt-br', { style: "currency", currency: 'BRL' })
  if (maximo == 0 | isNaN(maximo)) {
    alert("Digite um valor acima de 0")
    return
  }

  const filtro = carros.filter(carro => carro.preco <= maximo)
  if (filtro.length == 0) {
    alert("Não há carros com preço inferior ao informado.")
    return
  }

  let lista = ""

  for (const carro of filtro) {    // percorre cad elemento do array
    lista += `${carro.modelo} - ${carro.preco.toFixed(2)}\n`
  }

  resp.innerText = `Carros até ${maximobr}\n${lista}`
})

form.btSimular.addEventListener("click", () => {
  const desconto = Number(prompt("Digite o % de desconto: "))
  if (desconto == 0 | isNaN(desconto)) {
    return
  }

  const carrosDesc = carros.map(aux => ({
    modelo: aux.modelo,
    preco: aux.preco - (aux.preco * desconto / 100)
  }))

  let lista = ""
  for (const carro of carrosDesc) {
    lista += `${carro.modelo} - R$: ${carro.preco.toFixed(2)}\n`
  }

  resp.innerText = `Carros com desconto: ${desconto}%\n${"-".repeat(40)}\n${lista}`
})
