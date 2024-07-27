//possibilidade de formar um triangulo
const prompt = require("prompt-sync")();
const ladoA = Number(prompt("Digite o lado A: "));
const ladoB = Number(prompt("Digite o lado B: "));
const ladoC = Number(prompt("Digite o lado C: "));

let triangulo;

if (
  ladoA >= ladoB + ladoC ||
  ladoB >= ladoA + ladoC ||
  ladoC >= ladoA + ladoB
) {
  console.log("Não é possível formar um triangulo");
} else {
  console.log("Lados podem formar um triângulo");
  if ((ladoA == ladoB) & (ladoB == ladoC) & (ladoC == ladoA)) {
    triangulo = "Equilatero";
  } else if (
    ladoA === ladoB ||
    ladoA === ladoC ||
    ladoB === ladoA ||
    ladoB === ladoC ||
    ladoC === ladoA ||
    ladoC === ladoB
  ) {
    triangulo = "Isósceles";
  } else if ((ladoA !== ladoB) & (ladoB !== ladoC) & (ladoC !== ladoA)) {
    triangulo = "Escaleno";
  }

  console.log(`Tipo ${triangulo}`);
}
