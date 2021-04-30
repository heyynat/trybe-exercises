// Exercise 1
const functionFirstOrder = (fullName) => {
  return {
    fullName,
    email: fullName.toLowerCase().split(' ').join('_')+`@trybe.com`,
  };
}
const newEmployees = (superFunction) => {
  const employees = {
    // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro
    id1: superFunction('Pedro Guerra'),
    // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro
    id2: superFunction('Luiza Drumond'),
    // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro
    id3: superFunction('Carla Paiva') 
  }
  return employees;
};

console.log(newEmployees(functionFirstOrder));

// Exercise 2
const sorteio = () => {
  const numberRandom = Math.floor((Math.random() * 5) + 1);
  return numberRandom;
}

const ganheiPerdi = (num, numApost) => {
  if (num() === numApost) {
    return 'Parabéns você ganhou';
  }
  return 'Tente novamente';
}

console.log(ganheiPerdi(sorteio, 5));
