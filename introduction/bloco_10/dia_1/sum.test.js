const { decode, encode } = require("./exercise1");

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }
  
  return a + b;
}
test('Teste se o retorno de sum(4, 5) é 9', () => {
  expect(sum(4, 5)).toEqual(9);
});

test('Teste se o retorno de sum(0, 0) é 0', () => {
  expect(sum(0, 0)).toEqual(0);
});

test('Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)', () => {
  expect(() => sum(4, "5")).toThrow();
});

test('Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")', () => {
  expect(() => sum(4, "5")).toThrowError(new Error("parameters must be numbers"));
});

describe('Parte II', () => {
  test ('Teste se encode e decode são funções', () => {
    expect(typeof encode && typeof decode).toEqual('function')
  });
  test ('Teste se na função encode se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente', () => {
    expect( () => encode('aeiou').toEqual('12345'))
  })
  test('Teste se a função encode converte apenas a vogal "a" no número 1', () => {
    expect(encode('natali')).toEqual('n1t1l3');
  });
  test('Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.', () => {
    expect(encode('nat').length).toEqual(3);
  });
})