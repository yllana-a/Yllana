const prompt = require("prompt-sync") ();

let valorReais: number = Number(prompt("Digite o valor em Reais: "));
let valorDolar: number = Number(prompt("Digite a cotação atual: "));
let conversao: number = valorReais / valorDolar;
console.log(`o valor em reais ${valorReais.toFixed(2)} equivale a $ ${conversao.toFixed(2)}`)
