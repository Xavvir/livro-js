const form = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");
const resp3 = document.querySelector("#outResp3");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const saque = Number(form.inSaque.value);
  if (saque % 10 != 0) {
    // se o saque não é multiplo de 10
    alert("Valor inválido para notas disponíveis ( R$ 10, 50, 100)");
    form.inSaque.focus();
  }

  const notasCem = Math.floor(saque / 100); //calcula quantidade de notas de 100
  let resto = saque % 100; //sobra de 100
  const notasCinquenta = Math.floor(resto / 50); //calcula quantidade de notas de 50
  resto = resto % 50;
  const notasDez = Math.floor(resto / 10);

  if (notasCem > 0) {
    resp1.innerText = `Notas de R$ 100: ${notasCem}`;
  }
  if (notasCinquenta > 0) {
    resp2.innerText = `Notas de R$ 50: ${notasCinquenta}`;
  }
  if (notasDez > 0) {
    resp3.innerText = `Notas de R$ 10: ${notasDez}`;
  }
});
