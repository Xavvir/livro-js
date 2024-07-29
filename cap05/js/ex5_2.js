const form = document.querySelector("form");
const resp = document.querySelector("#outResp1");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const numero = form.inNumero.value;

  resposta = `Entre ${numero} e 1: `;

  for (let i = numero; i > 0; i--) {
    if (i == 1) {
      resposta = resposta + i + ". ";
    } else {
      resposta = resposta + i + ", ";
    }
  }

  resp.innerText = resposta;
});
