// #1 Реализовать функцию поиска пересечения элементов двух массивов

const firstArray = [1, 2, 3, 4, 5, 6, 7, '1'];
const secondArray = [3, 5, 6, 7, 9, '1'];

const getTwoArraysIntersection = (firstArray, secondArray) =>
  firstArray.filter((elem) => secondArray.includes(elem));

const firstResult = getTwoArraysIntersection(firstArray, secondArray);

// #2 Реализовать функцию поиска пересечения элементов произвольного числа массивов

const getArraysIntersection = (first) => {
  if (first === undefined) {
    return [];
  }

  let arraysIntersection = [...first];

  const closure = (second) => {
    if (second === undefined) {
      return arraysIntersection;
    }

    arraysIntersection = getTwoArraysIntersection(first, second);

    return closure;
  };

  return closure;
};

const thirdArray = [6, 7];

const secondResult = getArraysIntersection(firstArray)(secondArray)(thirdArray)();
