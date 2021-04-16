const divUm = document.getElementById('divUm');
const divDois = document.getElementById('divDois');
const divTres = document.getElementById('divTres');
const input = document.getElementById('input');
const myWebpage = document.getElementById('mySpotrybefy');
/*
1. Copie esse arquivo e edite apenas ele;

2. Crie uma função que adicione a classe 'tech' ao elemento selecionado;
2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
com a classe 'tech';

4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
redirecione para alguma página;
4.1. Que tal redirecionar para seu portifólio?

5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
a cor do mesmo;

Segue abaixo um exemplo do uso de event.target:
*/

//exercicio 2
const container = document.querySelector('.container');
let elements = document.querySelector('.container').children;

function elementClassTech(event) {
  for (let index = 0; index < elements.length; index += 1) {
    elements[index].classList.remove('tech');
  }
  event.target.classList.add('tech');
}
container.addEventListener('click', elementClassTech);

//Exercicio 2
function alterElementTech(event) {
  event.target.style.color = 'blue';
}

function mds(){
  container.addEventListener('click', elementClassTech);
  elements[index].addEventListener('onkeyup', function () {
  for (let index = 0; index < elements.length; index += 1) {
      if (elements[index].classList === 'tech') {
        console.log(elements[index].innerHTML)
      }
    }
  });
}
console.log(mds.elements[index].innerHTML)

// Não precisa passar o parâmetro dentro do addEventListener. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'divUm'.