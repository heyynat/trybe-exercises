const infoImc = (peso, altura) => (peso / Math.pow(altura / 100, 2)).toFixed(2);

console.log(infoImc(67, 169));
