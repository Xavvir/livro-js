const form = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

let resposta = "";
let numContas = 0;
let valorContas = 0;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const descricao = form.inDescricao.value;
  const valor = +form.inValor.value;

  numContas++ // adiciona valores ao contador e acumulador
  valorContas += valor
  resposta = resposta + descricao + " - R$: " + valor.toFixed(2) + "\n"
  resp1.innerText = `${resposta} ---------------------------------`
  resp2.innerText = `${numContas} Conta(s) - Total R$: ${valorContas}`

  form.inDescricao.value = ""
  form.inValor.value = ""
  form.inDescricao.focus()

});
