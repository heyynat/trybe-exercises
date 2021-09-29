const { expect } = require('chai');

const verifyNumber = require('./ExerciseOne/verifyNumber');

describe('Quando o número passado for maior que 0 deverá', () => {
  it('retorna "positivo"', () => {
    const resposta = verifyNumber(4);

    expect(resposta).to.be.equals('positivo');
  });
});

describe('Quando for menor que 0 deverá', () => {
  it('retornar "negativo"', () => {
    const resposta = calculaSituacao(-6);

    expect(resposta).to.be.equals('negativo');
  });
});

describe('Quando igual a 0 deverá', () => {
  it('retornar "neutro"', () => {
    const resposta = calculaSituacao(0);

    expect(resposta).to.be.equals('neutro');
  });
});