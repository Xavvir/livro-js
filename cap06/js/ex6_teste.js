// const idades = [12, 15, 19, 17]
// let maiores = false
// for (const idade of idades){
//   if(idade >= 18){
//     console.log(idade)
//     maiores = true
//   }
// }
// if(!maiores){
//   console.log("Não há maiores de 18 anos na lista")
// }

// const numeros = [10, 20, 13, 15]
// const dobro = numeros.map(num => num * 2)

// console.log(dobro.join(", "))

// const amigos = [
//   { nome: "Leandro", idade: 27 },
//   { nome: "Carlos", idade: 22 },
//   { nome: "Luiz", idade: 20 },
// ];

// const amigos2 = amigos.map((aux) => ({
//   nome: aux.nome,
//   nasc: 2024 - aux.idade,
// }));

// for (const amigo of amigos2) {
//   console.log(`${amigo.nome} - Nasceu em ${amigo.nasc}`);
// }

// const numeros = [21, 10, 13, 15, 18, 19]
// const pares = numeros.filter(num => num % 2 == 0)
// const impares = numeros.filter(num => num % 2 == 1)
// console.log(pares.join(", "))
// console.log(impares.join(", "))

// const amigos = [
//   { nome: "Leandro", idade: 27 },
//   { nome: "Carlos", idade: 18 },
//   { nome: "Luiz", idade: 20 },
// ];

// const amigos2 = amigos.filter(aux => aux.idade >= 20 || aux.nome.includes("w"));

// for (const amigo of amigos2) {
//   console.log(`${amigo.nome} - Idade ${amigo.idade}`);
// } if (amigos2.length == 0){
//   console.log("Não há amigos com essas condições")
// }

// const numeros = [10, 20, 99]
// const soma = numeros.reduce((acumulador, num) => acumulador + num, 0)
// console.log(`Soma: ${soma}`)

const amigos = [
  { nome: "Leandro", idade: 10 },
  { nome: "Carlos", idade: 5 },
  { nome: "Luiz", idade: 20 },
];

const soma = amigos.reduce((acumulador, amigo) => acumulador + amigo.idade, 0)
const todos = amigos.reduce((acumulador, amigo) => acumulador + amigo.nome + " " , "")

console.log(`Soma das idades: ${soma}`)
console.log(`Nomes: ${todos}`)