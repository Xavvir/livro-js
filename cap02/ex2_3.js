const form = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");
const resp3 = document.querySelector("#outResp3");

form.addEventListener("submit", (e) => {
  const veiculo = form.inVeiculo.value; //obtem dados dos campos
  const preco = +(form.inPreco.value);

  const entrada = preco * 0.5; //calcula valor de entrada
  const parcelado = (preco * 0.5) / 12; //calcula valor das parcelas

  resp1.innerText = `Veiculo: ${veiculo}`;
  resp2.innerText = `Valor de entrada: ${entrada}`;
  resp3.innerText = `+12x de R$: ${parcelado.toFixed(2)}`;

  e.preventDefault();
}); 
