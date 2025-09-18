const prompt = require('prompt-sync')();
let n1: number = Number(prompt('Nota 1: '));
let n2: number = Number(prompt('Nota 2: '));
let media: number = ((n1 + n2) / 2)
console.log('Média:', (n1 + n2) / 2);

if(media >= 7) {
    console.log('Você foi aprovado!');
 } else {
        console.log('Você foi reprovado!');
    }
