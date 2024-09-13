// Выровнять глубоко вложенный массив без использования Array.flat
// Максимально возможный уровень вложенности - 1000

/*
 * @param {any []} arr - input array
 * @param {number} n - depth
 * returns {any []}
 */

const arr = [[[[[1, 2, 3, 4, 5]]]]];

const getOneDepthFlatten = (arr) =>
  arr.reduce((acc, curr) => (Array.isArray(curr) ? [...acc, ...curr] : acc), []);

const flatArray = (arr, n) => (n === 0 ? arr : flatArray(getOneDepthFlatten(arr), n - 1));
