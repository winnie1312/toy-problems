function eatLetters(str) {
  console.log(str);
  str = str.slice(0, str.length - 1);
  if (str) eatLetters(str);
}

eatLetters('pizza');
