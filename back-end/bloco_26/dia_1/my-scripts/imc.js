const readline = require('readline-sync');

const peso = readline.questionInt('Qual seu peso? ');
const altura = readline.questionInt('Qual sua altura? ');

const infoImc = (peso, altura) => (peso / Math.pow(altura / 100, 2)).toFixed(2);

console.log(infoImc(peso, altura));
