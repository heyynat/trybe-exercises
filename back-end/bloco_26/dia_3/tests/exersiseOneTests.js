const { expect } = require('chai');

const verifyNumber = require('../exerciseOne');

describe('Quando o número passado for maior que 0 deverá', () => {
  describe('a resposta', () => {
    
    it('é uma "string"', () => {
      const resposta = verifyNumber(4);
      
      expect(resposta).to.be.a('string');
    });
    it('e retornar "positivo"', () => {
      const resposta = verifyNumber(4);
      
      expect(resposta).to.be.equals('positivo');
    });
  });
  
});

describe('Quando for menor que 0 deverá', () => {
  describe('a resposta', () => {
    it('é uma "string"', () => {
      const resposta = verifyNumber(-6);
      
      expect(resposta).to.be.a('string');
    });
    it('e retornar "negativo"', () => {
      const resposta = verifyNumber(-6);
      
      expect(resposta).to.be.equals('negativo');
    });
  });
});

describe('Quando igual a 0 deverá', () => {
  describe('a resposta', () => {
    it('é uma "string"', () => {
      const resposta = verifyNumber(0);
      
      expect(resposta).to.be.a('string');
    });
    it('e retornar "neutro"', () => {
      const resposta = verifyNumber(0);
      
      expect(resposta).to.be.equals('neutro');
    });
  });
});
