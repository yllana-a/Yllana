var prompt = require("prompt-sync")();
var valorReais = Number(prompt("Digite o valor em Reais: "));
var valorDolar = Number(prompt("Digite a cotação atual: "));
var conversao = valorReais / valorDolar;
console.log("o valor em reais ".concat(valorReais.toFixed(2), " equivale a $ ").concat(conversao.toFixed(2)));
