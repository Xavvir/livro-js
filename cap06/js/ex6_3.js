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
    (acumulador, carro) => acumulador + carro.modelo + " - R$: " + carro.preco.toFixed(2) + "\n" , "");
  resp.innerText = `Lista dos Carros Cadastrados \n${"-".repeat(40)} \n ${lista}`
});

form.btFiltrar.addEventListener("click", () => {
  let maximo = Number(prompt("Digite o valor máximo:"))

  const filtro = carros.filter(carro => carro.preco <= maximo)
  resp.innerText = `Modelo: ${filtro.modelo} Preço: ${filtro.preco} `
})
