// Дан массив [1, 4, 9, 12, 5, 2, 3, 6, 7], необходимо отсортировать четные числа
// и оставить их на своих позициях в исходном массиве

const arr = [1, 4, 9, 12, 5, 2, 3, 6, 7];

const sortArrayEvenElements = (arr) => {
  const sortedEvens = arr
    .reduce((acc, curr) => (curr % 2 === 0 ? [...acc, curr] : acc), [])
    .sort((a, b) => a - b);

  return arr.map((el) => (el % 2 === 0 ? sortedEvens.shift() : el));
};
