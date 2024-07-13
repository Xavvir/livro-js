const form = document.querySelector("form");
const resp1 = document.querySelector("h3");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = form.inNome.value;
  const sexo = form.inMasculino.checked;
  const altura = Number(form.inAltura.value);

  let peso = sexo ? 22 * Math.pow(altura, 2) : 21 * Math.pow(altura, 2);

  resp1.innerText = `${nome}:\n Seu peso ideal é ${peso.toFixed(3)} kg`;
});

form.addEventListener("reset", () => {
  resp1.innerText = "";
});
