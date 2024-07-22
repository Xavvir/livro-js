//programa verifica velocidade

const prompt = require("prompt-sync")();
const velocidadePermitida = Number(prompt("Velocidade permitida: ")); 
const velocidadeRegistrada= Number(prompt("Velocidade registrada: ")); 
const acimaDe20 = velocidadeRegistrada * 1.2

if (velocidadeRegistrada <= velocidadePermitida) {
    console.log("Sem multa")
} else if ( velocidadeRegistrada > velocidadePermitida || velocidadeRegistrada < acimaDe20) {
    console.log("Multa Leve")
} else {
    console.log("Multa Grave")
}