//Part - I
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: true
};

let info2 =
{
  personagem: 'Tio Patinhas',
  origem: 'Pato Christmas on Bear Mountain, Dell´s Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorrente: true
};

for (let data in info) {
  if (
    info[data] === info2[data] &&
    info.recorrente === info2.recorrente) {
    console.log('Ambos recorrentes');
  } else {
    console.log(info[data] + ' e ' + info2[data]);
  }
}

//Part - II
function verificaPalindrome(string) {
  let anotherArray = [];
  for (let index = [string.length - 1]; index >= 0; index -= 1) {
    anotherArray.push(string[index]);
  }
  return anotherArray.join('') === string;
}

function indexOfMaiorValue(array) {
  let maiorValue = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > maiorValue) {
      maiorValue = array[index];
    }
  }
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === maiorValue) {
      return index;
    }
  }
}

function indexOfLitleValue(numbers) {
  let menor = 0;

  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] < menor) {
      menor = numbers[i];
    }
  }
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] === menor) {
      return i;
    }
  }
}

function stringsMaisCompridas(nomes) {
  let todosArr = [];
  var tlength = 0;
  for (var i = 0; i < nomes.length; i++) {
    if (tlength < nomes[i].length) {
      tlength = nomes[i].length;
    }
  }
  for (var j = 0; j < nomes.length; j++) {
    if (nomes[j].length == tlength) {
      todosArr.push(nomes[j]);
    }
  }
  if (todosArr.length == 1) {
    return todosArr[0]
  } else {
    return todosArr
  }
}

function repeatNumber(array) {
  let number = 0;
  let repeat = 0;
  let repeatNumb = [];
  for (let index of array) {
    number = index;
    repeat = 0;
    for (let index of array) {
      if (number === index) {
        repeat += 1;
      }
      repeatNumb.push(repeat);
    }
    if (repeat > 2) {
      return index;
    }
  }
  repeatNumberRefactory();
}

function repeatNumberRefactory(array, repeatNumb) {
  let maiorValue = 0;
  for (let index of repeatNumb) {
    if (index > maiorValue) {
      maiorValue = index;
    }
  }
  for (let index = 0; index < repeatNumb.length; index += 1) {
    if (repeatNumb === maiorValue) {
      return array[index];
    }
  }
}

function soma(n) {
  let somaNumbers = 0;
  for (let index = 1; index <= n; index += 1) {
    somaNumbers += index;
  }
  return somaNumbers;
}

function verificaFimPalavra(stringWord, stringEnding) {
  let stringEnd = `${stringWord[stringWord.length - 2]}`+`${stringWord[stringWord.length - 1]}`;
  return stringEnd === stringEnding;  
}
