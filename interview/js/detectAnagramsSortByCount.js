// Дан массив слов ['гора', 'раки', 'каир', 'рога', 'ирак', 'игра'];
// Найти все слова анаграммы и вернуть массив анаграмм по возрастанию от кол-ва повторений

const arr = ['гора', 'раки', 'каир', 'рога', 'ирак', 'игра'];

const getUniqAnagrams = (arr) => {
  const anagramsMap = {};

  const arrayAnagrams = arr.map((el) => el.split('').sort().join(''));

  arrayAnagrams.forEach((el) => {
    if (anagramsMap[el]) {
      anagramsMap[el] += 1;
    } else {
      anagramsMap[el] = 1;
    }
  });

  return Object.entries(anagramsMap)
    .sort(([_aKey, aValue], [_bKey, bValue]) => aValue - bValue)
    .map(([key, _val]) => key);
};
