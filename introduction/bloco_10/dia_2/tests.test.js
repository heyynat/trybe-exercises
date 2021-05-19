const uppercase = require('./exercise1');

describe('Exercício 1', () => {
    it('Verificar se a chamada do callback transforma as letras em maiúsculas', (done) => {
        uppercase('natali', (str) => {
            expect(str).toBe('NATALI');
            done();
        });
    });
})