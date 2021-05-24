const uppercase = require('./exercise1');
const getUserName = require('./exercise2');


describe('Exercício 1', () => {
  it('Verificar se a chamada do callback transforma as letras em maiúsculas', (done) => {
    uppercase('natali', (str) => {
      expect(str).toBe('NATALI');
      done();
    });
  });
})

describe('Exercício 2', () => {
  it('Verifique o resultado da função getUserName para o caso em que o usuário é encontrado.', () => {
    expect.assertions(1);
    return getUserName(4).then(data => expect(data).toEqual('Mark'));
  });
  it('Verifique o resultado da função getUserName para o caso em que o usuário não é encontrado.', () => {
    expect.assertions(1);
    return getUserName(2).catch(error =>
      expect(error).toEqual({ error: 'User with 2 not found.' })
      );
    });
  });