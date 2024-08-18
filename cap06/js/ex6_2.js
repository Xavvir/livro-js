const form = document.querySelector("form");
const respErros = document.querySelector("#outErros");
const respChances = document.querySelector("#outChances");
const respDica = document.querySelector("#outDica");

const numSorteado = Math.floor(Math.random() * 100) + 1;
const erros = [];
const chances = 6;

// respDica.innerText = numSorteado

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const numero = form.inNumero.value;

  if (numero == numSorteado) {
    respDica.innerText = `Parabéns!! Número sorteado ${numSorteado}`;
    form.btSubmit.disabled = true;
    form.btNovo.className = "exibe";
  } else {
    if (erros.includes(numero)) {
      alert(`Você já apostou o número ${numero}. Tente outro...`);
    } else {
      erros.push(numero);
      
      const numErros = erros.length;
      const numChances = chances - numErros;
      
      respErros.innerText = `${numErros} (${erros.join(", ")})`;
      respChances.innerText = numChances;
      
      if (numChances == 0) {
      alert("Suas chances acabaram");
      form.btSubmit.disabled = true;
      form.btNovo.className = "exibe";
      respDica.innerText = `Game Over!! Número sorteado: ${numSorteado}`
      } else{
        const dica = numero < numSorteado ? "maior" : "menor"
        respDica.innerText = `Tente um número ${dica} que ${numero}`
      }
    }
  }
  form.inNumero.value = ""
  form.inNumero.focus()
});

form.btNovo.addEventListener("click", () => {
    location.reload()
})
