// Exercise 1
const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }
  
  return a + b;
}

// implemente seus testes aqui
assert.strictEqual(sum(4, 5), 9, 'Incorreto! :/');
assert.strictEqual(sum(0, 0), 0, 'Incorreto! :/');
assert.strictEqual(sum(4, 5), 9, 'Incorreto! :/');
assert.throws(() => { sum(4, "5"); });

assert.throws(() => {
  sum(4, '5');
});
assert.throws(() => {
  sum(4, '5');
}, /^Error: parameters must be numbers$/);

// Exercise 2
function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

// implemente seus testes aqui
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4], 'Esperava-se um array diferente');
assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4]);

const myArray = [5, 6, 7, 8];
myRemove(myArray, 5);
assert.deepStrictEqual(myArray, [5, 6, 7, 8]);
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4]);

// Exercise 3
function myRemoveWithoutCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(index, 1);
      index -= 1;
      len -= 1;
    }
  }
  return arr;
}

// implemente seus testes aqui
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 4], 'Esperava-se um array diferente');
assert.notDeepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 3, 4]);
const myArray2 = [1, 2, 3, 4];
myRemoveWithoutCopy(myArray2, 1);
assert.deepStrictEqual(myArray2.length, 3);
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5), [1, 2, 3, 4], 'Esperava-se um array diferente');

// Exercise 4
function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui
assert.strictEqual(myFizzBuzz(15), 'fizzbuzz');
assert.strictEqual(myFizzBuzz(9), 'fizz');
assert.strictEqual(myFizzBuzz(25), 'buzz');
assert.strictEqual(myFizzBuzz(17), 17);
assert.strictEqual(myFizzBuzz('fizzbuzz'), false);

// Exercicio 5
const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

// implemente seus testes aqui
assert.deepStrictEqual(obj1, obj2);
assert.notDeepStrictEqual(obj1, obj3);
