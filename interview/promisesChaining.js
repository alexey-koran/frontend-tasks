/* Реализовать функцию A, чтобы последующие ниже вызовы отработали

function A() {

}

A()
  .then((_) => console.log('ok'))
  .catch((e) => console.log(e.message))
  .then((_) => console.log('ok2'))
  .catch((e) => console.log(e.message))
  .then((_) => console.log('ok3'));
*/

const A = () =>
  new Promise((resolve, reject) => {
    const result = true;

    if (result) {
      resolve('success');
    } else {
      reject(new Error('reject'));
    }
  });

A()
  .then((_) => console.log('A 1'))
  .catch((e) => console.log(e.message))
  .then((_) => console.log('A 2'))
  .catch((e) => console.log(e.message))
  .then((_) => console.log('A 3'))
  .catch((e) => console.log(e.message));

// Переписать цепочку вызовов на async/await

try {
  await A();
  console.log('A await 1');
} catch (error) {
  console.log(error.message);
}

// -------------------------------------------------

// Реализовать функцию B, чтобы в цепочке промисов сработал первый catch

const B = () =>
  new Promise(() => {
    throw new Error('B error');
  });

B()
  .then((_) => console.log('B 1'))
  .catch((e) => console.log(e.message))
  .then((_) => console.log('B 2'))
  .catch((e) => console.log(e.message))
  .then((_) => console.log('B 3'));

// -------------------------------------------------

// Реализовать функцию C, чтобы в цепочке вызовов сработали одновременно и then и catch

const C = () => {
  class BrokenPromise extends Promise {
    catch(cb) {
      return this.then(() => cb(new Error('C error')));
    }
  }

  const brokenPromise = new BrokenPromise((resolve, reject) => {
    resolve();
    reject(error);
  });

  return brokenPromise;
};

C()
  .then((_) => console.log('C 1'))
  .catch((e) => console.log(e.message))
  .then((_) => console.log('C 2'))
  .catch((e) => console.log(e.message))
  .then((_) => console.log('C 3'));
