const readline = require('readline-sync');
const { infoImc } = require('./imc.js');

const peso = readline.questionInt('Qual seu peso? ');
const altura = readline.questionInt('Qual sua altura? ');

console.log(infoImc(peso, altura));
