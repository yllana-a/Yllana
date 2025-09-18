var prompt = require('prompt-sync')();
var n1 = Number(prompt('Nota 1: '));
var n2 = Number(prompt('Nota 2: '));
var media = ((n1 + n2) / 2);
console.log('Média:', (n1 + n2) / 2);
if (media >= 7) {
    console.log('Você foi aprovado!');
}
else {
    console.log('Você foi reprovado!');
}
