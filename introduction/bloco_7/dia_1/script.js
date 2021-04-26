// Parte I - 1/2
const testingScope = escopo => { 
  if (escopo === true) { 
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}

testingScope(true);

// Parte I - 2/2
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.
const sortOddsAndEvens = () => {
  oddsAndEvens[0] = 2;
  oddsAndEvens[1] = 3;
  oddsAndEvens[2] = 4;
  oddsAndEvens[3] = 7;
  oddsAndEvens[4] = 10;
  oddsAndEvens[5] = 13;
  
  return oddsAndEvens;
}

const sortedArray = sortOddsAndEvens();
console.log(`Os números ${sortedArray} se encontram ordenados de forma crescente !`);

/* Bônus array.sort()
* const oddsAndEvens = [13, 3, 4, 10, 7, 2];
*
* console.log(`Os números ${oddsAndEvens.sort((a, b) => a - b)} se encontram ordenados de forma crescente !`);
*/

// Part II - 1/4
const factorial = number => {
  let result = 1
  for (let index = 2; index <= number; index += 1) {
    result *= index;
  }
  return result;
}

console.log(factorial(4));

// Part II - 2/4
const longestWord = text => {
  let wordArray = text.split(' ')
  let maxLength = 0
  let result = ''
  
  for (const word of wordArray) {
    if (word.length > maxLength) {
      maxLength = word.length;
      result = word;
    }
  }
  
  return result;
}

console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"));

// Parte - 4/4
const arraySkills = ["Android", "iOS", "Architecture", "Teach", "Run"];

function buildSkillsPhrase (paramOne) {
  const fun1 = paramInner => (
    `Tryber ${paramInner} aqui!
    
    Tudo bem?`)
    
    let result = `${fun1(paramOne)}
    
    Minhas cinco principais habilidades são:`
    
    arraySkills.forEach((skill, index) =>
    result = `${result}
    
    - ${skill}`)
    
    result = `
    ${result}
    
    #goTrybe
    `    
    return result
  }
  console.log(buildSkillsPhrase("Lucas"));
