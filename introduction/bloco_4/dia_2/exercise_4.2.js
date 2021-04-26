//1. Nesse primeiro exercício, percorra o array imprimindo todos os1 valores nele contidos com a função console.log()
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
console.log(numbers);

//2. Para o segundo exercício, você deve somar todos os valores contidos no array e imprimir o resultado
let resultado = 0;

for (let i = 0; i < numbers.length; i++) {
  resultado += numbers[i];
}
console.log(resultado);

//3. Para o terceiro exercício, calcule e imprima a média aritmética /dos valores contidos no array
let media = 0;

for (let i = 0; i < numbers.length; i++) {
  resultado += numbers[i];
}

media = resultado / numbers.length;

console.log(media);

//4. Com o mesmo código do exercício anterior, caso valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20"
if (media > 20) {
  console.log("Maior que 20");
}
else {
  console.log("Menor que 20");
}

//5. Utilizando for , descubra qual o maior valor contido no array e imprima-o.
let maior = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > maior) {
    maior = numbers[i];
  }
}

console.log(maior);

//6. Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado"
let impar = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 != 0) {
    impar++;
  }
  if (impar === 0) {
    console.log("Nenhum valor ímpar encontrado.")
  }
}

console.log("Existem", impar, "elementos impares.");

//7. Utilizando for , descubra qual o menor valor contido no array e imprima-o.
let menor = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > maior) {
    maior = numbers[i];
    menor = maior;
  }
  if (numbers[i] < menor) {
    menor = numbers[i];
  }
}

console.log(menor);

//8. Utilizando for , crie uma array que vá de 1 até 25 e imprima o resultado;

for (let i = 0; i < 25; i += 1) {
  numbers[i] = i + 1;
}
console.log(numbers);

//9. Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2

for (let i = 0; i < 25; i += 1) {
  numbers[i] = (i + 1) / 2;
}

console.log(numbers);
