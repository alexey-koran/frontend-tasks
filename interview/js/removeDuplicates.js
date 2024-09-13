// Дан одномерный массив, убрать дубликаты

const arr = [1, 2, 3, 4, 5, 6, 4, 3, 4, 3, 2, 2, 1];

const firstSolution = (arr) => [...new Set(arr)];

// Решить без использования Set

const secondSolution = (arr) => {
  const uniqMap = {};

  return arr.reduce((acc, el) => {
    if (uniqMap[el]) {
      return acc;
    }

    uniqMap[el] = true;
    return [...acc, el];
  }, []);
};
