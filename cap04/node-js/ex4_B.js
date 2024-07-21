//programa verifica velocidade

const prompt = require("prompt-sync")();
const velocidadePermitida = Number(prompt("Velocidade permitida: ")); 
const velocidadeRegistrada= Number(prompt("Velocidade registrada: ")); 

const multaLeve = velocidadeRegistrada * 1.2