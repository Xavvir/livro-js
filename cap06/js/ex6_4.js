const form = document.querySelector("form");
const resp = document.querySelector("pre");
const nomes = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = form.inNome.value;
  const idade = form.inIdade.value;

  nomes.push({ nome, idade });
  form.reset();

  form.btListar.dispatchEvent(new Event("click"));
});

form.btListar.addEventListener("click", () => {
  if (nomes.length == 0) {
    alert("Ninguém cadastrado");
    return;
  }

  const lista = nomes.reduce(
    (acumulador, crianca) =>
      acumulador + crianca.nome + " - " + crianca.idade + " anos" + "\n",
    ""
  );
  resp.innerText = lista;
});
