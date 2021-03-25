let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado = 0;
let media = 0;

for (let i = 0; i<numbers.length; i++){
  resultado += numbers[i];
}

media = resultado/numbers.length; 

if (media>20) {
    console.log("Maior que 20");
}
else{
    console.log("Menor que 20");
}
