const prompt = require("prompt-sync")();
console.log("Informe os clientes. Após, digite 'fim' no nome para sair");
const clientes = [];
const preferencial = [];

do {
  const nome = prompt("Nome: ");
  if (nome == "fim" || nome == "Fim") {
    break;
  }
  const idade = Number(prompt("Idade: "));

  if (idade >= 60) {
    preferencial.push({ nome, idade });
  } else {
    clientes.push({ nome, idade });
  }
  console.log("Cliente cadastrado!");

  console.log(clientes);
  console.log(preferencial);
} while (true);

console.log("\nFila Preferencial");
console.log("-".repeat(40));

preferencial.forEach((cliente, i) => {
  console.log(`${i + 1}. ${cliente.nome}`);
});

console.log("\nFila Normal");
console.log("-".repeat(40));

clientes.forEach((cliente, i) => {
  console.log(`${i + 1}. ${cliente.nome}`);
});
