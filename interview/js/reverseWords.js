// Дана строка 'Welcome to this JavaScript Guide!'
// Необходимо развернуть слова и оставить их на своём месте

const str = 'Welcome to this JavaScript Guide!';

const reverseWords = (str) =>
  str
    .split(' ')
    .map((el) => el.split('').reverse().join(''))
    .join(' ');
