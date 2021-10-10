module.exports = (param) => {
    if (typeof param !== 'number') {
        return 'o valor deve ser um número';
    }
    if (param > 0) {
        return 'positivo';
    }
    
    if (param < 0) {
        return 'negativo';
    }
    return 'neutro';
};